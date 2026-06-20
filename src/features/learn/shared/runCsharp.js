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
            result: {
              error: `Compilation Error (CS1002): ; expected on line ${i + 1}`,
            },
            runtime: "browser",
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
                result: {
                  error: `Runtime Error on line ${i + 1}: ${err.message}`,
                },
                runtime: "browser",
              });
              return;
            }
          }
          continue;
        }

        // 3. Parse Variable Declarations (e.g., int x = 5; string name = "Poly"; var flag = true;)
        const declMatch = cleanLine.match(
          /^(int|string|bool|double|char|var)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*(.*)$/,
        );
        if (declMatch) {
          const [, , varName, expression] = declMatch;
          try {
            variables[varName] = evaluateExpression(
              expression.trim(),
              variables,
            );
          } catch (err) {
            resolve({
              result: {
                error: `Runtime Error on line ${i + 1}: ${err.message}`,
              },
              runtime: "browser",
            });
            return;
          }
          continue;
        }

        // 4. Parse Variable Re-assignments (e.g., x = 10; score += 5;)
        const assignMatch = cleanLine.match(
          /^([a-zA-Z_][a-zA-Z0-9_]*)\s*(\+?=|-\s*=)\s*(.*)$/,
        );
        if (assignMatch) {
          const [, varName, operator, expression] = assignMatch;
          if (!(varName in variables)) {
            resolve({
              result: {
                error: `Compilation Error (CS0103): The name '${varName}' does not exist in the current context on line ${i + 1}`,
              },
              runtime: "browser",
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
              result: {
                error: `Runtime Error on line ${i + 1}: ${err.message}`,
              },
              runtime: "browser",
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
          runtime: "browser",
        });
        return;
      }

      resolve({
        result: {
          stdout:
            stdoutLines.join("\n") ||
            "Process exited with code 0 (no printed output).",
        },
        runtime: "browser",
      });
    }, 400);
  });
}

// ---------------------------------------------------------------------------
// Safe expression evaluator — no eval / Function constructor
// Supports: string literals, number literals, bool literals, variable refs,
// and binary operators: +  -  *  /  %  (left-to-right, no precedence climbing
// needed for the simple expressions C# beginners write).
// ---------------------------------------------------------------------------

/**
<<<<<<< HEAD
 * Tokenise an expression string into an array of typed tokens.
 * Token types: 'string' | 'number' | 'boolean' | 'null' | 'identifier' | 'op'
 */
function tokenize(expr) {
  const tokens = [];
  let i = 0;

  while (i < expr.length) {
    // Skip whitespace
    if (/\s/.test(expr[i])) {
      i++;
      continue;
    }

    // String literal  "..."
    if (expr[i] === '"') {
      let j = i + 1;
      let str = "";
      while (j < expr.length && expr[j] !== '"') {
        if (expr[j] === "\\") {
          j++;
          str += expr[j] ?? "";
        } else {
          str += expr[j];
        }
        j++;
      }
      tokens.push({ type: "string", value: str });
      i = j + 1;
      continue;
    }

    // Char literal  '.'
    if (expr[i] === "'") {
      const ch = expr[i + 1] === "\\" ? expr[i + 2] : expr[i + 1];
      tokens.push({ type: "string", value: ch });
      i += expr[i + 1] === "\\" ? 4 : 3;
      continue;
    }

    // Number literal (int or double)
    if (
      /[0-9]/.test(expr[i]) ||
      (expr[i] === "-" && /[0-9]/.test(expr[i + 1] ?? ""))
    ) {
      let j = i;
      if (expr[j] === "-") j++;
      while (j < expr.length && /[0-9.]/.test(expr[j])) j++;
      tokens.push({ type: "number", value: parseFloat(expr.slice(i, j)) });
      i = j;
      continue;
    }

    // Identifier / keyword
    if (/[a-zA-Z_]/.test(expr[i])) {
      let j = i;
      while (j < expr.length && /[a-zA-Z0-9_]/.test(expr[j])) j++;
      const word = expr.slice(i, j);
      if (word === "true") {
        tokens.push({ type: "boolean", value: true });
      } else if (word === "false") {
        tokens.push({ type: "boolean", value: false });
      } else if (word === "null") {
        tokens.push({ type: "null", value: null });
      } else {
        tokens.push({ type: "identifier", value: word });
      }
      i = j;
      continue;
    }

    // Operator
    if (/[+\-*/%]/.test(expr[i])) {
      tokens.push({ type: "op", value: expr[i] });
      i++;
      continue;
    }

    // Unknown character — skip gracefully
    i++;
  }

  return tokens;
}

/**
 * Resolve a single token to its runtime value, substituting variables.
 */
function resolveToken(token, variables) {
  if (token.type === "identifier") {
    if (!(token.value in variables)) {
      throw new Error(
        `The name '${token.value}' does not exist in the current context`,
      );
    }
    return variables[token.value];
  }
  return token.value;
}

/**
 * Apply a binary operator to two already-resolved values.
 */
function applyOp(op, left, right) {
  switch (op) {
    case "+":
      return left + right; // works for both numbers and strings (concatenation)
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/": {
      if (right === 0) throw new Error("DivideByZeroException");
      return left / right;
    }
    case "%":
      return left % right;
    default:
      throw new Error(`Unknown operator: ${op}`);
  }
}

/**
 * Evaluate an expression string safely without eval or Function().
 * Handles literals, variable references, and left-to-right binary operations.
 */
function evaluateExpression(expr, variables) {
  // Fast path: plain string literal
  if (expr.startsWith('"') && expr.endsWith('"')) {
    return expr.slice(1, -1);
  }

  const tokens = tokenize(expr);

  if (tokens.length === 0) {
    throw new Error(`Invalid expression syntax: ${expr}`);
  }

  // Single token — no operators
  if (tokens.length === 1) {
    return resolveToken(tokens[0], variables);
  }

  // Reduce left-to-right: value op value op value ...
  // tokens must alternate: value, op, value, op, value
  let result = resolveToken(tokens[0], variables);

  for (let i = 1; i < tokens.length; i += 2) {
    const opToken = tokens[i];
    const rightToken = tokens[i + 1];

    if (!opToken || opToken.type !== "op") {
      throw new Error(`Invalid expression syntax: ${expr}`);
    }
    if (!rightToken) {
      throw new Error(`Invalid expression syntax: ${expr}`);
    }

    const right = resolveToken(rightToken, variables);
    result = applyOp(opToken.value, result, right);
  }

  return result;
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
        throw new Error(
          `The name '${name}' does not exist in the current context`,
        );
      }

      if (this.match("(")) {
        const value = this.parseAddition();
        if (!this.match(")")) throw new Error("Missing closing parenthesis");
        return value;
      }

      throw new Error(
        `Unexpected token '${this.peek()?.value || "end of expression"}'`,
      );
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
        if (!match)
          throw new Error(`Invalid number near '${expr.slice(index)}'`);
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
}
export function formatCsharpOutput(result) {
  return result?.stdout || "";
}

export function getCsharpRuntimeError(result) {
  return result?.error || null;
}
