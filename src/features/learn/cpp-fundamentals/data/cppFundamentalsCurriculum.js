// PolyCode — C++ Fundamentals interactive course
// 10 chapters · 32 lessons · server/browser C++ challenges
// YouTube links: edit cppFundamentalsVideoLinks.js

import { applyLessonVideoLinks } from "../../shared/applyLessonVideoLinks";
import { CPP_FUNDAMENTALS_VIDEO_LINKS } from "./cppFundamentalsVideoLinks";

const ACCENT = "#f34b7d";

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
      code: { lang: "cpp", ...codeBlock },
    };
  }
  return { type: "text", content };
}

function diagram(title, nodes) {
  return { type: "diagram", title, nodes };
}

const CPP_MAIN = `#include <iostream>
using namespace std;

int main() {
`;

const CPP_MAIN_END = `    return 0;
}`;

export const CPP_FUNDAMENTALS_CHAPTERS = [
  {
    id: "welcome",
    title: "Welcome to C++",
    icon: "⚙️",
    color: ACCENT,
    lessons: [
      {
        id: "cpp-0",
        title: "What is C++?",
        xp: 10,
        theory: [
          text(
            "**C++** (pronounced \"see plus plus\") is a powerful programming language used to build games, operating systems, browsers, robots, and high-performance apps. It extends the older **C** language with features like **classes** and **templates**, giving you fine control over memory and speed.",
            {
              label: "A tiny C++ program",
              content: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, PolyCode!" << endl;
    return 0;
}`,
            },
          ),
          text(
            "Think of C++ like a **workshop with every tool on the wall**. You can build a simple shelf (a small console app) or a skyscraper (a game engine). Other languages hide details for convenience; C++ lets you see and control **how** your program uses the computer.",
          ),
          diagram("Where C++ shows up in real life", [
            {
              id: "games",
              label: "Games & graphics",
              color: ACCENT,
              items: ["Unreal Engine", "Health & physics systems", "60 FPS rendering"],
            },
            {
              id: "systems",
              label: "Systems software",
              color: "#22c55e",
              items: ["Operating systems", "Device drivers", "Embedded chips"],
            },
            {
              id: "apps",
              label: "Everyday software",
              color: "#3b82f6",
              items: ["Browsers (Chrome)", "Databases", "Scientific tools"],
            },
          ]),
          text(
            "A C++ program is a set of **instructions** the compiler turns into machine code your CPU runs. The `main()` function is the **starting line** — like the whistle that starts a race.",
          ),
          callout(
            "tip",
            "C++ rewards patience. You will type more setup than in Python or JavaScript, but you gain **speed**, **control**, and skills used in AAA games and systems programming.",
          ),
          callout(
            "info",
            "C++ is **compiled**, not interpreted. You write source code (`.cpp` files), compile them into an executable, then run it — similar to baking a cake from a recipe before serving it.",
          ),
          quiz(
            "What is the entry point where every C++ program begins?",
            ["start()", "main()", "run()", "init()"],
            1,
            "Execution starts inside int main().",
          ),
        ],
        challenge: {
          title: "Hello, PolyCode",
          description:
            "Use `cout` to print exactly: `Hello, PolyCode!` followed by a newline.",
          starterCode: `${CPP_MAIN}    // Print Hello, PolyCode!
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    cout << "Hello, PolyCode!" << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Uses cout", keywords: [{ pattern: "cout\\s*<<" }] },
            { id: 2, label: "Prints Hello, PolyCode!", keywords: [{ pattern: "Hello,\\s*PolyCode!" }] },
            { id: 3, label: "Ends line with endl", keywords: [{ pattern: "endl" }] },
          ],
        },
      },
      {
        id: "cpp-1",
        title: "Your first program",
        xp: 10,
        theory: [
          text(
            "Every beginner C++ file follows a familiar pattern: **include** libraries, optionally use a namespace, define `main()`, and **return 0** to signal success — like handing in a test with \"all questions answered.\"",
            {
              label: "Anatomy of a minimal program",
              content: `#include <iostream>   // input/output tools
using namespace std; // std::cout becomes cout

int main() {
    cout << "Learning C++ on PolyCode" << endl;
    return 0;          // 0 = success
}`,
            },
          ),
          text(
            "`#include <iostream>` pulls in **iostream** — *input/output stream*. `cout` (**c**haracter **out**) sends text to the screen. The `<<` operator **pushes** data into the stream, like sliding coins into a vending machine slot.",
            {
              label: "Printing numbers and text",
              content: `cout << "Score: " << 100 << endl;
cout << 3 + 4 << endl;  // prints 7`,
            },
          ),
          diagram("How output flows", [
            {
              id: "code",
              label: "Your code",
              color: ACCENT,
              items: ['cout << "Hi"', "Numbers & variables", "endl for newline"],
            },
            {
              id: "stream",
              label: "Output stream",
              color: "#f97316",
              items: ["Buffers characters", "Formats values", "Sends to console"],
            },
            {
              id: "screen",
              label: "Terminal",
              color: "#22c55e",
              items: ["Shows printed text", "PolyCode challenge panel", "Dev tools console"],
            },
          ]),
          text(
            "**Comments** start with `//` for single lines. They are notes for humans — the compiler ignores them. Use them to explain *why*, not *what* obvious code already shows.",
          ),
          callout(
            "tip",
            "End statements with a **semicolon** `;`. Forgetting one is the most common beginner error — C++ uses `;` like a period at the end of a sentence.",
          ),
          callout(
            "warning",
            "C++ is **case-sensitive**: `cout` works, `Cout` and `COUT` do not.",
          ),
          quiz(
            "Which header do you include for cout and cin?",
            ["<string>", "<iostream>", "<vector>", "<cmath>"],
            1,
            "<iostream> provides cin, cout, and endl.",
          ),
        ],
        challenge: {
          title: "Score Board",
          description:
            "Print two lines: first `Game: PolyQuest`, then `Score: 42` (use `cout` twice).",
          starterCode: `${CPP_MAIN}    // Print game name and score on separate lines
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    cout << "Game: PolyQuest" << endl;
    cout << "Score: 42" << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Prints game name", keywords: [{ pattern: "PolyQuest" }] },
            { id: 2, label: "Prints score 42", keywords: [{ pattern: "Score.*42" }] },
            { id: 3, label: "Uses cout twice", keywords: [{ pattern: "cout.*cout", flags: "s" }] },
          ],
        },
      },
      {
        id: "cpp-2",
        title: "Compile & run",
        xp: 10,
        theory: [
          text(
            "Before a C++ program runs, a **compiler** checks your syntax and builds an **executable** file. Think of compiling like **proofreading and printing** a school essay — errors get caught before anyone reads it.",
          ),
          diagram("From source code to running program", [
            {
              id: "write",
              label: "1. Write",
              color: ACCENT,
              items: [".cpp source file", "Edit in PolyCode", "Save your work"],
            },
            {
              id: "compile",
              label: "2. Compile",
              color: "#f97316",
              items: ["g++ on server", "Syntax check", "Build executable"],
            },
            {
              id: "run",
              label: "3. Run",
              color: "#22c55e",
              items: ["CPU executes", "Output in panel", "return 0 = OK"],
            },
          ]),
          text(
            "On your own computer you might run `g++ main.cpp -o main` then `./main`. In **PolyCode**, click **Run & Submit** — the backend (or browser fallback) compiles and runs for you.",
            {
              label: "Typical local workflow",
              content: `# Terminal example (not required in PolyCode)
g++ lesson.cpp -o lesson
./lesson`,
            },
          ),
          text(
            "**Compilation errors** mean the compiler could not understand your code — missing `;`, wrong spelling, unclosed `{`. **Runtime errors** happen while the program runs — dividing by zero, bad input. Fix compile errors first; they block everything else.",
          ),
          callout(
            "tip",
            "Read error messages **bottom-up** — the first error often causes a cascade of confusing follow-ups.",
          ),
          callout(
            "info",
            "`return 0` from `main()` tells the operating system the program finished successfully. Non-zero values can signal failure in larger projects.",
          ),
          quiz(
            "What happens if you forget a semicolon?",
            [
              "The program runs faster",
              "The compiler reports an error",
              "cout stops working forever",
              "main() is renamed automatically",
            ],
            1,
            "Missing semicolons are syntax errors caught at compile time.",
          ),
        ],
        challenge: {
          title: "Build Success",
          description:
            "Print `Compile OK` on one line. Make sure the program compiles and returns 0.",
          starterCode: `${CPP_MAIN}    // Print Compile OK
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    cout << "Compile OK" << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Prints Compile OK", keywords: [{ pattern: "Compile\\s*OK" }] },
            { id: 2, label: "Has return 0", keywords: [{ pattern: "return\\s+0" }] },
            { id: 3, label: "Includes iostream", keywords: [{ pattern: "#include\\s*<iostream>" }] },
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
        id: "cpp-3",
        title: "Variables & types",
        xp: 12,
        theory: [
          text(
            "A **variable** is a named box that stores a value — like a locker at school labeled with your name. C++ is **statically typed**: each variable has a **type** (`int`, `double`, `char`, `bool`) that tells the compiler what kind of data fits in the box.",
            {
              label: "Common beginner types",
              content: `int age = 14;           // whole number
double price = 9.99;    // decimal
char grade = 'A';       // single character
bool passed = true;     // true or false`,
            },
          ),
          text(
            "Imagine **pocket money**: `int coins = 50` counts whole coins; `double dollars = 12.50` tracks dollars and cents. You pick the type that matches the real-world quantity.",
            {
              label: "Declaring and updating",
              content: `int health = 100;   // game HP
health = health - 25; // took damage
cout << health << endl;  // 75`,
            },
          ),
          diagram("Variable memory mental model", [
            {
              id: "name",
              label: "Name (identifier)",
              color: ACCENT,
              items: ["health", "balance", "temperature"],
            },
            {
              id: "type",
              label: "Type",
              color: "#f97316",
              items: ["int → integers", "double → decimals", "bool → true/false"],
            },
            {
              id: "value",
              label: "Value",
              color: "#22c55e",
              items: ["Can change (unless const)", "Stored in RAM", "Read with name"],
            },
          ]),
          callout(
            "tip",
            "Initialize variables when you can. `int score;` without a value contains **garbage** until you assign — like an empty locker with random leftover stuff.",
          ),
          callout(
            "info",
            "`bool` values are great for flags: `bool gameOver = false`, `bool hasKey = true`.",
          ),
          quiz(
            "Which type stores whole numbers like 0, 42, or -7?",
            ["double", "int", "char", "string"],
            1,
            "int stores integers without fractional parts.",
          ),
        ],
        challenge: {
          title: "Bank Balance",
          description:
            "Create `double balance = 250.75` and print it with `cout`.",
          starterCode: `${CPP_MAIN}    // Declare balance and print it
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    double balance = 250.75;
    cout << balance << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Uses double balance", keywords: [{ pattern: "double\\s+balance" }] },
            { id: 2, label: "Sets 250.75", keywords: [{ pattern: "250\\.75" }] },
            { id: 3, label: "Prints balance", keywords: [{ pattern: "cout.*balance", flags: "s" }] },
          ],
        },
      },
      {
        id: "cpp-4",
        title: "const & literals",
        xp: 12,
        theory: [
          text(
            "A **literal** is a value written directly in code: `42`, `3.14`, `\"Hello\"`, `true`. A **constant** uses `const` so the value **cannot change** after setup — like a printed school timetable that stays the same all term.",
            {
              label: "const in practice",
              content: `const int MAX_HEALTH = 100;
const double PI = 3.14159;
// MAX_HEALTH = 200;  // ERROR: cannot assign`,
            },
          ),
          text(
            "Use **UPPER_SNAKE_CASE** for const names by convention (`MAX_SPEED`, `TAX_RATE`). Regular variables use **camelCase** or **snake_case** — stay consistent in your projects.",
            {
              label: "Literals vs variables",
              content: `int cups = 3;           // variable
cout << cups << endl;   // variable
cout << 99 << endl;     // literal`,
            },
          ),
          callout(
            "tip",
            "Mark values that should never change as `const`. The compiler helps you avoid accidental bugs — like trying to rename your school mid-year.",
          ),
          callout(
            "warning",
            "Character literals use **single quotes** `'A'`; text strings use **double quotes** `\"A\"`. They are different types.",
          ),
          diagram("When to use const", [
            {
              id: "fixed",
              label: "Fixed rules",
              color: ACCENT,
              items: ["Max players", "Tax rate", "Board size"],
            },
            {
              id: "changing",
              label: "Changing state",
              color: "#22c55e",
              items: ["Current score", "Wallet balance", "Temperature now"],
            },
          ]),
          quiz(
            "What happens if you try to reassign a const variable?",
            [
              "It silently succeeds",
              "Compilation error",
              "It becomes a double",
              "Only works at night",
            ],
            1,
            "const prevents reassignment; the compiler enforces it.",
          ),
        ],
        challenge: {
          title: "Speed Limit",
          description:
            "Declare `const int SPEED_LIMIT = 60` and print it with a label: `Limit: 60`.",
          starterCode: `${CPP_MAIN}    // const speed limit and print
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    const int SPEED_LIMIT = 60;
    cout << "Limit: " << SPEED_LIMIT << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Uses const int", keywords: [{ pattern: "const\\s+int\\s+SPEED_LIMIT" }] },
            { id: 2, label: "Value is 60", keywords: [{ pattern: "SPEED_LIMIT\\s*=\\s*60" }] },
            { id: 3, label: "Prints Limit label", keywords: [{ pattern: "Limit:" }] },
          ],
        },
      },
      {
        id: "cpp-5",
        title: "Operators",
        xp: 12,
        theory: [
          text(
            "**Operators** let you calculate and compare — like a calculator and a judge in one. Arithmetic: `+ - * / %`. Assignment: `=`, `+=`, `-=`. Comparison: `== != < > <= >=`. Logic: `&&` (and), `||` (or), `!` (not).",
            {
              label: "Shopping cart math",
              content: `int apples = 3;
int oranges = 2;
int totalFruit = apples + oranges;
cout << totalFruit << endl;  // 5`,
            },
          ),
          text(
            "Integer division **drops the decimal**: `7 / 2` is `3`, not `3.5`. Use `double` if you need fractions — like splitting a pizza bill fairly.",
            {
              label: "Modulo (remainder)",
              content: `int minutes = 73;
int hours = minutes / 60;      // 1
int leftover = minutes % 60;   // 13`,
            },
          ),
          diagram("Operator families", [
            {
              id: "math",
              label: "Arithmetic",
              color: ACCENT,
              items: ["+ - * / %", "damage, scores", "temperature change"],
            },
            {
              id: "compare",
              label: "Comparison",
              color: "#f97316",
              items: ["== != < >", "pass/fail checks", "leaderboard rank"],
            },
            {
              id: "logic",
              label: "Logical",
              color: "#22c55e",
              items: ["&& || !", "game rules", "multiple conditions"],
            },
          ]),
          callout(
            "tip",
            "`==` checks equality; `=` assigns. Mixing them up is a classic bug: `if (score = 10)` assigns instead of compares.",
          ),
          callout(
            "info",
            "`++` and `--` add or subtract 1. `score++` is shorthand when a game awards a point.",
          ),
          quiz(
            "What is the result of 17 % 5?",
            ["3", "3.4", "2", "5"],
            2,
            "17 ÷ 5 = 3 remainder 2. The modulo operator % returns the remainder.",
          ),
        ],
        challenge: {
          title: "Cart Total",
          description:
            "Given `int price = 15` and `int qty = 4`, compute `total = price * qty` and print `Total: 60`.",
          starterCode: `${CPP_MAIN}    int price = 15;
    int qty = 4;
    // Compute total and print Total: 60
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    int price = 15;
    int qty = 4;
    int total = price * qty;
    cout << "Total: " << total << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Multiplies price * qty", keywords: [{ pattern: "price\\s*\\*\\s*qty" }] },
            { id: 2, label: "Stores in total", keywords: [{ pattern: "total" }] },
            { id: 3, label: "Prints Total:", keywords: [{ pattern: "Total:" }] },
          ],
        },
      },
      {
        id: "cpp-6",
        title: "cin & cout",
        xp: 15,
        theory: [
          text(
            "`cout` **outputs** data; `cin` **inputs** data from the keyboard — like a shop cashier who **shows** your total (`cout`) and **asks** for payment (`cin`). Use `>>` to extract values from the input stream.",
            {
              label: "Reading a number",
              content: `int age;
cout << "Enter age: ";
cin >> age;
cout << "You are " << age << endl;`,
            },
          ),
          text(
            "In PolyCode challenges, input may be **simulated** when you run code. On your own machine, type a value and press Enter. Always prompt the user so they know what to type.",
            {
              label: "Two numbers summed",
              content: `int a, b;
cin >> a >> b;
cout << a + b << endl;`,
            },
          ),
          diagram("Input / output flow", [
            {
              id: "out",
              label: "cout <<",
              color: ACCENT,
              items: ["Prompts", "Labels", "Results"],
            },
            {
              id: "in",
              label: "cin >>",
              color: "#22c55e",
              items: ["User types", "Stored in variables", "Used in formulas"],
            },
          ]),
          callout(
            "tip",
            "When reading strings with spaces, use `getline(cin, name)` after `#include <string>` — `cin >>` stops at the first space.",
          ),
          callout(
            "warning",
            "If the user types text when you expect `int`, `cin` can fail. Advanced courses cover clearing error states; for now, type matching values.",
          ),
          quiz(
            "Which operator reads into a variable with cin?",
            [">>", "<<", "==", "&&"],
            0,
            "cin >> variable pulls the next input token into variable.",
          ),
        ],
        challenge: {
          title: "Temperature Reader",
          description:
            "Declare `int temp`, read it with `cin >> temp`, then print `Temp: ` followed by the value. (Use any test input when running locally.)",
          starterCode: `${CPP_MAIN}    int temp;
    // Read temp and print Temp: <value>
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    int temp;
    cin >> temp;
    cout << "Temp: " << temp << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Declares int temp", keywords: [{ pattern: "int\\s+temp" }] },
            { id: 2, label: "Uses cin >> temp", keywords: [{ pattern: "cin\\s*>>\\s*temp" }] },
            { id: 3, label: "Prints Temp:", keywords: [{ pattern: "Temp:" }] },
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
        id: "cpp-7",
        title: "if / else",
        xp: 12,
        theory: [
          text(
            "**Decisions** let programs react — like a traffic light choosing go or stop. `if (condition) { ... }` runs code only when the condition is **true**. Add `else` for the alternative path.",
            {
              label: "Pass or fail",
              content: `int score = 72;
if (score >= 60) {
    cout << "Pass" << endl;
} else {
    cout << "Fail" << endl;
}`,
            },
          ),
          text(
            "Conditions often use **comparison** and **logical** operators: `health > 0 && hasArmor`, `day == \"Saturday\" || day == \"Sunday\"`. Parentheses clarify order when mixing `&&` and `||`.",
            {
              label: "else if chain",
              content: `int temp = 32;
if (temp > 30) cout << "Hot" << endl;
else if (temp > 20) cout << "Warm" << endl;
else cout << "Cool" << endl;`,
            },
          ),
          diagram("if / else decision tree", [
            { id: "check", label: "Condition", color: ACCENT, items: ["score >= 60", "balance > 0", "key pressed"] },
            { id: "true", label: "true branch", color: "#22c55e", items: ["Award badge", "Open door", "Level up"] },
            { id: "false", label: "false branch", color: "#ef4444", items: ["Show hint", "Game over", "Retry prompt"] },
          ]),
          callout("tip", "Use **braces** `{}` even for one-line blocks while learning — they prevent bugs when you add a second line later."),
          callout("info", "C++ treats `0` as false and non-zero as true, but prefer explicit comparisons like `count > 0` for readability."),
          quiz(
            "When does the else block run?",
            ["Always", "When the if condition is false", "Only on Sundays", "Before the if check"],
            1,
            "else executes when the if condition evaluates to false.",
          ),
        ],
        challenge: {
          title: "Game Over Check",
          description: "If `health` is 0 or less, print `Game Over`; otherwise print `Keep playing`. Set `int health = 0` and use if/else.",
          starterCode: `${CPP_MAIN}    int health = 0;
    // Print Game Over or Keep playing
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    int health = 0;
    if (health <= 0) {
        cout << "Game Over" << endl;
    } else {
        cout << "Keep playing" << endl;
    }
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Uses if", keywords: [{ pattern: "if\\s*\\(" }] },
            { id: 2, label: "Uses else", keywords: [{ pattern: "\\belse\\b" }] },
            { id: 3, label: "Prints Game Over", keywords: [{ pattern: "Game Over" }] },
          ],
        },
      },
      {
        id: "cpp-8",
        title: "switch",
        xp: 12,
        theory: [
          text(
            "`switch` picks one path among many **equal choices** — like a school timetable slot: Period 1, 2, 3… You switch on an **integer** or **char** expression and match `case` labels.",
            {
              label: "Menu selection",
              content: `int choice = 2;
switch (choice) {
    case 1: cout << "New Game" << endl; break;
    case 2: cout << "Load Game" << endl; break;
    default: cout << "Quit" << endl;
}`,
            },
          ),
          text(
            "**break** stops the switch from **falling through** to the next case. Without `break`, execution continues into the next label — occasionally useful, usually a bug.",
          ),
          diagram("switch vs many if/else", [
            { id: "switch", label: "switch", color: ACCENT, items: ["Menu options", "Day of week (int)", "Key press codes"] },
            { id: "if", label: "if / else if", color: "#22c55e", items: ["Ranges (score > 90)", "Complex conditions", "Mixed types"] },
          ]),
          callout("tip", "Always include **default** to handle unexpected values — like an \"invalid option\" message in a vending machine."),
          callout("warning", "switch does not work directly on `string` in basic C++; use if/else or maps for text menus."),
          quiz(
            "What does break do inside a switch?",
            ["Restarts main()", "Exits the switch after a case", "Deletes the variable", "Skips compilation"],
            1,
            "break prevents fall-through to the next case.",
          ),
        ],
        challenge: {
          title: "Traffic Light",
          description: "Set `int light = 3` (1=red, 2=yellow, 3=green). Use switch to print `Go` for case 3 and `Stop` in default.",
          starterCode: `${CPP_MAIN}    int light = 3;
    // switch: green -> Go, default -> Stop
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    int light = 3;
    switch (light) {
        case 3:
            cout << "Go" << endl;
            break;
        default:
            cout << "Stop" << endl;
    }
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Uses switch", keywords: [{ pattern: "switch\\s*\\(" }] },
            { id: 2, label: "case 3 present", keywords: [{ pattern: "case\\s+3" }] },
            { id: 3, label: "Prints Go", keywords: [{ pattern: "Go" }] },
          ],
        },
      },
      {
        id: "cpp-9",
        title: "for loops",
        xp: 15,
        theory: [
          text(
            "A **for loop** repeats code a known number of times — like doing 10 push-ups: start at 1, continue while ≤ 10, add 1 each round. Syntax: `for (init; condition; update) { body }`.",
            {
              label: "Count 1 to 5",
              content: `for (int i = 1; i <= 5; i++) {
    cout << i << " ";
}
cout << endl;`,
            },
          ),
          text(
            "Game dev example: spawn 5 enemies with `for (int i = 0; i < 5; i++)`. School example: print row numbers for a seating chart.",
            {
              label: "Sum pocket money",
              content: `int total = 0;
for (int day = 1; day <= 7; day++) {
    total += 5;  // $5 per day
}
cout << total << endl;  // 35`,
            },
          ),
          diagram("for loop lifecycle", [
            { id: "init", label: "Initialize", color: ACCENT, items: ["int i = 0", "Set counter", "Once at start"] },
            { id: "cond", label: "Condition", color: "#f97316", items: ["i < n", "Checked each round", "false → exit"] },
            { id: "body", label: "Body + update", color: "#22c55e", items: ["Do work", "i++", "Repeat"] },
          ]),
          callout("tip", "Loop variable `i`, `j`, `k` are tradition. Use descriptive names (`row`, `level`) when it helps readers."),
          callout("info", "Off-by-one errors (`<` vs `<=`) are common. Trace small examples on paper before running."),
          quiz(
            "How many times does `for (int i = 0; i < 3; i++)` run the body?",
            ["2", "3", "4", "Forever"],
            1,
            "i takes values 0, 1, 2 — three iterations.",
          ),
        ],
        challenge: {
          title: "Multiplication Table Row",
          description: "Print `5 x 1 = 5` through `5 x 3 = 15` using a for loop (table of 5, three lines).",
          starterCode: `${CPP_MAIN}    // for loop: 5 x 1 through 5 x 3
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    for (int i = 1; i <= 3; i++) {
        cout << "5 x " << i << " = " << 5 * i << endl;
    }
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Uses for loop", keywords: [{ pattern: "for\\s*\\(" }] },
            { id: 2, label: "Prints 5 x 1", keywords: [{ pattern: "5 x 1" }] },
            { id: 3, label: "Prints = 15", keywords: [{ pattern: "= 15" }] },
          ],
        },
      },
      {
        id: "cpp-10",
        title: "while loops",
        xp: 15,
        theory: [
          text(
            "A **while loop** repeats **while** a condition stays true — like running until your game character's health hits zero. Use it when you do not know the exact iteration count upfront.",
            {
              label: "Count down",
              content: `int countdown = 3;
while (countdown > 0) {
    cout << countdown << endl;
    countdown--;
}
cout << "Liftoff!" << endl;`,
            },
          ),
          text(
            "**do-while** runs the body **at least once**, then checks the condition — handy for menus: show options, read choice, repeat until quit.",
            {
              label: "do-while sketch",
              content: `int choice;
do {
    cout << "1) Play  2) Quit\\n";
    cin >> choice;
} while (choice != 2);`,
            },
          ),
          diagram("while vs for", [
            { id: "while", label: "while", color: ACCENT, items: ["Unknown repeats", "User input until done", "Game main loop"] },
            { id: "for", label: "for", color: "#22c55e", items: ["Known count", "Array indices", "Fixed levels"] },
          ]),
          callout("tip", "Ensure something inside the loop **changes** the condition — otherwise you get an **infinite loop**."),
          callout("warning", "If a program hangs, check while loops first — the condition may never become false."),
          quiz(
            "Which loop always executes its body at least once?",
            ["for", "while", "do-while", "if"],
            2,
            "do-while checks the condition after the first run.",
          ),
        ],
        challenge: {
          title: "Savings Goal",
          description: "Start `balance = 0`, `goal = 30`. While balance < goal, add 10 each loop and print balance. Stop when balance >= 30.",
          starterCode: `${CPP_MAIN}    int balance = 0;
    int goal = 30;
    // while loop: add 10 until goal reached
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    int balance = 0;
    int goal = 30;
    while (balance < goal) {
        balance += 10;
        cout << balance << endl;
    }
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Uses while", keywords: [{ pattern: "while\\s*\\(" }] },
            { id: 2, label: "Adds 10", keywords: [{ pattern: "\\+=\\s*10" }] },
            { id: 3, label: "Prints balance", keywords: [{ pattern: "cout.*balance", flags: "s" }] },
          ],
        },
      },
    ],
  },
  {
    id: "functions",
    title: "Functions",
    icon: "🔧",
    color: "#c026d3",
    lessons: [
      {
        id: "cpp-11",
        title: "Function basics",
        xp: 15,
        theory: [
          text(
            "A **function** is a reusable mini-program — like a vending machine button: press \"Snacks\" and the same steps run every time. Define **above** `main()` or declare first, then implement.",
            {
              label: "Greeting function",
              content: `void sayHello() {
    cout << "Welcome to PolyCode!" << endl;
}

int main() {
    sayHello();
    return 0;
}`,
            },
          ),
          text(
            "`void` means **no return value**. Functions with a return type use `return` to send a result back — like a function that calculates change from a purchase.",
            {
              label: "Return an int",
              content: `int doubleScore(int s) {
    return s * 2;
}`,
            },
          ),
          diagram("Function call flow", [
            { id: "call", label: "main calls fn", color: ACCENT, items: ["sayHello()", "Passes control", "Waits for return"] },
            { id: "run", label: "Function body", color: "#f97316", items: ["Local steps", "cout, math", "return value"] },
            { id: "back", label: "Back to main", color: "#22c55e", items: ["Continue next line", "Use return value", "Keep playing"] },
          ]),
          callout("tip", "One function, one job: `calculateTax`, `printReceipt`, `readInput` — easier to test and reuse."),
          callout("info", "C++ requires functions to be declared before use — define helpers above `main()` or use prototypes."),
          quiz(
            "What does void mean as a return type?",
            ["Returns nothing", "Returns zero only", "Returns a string", "Function is private"],
            0,
            "void functions perform actions without sending a value back.",
          ),
        ],
        challenge: {
          title: "Print Banner",
          description: "Define `void printBanner()` that prints `=== PolyCode ===`. Call it from `main()`.",
          starterCode: `#include <iostream>
using namespace std;

// Define printBanner here

int main() {
    // Call printBanner
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

void printBanner() {
    cout << "=== PolyCode ===" << endl;
}

int main() {
    printBanner();
    return 0;
}`,
          tests: [
            { id: 1, label: "Defines printBanner", keywords: [{ pattern: "void\\s+printBanner\\s*\\(" }] },
            { id: 2, label: "Calls printBanner", keywords: [{ pattern: "printBanner\\s*\\(" }] },
            { id: 3, label: "Prints banner text", keywords: [{ pattern: "=== PolyCode ===" }] },
          ],
        },
      },
      {
        id: "cpp-12",
        title: "Parameters",
        xp: 15,
        theory: [
          text(
            "**Parameters** are inputs to a function — like a smoothie shop asking for fruit choice. The function uses **arguments** passed from the call site.",
            {
              label: "Area of rectangle",
              content: `int area(int width, int height) {
    return width * height;
}
cout << area(4, 5) << endl;  // 20`,
            },
          ),
          text(
            "**Default parameters** supply a fallback: `void greet(string name = \"Guest\")`. Callers can omit the argument when the default is fine.",
            {
              label: "Default tax rate",
              content: `double addTax(double price, double rate = 0.1) {
    return price + price * rate;
}`,
            },
          ),
          callout("tip", "Match parameter types to meaning: `double` for money with cents, `int` for counts."),
          callout("info", "Parameters are **local** copies by default for ints and doubles — changing them inside the function does not change the original variable."),
          diagram("Arguments → parameters", [
            { id: "caller", label: "Caller", color: ACCENT, items: ["area(4, 5)", "Values sent", "Expression results"] },
            { id: "params", label: "Parameters", color: "#22c55e", items: ["width, height", "Names in function", "Used in body"] },
          ]),
          quiz(
            "In `int add(int a, int b)`, what are a and b?",
            ["Global variables", "Parameters", "Header files", "Macros"],
            1,
            "a and b are parameters — placeholders for values passed in.",
          ),
        ],
        challenge: {
          title: "Grade Points",
          description: "Write `int toPoints(int grade)` returning `grade * 10`. In main, print `toPoints(8)` (should output 80).",
          starterCode: `#include <iostream>
using namespace std;

// toPoints function

int main() {
    cout << toPoints(8) << endl;
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int toPoints(int grade) {
    return grade * 10;
}

int main() {
    cout << toPoints(8) << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Defines toPoints", keywords: [{ pattern: "int\\s+toPoints\\s*\\(" }] },
            { id: 2, label: "Returns grade * 10", keywords: [{ pattern: "grade\\s*\\*\\s*10" }] },
            { id: 3, label: "Calls toPoints(8)", keywords: [{ pattern: "toPoints\\s*\\(\\s*8\\s*\\)" }] },
          ],
        },
      },
      {
        id: "cpp-13",
        title: "Scope & overloading intro",
        xp: 18,
        theory: [
          text(
            "**Scope** is where a name is visible. Variables inside a function are **local** — like locker contents only you can open. Global variables exist for the whole file but use sparingly.",
            {
              label: "Local vs global",
              content: `int globalXP = 0;  // whole file

void gainXP() {
    int bonus = 5;   // only inside gainXP
    globalXP += bonus;
}`,
            },
          ),
          text(
            "**Function overloading** lets multiple functions share a name with **different parameters** — like `print(int)` and `print(string)`. The compiler picks the best match.",
            {
              label: "Overloaded print",
              content: `void print(int n) { cout << "Num: " << n << endl; }
void print(double d) { cout << "Dec: " << d << endl; }`,
            },
          ),
          diagram("Scope layers", [
            { id: "global", label: "Global / file", color: ACCENT, items: ["Few shared settings", "Use carefully", "Declared outside functions"] },
            { id: "local", label: "Function local", color: "#22c55e", items: ["Parameters", "Loop variables", "Destroyed on return"] },
          ]),
          callout("tip", "Prefer passing values into functions instead of globals — easier to reason about and test."),
          callout("warning", "Two functions cannot differ only by return type — parameter lists must differ for overloading."),
          quiz(
            "Where do local variables live?",
            ["Only inside their function/block", "In every file", "On the internet", "In #include lines"],
            0,
            "Local variables are created when the block runs and end when it finishes.",
          ),
        ],
        challenge: {
          title: "Double Print",
          description: "Overload `show` — one takes `int`, prints `Int: ` + value; one takes `double`, prints `Dec: ` + value. Call both from main with 7 and 3.5.",
          starterCode: `#include <iostream>
using namespace std;

// Two overloaded show functions

int main() {
    show(7);
    show(3.5);
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

void show(int n) {
    cout << "Int: " << n << endl;
}

void show(double d) {
    cout << "Dec: " << d << endl;
}

int main() {
    show(7);
    show(3.5);
    return 0;
}`,
          tests: [
            { id: 1, label: "show(int) defined", keywords: [{ pattern: "void\\s+show\\s*\\(\\s*int" }] },
            { id: 2, label: "show(double) defined", keywords: [{ pattern: "void\\s+show\\s*\\(\\s*double" }] },
            { id: 3, label: "Prints Int: 7", keywords: [{ pattern: "Int:\\s*7" }] },
          ],
        },
      },
    ],
  },
  {
    id: "arrays-strings",
    title: "Arrays & Strings",
    icon: "📋",
    color: "#a855f7",
    lessons: [
      {
        id: "cpp-14",
        title: "Arrays",
        xp: 15,
        theory: [
          text(
            "An **array** stores many values of the same type in a row — like a row of lockers numbered 0, 1, 2… Access with **index**: `scores[0]` is the first item.",
            {
              label: "Test scores",
              content: `int scores[3] = {88, 92, 75};
cout << scores[1] << endl;  // 92
scores[2] = 80;             // update third`,
            },
          ),
          text(
            "Size is fixed at creation for C-style arrays: `int temps[7]` holds a week of readings. Valid indices run from `0` to `size - 1`. Going out of bounds is dangerous — C++ may not stop you.",
          ),
          diagram("Array index mental model", [
            { id: "idx", label: "Index", color: ACCENT, items: ["0-based", "0 … n-1", "Like seat numbers"] },
            { id: "val", label: "Values", color: "#22c55e", items: ["Same type", "Contiguous", "Fast access"] },
          ]),
          callout("tip", "Use loops to walk arrays: `for (int i = 0; i < 3; i++) cout << scores[i];`"),
          callout("warning", "Never access `arr[size]` — the last valid index is `size - 1`."),
          quiz(
            "What is the index of the first element in int data[5]?",
            ["1", "0", "5", "-1"],
            1,
            "C++ arrays are zero-indexed; the first slot is 0.",
          ),
        ],
        challenge: {
          title: "Weekly Steps",
          description: "Create `int steps[3] = {4000, 6000, 5000}` and print the middle value (index 1).",
          starterCode: `${CPP_MAIN}    // steps array and print index 1
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    int steps[3] = {4000, 6000, 5000};
    cout << steps[1] << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Declares steps array", keywords: [{ pattern: "int\\s+steps\\s*\\[" }] },
            { id: 2, label: "Accesses index 1", keywords: [{ pattern: "steps\\s*\\[\\s*1\\s*\\]" }] },
            { id: 3, label: "Prints 6000", keywords: [{ pattern: "6000" }] },
          ],
        },
      },
      {
        id: "cpp-15",
        title: "string",
        xp: 15,
        theory: [
          text(
            "C++ **`string`** (from `#include <string>`) holds text of any length — player names, chat messages, addresses. Unlike C char arrays, `string` grows and shrinks easily.",
            {
              label: "Greeting with string",
              content: `#include <string>
string name = "Ava";
cout << "Hi, " << name << endl;
cout << name.length() << endl;`,
            },
          ),
          text(
            "Concatenate with `+` or `+=`: `cart += \"Apple\";`. Compare with `==`. Real apps use strings everywhere — login forms, inventory labels, quest descriptions.",
            {
              label: "Combine strings",
              content: `string first = "Poly";
string full = first + "Code";
cout << full << endl;`,
            },
          ),
          callout("tip", "Use `getline(cin, line)` to read a full line including spaces."),
          callout("info", "Add `using namespace std;` or prefix `std::string` — both work in this course."),
          diagram("string vs char", [
            { id: "string", label: "string", color: ACCENT, items: ["Dynamic size", "+ concat", "length(), substr()"] },
            { id: "char", label: "char / char[]", color: "#22c55e", items: ["Single letter", "C-style text", "Lower-level"] },
          ]),
          quiz(
            "Which header provides std::string?",
            ["<iostream>", "<string>", "<vector>", "<cstring>"],
            1,
            "#include <string> brings in the string class.",
          ),
        ],
        challenge: {
          title: "Username Tag",
          description: "Include `<string>`, set `string user = \"Nova\"`, print `User: Nova`.",
          starterCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    // string user and print User: Nova
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string user = "Nova";
    cout << "User: " << user << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Includes string header", keywords: [{ pattern: "#include\\s*<string>" }] },
            { id: 2, label: "Declares string user", keywords: [{ pattern: "string\\s+user" }] },
            { id: 3, label: "Prints User: Nova", keywords: [{ pattern: "User:.*Nova" }] },
          ],
        },
      },
      {
        id: "cpp-16",
        title: "vector intro",
        xp: 18,
        theory: [
          text(
            "`vector` is a **dynamic array** from the STL — like a backpack that grows when you add books. `#include <vector>` and use `push_back` to append.",
            {
              label: "Shopping list vector",
              content: `#include <vector>
vector<string> cart;
cart.push_back("Milk");
cart.push_back("Bread");
cout << cart.size() << endl;`,
            },
          ),
          text(
            "Access like arrays: `cart[0]`, or use a range-for loop: `for (string item : cart)`. Vectors are usually better than raw arrays for beginners.",
            {
              label: "Loop a vector",
              content: `vector<int> hp = {100, 80, 60};
for (int h : hp) {
    cout << h << " ";
}`,
            },
          ),
          diagram("vector growth", [
            { id: "start", label: "Empty", color: ACCENT, items: ["size 0", "push_back adds", "Automatic resize"] },
            { id: "use", label: "In use", color: "#22c55e", items: ["[i] access", "size()", "loops"] },
          ]),
          callout("tip", "Use `vector<int> nums` instead of guessing array size when the count may change."),
          callout("info", "STL = Standard Template Library — ready-made containers and algorithms in C++."),
          quiz(
            "Which method adds an element to the end of a vector?",
            ["add()", "push_back()", "append()", "insert_front()"],
            1,
            "push_back appends one element to the end.",
          ),
        ],
        challenge: {
          title: "High Scores List",
          description: "Create `vector<int> scores`, push_back 90 and 85, print `size` (should be 2).",
          starterCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    // vector scores with two values, print size
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> scores;
    scores.push_back(90);
    scores.push_back(85);
    cout << scores.size() << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Uses vector<int>", keywords: [{ pattern: "vector\\s*<\\s*int\\s*>" }] },
            { id: 2, label: "Uses push_back", keywords: [{ pattern: "push_back" }] },
            { id: 3, label: "Prints size", keywords: [{ pattern: "scores\\.size\\s*\\(" }] },
          ],
        },
      },
      {
        id: "cpp-17",
        title: "Loops over data",
        xp: 18,
        theory: [
          text(
            "Combine **loops + arrays/vectors** to process collections — sum grades, find max health, print a leaderboard. Index loops and range-for are your main tools.",
            {
              label: "Sum an array",
              content: `int prices[3] = {5, 10, 3};
int sum = 0;
for (int i = 0; i < 3; i++) {
    sum += prices[i];
}
cout << sum << endl;`,
            },
          ),
          text(
            "**Range-based for** (`for (auto x : collection)`) reads cleaner when you need every item, not the index — like checking every student's pass status.",
            {
              label: "Range-for on vector",
              content: `vector<int> levels = {1, 2, 3};
for (int lvl : levels) {
    cout << "Level " << lvl << endl;
}`,
            },
          ),
          callout("tip", "Track both index and value when position matters — e.g., which day had the hottest temperature."),
          callout("info", "`auto` lets the compiler infer type: `for (auto n : nums)` works when types match."),
          diagram("Loop styles", [
            { id: "index", label: "Index for", color: ACCENT, items: ["Need position i", "Modify in place", "2D layouts later"] },
            { id: "range", label: "Range-for", color: "#22c55e", items: ["Read each item", "Cleaner syntax", "vectors & arrays"] },
          ]),
          quiz(
            "What does `for (int x : data)` do?",
            ["Sorts data", "Visits each element in data", "Deletes data", "Compiles headers"],
            1,
            "Range-for iterates over every element in the collection.",
          ),
        ],
        challenge: {
          title: "Class Average",
          description: "Given `int grades[3] = {70, 80, 90}`, loop to compute sum and print average `80` (integer division is fine).",
          starterCode: `${CPP_MAIN}    int grades[3] = {70, 80, 90};
    // loop, sum, print average
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    int grades[3] = {70, 80, 90};
    int sum = 0;
    for (int i = 0; i < 3; i++) {
        sum += grades[i];
    }
    cout << sum / 3 << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Uses for loop", keywords: [{ pattern: "for\\s*\\(" }] },
            { id: 2, label: "Accumulates sum", keywords: [{ pattern: "sum\\s*\\+=" }] },
            { id: 3, label: "Prints average 80", keywords: [{ pattern: "cout.*80", flags: "s" }] },
          ],
        },
      },
    ],
  },
  {
    id: "pointers",
    title: "Pointers & References",
    icon: "📍",
    color: "#6366f1",
    lessons: [
      {
        id: "cpp-18",
        title: "Pointers",
        xp: 18,
        theory: [
          text(
            "A **pointer** stores a **memory address** — like a note that says \"your locker is #42.\" Declare with `*`: `int* ptr`. Get an address with `&variable` (**address-of**).",
            {
              label: "Pointer basics",
              content: `int coins = 50;
int* ptr = &coins;
cout << *ptr << endl;  // 50 (value at address)
*ptr = 60;            // coins is now 60`,
            },
          ),
          text(
            "Dereference with `*ptr` to read or write the **target** value. Pointers power dynamic data, arrays, and game engines — but require care.",
          ),
          diagram("Pointer chain", [
            { id: "var", label: "Variable", color: ACCENT, items: ["coins = 50", "Lives in memory", "Has address"] },
            { id: "ptr", label: "Pointer", color: "#f97316", items: ["Stores address", "int* ptr", "& and * operators"] },
          ]),
          callout("tip", "Read declarations right-to-left: `int* p` → p is a pointer to int."),
          callout("warning", "Never use uninitialized pointers — they may point anywhere."),
          quiz(
            "What does &score produce?",
            ["The value of score", "The address of score", "A random number", "Deletes score"],
            1,
            "& is the address-of operator.",
          ),
        ],
        challenge: {
          title: "Update HP",
          description: "`int hp = 100; int* p = &hp;` then set `*p = 75` and print `hp`.",
          starterCode: `${CPP_MAIN}    int hp = 100;
    // pointer to hp, set 75 through pointer, print hp
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    int hp = 100;
    int* p = &hp;
    *p = 75;
    cout << hp << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Pointer to hp", keywords: [{ pattern: "&hp" }] },
            { id: 2, label: "Dereference assign 75", keywords: [{ pattern: "\\*p\\s*=\\s*75" }] },
            { id: 3, label: "Prints hp", keywords: [{ pattern: "cout.*hp", flags: "s" }] },
          ],
        },
      },
      {
        id: "cpp-19",
        title: "References",
        xp: 18,
        theory: [
          text(
            "A **reference** is an alias — a second name for the same object. `int& ref = balance;` means `ref` and `balance` are the same locker.",
            {
              label: "Reference alias",
              content: `int balance = 200;
int& ref = balance;
ref += 50;
cout << balance << endl;  // 250`,
            },
          ),
          text(
            "**Reference parameters** let functions modify originals without pointers: `void addBonus(int& score) { score += 10; }` — useful for banking and game stat updates.",
            {
              label: "Function with reference param",
              content: `void addTip(double& bill) {
    bill += 2.0;
}`,
            },
          ),
          diagram("Pointer vs reference", [
            { id: "ref", label: "Reference &", color: ACCENT, items: ["Must bind to object", "Cannot reseat", "Cleaner syntax"] },
            { id: "ptr", label: "Pointer *", color: "#22c55e", items: ["Can be null", "Can reassign", "Explicit dereference"] },
          ]),
          callout("tip", "Use references when a parameter must exist and should not be null."),
          callout("info", "References are common in modern C++ for passing large objects efficiently."),
          quiz(
            "After int& r = x;, what does r += 1 do?",
            ["Creates a new variable", "Changes x", "Only changes r copy", "Crashes always"],
            1,
            "r is an alias; modifying r modifies x.",
          ),
        ],
        challenge: {
          title: "Ref Top-Up",
          description: "Write `void topUp(int& wallet)` adding 20. In main, `int wallet = 100; topUp(wallet);` print wallet (120).",
          starterCode: `#include <iostream>
using namespace std;

// topUp function

int main() {
    int wallet = 100;
    topUp(wallet);
    cout << wallet << endl;
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

void topUp(int& wallet) {
    wallet += 20;
}

int main() {
    int wallet = 100;
    topUp(wallet);
    cout << wallet << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "topUp takes int&", keywords: [{ pattern: "int\\s*&\\s*wallet" }] },
            { id: 2, label: "Adds 20", keywords: [{ pattern: "\\+=\\s*20" }] },
            { id: 3, label: "Calls topUp", keywords: [{ pattern: "topUp\\s*\\(\\s*wallet\\s*\\)" }] },
          ],
        },
      },
      {
        id: "cpp-20",
        title: "nullptr",
        xp: 15,
        theory: [
          text(
            "**nullptr** means \"this pointer points to nothing\" — an empty locker slot. Use it instead of old `NULL` or `0` for clarity and safety.",
            {
              label: "Safe check",
              content: `int* key = nullptr;
if (key != nullptr) {
    cout << *key << endl;
} else {
    cout << "No key yet" << endl;
}`,
            },
          ),
          text(
            "Always check pointers before dereferencing when they might be null — like knocking before opening a door in case nobody is home.",
          ),
          callout("warning", "Dereferencing nullptr causes undefined behavior — often a crash."),
          callout("tip", "After deleting dynamic memory (advanced topic), set pointer to nullptr to avoid accidental reuse."),
          diagram("Pointer states", [
            { id: "valid", label: "Valid address", color: "#22c55e", items: ["Points to object", "Safe after check", "&var or new"] },
            { id: "null", label: "nullptr", color: ACCENT, items: ["No target", "Check before *", "Optional data"] },
          ]),
          quiz(
            "Which value represents a null pointer in modern C++?",
            ["nullptr", "void", "NaN", "empty"],
            0,
            "nullptr is the type-safe null pointer literal.",
          ),
        ],
        challenge: {
          title: "Missing Key",
          description: "Set `int* key = nullptr`, if key is nullptr print `No key`, else print value.",
          starterCode: `${CPP_MAIN}    int* key = nullptr;
    // check and print No key
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    int* key = nullptr;
    if (key == nullptr) {
        cout << "No key" << endl;
    } else {
        cout << *key << endl;
    }
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Initializes nullptr", keywords: [{ pattern: "nullptr" }] },
            { id: 2, label: "Compares to nullptr", keywords: [{ pattern: "==\\s*nullptr" }] },
            { id: 3, label: "Prints No key", keywords: [{ pattern: "No key" }] },
          ],
        },
      },
    ],
  },
  {
    id: "structs",
    title: "Structs & Enums",
    icon: "🏗️",
    color: "#0ea5e9",
    lessons: [
      {
        id: "cpp-21",
        title: "struct",
        xp: 18,
        theory: [
          text(
            "A **struct** groups related fields — like a student record card: name, grade, ID. Custom types help you model real objects instead of juggling separate variables.",
            {
              label: "Player struct",
              content: `struct Player {
    string name;
    int health;
    int level;
};

Player hero = {"Nova", 100, 5};
cout << hero.name << endl;`,
            },
          ),
          text(
            "Access members with **dot notation**: `hero.health -= 10;`. Structs are the foundation before **classes** — same idea, different defaults later.",
            {
              label: "Array of structs",
              content: `Player team[2] = {{"Ava", 90, 3}, {"Ben", 80, 2}};`,
            },
          ),
          diagram("struct as grouped data", [
            { id: "fields", label: "Fields", color: ACCENT, items: ["name, health", "One object", "Shared type"] },
            { id: "use", label: "Usage", color: "#22c55e", items: ["hero.health", "Pass to functions", "Vectors of structs"] },
          ]),
          callout("tip", "Keep structs focused — a `Product` has price and name; don't mix unrelated globals inside."),
          callout("info", "Add `#include <string>` when struct members use `string`."),
          quiz(
            "How do you access member health in Player p?",
            ["p->health", "p.health", "p::health", "health.p"],
            1,
            "Use dot notation for struct objects: p.health.",
          ),
        ],
        challenge: {
          title: "Book Record",
          description: "Define `struct Book { string title; int pages; }`, create book `{\"PolyGuide\", 120}`, print title.",
          starterCode: `#include <iostream>
#include <string>
using namespace std;

// struct Book

int main() {
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <string>
using namespace std;

struct Book {
    string title;
    int pages;
};

int main() {
    Book book = {"PolyGuide", 120};
    cout << book.title << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Defines struct Book", keywords: [{ pattern: "struct\\s+Book" }] },
            { id: 2, label: "Initializes PolyGuide", keywords: [{ pattern: "PolyGuide" }] },
            { id: 3, label: "Prints book.title", keywords: [{ pattern: "book\\.title" }] },
          ],
        },
      },
      {
        id: "cpp-22",
        title: "enum",
        xp: 15,
        theory: [
          text(
            "**enum** names a set of related constants — traffic light colors, menu actions, difficulty levels. Clearer than magic numbers sprinkled in code.",
            {
              label: "Difficulty enum",
              content: `enum Difficulty { EASY, NORMAL, HARD };

Difficulty mode = NORMAL;
if (mode == HARD) {
    cout << "Boss fight!" << endl;
}`,
            },
          ),
          text(
            "By default, enums start at 0 and increment. `enum class` (scoped enum) is safer in larger projects — values stay inside the enum name.",
            {
              label: "enum class",
              content: `enum class Color { RED, GREEN, BLUE };
Color c = Color::GREEN;`,
            },
          ),
          callout("tip", "Replace `if (status == 2)` with `if (status == PAUSED)` using enums — self-documenting code."),
          callout("info", "Games use enums for states: MENU, PLAYING, GAME_OVER."),
          diagram("enum benefits", [
            { id: "read", label: "Readability", color: ACCENT, items: ["Named constants", "Fewer magic numbers", "IDE autocomplete"] },
            { id: "safe", label: "Safety", color: "#22c55e", items: ["Limited set", "Switch friendly", "enum class scope"] },
          ]),
          quiz(
            "What is the default value of the first enumerator in a plain enum?",
            ["0", "1", "Random", "Undefined"],
            0,
            "Unless specified, the first enum value is 0.",
          ),
        ],
        challenge: {
          title: "Order Status",
          description: "enum `Status { PENDING, SHIPPED, DELIVERED }`, set `Status s = SHIPPED`, if s==SHIPPED print `On the way`.",
          starterCode: `${CPP_MAIN}    // enum Status and print On the way for SHIPPED
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    enum Status { PENDING, SHIPPED, DELIVERED };
    Status s = SHIPPED;
    if (s == SHIPPED) {
        cout << "On the way" << endl;
    }
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Defines enum Status", keywords: [{ pattern: "enum\\s+Status" }] },
            { id: 2, label: "Sets SHIPPED", keywords: [{ pattern: "SHIPPED" }] },
            { id: 3, label: "Prints On the way", keywords: [{ pattern: "On the way" }] },
          ],
        },
      },
      {
        id: "cpp-23",
        title: "typedef & using",
        xp: 15,
        theory: [
          text(
            "Long type names get tiring. **typedef** and **using** create **aliases** — nicknames for types, like calling `unsigned long long` something shorter in your game engine.",
            {
              label: "using alias (modern)",
              content: `using Score = int;
using PlayerList = vector<string>;

Score high = 9999;
PlayerList names = {"Ava", "Ben"};`,
            },
          ),
          text(
            "**typedef** is the older form: `typedef int Score;`. Prefer **using** in new C++ code — clearer syntax, works better with templates.",
            {
              label: "typedef example",
              content: `typedef double Money;
Money balance = 42.50;`,
            },
          ),
          callout("tip", "Aliases document intent: `using UserId = int` tells readers that int is an ID, not a count."),
          callout("info", "`using namespace std;` is also a using declaration — it imports names from std."),
          diagram("Alias use cases", [
            { id: "short", label: "Shorter names", color: ACCENT, items: ["Score, Money", "Less typing", "Readable APIs"] },
            { id: "intent", label: "Clear intent", color: "#22c55e", items: ["UserId vs int", "Meters vs double", "Safer reviews"] },
          ]),
          quiz(
            "Which keyword is preferred for type aliases in modern C++?",
            ["goto", "using", "malloc", "union"],
            1,
            "using Score = int; is the modern type alias syntax.",
          ),
        ],
        challenge: {
          title: "Alias Wallet",
          description: "Add `using Money = double;`, declare `Money cash = 50.25`, print cash.",
          starterCode: `${CPP_MAIN}    // using Money = double, print cash
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    using Money = double;
    Money cash = 50.25;
    cout << cash << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "using Money alias", keywords: [{ pattern: "using\\s+Money\\s*=\\s*double" }] },
            { id: 2, label: "Declares cash", keywords: [{ pattern: "Money\\s+cash" }] },
            { id: 3, label: "Prints cash", keywords: [{ pattern: "cout.*cash", flags: "s" }] },
          ],
        },
      },
    ],
  },
  {
    id: "oop",
    title: "OOP Preview",
    icon: "🎮",
    color: "#14b8a6",
    lessons: [
      {
        id: "cpp-24",
        title: "Classes intro",
        xp: 18,
        theory: [
          text(
            "A **class** bundles **data** (fields) and **behavior** (methods) — like a game `Enemy` with health and an `attack()` action. Classes are structs with extra features (access control, methods).",
            {
              label: "Simple class",
              content: `class Dog {
public:
    string name;
    void bark() {
        cout << name << " says woof!" << endl;
    }
};

Dog d;
d.name = "Rex";
d.bark();`,
            },
          ),
          text(
            "**public** members are usable from outside; **private** hides internals (next lesson). OOP models real things: `BankAccount`, `Car`, `Sprite`.",
          ),
          diagram("Class anatomy", [
            { id: "data", label: "Data members", color: ACCENT, items: ["health, name", "State of object", "Fields"] },
            { id: "methods", label: "Member functions", color: "#22c55e", items: ["attack()", "deposit()", "Actions"] },
          ]),
          callout("tip", "Think \"noun + verbs\": `Player` + `jump()`, `Account` + `withdraw()`."),
          callout("info", "C++ is multi-paradigm — OOP is powerful but not the only style."),
          quiz(
            "What keyword makes class members accessible from outside?",
            ["hidden", "public", "static", "friend"],
            1,
            "public members can be used from code outside the class.",
          ),
        ],
        challenge: {
          title: "Counter Class",
          description: "Class `Counter` with public `int value` and `void increment()` adding 1. In main, increment twice and print value (2).",
          starterCode: `#include <iostream>
using namespace std;

// class Counter

int main() {
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Counter {
public:
    int value = 0;
    void increment() {
        value++;
    }
};

int main() {
    Counter c;
    c.increment();
    c.increment();
    cout << c.value << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Defines Counter class", keywords: [{ pattern: "class\\s+Counter" }] },
            { id: 2, label: "increment method", keywords: [{ pattern: "void\\s+increment" }] },
            { id: 3, label: "Prints c.value", keywords: [{ pattern: "c\\.value" }] },
          ],
        },
      },
      {
        id: "cpp-25",
        title: "Constructors",
        xp: 18,
        theory: [
          text(
            "A **constructor** runs when an object is **born** — setting initial health, name, or balance. Same name as the class, no return type.",
            {
              label: "Constructor sets defaults",
              content: `class Hero {
public:
    string name;
    int hp;
    Hero(string n, int health) {
        name = n;
        hp = health;
    }
};

Hero h("Nova", 100);`,
            },
          ),
          text(
            "**Member initializer lists** are preferred: `Hero(string n, int h) : name(n), hp(h) {}` — efficient and clear.",
            {
              label: "Initializer list",
              content: `class Point {
public:
    int x, y;
    Point(int a, int b) : x(a), y(b) {}
};`,
            },
          ),
          callout("tip", "Constructors guarantee objects start in a valid state — no unnamed level-1 hero with random HP."),
          callout("info", "A **default constructor** takes no arguments and can be compiler-generated if you do not define one."),
          diagram("Object lifetime", [
            { id: "construct", label: "Construct", color: ACCENT, items: ["Object created", "Fields initialized", "Ready to use"] },
            { id: "use", label: "Use", color: "#22c55e", items: ["Call methods", "Read fields", "Pass around"] },
          ]),
          quiz(
            "When is a constructor called?",
            ["When object is created", "When program ends", "Every cout", "Only on Tuesdays"],
            0,
            "Constructors run at object creation time.",
          ),
        ],
        challenge: {
          title: "Item Shop",
          description: "Class `Item` with `string name`, `int price`, constructor `Item(string n, int p)`, print `Sword 50` from one object.",
          starterCode: `#include <iostream>
#include <string>
using namespace std;

// class Item with constructor

int main() {
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <string>
using namespace std;

class Item {
public:
    string name;
    int price;
    Item(string n, int p) : name(n), price(p) {}
};

int main() {
    Item sword("Sword", 50);
    cout << sword.name << " " << sword.price << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Item constructor", keywords: [{ pattern: "Item\\s*\\(\\s*string" }] },
            { id: 2, label: "Creates Sword", keywords: [{ pattern: "Sword" }] },
            { id: 3, label: "Prints name and price", keywords: [{ pattern: "sword\\.name.*sword\\.price", flags: "s" }] },
          ],
        },
      },
      {
        id: "cpp-26",
        title: "Encapsulation",
        xp: 20,
        theory: [
          text(
            "**Encapsulation** hides internal details behind a **public interface** — like an ATM: you deposit and withdraw, but you cannot reach inside the vault wiring.",
            {
              label: "private balance",
              content: `class Account {
private:
    double balance = 0;
public:
    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }
    double getBalance() const { return balance; }
};`,
            },
          ),
          text(
            "**Getters** and **setters** control access: validate amounts, block negative health, log changes. `const` on methods promises not to modify the object.",
          ),
          callout("tip", "Make data **private**, expose **small** public methods — easier to fix bugs in one place."),
          callout("warning", "Public fields are fine for tiny learning examples; real projects encapsulate."),
          diagram("public vs private", [
            { id: "pub", label: "public API", color: "#22c55e", items: ["deposit()", "getBalance()", "Safe entry points"] },
            { id: "priv", label: "private data", color: ACCENT, items: ["balance", "Internal rules", "Hidden from outside"] },
          ]),
          quiz(
            "Why hide balance as private?",
            ["To save memory", "To control how it is changed", "To prevent compilation", "To remove cout"],
            1,
            "Encapsulation lets the class enforce rules on modifications.",
          ),
        ],
        challenge: {
          title: "Safe Vault",
          description: "Class `Vault` with private `int coins`, public `void add(int n)` and `int total() const`. Add 30, print total.",
          starterCode: `#include <iostream>
using namespace std;

// class Vault with private coins

int main() {
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Vault {
private:
    int coins = 0;
public:
    void add(int n) {
        coins += n;
    }
    int total() const {
        return coins;
    }
};

int main() {
    Vault v;
    v.add(30);
    cout << v.total() << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "private coins", keywords: [{ pattern: "private:\\s*\\n\\s*int\\s+coins", flags: "s" }] },
            { id: 2, label: "add method", keywords: [{ pattern: "void\\s+add" }] },
            { id: 3, label: "Prints total()", keywords: [{ pattern: "v\\.total\\s*\\(" }] },
          ],
        },
      },
    ],
  },
  {
    id: "stl",
    title: "STL & Advanced",
    icon: "📚",
    color: "#8b5cf6",
    lessons: [
      {
        id: "cpp-27",
        title: "Templates intro",
        xp: 18,
        theory: [
          text(
            "**Templates** let you write one function or class for many types — like a vending machine mold that works for snacks, drinks, or toys. The compiler generates the right version when you use it.",
            {
              label: "Function template",
              content: `template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

cout << maximum(3, 7) << endl;
cout << maximum(2.5, 1.1) << endl;`,
            },
          ),
          text(
            "`typename T` (or `class T`) is a **placeholder type**. `vector<int>` is a template class — vector of ints. Templates power the STL.",
          ),
          diagram("Template idea", [
            { id: "one", label: "One blueprint", color: ACCENT, items: ["maximum<T>", "vector<T>", "Reuse logic"] },
            { id: "many", label: "Many types", color: "#22c55e", items: ["int, double", "string", "Custom structs"] },
          ]),
          callout("tip", "You do not need to master templates now — recognize them when you see `vector<int>` or `template <typename T>`."),
          callout("info", "Template code often lives in headers because the compiler needs full definitions."),
          quiz(
            "What does template <typename T> mean?",
            ["T is always int", "T is a type parameter", "T is a file name", "T disables cout"],
            1,
            "T stands for a type the caller will supply.",
          ),
        ],
        challenge: {
          title: "Generic Swap",
          description: "Write `template <typename T> void swapValues(T& a, T& b)` swapping two values. Swap ints 3 and 9, print them space-separated: `9 3`.",
          starterCode: `#include <iostream>
using namespace std;

// template swapValues

int main() {
    int a = 3, b = 9;
    swapValues(a, b);
    cout << a << " " << b << endl;
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

template <typename T>
void swapValues(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    int a = 3, b = 9;
    swapValues(a, b);
    cout << a << " " << b << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "template typename T", keywords: [{ pattern: "template\\s*<\\s*typename\\s+T\\s*>" }] },
            { id: 2, label: "Reference parameters", keywords: [{ pattern: "T\\s*&\\s*a" }] },
            { id: 3, label: "Calls swapValues", keywords: [{ pattern: "swapValues\\s*\\(" }] },
          ],
        },
      },
      {
        id: "cpp-28",
        title: "STL containers",
        xp: 18,
        theory: [
          text(
            "The **STL** supplies battle-tested **containers**: `vector` (dynamic array), `string`, `map` (key→value dictionary), `set` (unique sorted items). Less reinventing, more building.",
            {
              label: "map inventory counts",
              content: `#include <map>
map<string, int> stock;
stock["apple"] = 5;
stock["bread"] = 2;
cout << stock["apple"] << endl;`,
            },
          ),
          text(
            "Pick the container by job: list-like → `vector`, fast lookup by key → `map`, unique tags → `set`. Algorithms like `sort` work with containers (advanced courses go deeper).",
          ),
          diagram("STL container cheat sheet", [
            { id: "vec", label: "vector", color: ACCENT, items: ["Ordered list", "push_back", "Scores, logs"] },
            { id: "map", label: "map", color: "#f97316", items: ["Key-value", "Dictionary", "User → score"] },
            { id: "set", label: "set", color: "#22c55e", items: ["Unique items", "Sorted", "Tags, IDs"] },
          ]),
          callout("tip", "Include the right header: `#include <map>`, `#include <set>`, `#include <vector>`."),
          callout("info", "STL containers are templates — `map<string, int>` maps strings to ints."),
          quiz(
            "Which container maps keys to values?",
            ["vector", "map", "stack", "array"],
            1,
            "map stores key-value pairs like a dictionary.",
          ),
        ],
        challenge: {
          title: "Price List",
          description: "Use `map<string, int>`, set `\"pen\"` to 2 and `\"book\"` to 8, print `book` price.",
          starterCode: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<string, int> prices;
    prices["pen"] = 2;
    prices["book"] = 8;
    cout << prices["book"] << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Uses map", keywords: [{ pattern: "map\\s*<\\s*string\\s*,\\s*int\\s*>" }] },
            { id: 2, label: "Sets book price", keywords: [{ pattern: "\\[\"book\"\\]\\s*=\\s*8" }] },
            { id: 3, label: "Prints book price", keywords: [{ pattern: "prices\\[\"book\"\\]" }] },
          ],
        },
      },
      {
        id: "cpp-29",
        title: "Exceptions",
        xp: 20,
        theory: [
          text(
            "**Exceptions** handle errors without cluttering every line with checks — like a fire alarm: normal work continues until something goes wrong, then you jump to a handler.",
            {
              label: "try / catch",
              content: `try {
    int age = -1;
    if (age < 0) throw runtime_error("Invalid age");
    cout << age << endl;
} catch (const exception& e) {
    cout << e.what() << endl;
}`,
            },
          ),
          text(
            "`throw` signals a problem; `catch` receives it. Include `#include <stdexcept>` for `runtime_error`. Use exceptions for **exceptional** cases, not normal control flow.",
          ),
          callout("tip", "Catch by `const exception&` to avoid slicing and extra copies."),
          callout("warning", "Do not throw in destructors; keep error messages helpful for debugging."),
          diagram("Exception flow", [
            { id: "try", label: "try block", color: ACCENT, items: ["Risky code", "throw on failure", "Normal path"] },
            { id: "catch", label: "catch block", color: "#ef4444", items: ["Handles error", "Logs message", "Recovery or exit"] },
          ]),
          quiz(
            "What does throw do?",
            ["Deletes main", "Signals an error to catch", "Compiles faster", "Closes cin"],
            1,
            "throw transfers control to a matching catch block.",
          ),
        ],
        challenge: {
          title: "Invalid Withdrawal",
          description: "In try, if `amount < 0` throw `runtime_error(\"bad amount\")`, else print amount. Catch and print `Error`.",
          starterCode: `#include <iostream>
#include <stdexcept>
using namespace std;

int main() {
    int amount = -5;
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <stdexcept>
using namespace std;

int main() {
    int amount = -5;
    try {
        if (amount < 0) {
            throw runtime_error("bad amount");
        }
        cout << amount << endl;
    } catch (const exception& e) {
        cout << "Error" << endl;
    }
    return 0;
}`,
          tests: [
            { id: 1, label: "Uses try/catch", keywords: [{ pattern: "try\\s*\\{", flags: "s" }] },
            { id: 2, label: "Throws runtime_error", keywords: [{ pattern: "throw\\s+runtime_error" }] },
            { id: 3, label: "Prints Error", keywords: [{ pattern: "Error" }] },
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
        id: "cpp-30",
        title: "Mini calculator project",
        xp: 20,
        theory: [
          text(
            "Time to **combine** skills: variables, operators, functions, and I/O. A mini calculator reads two numbers and an operator, then prints the result — like a pocket calculator app.",
            {
              label: "Add function",
              content: `int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }`,
            },
          ),
          text(
            "Break the problem into steps: 1) read inputs, 2) pick operation, 3) call helper or use switch, 4) print answer. This is how real projects grow from small pieces.",
            {
              label: "Switch on operator char",
              content: `char op = '+';
int x = 10, y = 3, result = 0;
switch (op) {
    case '+': result = x + y; break;
    case '-': result = x - y; break;
}
cout << result << endl;`,
            },
          ),
          diagram("Calculator pipeline", [
            { id: "in", label: "Input", color: ACCENT, items: ["Two numbers", "Operator + -", "cin reads"] },
            { id: "proc", label: "Process", color: "#f97316", items: ["switch / if", "Helper functions", "Validate"] },
            { id: "out", label: "Output", color: "#22c55e", items: ["Print result", "Clear message", "Done!"] },
          ]),
          callout("tip", "Start with **addition only**, test it, then add subtraction — incremental building beats one giant leap."),
          callout("info", "PolyCode runs your full program — keep `main()` complete with includes and return 0."),
          quiz(
            "What is a good first step for a multi-feature calculator?",
            ["Write every operator at once", "Implement one operation, test, then expand", "Skip input", "Remove main"],
            1,
            "Build and test one feature at a time.",
          ),
        ],
        challenge: {
          title: "Pocket Adder",
          description: "Read `int a` and `int b` with cin, print their sum. (Simulated input works in PolyCode.)",
          starterCode: `${CPP_MAIN}    // read a, b and print sum
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    int a, b;
    cin >> a >> b;
    cout << a + b << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Reads with cin", keywords: [{ pattern: "cin\\s*>>" }] },
            { id: 2, label: "Adds a + b", keywords: [{ pattern: "a\\s*\\+\\s*b" }] },
            { id: 3, label: "Prints result", keywords: [{ pattern: "cout" }] },
          ],
        },
      },
      {
        id: "cpp-31",
        title: "Course recap",
        xp: 20,
        theory: [
          text(
            "Congratulations — you toured **C++ fundamentals**: from `main()` and `cout` to classes, STL, and exceptions. You can read code, write small programs, and know where to go deeper.",
          ),
          diagram("Your C++ journey so far", [
            { id: "basics", label: "Basics", color: ACCENT, items: ["Types & I/O", "if & loops", "Functions"] },
            { id: "data", label: "Data", color: "#f97316", items: ["Arrays & string", "vector", "struct & enum"] },
            { id: "next", label: "Next steps", color: "#22c55e", items: ["Pointers course", "OOP deep dive", "Projects & STL algorithms"] },
          ]),
          text(
            "**What to learn next in PolyCode:** Pointers in C++ (memory mastery), OOP in C++ (inheritance, polymorphism), then build games or systems projects. Revisit challenges you found hard — change numbers, add features, break things on purpose.",
            {
              label: "Skills combined",
              content: `vector<int> scores = {90, 85, 92};
int sum = 0;
for (int s : scores) sum += s;
cout << "Average: " << sum / scores.size() << endl;`,
            },
          ),
          callout(
            "tip",
            "Keep a **snippet notebook** — your own `cout` templates, loop patterns, and class skeletons speed up future work.",
          ),
          callout(
            "info",
            "C++ standards evolve (C++11, 14, 17, 20…). PolyCode examples use modern, beginner-safe patterns.",
          ),
          quiz(
            "Which STL container is best for a growable list of scores?",
            ["map", "vector", "set", "enum"],
            1,
            "vector is the default dynamic array for sequential data.",
          ),
        ],
        challenge: {
          title: "Graduation Badge",
          description: "Print exactly two lines: `C++ Fundamentals` then `Complete!`",
          starterCode: `${CPP_MAIN}    // two-line graduation message
${CPP_MAIN_END}`,
          solutionCode: `${CPP_MAIN}    cout << "C++ Fundamentals" << endl;
    cout << "Complete!" << endl;
${CPP_MAIN_END}`,
          tests: [
            { id: 1, label: "Line 1 title", keywords: [{ pattern: "C\\+\\+ Fundamentals" }] },
            { id: 2, label: "Line 2 Complete", keywords: [{ pattern: "Complete!" }] },
            { id: 3, label: "Two cout lines", keywords: [{ pattern: "cout.*cout", flags: "s" }] },
          ],
        },
      },
    ],
  },
];

export const CPP_FUNDAMENTALS_LESSONS = applyLessonVideoLinks(
  CPP_FUNDAMENTALS_CHAPTERS.flatMap((ch) =>
    ch.lessons.map((l) => ({
      ...l,
      chapterId: ch.id,
      chapterTitle: ch.title,
      chapterColor: ch.color,
    })),
  ),
  CPP_FUNDAMENTALS_VIDEO_LINKS,
);

export const CPP_FUNDAMENTALS_TOTAL_XP = CPP_FUNDAMENTALS_LESSONS.reduce(
  (s, l) => s + l.xp,
  0,
);
