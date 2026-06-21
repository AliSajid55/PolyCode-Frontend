// PolyCode — PHP Fundamentals interactive course
// 10 chapters · 32 lessons · server/browser PHP challenges

const ACCENT = "#777bb4"; // PHP Purple

function quiz(question, options, answer, explanation) {
  return { type: "quiz", question, options, answer, explanation };
}

function callout(variant, content) {
  return { type: "callout", variant, content };
}

function text(content, codeBlock = null) {
  if (codeBlock) {
    return {
      type: "text",
      content,
      code: { lang: "php", ...codeBlock },
    };
  }
  return { type: "text", content };
}

function diagram(title, nodes) {
  return { type: "diagram", title, nodes };
}

const PHP_MAIN = `<?php\n`;

export const PHP_FUNDAMENTALS_CHAPTERS = [
  {
    id: "welcome",
    title: "Welcome to PHP",
    icon: "🐘",
    color: ACCENT,
    lessons: [
      {
        id: "php-0",
        title: "What is PHP?",
        xp: 10,
        theory: [
          text(
            "**PHP** (PHP: Hypertext Preprocessor) is a powerful, server-side scripting language designed for web development. It powers over 70% of the web, including WordPress, Wikipedia, and massive modern webapps.",
            {
              label: "A tiny PHP script",
              content: `<?php\necho "Hello, PolyCode!";\n?>`,
            },
          ),
          text(
            "Unlike client-side JavaScript that runs in the user's browser, PHP runs on the **server**. It processes databases, handles security, and builds the HTML sent to the user.",
          ),
          diagram("Where PHP lives in the stack", [
            { id: "client", label: "Client / Browser", color: "#3b82f6", items: ["Requests page", "Runs React/JS", "Shows HTML"] },
            { id: "server", label: "Server (PHP)", color: ACCENT, items: ["Receives request", "Runs business logic", "Echos response"] },
            { id: "db", label: "Database", color: "#22c55e", items: ["MySQL / MongoDB", "Stores user data", "Queried by PHP"] },
          ]),
          callout("tip", "In modern PHP, if a file contains only PHP code, it is best practice to **omit** the closing `?>` tag to prevent accidental whitespace errors."),
          quiz(
            "Where does PHP code execute?",
            ["In the user's browser", "On the web server", "Inside the database", "Only on Linux"],
            1,
            "PHP is a server-side language; the server processes it before sending anything to the user."
          ),
        ],
        challenge: {
          title: "Hello, PolyCode",
          description: "Use `echo` to print exactly: `Hello, PolyCode!`",
          starterCode: `${PHP_MAIN}\n// Print Hello, PolyCode!`,
          solutionCode: `${PHP_MAIN}echo "Hello, PolyCode!";`,
          tests: [
            { id: 1, label: "Uses echo", keywords: [{ pattern: "echo" }] },
            { id: 2, label: "Prints Hello, PolyCode!", keywords: [{ pattern: "Hello,\\s*PolyCode!" }] },
          ],
        },
      },
      {
        id: "php-1",
        title: "Your First Script",
        xp: 10,
        theory: [
          text(
            "Every PHP script must open with `<?php`. Statements perform actions (like outputting text) and **must** end with a semicolon `;`.",
            {
              label: "Multiple statements",
              content: `<?php\necho "Loading system...";\necho "Ready.";`,
            },
          ),
          text(
            "Use `//` or `#` for single-line comments. Comments are ignored by the server and help explain *why* your code does something.",
          ),
          callout("warning", "Forgetting the semicolon `;` is the #1 cause of syntax errors for beginners. PHP will crash on the *next* line if you forget it."),
          quiz(
            "What must every PHP statement end with?",
            ["A period", "A closing tag ?>", "A semicolon ;", "A newline"],
            2,
            "Statements in PHP are terminated by semicolons."
          ),
        ],
        challenge: {
          title: "System Boot",
          description: "Print two strings using `echo` twice: `Booting...` then `Done.` Include a space or newline if you wish, but the texts must match.",
          starterCode: `${PHP_MAIN}\n// Echo Booting... then Done.`,
          solutionCode: `${PHP_MAIN}echo "Booting...\\n";\necho "Done.";`,
          tests: [
            { id: 1, label: "Prints Booting...", keywords: [{ pattern: "Booting..." }] },
            { id: 2, label: "Prints Done.", keywords: [{ pattern: "Done\\." }] },
            { id: 3, label: "Uses two statements", keywords: [{ pattern: "echo.*echo", flags: "s" }] },
          ],
        },
      },
      {
        id: "php-2",
        title: "Execution Pipeline",
        xp: 10,
        theory: [
          text(
            "PHP is an **interpreted** language. You don't compile it into an `.exe` file like C++. The server reads your `.php` file top-to-bottom every time a user visits the page.",
          ),
          diagram("The Request Lifecycle", [
            { id: "req", label: "1. Request", color: "#f97316", items: ["Browser asks for index.php"] },
            { id: "run", label: "2. Interpret", color: ACCENT, items: ["PHP engine reads file", "Executes logic top-down"] },
            { id: "res", label: "3. Respond", color: "#22c55e", items: ["Sends output back", "Script memory destroyed"] },
          ]),
          callout("info", "Because memory is cleared after every request, PHP applications are uniquely resilient. A crash in one user's request rarely takes down the whole server."),
        ],
        challenge: {
          title: "Clean Exit",
          description: "Just output `Success`. Ensure you have no syntax errors.",
          starterCode: `${PHP_MAIN}\n// Output Success`,
          solutionCode: `${PHP_MAIN}echo "Success";`,
          tests: [
            { id: 1, label: "Prints Success", keywords: [{ pattern: "Success" }] },
          ],
        },
      },
    ],
  },
  {
    id: "variables",
    title: "Variables & Types",
    icon: "📦",
    color: "#e11d48",
    lessons: [
      {
        id: "php-3",
        title: "Dynamic Variables",
        xp: 12,
        theory: [
          text(
            "All variables in PHP start with a dollar sign `$`. PHP is **dynamically typed**: you don't need to declare `int` or `string`. The engine figures it out.",
            {
              label: "Declaring variables",
              content: `<?php\n$name = "Nova";    // string\n$score = 100;      // integer\n$price = 9.99;     // float\n$isActive = true;  // boolean`,
            },
          ),
          text(
            "Variable names are case-sensitive. `$Score` and `$score` are two completely different variables.",
          ),
          callout("tip", "Use camelCase (`$userScore`) or snake_case (`$user_score`) for your variables, but pick one and stay consistent!"),
          quiz(
            "Which is a valid variable name in PHP?",
            ["variable", "1stVariable", "$myVar", "#myVar"],
            2,
            "All variables must start with $ and cannot begin with a number."
          ),
        ],
        challenge: {
          title: "Bank Balance",
          description: "Create a variable `$balance` set to `250.75` and `echo` it.",
          starterCode: `${PHP_MAIN}\n// Declare $balance and echo it`,
          solutionCode: `${PHP_MAIN}$balance = 250.75;\necho $balance;`,
          tests: [
            { id: 1, label: "Declares $balance", keywords: [{ pattern: "\\$balance\\s*=" }] },
            { id: 2, label: "Value is 250.75", keywords: [{ pattern: "250\\.75" }] },
            { id: 3, label: "Echos balance", keywords: [{ pattern: "echo\\s*\\$balance" }] },
          ],
        },
      },
      {
        id: "php-4",
        title: "Constants & Scope",
        xp: 12,
        theory: [
          text(
            "A **constant** is a value that cannot change during execution. Modern PHP uses the `const` keyword. Constants do **not** use the `$` symbol.",
            {
              label: "Defining a constant",
              content: `<?php\nconst MAX_HEALTH = 100;\necho MAX_HEALTH;`,
            },
          ),
          text(
            "By convention, constants are written in UPPER_SNAKE_CASE. They are automatically accessible globally across your script.",
          ),
          quiz(
            "Why use const instead of a regular variable?",
            ["It runs faster", "It prevents accidental modification", "It allows dynamic typing", "It's required for numbers"],
            1,
            "Constants guarantee a value remains unchanged throughout the script's lifecycle."
          ),
        ],
        challenge: {
          title: "Speed Limit",
          description: "Declare `const SPEED_LIMIT = 60;` and echo it.",
          starterCode: `${PHP_MAIN}\n// Declare const and echo`,
          solutionCode: `${PHP_MAIN}const SPEED_LIMIT = 60;\necho SPEED_LIMIT;`,
          tests: [
            { id: 1, label: "Uses const", keywords: [{ pattern: "const\\s+SPEED_LIMIT" }] },
            { id: 2, label: "Echos constant", keywords: [{ pattern: "echo\\s+SPEED_LIMIT" }] },
          ],
        },
      },
      {
        id: "php-5",
        title: "Coercion & Operators",
        xp: 12,
        theory: [
          text(
            "PHP features standard math (`+ - * / %`) and assignment (`= += -=`) operators. Because PHP is dynamically typed, it performs **type coercion** — automatically converting types to make operations work.",
            {
              label: "Type juggling",
              content: `<?php\n$a = "5"; // String\n$b = 2;   // Int\necho $a + $b; // Outputs 7 (String coerced to Int)`,
            },
          ),
          diagram("Operator Families", [
            { id: "math", label: "Arithmetic", color: ACCENT, items: ["+ - * / %", "$a + $b"] },
            { id: "compare", label: "Comparison", color: "#f97316", items: ["== !=", "=== !==", "Value & Type checks"] },
            { id: "logic", label: "Logical", color: "#22c55e", items: ["&& || !", "Combining conditions"] },
          ]),
          callout("tip", "Always use strict comparison `===` instead of `==`. `===` checks if both the value AND the data type match, preventing weird coercion bugs."),
        ],
        challenge: {
          title: "Cart Total",
          description: "Create `$price = 15;` and `$qty = 4;`. Multiply them into `$total` and `echo $total;`.",
          starterCode: `${PHP_MAIN}\n$price = 15;\n$qty = 4;\n// Compute total and echo`,
          solutionCode: `${PHP_MAIN}$price = 15;\n$qty = 4;\n$total = $price * $qty;\necho $total;`,
          tests: [
            { id: 1, label: "Multiplies variables", keywords: [{ pattern: "\\$price\\s*\\*\\s*\\$qty" }] },
            { id: 2, label: "Stores in $total", keywords: [{ pattern: "\\$total\\s*=" }] },
            { id: 3, label: "Echos total", keywords: [{ pattern: "echo\\s*\\$total" }] },
          ],
        },
      },
      {
        id: "php-6",
        title: "Strings & Interpolation",
        xp: 15,
        theory: [
          text(
            "Strings can be enclosed in single quotes `''` or double quotes `\"\"`. **Double quotes parse variables inside them**, a feature called string interpolation. Single quotes print exactly what is written.",
            {
              label: "Quotes matter",
              content: `<?php\n$user = "Nova";\necho "Hi, $user"; // Outputs: Hi, Nova\necho 'Hi, $user'; // Outputs: Hi, $user`,
            },
          ),
          text(
            "To combine (concatenate) strings and variables, PHP uses the **dot operator** (`.`), not the plus sign.",
            {
              label: "Concatenation",
              content: `<?php\n$first = "Poly";\n$last = "Code";\necho $first . $last; // PolyCode`,
            },
          ),
        ],
        challenge: {
          title: "Temperature Reader",
          description: "Declare `$temp = 72;`. Use double quotes to `echo` the string exactly as: `Temp: 72`.",
          starterCode: `${PHP_MAIN}\n$temp = 72;\n// echo Temp: 72 using interpolation`,
          solutionCode: `${PHP_MAIN}$temp = 72;\necho "Temp: $temp";`,
          tests: [
            { id: 1, label: "Uses double quotes", keywords: [{ pattern: "\"Temp:\\s*\\$temp\"" }] },
            { id: 2, label: "No concatenation dots", keywords: [{ pattern: "^(?!.*\\.).*$", flags: "m" }] },
          ],
        },
      },
    ],
  },
  {
    id: "control-flow",
    title: "Control Flow",
    icon: "🔀",
    color: "#db2777",
    lessons: [
      {
        id: "php-7",
        title: "if / else",
        xp: 12,
        theory: [
          text(
            "`if` and `else` let your script make decisions. If a condition evaluates to `true`, the first block runs. Otherwise, the `else` block executes.",
            {
              label: "Branching logic",
              content: `<?php\n$score = 72;\nif ($score >= 60) {\n    echo "Pass";\n} else {\n    echo "Fail";\n}`,
            },
          ),
          text(
            "You can chain conditions using `elseif` (one word in PHP).",
          ),
          callout("info", "In PHP, `0`, `\"\"` (empty string), `null`, and empty arrays evaluate to `false` automatically. Everything else is truthy."),
        ],
        challenge: {
          title: "Game Over Check",
          description: "Set `$health = 0;`. If health is 0 or less, echo `Game Over`. Else echo `Keep playing`.",
          starterCode: `${PHP_MAIN}\n$health = 0;\n// if / else logic`,
          solutionCode: `${PHP_MAIN}$health = 0;\nif ($health <= 0) {\n    echo "Game Over";\n} else {\n    echo "Keep playing";\n}`,
          tests: [
            { id: 1, label: "Uses if", keywords: [{ pattern: "if\\s*\\(" }] },
            { id: 2, label: "Uses else", keywords: [{ pattern: "\\belse\\b" }] },
            { id: 3, label: "Prints Game Over", keywords: [{ pattern: "Game Over" }] },
          ],
        },
      },
      {
        id: "php-8",
        title: "Match Expressions",
        xp: 15,
        theory: [
          text(
            "Introduced in PHP 8, the `match` expression is a modern, strict replacement for the old `switch` statement. It maps values directly to return statements without requiring `break` keywords.",
            {
              label: "Status matching",
              content: `<?php\n$code = 200;\n$message = match($code) {\n    200 => "Success",\n    404 => "Not Found",\n    default => "Unknown Error",\n};\necho $message;`,
            },
          ),
          text(
            "`match` uses strict comparison (`===`), making it much safer than `switch`.",
          ),
          quiz(
            "Why is match preferred over switch in modern PHP?",
            ["It loops infinitely", "It doesn't require break and uses strict comparison", "It automatically connects to databases", "It uses the == operator"],
            1,
            "Match expressions are safer (strict equality) and less prone to fall-through bugs."
          ),
        ],
        challenge: {
          title: "Traffic Light",
          description: "Set `$light = 'red';`. Use `match` to echo `Stop` for 'red', `Go` for 'green', and a `default` of `Yield`.",
          starterCode: `${PHP_MAIN}\n$light = 'red';\n// Use match() to echo output`,
          solutionCode: `${PHP_MAIN}$light = 'red';\necho match($light) {\n    'red' => 'Stop',\n    'green' => 'Go',\n    default => 'Yield',\n};`,
          tests: [
            { id: 1, label: "Uses match", keywords: [{ pattern: "match\\s*\\(" }] },
            { id: 2, label: "Matches 'red'", keywords: [{ pattern: "'red'\\s*=>" }] },
            { id: 3, label: "Has default", keywords: [{ pattern: "default\\s*=>" }] },
          ],
        },
      },
      {
        id: "php-9",
        title: "for loops",
        xp: 12,
        theory: [
          text(
            "A `for` loop repeats code a specific number of times. It has three parts: initializer (`$i = 1`), condition (`$i <= 5`), and updater (`$i++`).",
            {
              label: "Counting loop",
              content: `<?php\nfor ($i = 1; $i <= 5; $i++) {\n    echo "$i ";\n}`,
            },
          ),
          callout("tip", "Variables defined inside a PHP loop are NOT block-scoped (unless you use closures). `$i` will still exist after the loop finishes!"),
        ],
        challenge: {
          title: "Multiplication Table",
          description: "Print `5x1=5`, `5x2=10`, `5x3=15` on separate lines using a `for` loop.",
          starterCode: `${PHP_MAIN}\n// for loop from 1 to 3\n// Hint: use \\n for newlines`,
          solutionCode: `${PHP_MAIN}for ($i = 1; $i <= 3; $i++) {\n    $ans = 5 * $i;\n    echo "5x$i=$ans\\n";\n}`,
          tests: [
            { id: 1, label: "Uses for loop", keywords: [{ pattern: "for\\s*\\(" }] },
            { id: 2, label: "Loops up to 3", keywords: [{ pattern: "\\$i\\s*<=\\s*3" }] },
            { id: 3, label: "Calculates answer", keywords: [{ pattern: "\\*\\s*\\$i" }] },
          ],
        },
      },
      {
        id: "php-10",
        title: "while loops",
        xp: 12,
        theory: [
          text(
            "`while` loops execute continuously *as long as* a condition is true. Use this when you don't know exactly how many iterations you need upfront.",
            {
              label: "While loop",
              content: `<?php\n$countdown = 3;\nwhile ($countdown > 0) {\n    echo $countdown;\n    $countdown--;\n}`,
            },
          ),
          callout("warning", "Ensure the condition eventually becomes false. If you forget to decrement `$countdown`, your script will run forever and crash the server thread."),
        ],
        challenge: {
          title: "Savings Goal",
          description: "Start `$balance = 0;`. While balance is less than 30, add 10 to it. Then echo the final balance.",
          starterCode: `${PHP_MAIN}\n$balance = 0;\n// while loop`,
          solutionCode: `${PHP_MAIN}$balance = 0;\nwhile ($balance < 30) {\n    $balance += 10;\n}\necho $balance;`,
          tests: [
            { id: 1, label: "Uses while", keywords: [{ pattern: "while\\s*\\(" }] },
            { id: 2, label: "Increments by 10", keywords: [{ pattern: "\\+=?\\s*10" }] },
            { id: 3, label: "Echos balance", keywords: [{ pattern: "echo\\s*\\$balance" }] },
          ],
        },
      },
    ],
  },
  {
    id: "functions",
    title: "Core Functions",
    icon: "🔧",
    color: "#c026d3",
    lessons: [
      {
        id: "php-11",
        title: "Function Basics",
        xp: 15,
        theory: [
          text(
            "Functions encapsulate reusable code blocks. You define them with the `function` keyword. Unlike C++, PHP functions can be defined anywhere in the file; order doesn't matter.",
            {
              label: "Basic function",
              content: `<?php\nfunction sayHello() {\n    echo "Welcome!";\n}\n\nsayHello();`,
            },
          ),
          text(
            "Variables created outside a function are **not** accessible inside it automatically. PHP functions have isolated scope.",
          ),
          quiz(
            "Can a function access a variable declared outside of it?",
            ["Yes, automatically", "No, scope is isolated by default", "Only if it's an integer"],
            1,
            "PHP functions have isolated local scope. You must explicitly pass variables in as parameters."
          ),
        ],
        challenge: {
          title: "Print Banner",
          description: "Define `function printBanner()` that echoes `=== PolyCode ===`. Call it.",
          starterCode: `${PHP_MAIN}\n// Define printBanner\n\n// Call it`,
          solutionCode: `${PHP_MAIN}function printBanner() {\n    echo "=== PolyCode ===";\n}\nprintBanner();`,
          tests: [
            { id: 1, label: "Defines function", keywords: [{ pattern: "function\\s+printBanner" }] },
            { id: 2, label: "Calls function", keywords: [{ pattern: "printBanner\\s*\\(\\s*\\)\\s*;" }] },
          ],
        },
      },
      {
        id: "php-12",
        title: "Type Hinting",
        xp: 15,
        theory: [
          text(
            "Modern PHP allows **type declarations** (type hinting). You can specify exactly what type a parameter must be, and what type the function returns. This prevents massive bugs in web apps.",
            {
              label: "Strict types",
              content: `<?php\nfunction multiply(int $a, int $b): int {\n    return $a * $b;\n}\necho multiply(4, 5);`,
            },
          ),
          text(
            "If someone tries to pass a string array into `multiply()`, PHP will throw a fatal error immediately instead of guessing.",
          ),
          diagram("Function Signatures", [
            { id: "param", label: "Parameter Types", color: ACCENT, items: ["int $a", "string $name"] },
            { id: "return", label: "Return Types", color: "#22c55e", items: [": int", ": string", ": void (no return)"] },
          ]),
        ],
        challenge: {
          title: "Grade Points",
          description: "Write `function toPoints(int $grade): int` that returns `$grade * 10`. Echo the result of `toPoints(8)`.",
          starterCode: `${PHP_MAIN}\n// function toPoints...`,
          solutionCode: `${PHP_MAIN}function toPoints(int $grade): int {\n    return $grade * 10;\n}\necho toPoints(8);`,
          tests: [
            { id: 1, label: "Defines toPoints with int", keywords: [{ pattern: "function\\s+toPoints\\s*\\(\\s*int\\s+\\$grade\\s*\\)\\s*:\\s*int" }] },
            { id: 2, label: "Returns multiplied grade", keywords: [{ pattern: "return\\s+\\$grade\\s*\\*\\s*10" }] },
          ],
        },
      },
      {
        id: "php-13",
        title: "Named Arguments",
        xp: 18,
        theory: [
          text(
            "PHP 8 introduced **Named Arguments**. You can pass variables into a function by targeting the parameter's name directly, allowing you to skip optional parameters.",
            {
              label: "Skipping order",
              content: `<?php\nfunction profile(string $name, int $age = 0, bool $admin = false) {\n    // ...\n}\n\n// Skipping $age completely!\nprofile(name: "Nova", admin: true);`,
            },
          ),
          callout("tip", "Named arguments make reading function calls much easier. `setup(true, false, true)` is confusing; `setup(useCache: true, log: false, async: true)` is self-documenting."),
        ],
        challenge: {
          title: "Named Logger",
          description: "We have `function logMsg($msg, $urgent = false)`. Call it passing `urgent: true` and `msg: 'Error'`. (Just write the call!)",
          starterCode: `${PHP_MAIN}\nfunction logMsg($msg, $urgent = false) {\n    if($urgent) echo "!!! $msg !!!";\n}\n// Call logMsg using named arguments`,
          solutionCode: `${PHP_MAIN}function logMsg($msg, $urgent = false) {\n    if($urgent) echo "!!! $msg !!!";\n}\nlogMsg(urgent: true, msg: 'Error');`,
          tests: [
            { id: 1, label: "Uses named urgent", keywords: [{ pattern: "urgent\\s*:\\s*true" }] },
            { id: 2, label: "Uses named msg", keywords: [{ pattern: "msg\\s*:" }] },
            { id: 3, label: "Prints formatted error", keywords: [{ pattern: "!!! Error !!!" }] },
          ],
        },
      },
    ],
  },
  {
    id: "arrays",
    title: "Advanced Data Arrays",
    icon: "📋",
    color: "#a855f7",
    lessons: [
      {
        id: "php-14",
        title: "Indexed Arrays",
        xp: 15,
        theory: [
          text(
            "Arrays are the ultimate data structure in PHP. Unlike C++ where you need vectors, maps, and arrays separately, PHP arrays can do it all. Modern syntax uses short brackets `[]`.",
            {
              label: "Indexed Array",
              content: `<?php\n$scores = [88, 92, 75];\necho $scores[1]; // Outputs 92\n$scores[2] = 80; // Updates the third item`,
            },
          ),
          text(
            "Arrays automatically expand. You can push a new item to the end easily.",
          ),
          quiz(
            "How do you define an array in modern PHP?",
            ["array()", "[]", "{}", "<>"],
            1,
            "While array() still works, [] is the modern, cleaner standard syntax."
          ),
        ],
        challenge: {
          title: "Weekly Steps",
          description: "Create `$steps = [4000, 6000, 5000];` and echo the middle value.",
          starterCode: `${PHP_MAIN}\n// Create $steps and echo index 1`,
          solutionCode: `${PHP_MAIN}$steps = [4000, 6000, 5000];\necho $steps[1];`,
          tests: [
            { id: 1, label: "Declares steps", keywords: [{ pattern: "\\$steps\\s*=\\s*\\[" }] },
            { id: 2, label: "Echos index 1", keywords: [{ pattern: "echo\\s*\\$steps\\[1\\]" }] },
          ],
        },
      },
      {
        id: "php-15",
        title: "Associative Arrays",
        xp: 18,
        theory: [
          text(
            "**Associative Arrays** use strings as keys instead of numbers. This is identical to a Map or a Dictionary in other languages, or a JSON object.",
            {
              label: "Key-Value pairs",
              content: `<?php\n$user = [\n    "name" => "Nova",\n    "role" => "Admin"\n];\necho $user["name"]; // Outputs Nova`,
            },
          ),
          text(
            "You use the `=>` operator (double arrow) to assign values to keys.",
          ),
          diagram("Array Types", [
            { id: "idx", label: "Indexed", color: ACCENT, items: ["Keys: 0, 1, 2...", "[10, 20, 30]", "Sequential Data"] },
            { id: "assoc", label: "Associative", color: "#22c55e", items: ["Keys: 'name', 'id'", "['id' => 5]", "Records / Objects"] },
          ]),
        ],
        challenge: {
          title: "Config Profile",
          description: "Create an associative array `$config` with a key `'theme'` set to `'dark'`. Echo the theme.",
          starterCode: `${PHP_MAIN}\n// Create associative array and echo 'theme'`,
          solutionCode: `${PHP_MAIN}$config = [\n    'theme' => 'dark'\n];\necho $config['theme'];`,
          tests: [
            { id: 1, label: "Uses double arrow", keywords: [{ pattern: "=>" }] },
            { id: 2, label: "Echos dark", keywords: [{ pattern: "\\$config\\['theme'\\]" }] },
          ],
        },
      },
      {
        id: "php-16",
        title: "Array Manipulation",
        xp: 18,
        theory: [
          text(
            "PHP includes hundreds of built-in array functions. The most common are `count()` to get the size, and appending items using empty brackets `[]`.",
            {
              label: "Appending data",
              content: `<?php\n$cart = ["Apple"];\n$cart[] = "Banana"; // Appends to end\necho count($cart);  // Outputs 2`,
            },
          ),
          callout("tip", "Using `$cart[] = 'x'` is much faster and cleaner than the older `array_push($cart, 'x')` function."),
        ],
        challenge: {
          title: "High Scores List",
          description: "Create an empty array `$scores = [];`. Append `90` and `85` using empty brackets. Echo the `count()` of the array.",
          starterCode: `${PHP_MAIN}\n// Setup array, append twice, echo count`,
          solutionCode: `${PHP_MAIN}$scores = [];\n$scores[] = 90;\n$scores[] = 85;\necho count($scores);`,
          tests: [
            { id: 1, label: "Appends using []", keywords: [{ pattern: "\\$scores\\[\\]\\s*=" }] },
            { id: 2, label: "Uses count()", keywords: [{ pattern: "count\\(\\s*\\$scores\\s*\\)" }] },
          ],
        },
      },
      {
        id: "php-17",
        title: "Iteration (foreach)",
        xp: 18,
        theory: [
          text(
            "The `foreach` loop is specifically designed for traversing arrays. It is the most common loop used in PHP web development.",
            {
              label: "Looping values",
              content: `<?php\n$tags = ["PHP", "Web", "Code"];\nforeach ($tags as $tag) {\n    echo $tag . " ";\n}`,
            },
          ),
          text(
            "For associative arrays, you can extract both the key and the value.",
            {
              label: "Looping keys and values",
              content: `<?php\n$user = ["name" => "Ava", "age" => 22];\nforeach ($user as $key => $value) {\n    echo "$key is $value\\n";\n}`,
            },
          ),
        ],
        challenge: {
          title: "Class Average",
          description: "Given `$grades = [70, 80, 90];`, use `foreach` to sum them into `$sum`. Echo the average (sum / 3).",
          starterCode: `${PHP_MAIN}\n$grades = [70, 80, 90];\n$sum = 0;\n// foreach loop...`,
          solutionCode: `${PHP_MAIN}$grades = [70, 80, 90];\n$sum = 0;\nforeach ($grades as $g) {\n    $sum += $g;\n}\necho $sum / 3;`,
          tests: [
            { id: 1, label: "Uses foreach", keywords: [{ pattern: "foreach\\s*\\(" }] },
            { id: 2, label: "Adds to sum", keywords: [{ pattern: "\\$sum\\s*\\+=" }] },
            { id: 3, label: "Calculates average", keywords: [{ pattern: "\\$sum\\s*/\\s*3" }] },
          ],
        },
      },
    ],
  },
  {
    id: "superglobals",
    title: "Superglobals & State",
    icon: "🌐",
    color: "#2563eb",
    lessons: [
      {
        id: "php-18",
        title: "$_GET & $_POST",
        xp: 15,
        theory: [
          text(
            "When a user submits a form or clicks a link, PHP automatically places the incoming data into **Superglobal** arrays: `$_GET` for URL parameters, and `$_POST` for hidden form data.",
            {
              label: "Reading URL parameters",
              content: `<?php\n// URL: profile.php?id=5\necho $_GET['id']; // Outputs 5`,
            },
          ),
          callout("warning", "Never trust user input! Always sanitize `$_GET` and `$_POST` before interacting with databases. We assume simulated clean input in this course."),
          diagram("Request Types", [
            { id: "get", label: "$_GET", color: ACCENT, items: ["Data in URL", "?search=cats", "Bookmarks work"] },
            { id: "post", label: "$_POST", color: "#f97316", items: ["Data in HTTP body", "Login forms", "Secure/Hidden"] },
          ]),
        ],
        challenge: {
          title: "Simulated Input",
          description: "We will simulate a request. Assign `$_GET['id'] = 42;`. Then echo it out.",
          starterCode: `${PHP_MAIN}\n// Assign 42 to $_GET['id'] and echo`,
          solutionCode: `${PHP_MAIN}$_GET['id'] = 42;\necho $_GET['id'];`,
          tests: [
            { id: 1, label: "Assigns $_GET", keywords: [{ pattern: "\\$_GET\\['id'\\]\\s*=\\s*42" }] },
            { id: 2, label: "Echos variable", keywords: [{ pattern: "echo\\s*\\$_GET" }] },
          ],
        },
      },
      {
        id: "php-19",
        title: "$_SERVER",
        xp: 15,
        theory: [
          text(
            "`$_SERVER` contains headers, paths, and script locations created by the web server (like Apache or Nginx). It helps your script understand its environment.",
            {
              label: "Checking Request Method",
              content: `<?php\nif ($_SERVER['REQUEST_METHOD'] === 'POST') {\n    echo "Form submitted!";\n}`,
            },
          ),
          text(
            "Common keys include `HTTP_USER_AGENT` (the user's browser details) and `REMOTE_ADDR` (their IP address).",
          ),
        ],
        challenge: {
          title: "Route Check",
          description: "Assign `$_SERVER['REQUEST_URI'] = '/api';`. Echo the URI.",
          starterCode: `${PHP_MAIN}\n// Assign URI and echo`,
          solutionCode: `${PHP_MAIN}$_SERVER['REQUEST_URI'] = '/api';\necho $_SERVER['REQUEST_URI'];`,
          tests: [
            { id: 1, label: "Assigns REQUEST_URI", keywords: [{ pattern: "\\$_SERVER\\['REQUEST_URI'\\]" }] },
          ],
        },
      },
      {
        id: "php-20",
        title: "Null Coalescing",
        xp: 18,
        theory: [
          text(
            "When dealing with inputs, sometimes users don't send a parameter. Trying to read a missing key throws a warning. The **Null Coalescing Operator (`??`)** provides a safe fallback.",
            {
              label: "Safe fallback",
              content: `<?php\n// If 'user' doesn't exist, default to 'Guest'\n$name = $_GET['user'] ?? 'Guest';\necho $name;`,
            },
          ),
          text(
            "It checks if the value on the left exists and is not null. If it is null/missing, it uses the right side.",
          ),
          quiz(
            "What does ?? do?",
            ["Divides by zero safely", "Provides a fallback if a value is null or missing", "Deletes a variable", "Combines two arrays"],
            1,
            "Null Coalescing returns its first operand if it exists and is not NULL; otherwise it returns its second operand."
          ),
        ],
        challenge: {
          title: "Fallback Options",
          description: "Declare `$input = null;`. Echo `$input ?? 'Fallback';`.",
          starterCode: `${PHP_MAIN}\n$input = null;\n// Use ?? to echo fallback`,
          solutionCode: `${PHP_MAIN}$input = null;\necho $input ?? 'Fallback';`,
          tests: [
            { id: 1, label: "Uses ??", keywords: [{ pattern: "\\?\\?" }] },
            { id: 2, label: "Echos Fallback string", keywords: [{ pattern: "'Fallback'" }] },
          ],
        },
      },
    ],
  },
  {
    id: "oop",
    title: "Object-Oriented Blueprinting",
    icon: "🏗️",
    color: "#14b8a6",
    lessons: [
      {
        id: "php-21",
        title: "Classes & Objects",
        xp: 18,
        theory: [
          text(
            "A **class** is a blueprint grouping data (properties) and behavior (methods). An **object** is a living instance of that blueprint. We define properties with visibility keywords like `public`.",
            {
              label: "Basic Class",
              content: `<?php\nclass Dog {\n    public string $name;\n    public function bark() {\n        echo "Woof!";\n    }\n}\n\n$d = new Dog();\n$d->name = "Rex";\n$d->bark();`,
            },
          ),
          text(
            "Notice the object operator `->` instead of a dot. In PHP, `$d->name` accesses a property, while `$d.name` would try to concatenate strings!",
          ),
          callout("warning", "Inside a class method, you refer to the current object's properties using `$this->propertyName`."),
        ],
        challenge: {
          title: "Counter Class",
          description: "Create `class Counter` with `public int $value = 0;` and a method `increment()` that does `$this->value++;`. Instantiate it to `$c`, call `increment()`, and echo `$c->value;`.",
          starterCode: `${PHP_MAIN}\n// class Counter...\n// $c = new Counter();`,
          solutionCode: `${PHP_MAIN}class Counter {\n    public int $value = 0;\n    public function increment() {\n        $this->value++;\n    }\n}\n$c = new Counter();\n$c->increment();\necho $c->value;`,
          tests: [
            { id: 1, label: "Defines class", keywords: [{ pattern: "class\\s+Counter" }] },
            { id: 2, label: "Uses $this->", keywords: [{ pattern: "\\$this->" }] },
            { id: 3, label: "Instantiates object", keywords: [{ pattern: "new\\s+Counter" }] },
          ],
        },
      },
      {
        id: "php-22",
        title: "Modern Constructors",
        xp: 18,
        theory: [
          text(
            "A **constructor** `__construct()` runs automatically when an object is created. PHP 8 introduced **Constructor Property Promotion**, making property assignment incredibly concise.",
            {
              label: "Constructor Promotion",
              content: `<?php\nclass Hero {\n    // This creates the properties AND assigns them instantly!\n    public function __construct(\n        public string $name,\n        public int $hp\n    ) {}\n}\n\n$h = new Hero("Nova", 100);`,
            },
          ),
          diagram("Object Lifecycle", [
            { id: "new", label: "new keyword", color: ACCENT, items: ["Allocates memory", "Triggers __construct"] },
            { id: "run", label: "Runtime", color: "#22c55e", items: ["Methods called", "State modified"] },
          ]),
        ],
        challenge: {
          title: "Item Shop",
          description: "Create `class Item` using property promotion to accept `public string $name` and `public int $price` in `__construct()`. Create `$sword = new Item('Sword', 50);`. Echo the name.",
          starterCode: `${PHP_MAIN}\n// class Item with promoted constructor...`,
          solutionCode: `${PHP_MAIN}class Item {\n    public function __construct(public string $name, public int $price) {}\n}\n$sword = new Item('Sword', 50);\necho $sword->name;`,
          tests: [
            { id: 1, label: "Uses __construct", keywords: [{ pattern: "__construct" }] },
            { id: 2, label: "Promotes properties", keywords: [{ pattern: "public\\s+string\\s+\\$name" }] },
            { id: 3, label: "Echos name", keywords: [{ pattern: "echo\\s*\\$sword->name" }] },
          ],
        },
      },
      {
        id: "php-23",
        title: "Access Encapsulation",
        xp: 20,
        theory: [
          text(
            "**Encapsulation** protects internal data. If a property is `private`, code outside the class cannot change it. Instead, you create `public` methods (getters/setters) to control access safely.",
            {
              label: "Private Vault",
              content: `<?php\nclass Account {\n    private int $balance = 0;\n    public function deposit(int $amt) {\n        if ($amt > 0) $this->balance += $amt;\n    }\n    public function getBalance(): int {\n        return $this->balance;\n    }\n}`,
            },
          ),
          quiz(
            "Why use private properties?",
            ["To prevent hackers", "To ensure data is only modified via safe class methods", "To hide source code", "To speed up arrays"],
            1,
            "Private ensures your object's state can't be bypassed or corrupted by external scripts."
          ),
        ],
        challenge: {
          title: "Safe Vault",
          description: "Write `class Vault` with `private int $coins = 0;`. Add `public function add(int $n)` to increment it, and `public function total(): int` to return it. Instantiate, `add(30)`, and echo `total()`.",
          starterCode: `${PHP_MAIN}\n// class Vault...`,
          solutionCode: `${PHP_MAIN}class Vault {\n    private int $coins = 0;\n    public function add(int $n) {\n        $this->coins += $n;\n    }\n    public function total(): int {\n        return $this->coins;\n    }\n}\n$v = new Vault();\n$v->add(30);\necho $v->total();`,
          tests: [
            { id: 1, label: "Private coins", keywords: [{ pattern: "private\\s+int\\s+\\$coins" }] },
            { id: 2, label: "Uses ->total()", keywords: [{ pattern: "->total\\(" }] },
          ],
        },
      },
    ],
  },
  {
    id: "oop-domain",
    title: "OOP Domain Engineering",
    icon: "⚙️",
    color: "#8b5cf6",
    lessons: [
      {
        id: "php-24",
        title: "Inheritance",
        xp: 18,
        theory: [
          text(
            "**Inheritance** allows a class to inherit properties and methods from another using the `extends` keyword. A `Dog` extends `Animal`.",
            {
              label: "Extending classes",
              content: `<?php\nclass Entity {\n    public int $hp = 100;\n}\nclass Zombie extends Entity {\n    public function groan() { echo "Brains"; }\n}\n$z = new Zombie();\necho $z->hp; // Inherited!`,
            },
          ),
          text(
            "Use `protected` visibility for properties you want to hide from the public, but allow child classes to access.",
          ),
        ],
        challenge: {
          title: "Base Character",
          description: "Create `class Base { public string $type = 'NPC'; }`. Create `class Guard extends Base {}`. Instantiate `$g = new Guard();` and echo its `$type`.",
          starterCode: `${PHP_MAIN}\n// class Base and class Guard...`,
          solutionCode: `${PHP_MAIN}class Base {\n    public string $type = 'NPC';\n}\nclass Guard extends Base {}\n$g = new Guard();\necho $g->type;`,
          tests: [
            { id: 1, label: "Extends keyword", keywords: [{ pattern: "extends\\s+Base" }] },
            { id: 2, label: "Echos inherited property", keywords: [{ pattern: "\\$g->type" }] },
          ],
        },
      },
      {
        id: "php-25",
        title: "Interfaces",
        xp: 18,
        theory: [
          text(
            "An **interface** is a contract. It declares methods a class *must* have, without defining what they do. Classes `implements` interfaces to guarantee they possess specific capabilities.",
            {
              label: "Logging Contract",
              content: `<?php\ninterface Logger {\n    public function log(string $msg): void;\n}\nclass FileLogger implements Logger {\n    public function log(string $msg): void {\n        echo "Saved: $msg";\n    }\n}`,
            },
          ),
          callout("tip", "Interfaces allow loose coupling. Your application can require a `Logger` interface, and it won't care if you provide a `FileLogger` or a `DatabaseLogger`—as long as the contract is met!"),
        ],
        challenge: {
          title: "Runnable",
          description: "Create `interface Runnable { public function run(): void; }`. Create `class Job implements Runnable` that echoes `Running`. Instantiate Job and call `run()`.",
          starterCode: `${PHP_MAIN}\n// interface Runnable...`,
          solutionCode: `${PHP_MAIN}interface Runnable {\n    public function run(): void;\n}\nclass Job implements Runnable {\n    public function run(): void {\n        echo "Running";\n    }\n}\n$j = new Job();\n$j->run();`,
          tests: [
            { id: 1, label: "Defines interface", keywords: [{ pattern: "interface\\s+Runnable" }] },
            { id: 2, label: "Implements interface", keywords: [{ pattern: "implements\\s+Runnable" }] },
          ],
        },
      },
      {
        id: "php-26",
        title: "Abstract Classes",
        xp: 18,
        theory: [
          text(
            "An **abstract class** is a mix between a base class and an interface. It can have fully written methods AND empty abstract methods that children must fill out. You cannot instantiate an abstract class directly.",
            {
              label: "Abstract example",
              content: `<?php\nabstract class Shape {\n    public function identify() { echo "I am a shape."; }\n    abstract public function area(): int;\n}\nclass Square extends Shape {\n    public function area(): int { return 4; }\n}`,
            },
          ),
        ],
        challenge: {
          title: "Template Engine",
          description: "Create `abstract class Engine`. Define `abstract public function start();`. Create `class V8 extends Engine` returning `V8 Started` via `echo`. Test it.",
          starterCode: `${PHP_MAIN}\n// abstract class Engine...`,
          solutionCode: `${PHP_MAIN}abstract class Engine {\n    abstract public function start();\n}\nclass V8 extends Engine {\n    public function start() {\n        echo "V8 Started";\n    }\n}\n$engine = new V8();\n$engine->start();`,
          tests: [
            { id: 1, label: "Abstract class", keywords: [{ pattern: "abstract\\s+class\\s+Engine" }] },
            { id: 2, label: "Abstract method", keywords: [{ pattern: "abstract\\s+public\\s+function\\s+start" }] },
          ],
        },
      },
    ],
  },
  {
    id: "safety",
    title: "System Runtime Safety",
    icon: "🛡️",
    color: "#ea580c",
    lessons: [
      {
        id: "php-27",
        title: "Namespaces",
        xp: 15,
        theory: [
          text(
            "In a large app, you might have two classes named `User` (e.g. your app's user, and a vendor library's user). **Namespaces** group classes virtually to prevent naming collisions, exactly like folders on an OS.",
            {
              label: "Declaring a namespace",
              content: `<?php\nnamespace App\\Models;\nclass User {}\n\n// Instantiating requires the full path or a 'use' statement\n$u = new \\App\\Models\\User();`,
            },
          ),
          text(
            "The `namespace` declaration must be the very first line of code in the file.",
          ),
        ],
        challenge: {
          title: "Virtual Folder",
          description: "Declare `namespace Core\\Http;`. Then create `class Request { public string $method = 'GET'; }`. Instantiate it as `$r = new Request();` and echo method.",
          starterCode: `${PHP_MAIN}\n// namespace Core\\Http;`,
          solutionCode: `${PHP_MAIN}namespace Core\\Http;\nclass Request {\n    public string $method = 'GET';\n}\n$r = new Request();\necho $r->method;`,
          tests: [
            { id: 1, label: "Declares namespace", keywords: [{ pattern: "namespace\\s+Core\\\\Http\\s*;" }] },
            { id: 2, label: "Instantiates inside namespace", keywords: [{ pattern: "new\\s+Request" }] },
          ],
        },
      },
      {
        id: "php-28",
        title: "Enumerations (Enums)",
        xp: 18,
        theory: [
          text(
            "PHP 8.1 introduced **Enums**. They represent a fixed collection of valid values. Backed enums attach a primitive value (like a string) to each case, making them perfect for databases.",
            {
              label: "Backed Enum",
              content: `<?php\nenum Status: string {\n    case Draft = 'D';\n    case Published = 'P';\n}\n\n$s = Status::Draft;\necho $s->value; // Outputs 'D'`,
            },
          ),
          quiz(
            "Why use Enums instead of plain strings?",
            ["Type safety; functions can demand an Enum instead of any random string", "They execute faster", "They compress files", "Strings are deprecated"],
            1,
            "Enums guarantee the system can only ever hold exactly the allowed states."
          ),
        ],
        challenge: {
          title: "Payment State",
          description: "Create `enum State: string { case Paid = 'Y'; case Unpaid = 'N'; }`. Echo the `->value` of `State::Paid`.",
          starterCode: `${PHP_MAIN}\n// enum State...`,
          solutionCode: `${PHP_MAIN}enum State: string {\n    case Paid = 'Y';\n    case Unpaid = 'N';\n}\necho State::Paid->value;`,
          tests: [
            { id: 1, label: "String backed enum", keywords: [{ pattern: "enum\\s+State\\s*:\\s*string" }] },
            { id: 2, label: "Echos value", keywords: [{ pattern: "State::Paid->value" }] },
          ],
        },
      },
      {
        id: "php-29",
        title: "Exceptions",
        xp: 20,
        theory: [
          text(
            "When things go horribly wrong (e.g. database fails), PHP can `throw` an Exception. You handle it gracefully using `try` and `catch` blocks instead of letting the application crash.",
            {
              label: "Try / Catch",
              content: `<?php\ntry {\n    throw new Exception("DB Error");\n} catch (Exception $e) {\n    echo "Caught: " . $e->getMessage();\n}`,
            },
          ),
          diagram("Exception Flow", [
            { id: "try", label: "try block", color: ACCENT, items: ["Risky code", "throw new Exception()"] },
            { id: "catch", label: "catch block", color: "#ef4444", items: ["Intercepts error", "$e->getMessage()", "Recovery"] },
          ]),
        ],
        challenge: {
          title: "Safe Division",
          description: "Inside a `try` block, if `$b == 0`, throw an `Exception` with message `ZeroDiv`. Catch it and echo `Error: ` followed by `getMessage()`.",
          starterCode: `${PHP_MAIN}\n$b = 0;\n// try catch block`,
          solutionCode: `${PHP_MAIN}$b = 0;\ntry {\n    if ($b == 0) throw new Exception("ZeroDiv");\n} catch (Exception $e) {\n    echo "Error: " . $e->getMessage();\n}`,
          tests: [
            { id: 1, label: "Uses try/catch", keywords: [{ pattern: "try\\s*\\{", flags: "s" }] },
            { id: 2, label: "Throws Exception", keywords: [{ pattern: "throw\\s+new\\s+Exception" }] },
            { id: 3, label: "Uses getMessage()", keywords: [{ pattern: "getMessage\\(\\)" }] },
          ],
        },
      },
    ],
  },
  {
    id: "capstone",
    title: "Capstone",
    icon: "🏆",
    color: "#f59e0b",
    lessons: [
      {
        id: "php-30",
        title: "Rest API Logic",
        xp: 20,
        theory: [
          text(
            "Let's combine skills! A functional API endpoint takes input, validates types, uses match logic, and handles exceptions.",
          ),
          callout("tip", "Break the steps down. Use a strictly typed function to perform the math, driven by a `match` expression."),
        ],
        challenge: {
          title: "Routing Math",
          description: "Write `function calc(int $a, int $b, string $op)`. Return `$a + $b` for '+', `$a - $b` for '-', and throw `Exception` for `default`. Call `echo calc(10, 5, '-');`.",
          starterCode: `${PHP_MAIN}\n// function calc with match or if/else\n// echo result`,
          solutionCode: `${PHP_MAIN}function calc(int $a, int $b, string $op) {\n    return match($op) {\n        '+' => $a + $b,\n        '-' => $a - $b,\n        default => throw new Exception("Bad Op")\n    };\n}\necho calc(10, 5, '-');`,
          tests: [
            { id: 1, label: "Defines function params", keywords: [{ pattern: "function\\s+calc\\s*\\(\\s*int\\s+\\$a" }] },
            { id: 2, label: "Matches operators", keywords: [{ pattern: "'-'\\s*=>" }] },
            { id: 3, label: "Throws on default", keywords: [{ pattern: "throw\\s+new\\s+Exception" }] },
            { id: 4, label: "Echos 5", keywords: [{ pattern: "calc\\s*\\(\\s*10" }] },
          ],
        },
      },
      {
        id: "php-31",
        title: "Course recap",
        xp: 20,
        theory: [
          text(
            "Congratulations — you've mastered the syntax and engineering principles of modern PHP! You've learned standard I/O, control flow, functions, associative arrays, OOP architecture, and exceptions.",
          ),
          diagram("Your PHP Journey", [
            { id: "basics", label: "Basics", color: ACCENT, items: ["Dynamic Types", "Loops", "Functions"] },
            { id: "data", label: "Data & State", color: "#f97316", items: ["Arrays", "$_GET / $_POST", "Null Coalescing"] },
            { id: "oop", label: "Architecture", color: "#22c55e", items: ["Classes & Enums", "Namespaces", "Interfaces"] },
          ]),
          text(
            "**What to learn next:** Dive into Database interaction using PHP Data Objects (PDO) to permanently store your arrays, and learn about the MVC (Model-View-Controller) pattern using frameworks like Laravel.",
          ),
        ],
        challenge: {
          title: "Graduation Badge",
          description: "Print exactly two lines using newline characters: `PHP Fundamentals` then `Complete!`",
          starterCode: `${PHP_MAIN}\n// Output graduation message`,
          solutionCode: `${PHP_MAIN}echo "PHP Fundamentals\\nComplete!";`,
          tests: [
            { id: 1, label: "Contains Title", keywords: [{ pattern: "PHP Fundamentals" }] },
            { id: 2, label: "Contains Complete!", keywords: [{ pattern: "Complete!" }] },
          ],
        },
      },
    ],
  },
];

// Flattens the array mapping chapter metadata into individual lessons for UI usage.
// Video Links logic has been decoupled based on platform requirements.
export const PHP_FUNDAMENTALS_LESSONS = PHP_FUNDAMENTALS_CHAPTERS.flatMap((ch) =>
  ch.lessons.map((l) => ({
    ...l,
    chapterId: ch.id,
    chapterTitle: ch.title,
    chapterColor: ch.color,
  }))
);

export const PHP_FUNDAMENTALS_TOTAL_XP = PHP_FUNDAMENTALS_LESSONS.reduce(
  (s, l) => s + l.xp,
  0,
);