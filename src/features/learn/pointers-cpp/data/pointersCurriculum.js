// PolyCode — Pointers in C++ Curriculum
// Focus: beginner-friendly mental models, visual steps, and safe modern C++.

const FINAL_POINTER_QUESTIONS = [
  {
    type: "quiz",
    question: "What does `&value` produce?",
    options: ["The value itself", "The address of value", "A heap allocation", "A copy of value"],
    answer: 1,
    explanation: "`&value` is the address-of operator. It gives a pointer-compatible address.",
  },
  {
    type: "quiz",
    question: "What does `*p` do when `p` stores a valid address?",
    options: ["Deletes p", "Reads or writes the value at p's address", "Creates an array", "Moves p forward"],
    answer: 1,
    explanation: "`*p` dereferences the pointer, so the object at that address is used.",
  },
  {
    type: "quiz",
    question: "Which pointer value means no object is currently targeted?",
    options: ["nullptr", "0xFF", "delete", "&main"],
    answer: 0,
    explanation: "`nullptr` is the modern C++ null pointer value.",
  },
  {
    type: "quiz",
    question: "What should you do before dereferencing a pointer that may be null?",
    options: ["Call delete", "Check it against nullptr", "Cast it to int", "Use sizeof"],
    answer: 1,
    explanation: "A nullable pointer should be checked before `*p` is used.",
  },
  {
    type: "quiz",
    question: "For `int a[3] = {4, 5, 6}; int* p = a;`, what is `*(p + 1)`?",
    options: ["4", "5", "6", "The array size"],
    answer: 1,
    explanation: "Pointer arithmetic on `int*` moves by elements, so `p + 1` points at `a[1]`.",
  },
  {
    type: "quiz",
    question: "Which expression is equivalent to `arr[i]` for a normal array?",
    options: ["*(arr + i)", "&arr + i", "*arr + *i", "arr * i"],
    answer: 0,
    explanation: "Array indexing is defined in terms of pointer arithmetic and dereference.",
  },
  {
    type: "quiz",
    question: "What is the safest default for owning one heap object?",
    options: ["int*", "unique_ptr", "void*", "A global pointer"],
    answer: 1,
    explanation: "`unique_ptr` makes ownership explicit and releases automatically.",
  },
  {
    type: "quiz",
    question: "After `int* p = new int(9);`, what prevents a memory leak?",
    options: ["cout << p", "delete p", "p + 1", "sizeof(p)"],
    answer: 1,
    explanation: "Raw memory obtained with `new` must be released with `delete`.",
  },
  {
    type: "quiz",
    question: "After `delete p;`, what is a good defensive assignment?",
    options: ["p = nullptr", "p = &p", "p = new delete", "p = 1"],
    answer: 0,
    explanation: "Resetting to `nullptr` avoids leaving a dangling pointer value around.",
  },
  {
    type: "quiz",
    question: "When should you prefer a reference parameter over a pointer parameter?",
    options: ["When null is meaningful", "When the argument is required", "When deleting memory", "When using arrays only"],
    answer: 1,
    explanation: "A reference communicates that a valid object is required.",
  },
  {
    type: "quiz",
    question: "Which type can point at a row of three ints in `int grid[2][3]`?",
    options: ["int*", "int (*)[3]", "int**", "int[2]"],
    answer: 1,
    explanation: "`int (*)[3]` is a pointer to an array of three ints, which matches each row.",
  },
  {
    type: "quiz",
    question: "For `int grid[2][3]`, what does `grid + 1` point to?",
    options: ["The next int", "The second row", "The third column", "Nothing"],
    answer: 1,
    explanation: "The array decays to a pointer to its first row, so adding one moves by one whole row.",
  },
  {
    type: "quiz",
    question: "Which expression reads row 1, column 2 from `grid`?",
    options: ["*(*(grid + 1) + 2)", "*(grid + 3)", "&grid[1][2]", "grid * 12"],
    answer: 0,
    explanation: "First move to row 1, then move to column 2, then dereference.",
  },
  {
    type: "quiz",
    question: "Why is `int**` not the same as `int grid[2][3]`?",
    options: ["2D arrays have contiguous rows", "int** cannot be null", "int** is always faster", "They are identical"],
    answer: 0,
    explanation: "A real 2D array is contiguous row-major storage, while `int**` points to pointers.",
  },
  {
    type: "quiz",
    question: "What does row-major storage mean?",
    options: ["Columns are stored first", "Rows are stored one after another", "Every value is on the heap", "Pointers are forbidden"],
    answer: 1,
    explanation: "C++ stores a rectangular 2D array row by row in memory.",
  },
  {
    type: "quiz",
    question: "Which function parameter preserves the column count for a 2D array?",
    options: ["int grid[][]", "int grid[][3]", "int** grid[3]", "int grid"],
    answer: 1,
    explanation: "All dimensions except the first must be known for pointer arithmetic.",
  },
  {
    type: "quiz",
    question: "What is a function pointer?",
    options: ["A pointer that stores a callable function address", "A function that deletes memory", "A pointer to every function", "A reference to an array"],
    answer: 0,
    explanation: "A function pointer stores the address of a function with a matching signature.",
  },
  {
    type: "quiz",
    question: "For `int (*fn)(int)`, what can `fn` point to?",
    options: ["A function taking int and returning int", "Any variable", "Only main", "A string"],
    answer: 0,
    explanation: "The parameter and return types must match the function pointer type.",
  },
  {
    type: "quiz",
    question: "Which operation changes the original value through a pointer?",
    options: ["p = &x", "*p = 42", "cout << p", "p == nullptr"],
    answer: 1,
    explanation: "`*p = 42` writes into the object that `p` points at.",
  },
  {
    type: "quiz",
    question: "What does `const int* p` mean?",
    options: ["The int cannot be changed through p", "p cannot be reseated", "p must be null", "p owns memory"],
    answer: 0,
    explanation: "`const int*` is a pointer to const int; the pointed value is read-only through p.",
  },
  {
    type: "quiz",
    question: "What does `int* const p = &x` mean?",
    options: ["p cannot be reseated", "x cannot change", "p must point to heap memory", "p is a function"],
    answer: 0,
    explanation: "The pointer itself is const, so it keeps the same address after initialization.",
  },
  {
    type: "quiz",
    question: "Which smart pointer allows shared ownership?",
    options: ["unique_ptr", "shared_ptr", "weak_ptr only", "nullptr"],
    answer: 1,
    explanation: "`shared_ptr` uses reference counting for shared ownership.",
  },
  {
    type: "quiz",
    question: "What is a dangling pointer?",
    options: ["A pointer to released or dead storage", "A pointer to nullptr", "A pointer to a function", "A pointer inside a loop"],
    answer: 0,
    explanation: "Dangling pointers still hold an address, but the object there is no longer valid.",
  },
  {
    type: "quiz",
    question: "Which is best for optional non-owning access?",
    options: ["Raw pointer with nullptr checks", "Raw new everywhere", "delete before use", "Global reference"],
    answer: 0,
    explanation: "A raw pointer can clearly express optional non-owning access when checked safely.",
  },
  {
    type: "quiz",
    question: "What does `make_unique<int>(77)` return?",
    options: ["unique_ptr<int>", "int*", "int&", "shared_ptr<int*>"],
    answer: 0,
    explanation: "`make_unique<int>` constructs an int and returns a `unique_ptr<int>` that owns it.",
  },
  {
    type: "quiz",
    question: "Which expression prints the value owned by `unique_ptr<int> p`?",
    options: ["cout << *p", "cout << &p", "cout << delete p", "cout << p[2][2]"],
    answer: 0,
    explanation: "Smart pointers overload `*`, so `*p` accesses the owned object.",
  },
  {
    type: "quiz",
    question: "What is the biggest risk of pointer arithmetic?",
    options: ["Moving outside the valid range", "Using too many comments", "Printing numbers", "Calling a function"],
    answer: 0,
    explanation: "Pointer arithmetic is only safe within the same array object and its one-past position.",
  },
  {
    type: "quiz",
    question: "Which delete form matches `new int[5]`?",
    options: ["delete p", "delete[] p", "free(p)", "p = nullptr only"],
    answer: 1,
    explanation: "Arrays allocated with `new[]` must be released with `delete[]`.",
  },
  {
    type: "quiz",
    question: "Which approach is usually better than manual `new[]` for a growable list?",
    options: ["std::vector", "int** always", "void*", "Pointer arithmetic only"],
    answer: 0,
    explanation: "`std::vector` owns and resizes storage safely.",
  },
  {
    type: "quiz",
    question: "What is the best final pointer habit?",
    options: ["Know who owns the object before using the pointer", "Delete every address", "Never check null", "Use int** for everything"],
    answer: 0,
    explanation: "Ownership and lifetime are the heart of safe pointer code.",
  },
];

