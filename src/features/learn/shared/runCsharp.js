/**
 * Evaluates a string of C# code line-by-line using a simulated runtime environment.
 * Handles variables, assignments, basic updates, and Console.WriteLine output.
 */
export async function runCsharpCode(source) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const lines = source.split("\n");
      const variables = {}; // Local memory store: key -> evaluated primitive value
      let stdoutLines = [];
      let openBraces = 0;

      for (let i = 0; i < lines.length; i++) {
        let line = lines[i].trim();

        // Skip comments and empty lines
        if (!line || line.startsWith("//")) continue;

        // Keep a basic count of scope blocks
        if (line.includes("{")) openBraces += (line.match(/{/g) || []).length;
        if (line.includes("}")) openBraces -= (line.match(/}/g) || []).length;

        // Ignore boilerplate infrastructure statements for client-side processing
        if (
          line.startsWith("using ") ||
          line.startsWith("class ") ||
          line.startsWith("namespace ") ||
          line.match(/(public|private|static|void|int)\s+Main/)
        ) {
          continue;
        }

        // Clean trailing syntax markers if present
        const hasSemicolon = line.endsWith(";");
        const cleanLine = hasSemicolon ? line.slice(0, -1).trim() : line;

        // 1. Check for missing semicolons on expressions (excluding block brackets)
        if (!hasSemicolon && !line.endsWith("{") && !line.endsWith("}")) {
          resolve({
            result: { error: `Compilation Error (CS1002): ; expected on line ${i + 1}` },
            runtime: "browser"
          });
          return;
        }

        // 2. Parse Console.WriteLine(...)
        if (cleanLine.startsWith("Console.WriteLine")) {
          const match = cleanLine.match(/Console\.WriteLine\s*\((.*)\)/);
          if (match) {
            const expression = match[1].trim();
            try {
              const outputValue = evaluateExpression(expression, variables);
              stdoutLines.push(String(outputValue));
            } catch (err) {
              resolve({
                result: { error: `Runtime Error on line ${i + 1}: ${err.message}` },
                runtime: "browser"
              });
              return;
            }
          }
          continue;
        }

        // 3. Parse Variable Declarations (e.g., int x = 5; string name = "Poly"; var flag = true;)
        const declMatch = cleanLine.match(/^(int|string|bool|double|char|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*)$/);
        if (declMatch) {
          const [,, varName, expression] = declMatch;
          try {
            variables[varName] = evaluateExpression(expression.trim(), variables);
          } catch (err) {
            resolve({
              result: { error: `Runtime Error on line ${i + 1}: ${err.message}` },
              runtime: "browser"
            });
            return;
          }
          continue;
        }

        // 4. Parse Variable Re-assignments (e.g., x = 10; score += 5;)
        const assignMatch = cleanLine.match(/^([a-zA-Z_][a-zA-Z0-9_]*)\s*(\+?=|-\s*=)\s*(.*)$/);
        if (assignMatch) {
          const [, varName, operator, expression] = assignMatch;
          if (!(varName in variables)) {
            resolve({
              result: { error: `Compilation Error (CS0103): The name '${varName}' does not exist in the current context on line ${i + 1}` },
              runtime: "browser"
            });
            return;
          }

          try {
            const value = evaluateExpression(expression.trim(), variables);
            if (operator === "+=") variables[varName] += value;
            else if (operator === "-=") variables[varName] -= value;
            else variables[varName] = value;
          } catch (err) {
            resolve({
              result: { error: `Runtime Error on line ${i + 1}: ${err.message}` },
              runtime: "browser"
            });
            return;
          }
          continue;
        }
      }

      // 5. Scope validation check
      if (openBraces > 0) {
        resolve({
          result: { error: "Compilation Error (CS1513): } expected" },
          runtime: "browser"
        });
        return;
      }

      resolve({
        result: { stdout: stdoutLines.join("\n") || "Process exited with code 0 (no printed output)." },
        runtime: "browser"
      });
    }, 400);
  });
}

/**
 * Helper to evaluate a safe subset of C# expressions without eval/Function.
 * Supports literals, variables, parentheses, + - * / %, and string concatenation.
 */
function evaluateExpression(expr, variables) {
  const parser = new SafeExpressionParser(expr, variables);
  return parser.parse();
}

