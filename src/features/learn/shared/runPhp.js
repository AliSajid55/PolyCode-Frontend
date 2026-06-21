/**
 * Executes PHP code using the public Piston API (v2).
 * Piston is a secure, sandboxed code execution engine perfect for web learning platforms.
 * * Note: If you eventually build your own secure Node.js backend execution endpoint 
 * (e.g., using Docker containers), you simply swap the URL in this function.
 */
export async function runPhpCode(code) {
  try {
    const response = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: "php",
        version: "8.2.3", // Executes using modern PHP 8.2
        files: [
          {
            name: "lesson.php",
            content: code,
          },
        ],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to connect to the PHP execution server.");
    }

    const data = await response.json();

    // Standardize the response payload for our CodeChallenge component
    return {
      result: {
        stdout: data.run?.stdout || "",
        stderr: data.run?.stderr || "",
        code: data.run?.code || 0,
      },
    };
  } catch (error) {
    throw new Error(error.message || "PHP Execution engine is currently unavailable.");
  }
}

/**
 * Cleans and formats the standard output from the PHP engine.
 */
export function formatPhpOutput(result) {
  if (!result || typeof result.stdout !== "string") return "";
  
  // Trim trailing newlines for a cleaner UI output
  return result.stdout.replace(/\n$/, "");
}

/**
 * Extracts runtime or syntax errors from the PHP execution result.
 * PHP usually outputs Fatal Errors and Parse Errors to stderr.
 */
export function getPhpRuntimeError(result) {
  if (!result) return "Unknown execution error.";

  // If the exit code is non-zero, an error occurred in the PHP script
  if (result.code !== 0) {
    // PHP errors usually end up in stderr. If it's empty, fallback to checking stdout.
    const errorMsg = result.stderr.trim() || result.stdout.trim();

    // The remote sandbox injects messy internal server paths into the error message.
    // This regex cleans it up so the student just sees "in lesson.php on line X".
    const cleanError = errorMsg.replace(/\/piston\/jobs\/[a-zA-Z0-9-]+\/lesson\.php/g, "lesson.php");

    return cleanError || "A runtime error occurred without a specific error trace.";
  }

  // Sometimes PHP scripts return exit code 0 but still print Warning/Fatal notices directly to stdout.
  // We can catch those explicitly to trigger failure states in the UI.
  if (result.stdout.includes("Fatal error:") || result.stdout.includes("Parse error:")) {
      const cleanError = result.stdout.replace(/\/piston\/jobs\/[a-zA-Z0-9-]+\/lesson\.php/g, "lesson.php");
      return cleanError.trim();
  }

  return null; // No errors detected
}