export const POINTER_CHAPTERS = [
  {
    id: "foundations",
    title: "Pointer Foundations",
    icon: "⌖",
    color: "#00d4ff",
    lessons: [
      {
        id: "ptr-intro-1",
        title: "Addresses, Pointers, and Dereferencing",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "A **pointer** is a variable that stores a memory address. The address tells C++ *where* a value lives, and dereferencing with `*` lets you read or change the value at that address.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Think of a pointer like a house address. The address is not the house, but it tells you where to go. `*ptr` means: go to that address and use the value stored there.",
          },
          {
            type: "diagram",
            title: "Value vs Address",
            nodes: [
              {
                id: "value",
                label: "int age = 21",
                color: "#b8ff00",
                items: ["Stores the actual number", "`age` is the value box"],
              },
              {
                id: "address",
                label: "&age",
                color: "#00d4ff",
                items: ["Gets the box address", "Used to initialize a pointer"],
              },
              {
                id: "pointer",
                label: "int* p = &age",
                color: "#f59e0b",
                items: ["Stores the address", "`*p` reads or changes age"],
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Pointer basics",
            content: `#include <iostream>
using namespace std;

int main() {
    int age = 21;
    int* p = &age;

    cout << age << endl;   // value
    cout << *p << endl;    // value through pointer

    *p = 22;               // change age through pointer
    cout << age << endl;
    return 0;
}`,
          },
          {
            type: "quiz",
            question: "What does `*p` mean when `p` is a pointer?",
            options: [
              "The address stored in p",
              "The value at the address stored in p",
              "The size of p",
              "A new variable named p",
            ],
            answer: 1,
            explanation:
              "`*p` dereferences the pointer, so C++ goes to the stored address and uses the value there.",
          },
        ],
        challenge: {
          title: "Update Through a Pointer",
          description:
            "Create an `int score = 40`, create `int* scorePtr = &score`, update the score to `55` through the pointer, then print `score`.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    int score = 40;
    // TODO: create scorePtr, update score through it, then print score
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int score = 40;
    int* scorePtr = &score;
    *scorePtr = 55;
    cout << score << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "score variable exists", keywords: ["score"] },
            { id: 2, label: "Pointer stores &score", keywords: ["&score"] },
            { id: 3, label: "Dereference assignment is used", keywords: ["*scorePtr", "55"] },
            { id: 4, label: "Output prints score", keywords: ["cout", "score"] },
          ],
        },
      },
      {
        id: "ptr-intro-2",
        title: "Null Pointers and Safety Checks",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "A **null pointer** points to nothing. In modern C++, use `nullptr` when a pointer has no valid target yet.",
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "Never dereference a pointer until you know it points to a valid object. Dereferencing `nullptr` is undefined behavior.",
          },
          {
            type: "stepthrough",
            title: "Safe pointer check",
            steps: [
              {
                label: "Start null",
                code: "int* p = nullptr;",
                desc: "`p` intentionally points nowhere. This is safer than leaving it uninitialized.",
              },
              {
                label: "Check first",
                code: "if (p != nullptr) { cout << *p; }",
                desc: "Only dereference when the pointer has a real address.",
              },
              {
                label: "Attach later",
                code: "int value = 9;\np = &value;",
                desc: "After assignment, `p` can safely be dereferenced.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "nullptr guard",
            content: `int value = 7;
int* p = nullptr;

if (p == nullptr) {
    p = &value;
}

cout << *p << endl;`,
          },
          {
            type: "quiz",
            question: "Why is `nullptr` better than an uninitialized pointer?",
            options: [
              "It automatically creates memory",
              "It clearly means the pointer has no target",
              "It stores every address",
              "It makes dereferencing optional",
            ],
            answer: 1,
            explanation:
              "`nullptr` is an explicit no-target value. You can check it before dereferencing.",
          },
        ],
        challenge: {
          title: "Guard Before Dereference",
          description:
            "Create `int level = 3` and `int* p = nullptr`. If `p` is null, point it to `level`. Then print `*p`.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    int level = 3;
    int* p = nullptr;
    // TODO: attach p to level if it is null, then print *p
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int level = 3;
    int* p = nullptr;
    if (p == nullptr) {
        p = &level;
    }
    cout << *p << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "p starts as nullptr", keywords: ["nullptr"] },
            { id: 2, label: "Code checks p before use", keywords: ["if", "p"] },
            {
              id: 3,
              label: "p points to level",
              keywords: [{ pattern: "(^|[^*\\w])p\\s*=\\s*&\\s*level" }],
            },
            { id: 4, label: "Dereferenced output is printed", keywords: ["cout", "*p"] },
          ],
        },
      },
    ],
  },
  {
    id: "movement",
    title: "Pointer Movement",
    icon: "⇄",
    color: "#b8ff00",
    lessons: [
      {
        id: "ptr-move-1",
        title: "Pointers and Arrays",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Arrays and pointers are closely related. An array name can decay into a pointer to its first element, so pointer arithmetic can walk through contiguous elements.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "`arr + 1` does not move one byte. It moves by one element, so for `int` it moves by `sizeof(int)` bytes.",
          },
          {
            type: "diagram",
            title: "Array memory walk",
            nodes: [
              {
                id: "first",
                label: "arr",
                color: "#00d4ff",
                items: ["Address of arr[0]", "`*arr` reads first element"],
              },
              {
                id: "next",
                label: "arr + 1",
                color: "#b8ff00",
                items: ["Address of arr[1]", "`*(arr + 1)` reads second"],
              },
              {
                id: "index",
                label: "p[i]",
                color: "#f59e0b",
                items: ["Same idea as `*(p + i)`", "Readable for loops"],
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Walking an array",
            content: `int nums[] = {10, 20, 30};
int* p = nums;

cout << *p << endl;       // 10
cout << *(p + 1) << endl; // 20
cout << p[2] << endl;     // 30`,
          },
          {
            type: "quiz",
            question: "What does `*(p + 2)` read when `p` points to `arr[0]`?",
            options: ["arr[0]", "arr[1]", "arr[2]", "The array size"],
            answer: 2,
            explanation:
              "Pointer arithmetic moves by elements. `p + 2` reaches the third element, then `*` reads it.",
          },
        ],
        challenge: {
          title: "Print an Array With a Pointer",
          description:
            "Create `int nums[] = {4, 8, 12}` and `int* p = nums`. Print the second value using pointer arithmetic.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    int nums[] = {4, 8, 12};
    int* p = nums;
    // TODO: print the second value using pointer arithmetic
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int nums[] = {4, 8, 12};
    int* p = nums;
    cout << *(p + 1) << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Array contains 4, 8, 12", keywords: ["4", "8", "12"] },
            { id: 2, label: "Pointer is assigned to nums", keywords: ["int* p", "nums"] },
            { id: 3, label: "Pointer arithmetic is used", keywords: ["p + 1"] },
            { id: 4, label: "Result is printed", keywords: ["cout"] },
          ],
        },
      },
      {
        id: "ptr-move-2",
        title: "Pointers vs References",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "A **reference** is another name for an existing object. A **pointer** stores an address and can be reseated to another object or be null.",
          },
          {
            type: "table",
            headers: ["Feature", "Pointer", "Reference"],
            rows: [
              ["Can be null", "Yes: `nullptr`", "No"],
              ["Can point elsewhere later", "Yes", "No"],
              ["Access syntax", "`*p` or `p->x`", "Use like normal variable"],
              ["Best use", "Optional or reseatable target", "Required alias"],
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Reference and pointer side by side",
            content: `int a = 10;
int b = 20;

int& ref = a; // always aliases a
int* ptr = &a;

ptr = &b;     // pointer can move to b
*ptr = 25;    // changes b`,
          },
          {
            type: "quiz",
            question: "Which one can be changed to target another variable later?",
            options: ["Reference", "Pointer", "Both always", "Neither"],
            answer: 1,
            explanation:
              "A pointer can be assigned another address. A reference stays bound to its original object.",
          },
        ],
        challenge: {
          title: "Reseat a Pointer",
          description:
            "Create `a = 5`, `b = 9`, and `int* p = &a`. Then point `p` to `b`, change `b` through `p` to `12`, and print `b`.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = 9;
    int* p = &a;
    // TODO: reseat p to b, change b through p, print b
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int a = 5;
    int b = 9;
    int* p = &a;
    p = &b;
    *p = 12;
    cout << b << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Pointer starts at a", keywords: ["&a"] },
            { id: 2, label: "Pointer is reseated to b", keywords: ["&b"] },
            { id: 3, label: "Dereference changes value to 12", keywords: ["*p", "12"] },
            { id: 4, label: "b is printed", keywords: ["cout", "b"] },
          ],
        },
      },
    ],
  },
  {
    id: "ownership",
    title: "Ownership and Lifetime",
    icon: "◇",
    color: "#f59e0b",
    lessons: [
      {
        id: "ptr-own-1",
        title: "Dynamic Memory: new and delete",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "`new` creates an object on the heap and returns a pointer. `delete` releases that object. Every successful `new` should have a matching `delete`, unless ownership is moved to a smart pointer.",
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "Raw `new` and `delete` are important to understand, but modern C++ usually prefers smart pointers for ownership.",
          },
          {
            type: "stepthrough",
            title: "Manual heap lifetime",
            steps: [
              {
                label: "Allocate",
                code: "int* p = new int(42);",
                desc: "`p` stores the heap address of a new int initialized to 42.",
              },
              {
                label: "Use",
                code: "cout << *p << endl;",
                desc: "Dereference the pointer to read the heap value.",
              },
              {
                label: "Release",
                code: "delete p;\np = nullptr;",
                desc: "Free the heap object, then clear the pointer so it cannot dangle.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Manual memory",
            content: `int* score = new int(100);
cout << *score << endl;
delete score;
score = nullptr;`,
          },
          {
            type: "quiz",
            question: "What problem happens if you forget `delete` after `new`?",
            options: ["Stack overflow", "Memory leak", "Syntax error", "Reference binding"],
            answer: 1,
            explanation:
              "The heap allocation stays reserved and can no longer be reclaimed by your code: that is a memory leak.",
          },
        ],
        challenge: {
          title: "Allocate and Release",
          description:
            "Allocate an `int` with value `64` using `new`, print it through the pointer, delete it, then set the pointer to `nullptr`.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: allocate, print, delete, and null out the pointer
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int* value = new int(64);
    cout << *value << endl;
    delete value;
    value = nullptr;
    return 0;
}`,
          tests: [
            { id: 1, label: "new allocates an int", keywords: ["new int"] },
            {
              id: 2,
              label: "Pointer is dereferenced for output",
              keywords: ["cout", { pattern: "<<\\s*\\*\\s*[A-Za-z_]\\w*" }],
            },
            { id: 3, label: "delete releases memory", keywords: ["delete"] },
            { id: 4, label: "Pointer is reset to nullptr", keywords: ["nullptr"] },
          ],
        },
      },
      {
        id: "ptr-own-arr-1",
        title: "Dynamic 1D Arrays with new[]",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "A **dynamic array** is an array whose size can be chosen while the program is running. Use `new int[size]` to create it on the heap, and use `delete[]` when you are done.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Use square brackets as a pair: `new[]` must be cleaned with `delete[]`. Plain `delete` is for one object, not an array.",
          },
          {
            type: "stepthrough",
            title: "Dynamic 1D array lifecycle",
            steps: [
              {
                label: "Choose size",
                code: "int size = 5;",
                desc: "The size can come from input, a calculation, or another variable.",
              },
              {
                label: "Create array",
                code: "int* nums = new int[size];",
                desc: "`nums` points at the first item of the heap array.",
              },
              {
                label: "Use indexes",
                code: "nums[0] = 10;\ncout << nums[0];",
                desc: "A dynamic array can be indexed like a normal array.",
              },
              {
                label: "Release array",
                code: "delete[] nums;\nnums = nullptr;",
                desc: "Free the whole array and clear the pointer.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Heap array basics",
            content: `int size = 3;
int* scores = new int[size];

scores[0] = 80;
scores[1] = 90;
scores[2] = 100;

cout << scores[1] << endl;

delete[] scores;
scores = nullptr;`,
          },
          {
            type: "quiz",
            question: "Which delete form matches `new int[size]`?",
            options: ["delete nums", "delete[] nums", "free(nums)", "nums--"],
            answer: 1,
            explanation:
              "`new[]` creates an array, so `delete[]` must release the array.",
          },
        ],
        challenge: {
          title: "Build a Dynamic Score List",
          description:
            "Create a dynamic array of 3 ints using `new int[size]`. Store 10, 20, and 30, print the middle value, then release the array with `delete[]` and set the pointer to `nullptr`.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    int size = 3;
    // TODO: create dynamic array, fill it, print the middle value, then clean up
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int size = 3;
    int* scores = new int[size];
    scores[0] = 10;
    scores[1] = 20;
    scores[2] = 30;
    cout << scores[1] << endl;
    delete[] scores;
    scores = nullptr;
    return 0;
}`,
          tests: [
            { id: 1, label: "Dynamic array is created with new[]", keywords: ["new int[size]"] },
            { id: 2, label: "Values are stored by index", keywords: ["[0]", "[1]", "[2]"] },
            { id: 3, label: "Middle value is printed", keywords: ["cout", "[1]"] },
            { id: 4, label: "Array is released with delete[]", keywords: ["delete[]"] },
            { id: 5, label: "Pointer is reset to nullptr", keywords: ["nullptr"] },
          ],
        },
      },
      {
        id: "ptr-own-2",
        title: "Smart Pointers: unique_ptr and shared_ptr",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "A **smart pointer** owns a heap object and automatically releases it. `unique_ptr` means one owner. `shared_ptr` means multiple owners with reference counting.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Prefer `make_unique<T>()` and `make_shared<T>()` because they are cleaner and safer than writing raw `new` yourself.",
          },
          {
            type: "diagram",
            title: "Ownership styles",
            nodes: [
              {
                id: "unique",
                label: "unique_ptr",
                color: "#b8ff00",
                items: ["Exactly one owner", "Move-only", "Great default for ownership"],
              },
              {
                id: "shared",
                label: "shared_ptr",
                color: "#00d4ff",
                items: ["Multiple owners", "Reference counted", "Use when sharing is real"],
              },
              {
                id: "raw",
                label: "raw pointer",
                color: "#ff6b6b",
                items: ["No ownership by itself", "Can dangle", "Use carefully"],
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Modern ownership",
            content: `#include <memory>

auto score = make_unique<int>(99);
cout << *score << endl;

auto shared = make_shared<int>(7);
auto copy = shared;`,
          },
          {
            type: "quiz",
            question: "Which smart pointer should be your default for exclusive ownership?",
            options: ["shared_ptr", "unique_ptr", "raw pointer", "nullptr"],
            answer: 1,
            explanation:
              "`unique_ptr` clearly states there is exactly one owner, which keeps lifetime simple.",
          },
        ],
        challenge: {
          title: "Use unique_ptr",
          description:
            "Include `<memory>`, create a `unique_ptr<int>` with value `77` using `make_unique`, then print the value.",
          starterCode: `#include <iostream>
#include <memory>
using namespace std;

int main() {
    // TODO: create a unique_ptr<int> and print its value
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <memory>
using namespace std;

int main() {
    auto value = make_unique<int>(77);
    cout << *value << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "memory header is included", keywords: ["#include <memory>"] },
            { id: 2, label: "make_unique creates the int", keywords: ["make_unique<int>", "77"] },
            {
              id: 3,
              label: "Pointer-like dereference is used",
              keywords: [{ pattern: "\\*\\s*[A-Za-z_]\\w*" }],
            },
            { id: 4, label: "Value is printed", keywords: ["cout"] },
          ],
        },
      },
    ],
  },
  {
    id: "multidimensional",
    title: "2D Arrays and Row Pointers",
    icon: "▦",
    color: "#22d3ee",
    lessons: [
      {
        id: "ptr-2d-1",
        title: "2D Arrays Are Rows in Memory",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "A C++ 2D array like `int grid[2][3]` is stored as rows laid out one after another. When used in expressions, `grid` behaves like a pointer to its first row, not like an `int**`.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "For `int grid[2][3]`, the row type is `int[3]`. A pointer to a row is written `int (*row)[3]`.",
          },
          {
            type: "diagram",
            title: "Row-major layout",
            nodes: [
              {
                id: "row0",
                label: "grid[0]",
                color: "#00d4ff",
                items: ["1, 2, 3", "`grid` points at this row"],
              },
              {
                id: "row1",
                label: "grid[1]",
                color: "#b8ff00",
                items: ["4, 5, 6", "`grid + 1` points at this row"],
              },
              {
                id: "cell",
                label: "grid[1][2]",
                color: "#f59e0b",
                items: ["Same as `*(*(grid + 1) + 2)`"],
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Point at a row",
            content: `#include <iostream>
using namespace std;

int main() {
    int grid[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    int (*row)[3] = grid;

    cout << row[1][2] << endl;
    cout << *(*(grid + 1) + 2) << endl;
    return 0;
}`,
          },
          {
            type: "quiz",
            question: "For `int grid[2][3]`, what type should a row pointer use?",
            options: ["int*", "int**", "int (*row)[3]", "int&"],
            answer: 2,
            explanation:
              "Each row has three ints, so the row pointer must know that column count: `int (*row)[3]`.",
          },
        ],
        challenge: {
          title: "Read a Cell With a Row Pointer",
          description:
            "Create `int grid[2][3] = {{1, 2, 3}, {4, 5, 6}}`, create `int (*row)[3] = grid`, then print `row[1][2]`.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    // TODO: create grid, create row pointer, print row[1][2]
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int grid[2][3] = {{1, 2, 3}, {4, 5, 6}};
    int (*row)[3] = grid;
    cout << row[1][2] << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "2D grid is declared", keywords: ["grid[2][3]"] },
            { id: 2, label: "Row pointer keeps column count", keywords: ["(*row)[3]"] },
            { id: 3, label: "Row pointer starts at grid", keywords: ["= grid"] },
            { id: 4, label: "Cell row[1][2] is printed", keywords: ["cout", "row[1][2]"] },
          ],
        },
      },
      {
        id: "ptr-2d-2",
        title: "Passing 2D Arrays to Functions",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "When a function receives a 2D array, C++ must know the column count. That lets pointer arithmetic jump from one row to the next correctly.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "`void print(int grid[][3], int rows)` and `void print(int (*grid)[3], int rows)` mean the same parameter type.",
          },
          {
            type: "stepthrough",
            title: "Trace a 2D parameter",
            steps: [
              {
                label: "Declare the shape",
                code: "void print(int grid[][3], int rows)",
                desc: "The function can accept any row count, but each row must have three columns.",
              },
              {
                label: "Loop rows",
                code: "for (int r = 0; r < rows; r++)",
                desc: "Each row step moves by three ints.",
              },
              {
                label: "Loop columns",
                code: "cout << grid[r][c];",
                desc: "Inside a row, normal column indexing works.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Print a matrix",
            content: `#include <iostream>
using namespace std;

void printGrid(int grid[][3], int rows) {
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < 3; c++) {
            cout << grid[r][c] << " ";
        }
        cout << endl;
    }
}`,
          },
          {
            type: "quiz",
            question: "Why must `grid[][3]` include the `3`?",
            options: [
              "So C++ can calculate where each row starts",
              "So C++ can delete the array",
              "So the function becomes recursive",
              "So rows must always be three",
            ],
            answer: 0,
            explanation:
              "The column count is needed to compute row offsets in contiguous memory.",
          },
        ],
        challenge: {
          title: "Print a 2D Array Function",
          description:
            "Write `printGrid(int grid[][3], int rows)` that prints every value. In main, create a 2x3 grid and call `printGrid(grid, 2)`.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: write printGrid

int main() {
    int grid[2][3] = {{10, 20, 30}, {40, 50, 60}};
    // TODO: call printGrid
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

void printGrid(int grid[][3], int rows) {
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < 3; c++) {
            cout << grid[r][c] << " ";
        }
        cout << endl;
    }
}

int main() {
    int grid[2][3] = {{10, 20, 30}, {40, 50, 60}};
    printGrid(grid, 2);
    return 0;
}`,
          tests: [
            { id: 1, label: "Function accepts grid[][3]", keywords: ["grid[][3]"] },
            { id: 2, label: "Rows are looped", keywords: ["for", "rows"] },
            {
              id: 3,
              label: "Columns are looped",
              keywords: [{ pattern: "for\\s*\\([^;]*;\\s*[A-Za-z_]\\w*\\s*<\\s*3" }],
            },
            { id: 4, label: "printGrid is called", keywords: ["printGrid(grid, 2)"] },
          ],
        },
      },
      {
        id: "ptr-2d-3",
        title: "Dynamic 2D Array as One Flat Block",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "A simple way to make a dynamic 2D array is to create **one big 1D array** and treat it like rows and columns. This keeps all values beside each other in memory.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use this formula: `index = row * cols + col`. It means: skip full rows first, then move to the column.",
          },
          {
            type: "diagram",
            title: "Flat storage for a 2D shape",
            nodes: [
              {
                id: "shape",
                label: "2 rows x 3 cols",
                color: "#00d4ff",
                items: ["Looks like a grid", "Still stored as one line"],
              },
              {
                id: "flat",
                label: "data[6]",
                color: "#b8ff00",
                items: ["0 1 2 | 3 4 5", "Each row has 3 values"],
              },
              {
                id: "formula",
                label: "r * cols + c",
                color: "#f59e0b",
                items: ["row 1, col 2 -> 1 * 3 + 2", "Index 5"],
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Flat dynamic matrix",
            content: `int rows = 2;
int cols = 3;
int* grid = new int[rows * cols];

grid[0 * cols + 0] = 10;
grid[0 * cols + 1] = 20;
grid[0 * cols + 2] = 30;
grid[1 * cols + 0] = 40;
grid[1 * cols + 1] = 50;
grid[1 * cols + 2] = 60;

cout << grid[1 * cols + 2] << endl;

delete[] grid;`,
          },
          {
            type: "quiz",
            question: "For a flat dynamic 2D array, what does `row * cols + col` find?",
            options: ["The correct 1D index", "The number of rows", "The heap size in bytes", "The pointer type"],
            answer: 0,
            explanation:
              "The formula turns a row and column into the correct place inside one flat array.",
          },
        ],
        challenge: {
          title: "Make a Flat Dynamic Grid",
          description:
            "Create a 2x3 dynamic grid as one `int*` block using `new int[rows * cols]`. Store 10, 20, 30, 40, 50, 60, print row 1 column 2 using `row * cols + col`, then `delete[]` it.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    int rows = 2;
    int cols = 3;
    // TODO: create one flat dynamic grid and print row 1, column 2
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int rows = 2;
    int cols = 3;
    int* grid = new int[rows * cols];
    grid[0 * cols + 0] = 10;
    grid[0 * cols + 1] = 20;
    grid[0 * cols + 2] = 30;
    grid[1 * cols + 0] = 40;
    grid[1 * cols + 1] = 50;
    grid[1 * cols + 2] = 60;
    cout << grid[1 * cols + 2] << endl;
    delete[] grid;
    grid = nullptr;
    return 0;
}`,
          tests: [
            { id: 1, label: "One flat block is allocated", keywords: ["new int[rows * cols]"] },
            { id: 2, label: "Row-column formula is used", keywords: ["1 * cols + 2"] },
            { id: 3, label: "Selected cell is printed", keywords: ["cout", "grid["] },
            { id: 4, label: "Flat block is released", keywords: ["delete[] grid"] },
          ],
        },
      },
      {
        id: "ptr-2d-4",
        title: "Dynamic 2D Array with Row Pointers",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "Another dynamic 2D style uses a pointer to row pointers: `int** grid`. First create the list of rows, then create each row separately.",
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "This is not the same as a normal `int grid[2][3]`. With `int**`, each row is a separate heap array, so you must delete each row before deleting the row list.",
          },
          {
            type: "stepthrough",
            title: "Row-pointer cleanup order",
            steps: [
              {
                label: "Create row list",
                code: "int** grid = new int*[rows];",
                desc: "`grid` points to an array of row pointers.",
              },
              {
                label: "Create each row",
                code: "grid[r] = new int[cols];",
                desc: "Each row gets its own dynamic 1D array.",
              },
              {
                label: "Use normal indexing",
                code: "grid[1][2] = 60;",
                desc: "After setup, `grid[row][col]` is easy to read.",
              },
              {
                label: "Delete rows first",
                code: "delete[] grid[r];\ndelete[] grid;",
                desc: "Free every row, then free the row-pointer list.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Row-pointer matrix",
            content: `int rows = 2;
int cols = 3;
int** grid = new int*[rows];

for (int r = 0; r < rows; r++) {
    grid[r] = new int[cols];
}

grid[1][2] = 60;
cout << grid[1][2] << endl;

for (int r = 0; r < rows; r++) {
    delete[] grid[r];
}
delete[] grid;`,
          },
          {
            type: "quiz",
            question: "With `int** grid`, what must be deleted first?",
            options: ["Each row: `delete[] grid[r]`", "The row list: `delete[] grid`", "Nothing", "Only `grid[0][0]`"],
            answer: 0,
            explanation:
              "Each row owns a separate dynamic array. Delete the rows first, then the row-pointer list.",
          },
        ],
        challenge: {
          title: "Create a Row-Pointer Grid",
          description:
            "Create a 2x3 dynamic grid using `int**`. Allocate the row list, allocate each row, store and print `grid[1][2] = 60`, then delete every row and finally delete the row list.",
          starterCode: `#include <iostream>
using namespace std;

int main() {
    int rows = 2;
    int cols = 3;
    // TODO: create int** grid, allocate rows, use grid[1][2], then clean up
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int main() {
    int rows = 2;
    int cols = 3;
    int** grid = new int*[rows];
    for (int r = 0; r < rows; r++) {
        grid[r] = new int[cols];
    }
    grid[1][2] = 60;
    cout << grid[1][2] << endl;
    for (int r = 0; r < rows; r++) {
        delete[] grid[r];
    }
    delete[] grid;
    grid = nullptr;
    return 0;
}`,
          tests: [
            { id: 1, label: "Row pointer list is allocated", keywords: ["int**", "new int*[rows]"] },
            { id: 2, label: "Each row is allocated", keywords: ["new int[cols]"] },
            { id: 3, label: "2D indexing is used", keywords: ["grid[1][2]"] },
            { id: 4, label: "Rows are deleted first", keywords: ["delete[] grid[r]"] },
            { id: 5, label: "Row list is deleted", keywords: ["delete[] grid"] },
          ],
        },
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Pointer Patterns",
    icon: "λ",
    color: "#a855f7",
    lessons: [
      {
        id: "ptr-adv-1",
        title: "Function Pointers and Callbacks",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "A **function pointer** stores the address of a function. You can pass behavior into another function by passing a pointer to the function to call.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Modern C++ often uses lambdas and `std::function`, but function pointers are the foundation of callbacks and low-level APIs.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Function pointer",
            content: `int square(int x) {
    return x * x;
}

int apply(int value, int (*fn)(int)) {
    return fn(value);
}

cout << apply(5, square) << endl;`,
          },
          {
            type: "quiz",
            question: "What does `int (*fn)(int)` describe?",
            options: [
              "A pointer to an int",
              "A function pointer taking int and returning int",
              "A reference to an array",
              "A smart pointer",
            ],
            answer: 1,
            explanation:
              "The parentheses around `*fn` indicate that `fn` is a pointer to a function.",
          },
        ],
        challenge: {
          title: "Apply a Function Pointer",
          description:
            "Write `triple(int x)` returning `x * 3`. Write `apply(int value, int (*fn)(int))` that returns `fn(value)`. Print `apply(4, triple)`.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: triple and apply

int main() {
    // TODO: print apply(4, triple)
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

int triple(int x) {
    return x * 3;
}

int apply(int value, int (*fn)(int)) {
    return fn(value);
}

int main() {
    cout << apply(4, triple) << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "triple function exists", keywords: ["triple"] },
            { id: 2, label: "Function pointer parameter exists", keywords: ["(*fn)(int)"] },
            { id: 3, label: "fn(value) is called", keywords: ["fn(value)"] },
            { id: 4, label: "apply result is printed", keywords: ["cout", "apply"] },
          ],
        },
      },
      {
        id: "ptr-adv-2",
        title: "Pointer Safety Checklist",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "Pointer bugs usually come from lifetime mistakes: dangling pointers, double deletes, leaks, null dereferences, and unclear ownership.",
          },
          {
            type: "table",
            headers: ["Risk", "Safer habit"],
            rows: [
              ["Uninitialized pointer", "Start with `nullptr`"],
              ["Null dereference", "Check before `*p`"],
              ["Leaked memory", "Prefer smart pointers"],
              ["Dangling pointer", "Reset after delete or avoid raw owning pointers"],
              ["Unclear ownership", "Use `unique_ptr` or references"],
            ],
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Best modern rule: use raw pointers for non-owning optional access, references for required access, and smart pointers for ownership.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Safe helper",
            content: `void printValue(const int* p) {
    if (p == nullptr) {
        cout << "missing" << endl;
        return;
    }
    cout << *p << endl;
}`,
          },
          {
            type: "quiz",
            question: "Which option best communicates ownership in modern C++?",
            options: ["Raw pointer", "unique_ptr", "Magic number", "const int"],
            answer: 1,
            explanation:
              "`unique_ptr` is explicit: it owns the object and releases it automatically.",
          },
        ],
        challenge: {
          title: "Write a Safe Printer",
          description:
            "Create `printValue(const int* p)`. If `p` is null, print `missing`; otherwise print `*p`. In main, call it with the address of `int n = 18`.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: write printValue

int main() {
    int n = 18;
    // TODO: call printValue with n's address
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

void printValue(const int* p) {
    if (p == nullptr) {
        cout << "missing" << endl;
        return;
    }
    cout << *p << endl;
}

int main() {
    int n = 18;
    printValue(&n);
    return 0;
}`,
          tests: [
            { id: 1, label: "Function accepts const int pointer", keywords: ["const int*"] },
            { id: 2, label: "nullptr is checked", keywords: ["nullptr"] },
            { id: 3, label: "Pointer is dereferenced safely", keywords: ["*p"] },
            { id: 4, label: "Address of n is passed", keywords: ["&n"] },
          ],
        },
      },
    ],
  },
  {
    id: "completion",
    title: "Pointer Completion Test",
    icon: "✓",
    color: "#b8ff00",
    lessons: [
      {
        id: "ptr-final-1",
        title: "Final Pointer Mastery Check",
        xp: 50,
        theory: [
          {
            type: "text",
            content:
              "This completion test reviews the full pointer track: addresses, dereferencing, null safety, arrays, 2D arrays, ownership, smart pointers, and function pointers.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Answer each question by tracing the address, the value at that address, and who owns the memory. If those three are clear, most pointer code becomes predictable.",
          },
          ...FINAL_POINTER_QUESTIONS,
        ],
        challenge: {
          title: "Pointer Final Audit",
          description:
            "Write `printCell(int grid[][3], int rows, int row, int col)`. It should check row and column bounds, then print the selected cell. In main, create a 2x3 grid and print row 1, column 2.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: write printCell

int main() {
    int grid[2][3] = {{1, 2, 3}, {4, 5, 6}};
    // TODO: call printCell for row 1, column 2
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

void printCell(int grid[][3], int rows, int row, int col) {
    if (row < 0 || row >= rows || col < 0 || col >= 3) {
        cout << "invalid" << endl;
        return;
    }
    cout << grid[row][col] << endl;
}

int main() {
    int grid[2][3] = {{1, 2, 3}, {4, 5, 6}};
    printCell(grid, 2, 1, 2);
    return 0;
}`,
          tests: [
            { id: 1, label: "Function accepts a 2D array", keywords: ["grid[][3]"] },
            { id: 2, label: "Row bounds are checked", keywords: ["row", "rows"] },
            { id: 3, label: "Column bounds are checked", keywords: ["col", "3"] },
            { id: 4, label: "Selected cell is printed", keywords: ["cout", "grid[row][col]"] },
          ],
        },
      },
    ],
  },
];

export const POINTER_LESSONS = POINTER_CHAPTERS.flatMap((chapter) =>
  chapter.lessons.map((lesson) => ({
    ...lesson,
    chapterId: chapter.id,
    chapterTitle: chapter.title,
    chapterColor: chapter.color,
  })),
);

export const POINTER_TOTAL_XP = POINTER_LESSONS.reduce(
  (sum, lesson) => sum + lesson.xp,
  0,
);