class SafeExpressionParser {
  constructor(expr, variables) {
    this.expr = expr;
    this.variables = variables;
    this.tokens = tokenizeExpression(expr);
    this.index = 0;
  }

  parse() {
    const value = this.parseAddition();
    if (!this.isAtEnd()) {
      throw new Error(`Unexpected token '${this.peek().value}'`);
    }
    return value;
  }

  parseAddition() {
    let value = this.parseMultiplication();

    while (this.match("+", "-")) {
      const operator = this.previous().value;
      const right = this.parseMultiplication();
      if (operator === "+") {
        value =
          typeof value === "string" || typeof right === "string"
            ? `${value}${right}`
            : value + right;
      } else {
        value = toNumber(value) - toNumber(right);
      }
    }

    return value;
  }

  parseMultiplication() {
    let value = this.parseUnary();

    while (this.match("*", "/", "%")) {
      const operator = this.previous().value;
      const right = toNumber(this.parseUnary());
      const left = toNumber(value);
      if (operator === "*") value = left * right;
      else if (operator === "/") value = left / right;
      else value = left % right;
    }

    return value;
  }

  parseUnary() {
    if (this.match("-")) return -toNumber(this.parseUnary());
    if (this.match("+")) return toNumber(this.parseUnary());
    return this.parsePrimary();
  }

  parsePrimary() {
    if (this.matchType("number", "string", "boolean")) {
      return this.previous().value;
    }

    if (this.matchType("identifier")) {
      const name = this.previous().value;
      if (Object.prototype.hasOwnProperty.call(this.variables, name)) {
        return this.variables[name];
      }
      throw new Error(`The name '${name}' does not exist in the current context`);
    }

    if (this.match("(")) {
      const value = this.parseAddition();
      if (!this.match(")")) throw new Error("Missing closing parenthesis");
      return value;
    }

    throw new Error(`Unexpected token '${this.peek()?.value || "end of expression"}'`);
  }

  match(...values) {
    if (this.isAtEnd()) return false;
    if (!values.includes(this.peek().value)) return false;
    this.index += 1;
    return true;
  }

  matchType(...types) {
    if (this.isAtEnd()) return false;
    if (!types.includes(this.peek().type)) return false;
    this.index += 1;
    return true;
  }

  previous() {
    return this.tokens[this.index - 1];
  }

  peek() {
    return this.tokens[this.index];
  }

  isAtEnd() {
    return this.index >= this.tokens.length;
  }
}

function tokenizeExpression(expr) {
  const tokens = [];
  let index = 0;

  while (index < expr.length) {
    const char = expr[index];

    if (/\s/.test(char)) {
      index += 1;
      continue;
    }

    if ('"'.includes(char)) {
      let value = "";
      index += 1;
      while (index < expr.length && expr[index] !== '"') {
        if (expr[index] === "\\" && index + 1 < expr.length) {
          const escaped = expr[index + 1];
          value += escaped === "n" ? "\n" : escaped === "t" ? "\t" : escaped;
          index += 2;
        } else {
          value += expr[index];
          index += 1;
        }
      }
      if (expr[index] !== '"') throw new Error("Unterminated string literal");
      tokens.push({ type: "string", value });
      index += 1;
      continue;
    }

    if (/[0-9.]/.test(char)) {
      const match = expr.slice(index).match(/^\d+(?:\.\d+)?/);
      if (!match) throw new Error(`Invalid number near '${expr.slice(index)}'`);
      tokens.push({ type: "number", value: Number(match[0]) });
      index += match[0].length;
      continue;
    }

    if (/[A-Za-z_]/.test(char)) {
      const match = expr.slice(index).match(/^[A-Za-z_][A-Za-z0-9_]*/);
      const value = match[0];
      if (value === "true" || value === "false") {
        tokens.push({ type: "boolean", value: value === "true" });
      } else {
        tokens.push({ type: "identifier", value });
      }
      index += value.length;
      continue;
    }

    if ("+-*/%()".includes(char)) {
      tokens.push({ type: "operator", value: char });
      index += 1;
      continue;
    }

    throw new Error(`Unsupported character '${char}'`);
  }

  return tokens;
}

function toNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    throw new Error(`Expected a number but got '${value}'`);
  }
  return number;
}

export function formatCsharpOutput(result) {
  return result?.stdout || "";
}

export function getCsharpRuntimeError(result) {
  return result?.error || null;
}