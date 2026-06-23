/**
 * Utility functions for running Ruby code and formatting the output.
 * Placed in `shared/runRuby.js`
 */

// Example using the public Piston execution API.
// Replace this with your own backend endpoint if you have a custom execution service (e.g., "/api/execute/ruby").
const EXECUTION_API_URL = "https://emkc.org/api/v2/piston/execute";

/**
 * Sends the Ruby code to the execution backend.
 * @param {string} code - The Ruby source code to run.
 * @returns {Promise<Object>} The execution payload.
 */
export async function runRubyCode(code) {
  try {
    const response = await fetch(EXECUTION_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: "ruby",
        version: "3.2.2", // or "*" to use the latest available version
        files: [
          {
            name: "script.rb",
            content: code,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error(`Server responded with status: ${response.status}`);
    }

    const data = await response.json();

    // Normalize the output to ensure the React component receives a predictable structure
    return {
      result: {
        stdout: data.run.stdout || "",
        stderr: data.run.stderr || "",
        code: data.run.code,
        signal: data.run.signal,
      },
    };
  } catch (error) {
    console.error("Execution request failed:", error);
    throw new Error("Could not connect to the Ruby execution server.");
  }
}

/**
 * Formats the raw execution result into a clean output string for the console UI.
 * @param {Object} result - The result object from runRubyCode.
 * @returns {string} The formatted console output.
 */
export function formatRubyOutput(result) {
  if (!result) return "";
  
  // Combine stdout and stderr, filtering out empty strings
  const out = result.stdout ? result.stdout.trim() : "";
  const err = result.stderr ? result.stderr.trim() : "";
  
  return [out, err].filter(Boolean).join("\n\n");
}

/**
 * Checks the execution result for runtime errors or syntax exceptions.
 * @param {Object} result - The result object from runRubyCode.
 * @returns {string|null} The error message if one occurred, otherwise null.
 */
export function getRubyRuntimeError(result) {
  if (!result) return "Execution failed to return a result.";

  // Exit code 0 generally means success. If it's non-zero, or if there's explicit stderr, flag it.
  if (result.code !== 0 || result.stderr) {
    // Ruby errors usually appear in stderr. If it's empty but code isn't 0, provide a fallback.
    const errorMessage = result.stderr.trim();
    return errorMessage || `Process exited with code ${result.code}.`;
  }

  return null;
}