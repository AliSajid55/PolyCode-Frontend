// ──────────────────────────────────────────────
//  PolyCode — OOP in C++ Curriculum Data
//  Full curriculum: Beginner → Advanced
//  Structured like FreeCodeCamp + LeetCode
//  YouTube links: edit oopsVideoLinks.js (not this file).
// ──────────────────────────────────────────────

import { applyLessonVideoLinks } from "../../shared/applyLessonVideoLinks";
import { OOPS_VIDEO_LINKS } from "./oopsVideoLinks";

export const CHAPTERS = [
  // ═══════════════════════════════════════
  //  CHAPTER 1 — What is OOP?
  // ═══════════════════════════════════════
  {
    id: "intro",
    title: "What is OOP?",
    icon: "🧠",
    color: "#ffe566",
    lessons: [
      {
        id: "intro-1",
        title: "Procedural vs Object-Oriented",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "In **procedural programming**, you write a sequence of instructions. In **OOP**, you model your program as a collection of *objects* — each bundling data and behavior together.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Think of an object like a vending machine: it has *state* (what's inside, how much money is inserted) and *behavior* (dispense item, return change).",
          },
          {
            type: "diagram",
            title: "Procedural vs OOP",
            nodes: [
              {
                id: "proc",
                label: "Procedural",
                color: "#ff6b6b",
                items: ["Data (variables)", "Functions", "Separate concerns"],
              },
              {
                id: "oop",
                label: "OOP",
                color: "#ffe566",
                items: ["Object = Data + Methods", "Encapsulated", "Reusable"],
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Procedural style",
            content: `// Procedural — data and logic are separate
string name = "Alice";
int age = 25;

void greet(string n, int a) {
    cout << "Hi " << n << ", age " << a << endl;
}`,
          },
          {
            type: "code",
            lang: "cpp",
            label: "OOP style",
            content: `// OOP — data and logic live together
class Person {
public:
    string name;
    int age;

    void greet() {
        cout << "Hi " << name << ", age " << age << endl;
    }
};`,
          },
          {
            type: "quiz",
            question: "Which OOP principle bundles data and behavior together?",
            options: [
              "Inheritance",
              "Encapsulation",
              "Polymorphism",
              "Abstraction",
            ],
            answer: 1,
            explanation:
              "Encapsulation is the principle of wrapping data and the methods that operate on that data into a single unit (class).",
          },
        ],
        challenge: {
          title: "Define Your First Class",
          description:
            'Define a `Car` class with two public attributes: `brand` (string) and `speed` (int). In `main()`, create a Car object, set `brand` to `"Tesla"` and `speed` to `200`, then print both.',
          starterCode: `#include <iostream>
using namespace std;

// TODO: Define the Car class here


int main() {
    // TODO: Create a Car object and print its brand and speed
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Car {
public:
    string brand;
    int speed;
};

int main() {
    Car c;
    c.brand = "Tesla";
    c.speed = 200;
    cout << c.brand << " - " << c.speed << " km/h" << endl;
    return 0;
}`,
          tests: [
            {
              id: 1,
              label: "Car class is defined",
              hint: "Use the `class` keyword",
            },
            {
              id: 2,
              label: "brand is set to Tesla",
              hint: 'c.brand = "Tesla"',
            },
            { id: 3, label: "speed is set to 200", hint: "c.speed = 200" },
            {
              id: 4,
              label: "Output contains Tesla and 200",
              hint: "Use cout to print",
            },
          ],
        },
      },
      {
        id: "intro-2",
        title: "The 4 Pillars of OOP",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "OOP is built on **four core pillars**. Every feature of C++ OOP flows from these ideas. You'll master each one in this course.",
          },
          {
            type: "diagram",
            title: "The 4 Pillars",
            nodes: [
              {
                id: "enc",
                label: "Encapsulation",
                color: "#00d4ff",
                items: ["Hide data", "Expose interface", "private + getters"],
              },
              {
                id: "inh",
                label: "Inheritance",
                color: "#ff6b6b",
                items: ["Reuse code", "Parent → Child", "class B : public A"],
              },
              {
                id: "pol",
                label: "Polymorphism",
                color: "#a855f7",
                items: ["One interface", "Many forms", "virtual functions"],
              },
              {
                id: "abs",
                label: "Abstraction",
                color: "#f59e0b",
                items: [
                  "Hide complexity",
                  "Show essentials",
                  "abstract classes",
                ],
              },
            ],
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "A helpful mnemonic: **A PIE** — Abstraction, Polymorphism, Inheritance, Encapsulation.",
          },
          {
            type: "quiz",
            question:
              "Which pillar allows a Dog class to reuse methods from an Animal class without rewriting them?",
            options: [
              "Encapsulation",
              "Abstraction",
              "Inheritance",
              "Polymorphism",
            ],
            answer: 2,
            explanation:
              "Inheritance lets a derived class (Dog) automatically gain the members and methods of a base class (Animal).",
          },
        ],
        challenge: {
          title: "Identify the Pillar",
          description:
            "Create a class `Shape` with a `private` member `color` and a `public` getter `getColor()`. This demonstrates **Encapsulation**. In main, create a Shape, set color via a setter `setColor(string c)`, and print it.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Shape class with private color, setColor(), getColor()


int main() {
    // Create shape, set color to "Red", print it
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Shape {
private:
    string color;
public:
    void setColor(string c) { color = c; }
    string getColor() { return color; }
};

int main() {
    Shape s;
    s.setColor("Red");
    cout << s.getColor() << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "color is private" },
            { id: 2, label: "setColor() sets the value" },
            { id: 3, label: "getColor() returns the value" },
            { id: 4, label: "Output: Red" },
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════
  //  CHAPTER 2 — Classes & Objects
  // ═══════════════════════════════════════
  {
    id: "classes",
    title: "Classes & Objects",
    icon: "📦",
    color: "#00d4ff",
    lessons: [
      {
        id: "classes-1",
        title: "Constructors",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "A **constructor** is a special method called automatically when an object is created. It *initializes* the object's data.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Constructor name = Class name. No return type — not even `void`.",
          },
          {
            type: "stepthrough",
            title: "How Object Creation Works",
            steps: [
              {
                label: "Memory allocated",
                code: "Rectangle r2(5, 3);",
                desc: "The runtime allocates memory for all member variables of Rectangle.",
              },
              {
                label: "Constructor called",
                code: "Rectangle(int w, int h) {\n  width = w; height = h;\n}",
                desc: "The parameterized constructor runs and sets width=5, height=3.",
              },
              {
                label: "Object ready",
                code: "r2.area(); // returns 15",
                desc: "The object is fully initialized and ready to use.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Default & Parameterized constructors",
            content: `class Rectangle {
public:
    int width, height;

    // Default constructor
    Rectangle() {
        width = 0;
        height = 0;
    }

    // Parameterized constructor
    Rectangle(int w, int h) {
        width = w;
        height = h;
    }

    int area() { return width * height; }
};

int main() {
    Rectangle r1;          // calls default ctor
    Rectangle r2(5, 3);   // calls parameterized ctor
    cout << r2.area();    // 15
}`,
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "If you define any constructor, the compiler stops generating a default one for you. Always be explicit.",
          },
          {
            type: "quiz",
            question:
              "What is printed by: `Rectangle r(4, 5); cout << r.area();`",
            options: ["9", "20", "45", "Compiler error"],
            answer: 1,
            explanation: "area() returns width * height = 4 * 5 = 20.",
          },
        ],
        challenge: {
          title: "Build a BankAccount Constructor",
          description:
            "Create a `BankAccount` class with `owner` (string) and `balance` (double). Add a parameterized constructor to set both. Add a method `display()` that prints: `Alice: $1500.00`. Create one account in main and call display.",
          starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

// TODO: Define BankAccount class


int main() {
    // Create BankAccount("Alice", 1500.0) and call display()
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <iomanip>
using namespace std;

class BankAccount {
public:
    string owner;
    double balance;

    BankAccount(string o, double b) {
        owner = o;
        balance = b;
    }

    void display() {
        cout << owner << ": $" << fixed << setprecision(2) << balance << endl;
    }
};

int main() {
    BankAccount acc("Alice", 1500.0);
    acc.display();
    return 0;
}`,
          tests: [
            { id: 1, label: "BankAccount class defined" },
            { id: 2, label: "Parameterized constructor exists" },
            { id: 3, label: "display() method exists" },
            { id: 4, label: "Output: Alice: $1500.00" },
          ],
        },
      },
      {
        id: "classes-2",
        title: "Access Specifiers",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "C++ has three access specifiers that control *who* can see a class member:",
          },
          {
            type: "table",
            headers: ["Specifier", "Accessible From", "Use Case"],
            rows: [
              ["public", "Anywhere", "Interface methods, public data"],
              ["private", "Class only", "Internal data (default)"],
              ["protected", "Class + subclasses", "Inheritance scenarios"],
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Encapsulation with private data",
            content: `class Student {
private:
    int grade;  // hidden from outside

public:
    void setGrade(int g) {
        if (g >= 0 && g <= 100) grade = g;  // validation!
    }
    int getGrade() { return grade; }
};

// Outside the class:
Student s;
s.setGrade(95);   // ✅ OK
// s.grade = 95;  // ❌ compile error`,
          },
          {
            type: "quiz",
            question:
              "Which access specifier lets subclasses (but NOT outside code) access a member?",
            options: ["public", "private", "protected", "internal"],
            answer: 2,
            explanation:
              "`protected` members are accessible within the class and any derived class, but not from outside code.",
          },
        ],
        challenge: {
          title: "Encapsulate Temperature",
          description:
            "Create a `Thermometer` class. The temperature should be **private**. Add `setTemp(double t)` — only accept values between -100 and 150. Add `getTemp()` to return it. In main, set temp to 36.6 and print it.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Thermometer class


int main() {
    // set temp 36.6 and print
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Thermometer {
private:
    double temp;
public:
    void setTemp(double t) {
        if (t >= -100 && t <= 150) temp = t;
    }
    double getTemp() { return temp; }
};

int main() {
    Thermometer th;
    th.setTemp(36.6);
    cout << th.getTemp() << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "temp is private" },
            { id: 2, label: "setTemp() validates range" },
            { id: 3, label: "getTemp() returns temperature" },
            { id: 4, label: "Output: 36.6" },
          ],
        },
      },
      {
        id: "classes-3",
        title: "Destructor & Object Lifetime",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "A **destructor** is called automatically when an object goes out of scope or is deleted. It's the cleanup twin of the constructor. Syntax: `~ClassName()`.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Destructors have no parameters and no return type. A class can only have ONE destructor.",
          },
          {
            type: "stepthrough",
            title: "Object Lifetime",
            steps: [
              {
                label: "Object created",
                code: '{ Logger log("app");',
                desc: "Constructor runs: opens log file, allocates memory, etc.",
              },
              {
                label: "Object used",
                code: 'log.write("Starting...");',
                desc: "Methods work as expected on the live object.",
              },
              {
                label: "Scope ends → destructor",
                code: "} // ~Logger() auto-called",
                desc: "The destructor runs automatically — no manual call needed.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Constructor + Destructor pair",
            content: `class Logger {
public:
    string name;

    Logger(string n) : name(n) {
        cout << "[" << name << "] Logger started" << endl;
    }

    ~Logger() {
        cout << "[" << name << "] Logger stopped" << endl;
    }

    void log(string msg) {
        cout << "[" << name << "] " << msg << endl;
    }
};

int main() {
    Logger l("App");   // Constructor called
    l.log("Running");
}                      // Destructor called automatically`,
          },
          {
            type: "quiz",
            question:
              "When is a destructor automatically called for a local object?",
            options: [
              "When you call delete on it",
              "When its enclosing scope ends (} is reached)",
              "When the program starts",
              "Never — you must call it manually",
            ],
            answer: 1,
            explanation:
              "Local objects are destroyed (destructor called) when they go out of scope — i.e., when the closing `}` of their block is reached.",
          },
        ],
        challenge: {
          title: "Resource Guard",
          description:
            "Create a `FileHandle` class that takes a `filename` (string) in its constructor and prints `'Opening: <filename>'`. The destructor should print `'Closing: <filename>'`. In main, create a FileHandle inside a block `{ }` so you can observe the destructor firing before main ends.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: FileHandle class with constructor and destructor


int main() {
    {
        // Create FileHandle here
    }
    cout << "Main continues..." << endl;
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class FileHandle {
    string filename;
public:
    FileHandle(string f) : filename(f) {
        cout << "Opening: " << filename << endl;
    }
    ~FileHandle() {
        cout << "Closing: " << filename << endl;
    }
};

int main() {
    {
        FileHandle fh("data.txt");
    }
    cout << "Main continues..." << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Constructor prints 'Opening: data.txt'" },
            { id: 2, label: "Destructor prints 'Closing: data.txt'" },
            { id: 3, label: "'Closing' appears before 'Main continues'" },
            { id: 4, label: "Destructor fires automatically (no manual call)" },
          ],
        },
      },
      {
        id: "classes-4",
        title: "Member Initializer Lists",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "A **member initializer list** initializes members *before* the constructor body runs. It's faster and required for `const` members and references.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Prefer initializer lists over assignment in the constructor body — they're more efficient and idiomatic C++.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Initializer list syntax",
            content: `class Circle {
private:
    const double PI = 3.14159;
    double radius;
    string color;

public:
    // Using initializer list: ClassName(...) : member1(val1), member2(val2) { }
    Circle(double r, string c) : radius(r), color(c) {
        // body runs AFTER all members are initialized
        cout << "Circle created" << endl;
    }

    double area() const {
        return PI * radius * radius;
    }
};`,
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "`const` members **must** be initialized in the initializer list — you cannot assign them in the constructor body.",
          },
          {
            type: "quiz",
            question:
              "Which member MUST use an initializer list (cannot be assigned in the constructor body)?",
            options: ["int x", "string name", "const int MAX", "double value"],
            answer: 2,
            explanation:
              "`const` members must be initialized at construction time. The initializer list runs before the constructor body, making it the only option.",
          },
        ],
        challenge: {
          title: "Immutable Point",
          description:
            "Create a `Point` class with `const` members `x` and `y` (both int). Use a member initializer list in the constructor. Add a `print()` method that outputs `(x, y)`. In main, create `Point(3, 7)` and print it.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Point class with const x, y and initializer list


int main() {
    // Create Point(3, 7) and call print()
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Point {
public:
    const int x, y;

    Point(int a, int b) : x(a), y(b) {}

    void print() const {
        cout << "(" << x << ", " << y << ")" << endl;
    }
};

int main() {
    Point p(3, 7);
    p.print();
    return 0;
}`,
          tests: [
            { id: 1, label: "x and y are const int" },
            { id: 2, label: "Initializer list used in constructor" },
            { id: 3, label: "print() method exists" },
            { id: 4, label: "Output: (3, 7)" },
          ],
        },
      },
      {
        id: "classes-5",
        title: "Static Members",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "A **static member** belongs to the *class itself*, not to any individual object. All instances share the same static variable.",
          },
          {
            type: "diagram",
            title: "Static vs Instance Members",
            nodes: [
              {
                id: "class",
                label: "Counter class",
                color: "#00d4ff",
                items: ["static int count  ← shared", "int id  ← per-object"],
              },
              {
                id: "obj1",
                label: "obj1",
                color: "#ffe566",
                items: ["id = 1", "count → same"],
              },
              {
                id: "obj2",
                label: "obj2",
                color: "#ffe566",
                items: ["id = 2", "count → same"],
                parent: "class",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Object counter with static",
            content: `class Counter {
public:
    static int count;  // declaration
    int id;

    Counter() {
        count++;
        id = count;
    }

    static int getCount() { return count; }
};

int Counter::count = 0;  // definition (outside class!)

int main() {
    Counter a, b, c;
    cout << Counter::getCount(); // 3
    cout << a.id;                // 1
}`,
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "Static data members must be **defined** outside the class (in a .cpp file or after the class). Only `constexpr` statics can be defined inline.",
          },
          {
            type: "quiz",
            question:
              "How many times does a static variable's memory exist for a class with 10 objects?",
            options: [
              "10 times",
              "Twice",
              "Once — shared by all objects",
              "It depends on the OS",
            ],
            answer: 2,
            explanation:
              "Static members have exactly one copy in memory, shared across all instances of the class.",
          },
        ],
        challenge: {
          title: "ID Generator",
          description:
            "Create a `Ticket` class with a `static int nextId` that starts at 1. Each new Ticket should get an auto-incremented `id` in its constructor. Add `getId()` to return the id and `static int getNextId()` to see what the next ticket number will be. Create 3 tickets and print their IDs.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Ticket class with auto-incrementing static id


int main() {
    // Create 3 tickets and print IDs
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Ticket {
    static int nextId;
    int id;
public:
    Ticket() { id = nextId++; }
    int getId() const { return id; }
    static int getNextId() { return nextId; }
};

int Ticket::nextId = 1;

int main() {
    Ticket t1, t2, t3;
    cout << t1.getId() << endl; // 1
    cout << t2.getId() << endl; // 2
    cout << t3.getId() << endl; // 3
    return 0;
}`,
          tests: [
            { id: 1, label: "nextId is static" },
            { id: 2, label: "Each ticket gets unique id" },
            { id: 3, label: "IDs are 1, 2, 3 in order" },
            { id: 4, label: "getId() returns correct value" },
          ],
        },
      },
      {
        id: "classes-6",
        title: "this Pointer & Method Chaining",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "Every non-static member function has access to `this` — a pointer to the current object. It's used to resolve name conflicts and to enable **method chaining**.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Using this for disambiguation",
            content: `class Box {
private:
    int width, height;
public:
    // 'this->width' refers to the member; 'width' would be the parameter
    void setSize(int width, int height) {
        this->width = width;
        this->height = height;
    }
};`,
          },
          {
            type: "code",
            lang: "cpp",
            label: "Method chaining via return *this",
            content: `class Builder {
    string name;
    int value;
public:
    Builder& setName(string n) { name = n; return *this; }
    Builder& setValue(int v) { value = v; return *this; }

    void print() {
        cout << name << " = " << value << endl;
    }
};

int main() {
    Builder b;
    b.setName("score").setValue(42).print(); // chaining!
}`,
          },
          {
            type: "quiz",
            question: "What does `return *this` do inside a member function?",
            options: [
              "Returns a pointer to the object",
              "Returns a copy of the current object",
              "Returns a reference to the current object",
              "Deletes the object",
            ],
            answer: 2,
            explanation:
              "`*this` dereferences the `this` pointer, giving the object itself. Returning `Type&` (reference) to it enables chaining without copying.",
          },
        ],
        challenge: {
          title: "Fluent Query Builder",
          description:
            "Create a `Query` class with methods `from(string table)`, `where(string condition)`, and `limit(int n)` — each returns `Query&` for chaining. Add `build()` that prints `SELECT * FROM <table> WHERE <condition> LIMIT <n>`. Chain all three calls.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Query class with method chaining


int main() {
    Query q;
    q.from("users").where("age > 18").limit(10).build();
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Query {
    string table, condition;
    int n = 0;
public:
    Query& from(string t) { table = t; return *this; }
    Query& where(string c) { condition = c; return *this; }
    Query& limit(int lim) { n = lim; return *this; }
    void build() {
        cout << "SELECT * FROM " << table
             << " WHERE " << condition
             << " LIMIT " << n << endl;
    }
};

int main() {
    Query q;
    q.from("users").where("age > 18").limit(10).build();
    return 0;
}`,
          tests: [
            { id: 1, label: "from(), where(), limit() each return Query&" },
            { id: 2, label: "Method chaining works" },
            { id: 3, label: "build() prints SELECT statement" },
            {
              id: 4,
              label: "Output: SELECT * FROM users WHERE age > 18 LIMIT 10",
            },
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════
  //  CHAPTER 3 — Inheritance
  // ═══════════════════════════════════════
  {
    id: "inheritance",
    title: "Inheritance",
    icon: "🧬",
    color: "#ff6b6b",
    lessons: [
      {
        id: "inherit-1",
        title: "Single Inheritance",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**Inheritance** lets a class *inherit* attributes and methods from another class. The parent is called the **base class**; the child is the **derived class**.",
          },
          {
            type: "callout",
            variant: "info",
            content: "Syntax: `class Child : public Parent { ... };`",
          },
          {
            type: "diagram",
            title: "Inheritance Chain",
            nodes: [
              {
                id: "animal",
                label: "Animal",
                color: "#ff6b6b",
                items: ["name: string", "breathe()"],
              },
              {
                id: "dog",
                label: "Dog : Animal",
                color: "#ffaa00",
                items: ["← inherits name, breathe()", "bark()"],
                parent: "animal",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Animal → Dog",
            content: `class Animal {
public:
    string name;
    void breathe() { cout << name << " breathes." << endl; }
};

class Dog : public Animal {
public:
    void bark() { cout << name << " says Woof!" << endl; }
};

int main() {
    Dog d;
    d.name = "Rex";
    d.breathe();   // inherited!
    d.bark();      // Dog-specific
}`,
          },
          {
            type: "quiz",
            question:
              "In `class Dog : public Animal`, what does `public` control?",
            options: [
              "Whether Dog's members are public",
              "The access level of inherited members in Dog",
              "Whether Animal can access Dog",
              "Nothing — it's always required",
            ],
            answer: 1,
            explanation:
              "The `public` inheritance mode means public/protected members of Animal remain public/protected in Dog. With `private` inheritance they'd all become private.",
          },
        ],
        challenge: {
          title: "Vehicle Hierarchy",
          description:
            "Create a base class `Vehicle` with `brand` (string) and method `move()` that prints `'<brand> is moving'`. Create `ElectricCar` inheriting from Vehicle, adding `batteryLevel` (int) and method `charge()` printing `'Charging <brand>...'`. In main, create an ElectricCar, set brand to `\"Rivian\"`, batteryLevel to 80, and call both methods.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Vehicle and ElectricCar classes


int main() {
    // Create ElectricCar, call move() and charge()
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Vehicle {
public:
    string brand;
    void move() { cout << brand << " is moving" << endl; }
};

class ElectricCar : public Vehicle {
public:
    int batteryLevel;
    void charge() { cout << "Charging " << brand << "..." << endl; }
};

int main() {
    ElectricCar ec;
    ec.brand = "Rivian";
    ec.batteryLevel = 80;
    ec.move();
    ec.charge();
    return 0;
}`,
          tests: [
            { id: 1, label: "Vehicle class with move()" },
            { id: 2, label: "ElectricCar inherits Vehicle" },
            { id: 3, label: "Output contains 'Rivian is moving'" },
            { id: 4, label: "Output contains 'Charging Rivian'" },
          ],
        },
      },
      {
        id: "inherit-2",
        title: "Constructor Inheritance & super (base calls)",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "When a derived class object is created, the **base class constructor runs first**. You call it explicitly in the derived class's initializer list.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "C++ has no `super` keyword. Instead, call the base constructor by name: `Derived(...) : Base(args) { }`",
          },
          {
            type: "stepthrough",
            title: "Construction Order",
            steps: [
              {
                label: "Base constructor first",
                code: 'Employee("Alice", 30);',
                desc: "Person(name, age) runs first — initializes inherited members.",
              },
              {
                label: "Derived constructor next",
                code: "Employee(...) : Person(n, a), dept(d) { }",
                desc: "Then Employee's body runs to set dept.",
              },
              {
                label: "Object ready",
                code: "e.display(); // Alice, 30, Engineering",
                desc: "All members are initialized and available.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Calling base constructor",
            content: `class Person {
public:
    string name;
    int age;
    Person(string n, int a) : name(n), age(a) {}
    void display() { cout << name << ", " << age << endl; }
};

class Employee : public Person {
public:
    string dept;
    // Call base constructor in initializer list:
    Employee(string n, int a, string d)
        : Person(n, a), dept(d) {}

    void show() {
        display();  // calls Person::display()
        cout << "Dept: " << dept << endl;
    }
};

int main() {
    Employee e("Alice", 30, "Engineering");
    e.show();
}`,
          },
          {
            type: "quiz",
            question:
              'In what order are constructors called for `Employee e("Bob", 25, "HR");`?',
            options: [
              "Employee constructor, then Person constructor",
              "Person constructor, then Employee constructor",
              "Both at the same time",
              "Only Employee constructor",
            ],
            answer: 1,
            explanation:
              "Base class constructors always run first. The derived class builds on top of the initialized base.",
          },
        ],
        challenge: {
          title: "Shape Hierarchy with Constructors",
          description:
            "Create `Shape` with `color` (string) and a constructor. Create `Circle` inheriting Shape, adding `radius` (double) and its own constructor that calls Shape's. Add `area()` returning π*r². Add `describe()` that prints `'A <color> circle with area <area>'`. Test with a red Circle of radius 5.",
          starterCode: `#include <iostream>
#include <cmath>
using namespace std;

// TODO: Shape and Circle classes


int main() {
    // Circle("red", 5.0) → describe()
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <cmath>
using namespace std;

class Shape {
protected:
    string color;
public:
    Shape(string c) : color(c) {}
};

class Circle : public Shape {
    double radius;
public:
    Circle(string c, double r) : Shape(c), radius(r) {}
    double area() { return M_PI * radius * radius; }
    void describe() {
        cout << "A " << color << " circle with area " << area() << endl;
    }
};

int main() {
    Circle c("red", 5.0);
    c.describe();
    return 0;
}`,
          tests: [
            {
              id: 1,
              label: "Shape constructor takes color",
              keywords: ["class Shape", { pattern: "Shape\\s*\\([^)]*string\\s+[A-Za-z_]\\w*" }],
            },
            {
              id: 2,
              label: "Circle stores and initializes radius",
              keywords: ["class Circle", "double radius", { pattern: "radius\\s*\\([^)]*[A-Za-z_]\\w*\\)" }],
            },
            {
              id: 3,
              label: "Circle calls Shape constructor",
              keywords: [{ pattern: "Circle\\s*\\([^)]*\\)\\s*:\\s*Shape\\s*\\(" }],
            },
            {
              id: 4,
              label: "area() returns π * radius²",
              keywords: ["area", { pattern: "return[\\s\\S]*radius\\s*\\*\\s*radius" }],
            },
            {
              id: 5,
              label: "describe() prints color and area()",
              keywords: ["describe", "circle with area", { pattern: "<<\\s*area\\s*\\(" }],
            },
            {
              id: 6,
              label: "Red circle with radius 5 is tested",
              keywords: [{ pattern: "Circle\\s+[A-Za-z_]\\w*\\s*\\([^;]*red[^;]*5(?:\\.0)?[^;]*\\)" }],
            },
          ],
        },
      },
      {
        id: "inherit-3",
        title: "Method Overriding",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "A derived class can **override** a base class method by redefining it with the same signature. The `override` keyword (C++11) makes it explicit and catches typos.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Always use `override` — it tells the compiler to verify that you're actually overriding something. A mistyped name becomes a compile error, not a silent bug.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Overriding a method",
            content: `class Animal {
public:
    virtual void sound() {
        cout << "Some generic animal sound" << endl;
    }
};

class Cat : public Animal {
public:
    void sound() override {
        cout << "Meow!" << endl;
    }
};

class Duck : public Animal {
public:
    void sound() override {
        cout << "Quack!" << endl;
    }
};`,
          },
          {
            type: "code",
            lang: "cpp",
            label: "Calling the base version with ::",
            content: `class Cat : public Animal {
public:
    void sound() override {
        Animal::sound();           // call base version first
        cout << "...and Meow!" << endl;
    }
};`,
          },
          {
            type: "quiz",
            question:
              "What does the `override` specifier do if you accidentally typo the method name?",
            options: [
              "Creates a new unrelated method silently",
              "Causes a compile-time error",
              "Calls the base version instead",
              "Does nothing — it's just documentation",
            ],
            answer: 1,
            explanation:
              "`override` tells the compiler to check that the method actually overrides a virtual function. If no matching virtual exists, it's a compile error — preventing silent bugs.",
          },
        ],
        challenge: {
          title: "Employee Pay Calculator",
          description:
            "Create `Employee` with `name` (string) and virtual `calculatePay()` returning 0.0. Create `FullTime` (adds `salary` double, returns salary) and `PartTime` (adds `hoursWorked` and `hourlyRate`, returns product). Print pay for both.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Employee, FullTime, PartTime


int main() {
    FullTime ft("Alice", 5000.0);
    PartTime pt("Bob", 40, 25.0);
    cout << ft.name << ": $" << ft.calculatePay() << endl;
    cout << pt.name << ": $" << pt.calculatePay() << endl;
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Employee {
public:
    string name;
    Employee(string n) : name(n) {}
    virtual double calculatePay() { return 0.0; }
};

class FullTime : public Employee {
    double salary;
public:
    FullTime(string n, double s) : Employee(n), salary(s) {}
    double calculatePay() override { return salary; }
};

class PartTime : public Employee {
    int hoursWorked;
    double hourlyRate;
public:
    PartTime(string n, int h, double r) : Employee(n), hoursWorked(h), hourlyRate(r) {}
    double calculatePay() override { return hoursWorked * hourlyRate; }
};

int main() {
    FullTime ft("Alice", 5000.0);
    PartTime pt("Bob", 40, 25.0);
    cout << ft.name << ": $" << ft.calculatePay() << endl;
    cout << pt.name << ": $" << pt.calculatePay() << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "calculatePay() is virtual in Employee" },
            { id: 2, label: "FullTime returns salary" },
            { id: 3, label: "PartTime returns hours * rate" },
            { id: 4, label: "Output: Alice: $5000, Bob: $1000" },
          ],
        },
      },
      {
        id: "inherit-4",
        title: "Multiple & Multilevel Inheritance",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "C++ supports **multiple inheritance** (one class inheriting from several base classes) and **multilevel inheritance** (chains like A → B → C).",
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "Multiple inheritance can cause the **Diamond Problem** — two paths to the same base class create ambiguity. Use `virtual` inheritance to solve it.",
          },
          {
            type: "diagram",
            title: "Multilevel vs Multiple",
            nodes: [
              {
                id: "living",
                label: "LivingThing",
                color: "#ffe566",
                items: ["breathe()"],
              },
              {
                id: "animal2",
                label: "Animal",
                color: "#ff6b6b",
                items: ["move()"],
                parent: "living",
              },
              {
                id: "pet",
                label: "Pet",
                color: "#00d4ff",
                items: ["owner"],
                parent: "animal2",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Multilevel inheritance",
            content: `class LivingThing {
public:
    void breathe() { cout << "Breathing" << endl; }
};

class Animal : public LivingThing {
public:
    void move() { cout << "Moving" << endl; }
};

class Pet : public Animal {
public:
    string owner;
    void showOwner() { cout << "Owner: " << owner << endl; }
};

int main() {
    Pet p;
    p.owner = "Charlie";
    p.breathe();    // from LivingThing
    p.move();       // from Animal
    p.showOwner();  // from Pet
}`,
          },
          {
            type: "code",
            lang: "cpp",
            label: "Multiple inheritance",
            content: `class Flyable {
public:
    void fly() { cout << "Flying!" << endl; }
};

class Swimmable {
public:
    void swim() { cout << "Swimming!" << endl; }
};

class Duck : public Flyable, public Swimmable {
public:
    void quack() { cout << "Quack!" << endl; }
};

int main() {
    Duck d;
    d.fly();   // from Flyable
    d.swim();  // from Swimmable
    d.quack();
}`,
          },
          {
            type: "quiz",
            question: "What is the Diamond Problem in C++?",
            options: [
              "Inheriting from more than 4 classes",
              "Two paths in the inheritance graph lead to the same base class, causing ambiguity",
              "Using `private` inheritance with multiple bases",
              "A performance issue with deep class hierarchies",
            ],
            answer: 1,
            explanation:
              "When two parent classes both inherit from the same grandparent, a child inheriting from both has two copies of the grandparent — causing ambiguity. `virtual` inheritance solves this.",
          },
        ],
        challenge: {
          title: "Smart Device",
          description:
            "Create `Connectable` with `connect()` printing `'Connected'` and `Chargeable` with `charge()` printing `'Charging'`. Create `SmartWatch` inheriting both, adding `brand` (string) and `showInfo()` that prints the brand and calls both connect() and charge().",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Connectable, Chargeable, SmartWatch


int main() {
    SmartWatch sw;
    sw.brand = "Apple";
    sw.showInfo();
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Connectable {
public:
    void connect() { cout << "Connected" << endl; }
};

class Chargeable {
public:
    void charge() { cout << "Charging" << endl; }
};

class SmartWatch : public Connectable, public Chargeable {
public:
    string brand;
    void showInfo() {
        cout << brand << endl;
        connect();
        charge();
    }
};

int main() {
    SmartWatch sw;
    sw.brand = "Apple";
    sw.showInfo();
    return 0;
}`,
          tests: [
            {
              id: 1,
              label: "SmartWatch inherits both Connectable and Chargeable",
            },
            { id: 2, label: "connect() prints 'Connected'" },
            { id: 3, label: "charge() prints 'Charging'" },
            { id: 4, label: "showInfo() calls both" },
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════
  //  CHAPTER 4 — Polymorphism
  // ═══════════════════════════════════════
  {
    id: "polymorphism",
    title: "Polymorphism",
    icon: "🎭",
    color: "#a855f7",
    lessons: [
      {
        id: "poly-1",
        title: "Virtual Functions & Overriding",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "**Polymorphism** means 'many forms'. A base class pointer can call different implementations depending on the *actual* object type at runtime.",
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "Without `virtual`, calling through a base pointer will always use the base version — even if the derived class overrides it.",
          },
          {
            type: "stepthrough",
            title: "Runtime Dispatch with virtual",
            steps: [
              {
                label: "Base pointer assigned",
                code: "Shape* s = new Circle(5);",
                desc: "A Shape* is pointing to a Circle object on the heap.",
              },
              {
                label: "Virtual table lookup",
                code: "s->area();",
                desc: "Because area() is virtual, C++ looks up the actual type (Circle) in the vtable at runtime.",
              },
              {
                label: "Correct override runs",
                code: "// Circle::area() → 78.5",
                desc: "Circle's override executes, not Shape's default. This is dynamic dispatch.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Runtime polymorphism",
            content: `class Shape {
public:
    virtual double area() { return 0; }  // virtual!
};

class Circle : public Shape {
    double r;
public:
    Circle(double r) : r(r) {}
    double area() override { return 3.14159 * r * r; }
};

class Square : public Shape {
    double s;
public:
    Square(double s) : s(s) {}
    double area() override { return s * s; }
};

int main() {
    Shape* shapes[] = { new Circle(5), new Square(4) };
    for (auto* sh : shapes)
        cout << sh->area() << endl;  // different result, same call!
}`,
          },
          {
            type: "quiz",
            question:
              "What happens if you call `s->area()` where `s` is a `Shape*` pointing to a `Circle`, but `area()` is NOT virtual?",
            options: [
              "Circle::area() is called (correct result)",
              "Shape::area() is called (wrong result)",
              "Compile error",
              "Undefined behavior",
            ],
            answer: 1,
            explanation:
              "Without `virtual`, the call is resolved at compile-time based on the pointer type (Shape), so Shape::area() runs regardless of what the pointer actually points to.",
          },
        ],
        challenge: {
          title: "Speak Polymorphically",
          description:
            "Create a base class `Animal` with a `virtual` method `speak()` that prints `'...'`. Create `Cat` (prints `'Meow'`) and `Dog` (prints `'Woof'`). In main, create an array of 2 `Animal*` pointers, one Cat and one Dog, and call `speak()` on each.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Animal, Cat, Dog


int main() {
    // Animal* arr[2] — one Cat, one Dog
    // call speak() on each
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Animal {
public:
    virtual void speak() { cout << "..." << endl; }
};

class Cat : public Animal {
public:
    void speak() override { cout << "Meow" << endl; }
};

class Dog : public Animal {
public:
    void speak() override { cout << "Woof" << endl; }
};

int main() {
    Animal* arr[2] = { new Cat(), new Dog() };
    for (auto* a : arr) a->speak();
    return 0;
}`,
          tests: [
            { id: 1, label: "speak() is virtual in Animal" },
            { id: 2, label: "Cat overrides speak() → Meow" },
            { id: 3, label: "Dog overrides speak() → Woof" },
            { id: 4, label: "Both called via Animal*" },
          ],
        },
      },
      {
        id: "poly-2",
        title: "Virtual Destructors",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "When deleting a derived object through a base pointer, you **must** make the base destructor `virtual` — otherwise only the base destructor runs (memory leak / UB).",
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "**Rule of thumb**: If a class has any virtual function, make its destructor virtual too.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Non-virtual destructor bug",
            content: `class Base {
public:
    ~Base() { cout << "Base dtor" << endl; }  // NOT virtual!
};

class Derived : public Base {
    int* data;
public:
    Derived() { data = new int[100]; }
    ~Derived() {
        delete[] data;
        cout << "Derived dtor" << endl;
    }
};

int main() {
    Base* b = new Derived();
    delete b;  // ❌ Only ~Base() runs → memory leak!
}`,
          },
          {
            type: "code",
            lang: "cpp",
            label: "Fix: virtual destructor",
            content: `class Base {
public:
    virtual ~Base() { cout << "Base dtor" << endl; }  // ✅ virtual
};

class Derived : public Base {
    int* data;
public:
    Derived() { data = new int[100]; }
    ~Derived() override {
        delete[] data;
        cout << "Derived dtor" << endl;
    }
};

int main() {
    Base* b = new Derived();
    delete b;  // ✅ ~Derived() then ~Base() — correct!
}`,
          },
          {
            type: "quiz",
            question:
              "What's the risk of a non-virtual destructor in a polymorphic base class?",
            options: [
              "Compile error",
              "Derived destructor doesn't run → resource leaks",
              "The program crashes immediately",
              "The base destructor runs twice",
            ],
            answer: 1,
            explanation:
              "Without `virtual`, `delete base_ptr` only calls the base destructor. The derived class's cleanup code (freeing memory, closing handles) never runs.",
          },
        ],
        challenge: {
          title: "Safe Polymorphic Deletion",
          description:
            "Create `Resource` (virtual destructor, prints `'Resource released'`) and `NetworkResource` inheriting it (prints `'Connection closed'` then lets Resource's dtor run). In main, allocate a NetworkResource via a `Resource*` and delete it — verify both destructors fire.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Resource and NetworkResource


int main() {
    Resource* r = new NetworkResource();
    delete r;
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Resource {
public:
    virtual ~Resource() { cout << "Resource released" << endl; }
};

class NetworkResource : public Resource {
public:
    ~NetworkResource() override { cout << "Connection closed" << endl; }
};

int main() {
    Resource* r = new NetworkResource();
    delete r;
    return 0;
}`,
          tests: [
            { id: 1, label: "Resource destructor is virtual" },
            {
              id: 2,
              label: "NetworkResource destructor prints 'Connection closed'",
            },
            { id: 3, label: "Both destructors fire on delete" },
            {
              id: 4,
              label: "'Connection closed' appears before 'Resource released'",
            },
          ],
        },
      },
      {
        id: "poly-3",
        title: "Function Overloading",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**Function overloading** (compile-time polymorphism) lets you define multiple functions with the same name but different parameter lists. The compiler picks the right one.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "The return type alone does NOT distinguish overloads — parameter types and/or count must differ.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Overloaded print functions",
            content: `void print(int x)    { cout << "int: "    << x << endl; }
void print(double x) { cout << "double: " << x << endl; }
void print(string x) { cout << "string: " << x << endl; }
void print(int x, int y) { cout << x << ", " << y << endl; }

int main() {
    print(42);        // int version
    print(3.14);      // double version
    print("hello");   // string version
    print(1, 2);      // 2-param version
}`,
          },
          {
            type: "quiz",
            question:
              "Which of these is NOT a valid way to overload a function named `add`?",
            options: [
              "Change number of parameters",
              "Change parameter types",
              "Change return type only",
              "Change const-ness of parameters",
            ],
            answer: 2,
            explanation:
              "Return type alone cannot be used to distinguish overloads. The compiler selects overloads based on arguments provided at the call site, not on the return type.",
          },
        ],
        challenge: {
          title: "Overloaded Area Calculator",
          description:
            "Write overloaded `area()` functions: `area(double r)` for circle (π*r²), `area(double w, double h)` for rectangle (w*h), and `area(double a, double b, double c)` for triangle using Heron's formula. Call all three and print results.",
          starterCode: `#include <iostream>
#include <cmath>
using namespace std;

// TODO: Three overloads of area()


int main() {
    cout << area(5.0) << endl;         // circle r=5
    cout << area(4.0, 6.0) << endl;    // rectangle
    cout << area(3.0, 4.0, 5.0) << endl; // triangle
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <cmath>
using namespace std;

double area(double r) {
    return M_PI * r * r;
}
double area(double w, double h) {
    return w * h;
}
double area(double a, double b, double c) {
    double s = (a + b + c) / 2;
    return sqrt(s * (s-a) * (s-b) * (s-c));
}

int main() {
    cout << area(5.0) << endl;
    cout << area(4.0, 6.0) << endl;
    cout << area(3.0, 4.0, 5.0) << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "area(r) computes circle area" },
            { id: 2, label: "area(w,h) computes rectangle area" },
            { id: 3, label: "area(a,b,c) uses Heron's formula" },
            { id: 4, label: "All three overloads compile and run" },
          ],
        },
      },
      {
        id: "poly-4",
        title: "Operator Overloading",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "C++ lets you redefine operators (`+`, `-`, `==`, `<<`, etc.) for your custom classes. This is **operator overloading** — another form of compile-time polymorphism.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Overload `<<` as a `friend` function to enable `cout << myObject` syntax.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Overloading + and << for Vector2D",
            content: `class Vector2D {
public:
    double x, y;
    Vector2D(double x, double y) : x(x), y(y) {}

    // Overload +
    Vector2D operator+(const Vector2D& other) const {
        return Vector2D(x + other.x, y + other.y);
    }

    // Overload == 
    bool operator==(const Vector2D& other) const {
        return x == other.x && y == other.y;
    }

    // Overload << (friend, so it can access cout)
    friend ostream& operator<<(ostream& os, const Vector2D& v) {
        os << "(" << v.x << ", " << v.y << ")";
        return os;
    }
};

int main() {
    Vector2D a(1, 2), b(3, 4);
    cout << a + b << endl;   // (4, 6)
    cout << (a == b) << endl; // 0
}`,
          },
          {
            type: "quiz",
            question:
              "Why is `operator<<` often declared as a `friend` function?",
            options: [
              "Because it must return void",
              "Because it needs `ostream&` as its first argument, which isn't `this`",
              "Because member operators are not allowed for streams",
              "It's just a convention — not required",
            ],
            answer: 1,
            explanation:
              "`operator<<` takes `ostream&` as its left-hand side (first arg), which can't be `this`. Making it a `friend` free function lets it access private members while still working with the stream on the left.",
          },
        ],
        challenge: {
          title: "Fraction Class",
          description:
            "Create a `Fraction` class with `num` and `den` (int). Overload `+` to add fractions (a/b + c/d = (a*d + b*c) / (b*d)) and `<<` to print `num/den`. In main, add 1/2 and 1/3 and print the result.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Fraction class with + and << overloads


int main() {
    Fraction a(1, 2), b(1, 3);
    Fraction c = a + b;
    cout << c << endl;  // should print 5/6
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Fraction {
    int num, den;
public:
    Fraction(int n, int d) : num(n), den(d) {}

    Fraction operator+(const Fraction& o) const {
        return Fraction(num * o.den + o.num * den, den * o.den);
    }

    friend ostream& operator<<(ostream& os, const Fraction& f) {
        os << f.num << "/" << f.den;
        return os;
    }
};

int main() {
    Fraction a(1, 2), b(1, 3);
    Fraction c = a + b;
    cout << c << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "operator+ adds fractions correctly" },
            { id: 2, label: "operator<< prints num/den format" },
            { id: 3, label: "1/2 + 1/3 = 5/6" },
            { id: 4, label: "Output: 5/6" },
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════
  //  CHAPTER 5 — Abstraction
  // ═══════════════════════════════════════
  {
    id: "abstraction",
    title: "Abstraction",
    icon: "🔷",
    color: "#f59e0b",
    lessons: [
      {
        id: "abstract-1",
        title: "Abstract Classes & Pure Virtual",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "An **abstract class** is a blueprint you can't instantiate directly. It uses **pure virtual functions** (syntax: `= 0`) to *force* derived classes to implement them.",
          },
          {
            type: "diagram",
            title: "Abstract Class Pattern",
            nodes: [
              {
                id: "payment",
                label: "Payment (abstract)",
                color: "#f59e0b",
                items: [
                  "processPayment() = 0",
                  "getMethod() = 0",
                  "❌ Cannot instantiate",
                ],
              },
              {
                id: "cc",
                label: "CreditCard",
                color: "#00d4ff",
                items: ["processPayment() ✓", "getMethod() ✓", "✅ Concrete"],
                parent: "payment",
              },
              {
                id: "crypto",
                label: "Crypto",
                color: "#ffe566",
                items: ["processPayment() ✓", "getMethod() ✓", "✅ Concrete"],
                parent: "payment",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Pure virtual function",
            content: `class Shape {
public:
    virtual double area() = 0;    // pure virtual
    virtual string name() = 0;    // pure virtual

    void describe() {             // can still have concrete methods
        cout << name() << " area: " << area() << endl;
    }
};

class Triangle : public Shape {
    double b, h;
public:
    Triangle(double b, double h) : b(b), h(h) {}
    double area() override { return 0.5 * b * h; }
    string name() override { return "Triangle"; }
};

// Shape s;  // ❌ Error! Can't instantiate abstract class`,
          },
          {
            type: "quiz",
            question:
              "Which syntax makes a function purely virtual (abstract)?",
            options: [
              "virtual void foo() {}",
              "abstract void foo();",
              "virtual void foo() = 0;",
              "void foo() override;",
            ],
            answer: 2,
            explanation:
              "The `= 0` suffix makes a virtual function pure virtual. The class becomes abstract and cannot be instantiated.",
          },
        ],
        challenge: {
          title: "Payment Gateway Interface",
          description:
            "Create an abstract class `Payment` with pure virtual `processPayment(double amount)` and `getMethod()`. Implement `CreditCard` (method: `\"Credit Card\"`, prints `'Processing $X via Credit Card'`) and `Crypto` (method: `\"Crypto\"`, prints `'Broadcasting $X to blockchain'`). Test both.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Payment, CreditCard, Crypto


int main() {
    // test both payment types with amount 99.99
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Payment {
public:
    virtual void processPayment(double amount) = 0;
    virtual string getMethod() = 0;
};

class CreditCard : public Payment {
public:
    string getMethod() override { return "Credit Card"; }
    void processPayment(double amount) override {
        cout << "Processing $" << amount << " via Credit Card" << endl;
    }
};

class Crypto : public Payment {
public:
    string getMethod() override { return "Crypto"; }
    void processPayment(double amount) override {
        cout << "Broadcasting $" << amount << " to blockchain" << endl;
    }
};

int main() {
    Payment* p1 = new CreditCard();
    Payment* p2 = new Crypto();
    p1->processPayment(99.99);
    p2->processPayment(99.99);
    return 0;
}`,
          tests: [
            { id: 1, label: "Payment is abstract (pure virtual)" },
            { id: 2, label: "CreditCard implements both methods" },
            { id: 3, label: "Crypto implements both methods" },
            { id: 4, label: "Both work via Payment*" },
          ],
        },
      },
      {
        id: "abstract-2",
        title: "Interfaces via Pure Virtual Classes",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "C++ has no `interface` keyword, but a class with **only pure virtual functions** acts as one. Interfaces define a contract — any implementor must fulfill all methods.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Name interfaces with an `I` prefix or `able` suffix by convention: `IDrawable`, `Serializable`, `Printable`.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Interface pattern",
            content: `// Pure interface — no data, no implementations
class ISerializable {
public:
    virtual string serialize() = 0;
    virtual void deserialize(string data) = 0;
    virtual ~ISerializable() = default;
};

class User : public ISerializable {
    string name;
    int age;
public:
    User(string n, int a) : name(n), age(a) {}

    string serialize() override {
        return name + ":" + to_string(age);
    }
    void deserialize(string data) override {
        // parse "name:age" format
        int colon = data.find(':');
        name = data.substr(0, colon);
        age  = stoi(data.substr(colon + 1));
    }
};`,
          },
          {
            type: "quiz",
            question: "How do you create an 'interface' in C++?",
            options: [
              "Use the `interface` keyword",
              "Create a class with only pure virtual functions",
              "Create a struct with only data members",
              "Use `abstract class` keyword",
            ],
            answer: 1,
            explanation:
              "C++ doesn't have a dedicated `interface` keyword. A class with only pure virtual functions (and optionally a virtual destructor) serves as an interface.",
          },
        ],
        challenge: {
          title: "Logger Interface",
          description:
            "Create an `ILogger` interface with pure virtual `log(string msg)` and `setLevel(int level)`. Implement `ConsoleLogger` that prefixes messages with `[INFO]` or `[DEBUG]` based on level (1=INFO, 2=DEBUG). Implement `FileLogger` that prefixes with `[FILE]`. Test both.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: ILogger, ConsoleLogger, FileLogger


int main() {
    ConsoleLogger cl;
    cl.setLevel(1);
    cl.log("Server started");

    FileLogger fl;
    fl.setLevel(2);
    fl.log("Reading config");
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class ILogger {
public:
    virtual void log(string msg) = 0;
    virtual void setLevel(int level) = 0;
    virtual ~ILogger() = default;
};

class ConsoleLogger : public ILogger {
    int level = 1;
public:
    void setLevel(int l) override { level = l; }
    void log(string msg) override {
        string prefix = (level == 2) ? "[DEBUG]" : "[INFO]";
        cout << prefix << " " << msg << endl;
    }
};

class FileLogger : public ILogger {
    int level = 1;
public:
    void setLevel(int l) override { level = l; }
    void log(string msg) override {
        cout << "[FILE] " << msg << endl;
    }
};

int main() {
    ConsoleLogger cl;
    cl.setLevel(1);
    cl.log("Server started");

    FileLogger fl;
    fl.setLevel(2);
    fl.log("Reading config");
    return 0;
}`,
          tests: [
            { id: 1, label: "ILogger has pure virtual log() and setLevel()" },
            { id: 2, label: "ConsoleLogger uses [INFO] prefix" },
            { id: 3, label: "FileLogger uses [FILE] prefix" },
            { id: 4, label: "Both implement ILogger correctly" },
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════
  //  CHAPTER 6 — Advanced OOP
  // ═══════════════════════════════════════
  {
    id: "advanced",
    title: "Advanced OOP",
    icon: "⚡",
    color: "#10b981",
    lessons: [
      {
        id: "adv-1",
        title: "Copy Constructor & Assignment Operator",
        xp: 30,
        theory: [
          {
            type: "text",
            content:
              "The **Rule of Three**: if your class manages a resource (raw pointer, file handle), you must define the **destructor**, **copy constructor**, and **copy assignment operator** — all three.",
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "Without a custom copy constructor, C++ does a **shallow copy** — both objects point to the same memory. Deleting one corrupts the other.",
          },
          {
            type: "stepthrough",
            title: "Shallow vs Deep Copy",
            steps: [
              {
                label: "Shallow copy (default)",
                code: "Array b = a; // both b.data == a.data",
                desc: "b.data and a.data point to the SAME heap memory. Disaster waiting to happen.",
              },
              {
                label: "Delete one",
                code: "// a goes out of scope → delete[] a.data",
                desc: "Now b.data is a dangling pointer — accessing it is undefined behavior.",
              },
              {
                label: "Deep copy (correct)",
                code: "b.data = new int[size]; // own memory\nmemcpy(b.data, a.data, size*4);",
                desc: "b gets its own heap allocation — independent from a.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Rule of Three implementation",
            content: `class DynArray {
    int* data;
    int size;
public:
    // Constructor
    DynArray(int n) : size(n) {
        data = new int[n]();
    }

    // Destructor
    ~DynArray() { delete[] data; }

    // Copy constructor (deep copy)
    DynArray(const DynArray& other) : size(other.size) {
        data = new int[size];
        for (int i = 0; i < size; i++) data[i] = other.data[i];
    }

    // Copy assignment operator
    DynArray& operator=(const DynArray& other) {
        if (this == &other) return *this;  // self-assignment guard
        delete[] data;
        size = other.size;
        data = new int[size];
        for (int i = 0; i < size; i++) data[i] = other.data[i];
        return *this;
    }
};`,
          },
          {
            type: "quiz",
            question: "What is a 'shallow copy' problem?",
            options: [
              "The copy is missing some fields",
              "Two objects share the same raw pointer, causing double-delete",
              "The copy constructor runs too slowly",
              "The destructor is not called",
            ],
            answer: 1,
            explanation:
              "A shallow copy duplicates the pointer value (address), not the data. Both objects then share the same memory — when one is destroyed, the other's pointer becomes dangling.",
          },
        ],
        challenge: {
          title: "Safe String Buffer",
          description:
            "Create a `Buffer` class holding a `char*` and a `length`. Implement: constructor (allocates and copies a C-string), destructor, copy constructor (deep copy), and copy assignment. Add `print()` that outputs the string. Test by copying a Buffer and modifying the original to confirm independence.",
          starterCode: `#include <iostream>
#include <cstring>
using namespace std;

// TODO: Buffer class — Rule of Three


int main() {
    Buffer b1("Hello");
    Buffer b2 = b1;   // copy constructor
    b1.print();       // Hello
    b2.print();       // Hello (independent copy)
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <cstring>
using namespace std;

class Buffer {
    char* data;
    int length;
public:
    Buffer(const char* s) {
        length = strlen(s);
        data = new char[length + 1];
        strcpy(data, s);
    }
    ~Buffer() { delete[] data; }

    Buffer(const Buffer& other) {
        length = other.length;
        data = new char[length + 1];
        strcpy(data, other.data);
    }

    Buffer& operator=(const Buffer& other) {
        if (this == &other) return *this;
        delete[] data;
        length = other.length;
        data = new char[length + 1];
        strcpy(data, other.data);
        return *this;
    }

    void print() const { cout << data << endl; }
};

int main() {
    Buffer b1("Hello");
    Buffer b2 = b1;
    b1.print();
    b2.print();
    return 0;
}`,
          tests: [
            { id: 1, label: "Constructor allocates and copies string" },
            { id: 2, label: "Destructor frees memory" },
            { id: 3, label: "Copy constructor does deep copy" },
            { id: 4, label: "Both buffers print 'Hello' independently" },
          ],
        },
      },
      {
        id: "adv-2",
        title: "Move Semantics (Rule of Five)",
        xp: 35,
        theory: [
          {
            type: "text",
            content:
              "C++11 introduced **move semantics** to eliminate unnecessary copies. The **Rule of Five** extends Rule of Three by adding the **move constructor** and **move assignment operator**.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "`std::move()` casts an lvalue to an rvalue reference — it doesn't actually move anything. The move constructor/assignment does the actual transfer.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Move constructor and assignment",
            content: `class Buffer {
    int* data;
    int size;
public:
    Buffer(int n) : size(n), data(new int[n]) {}
    ~Buffer() { delete[] data; }

    // Move constructor — steal resources
    Buffer(Buffer&& other) noexcept
        : data(other.data), size(other.size) {
        other.data = nullptr;  // ← leave source empty
        other.size = 0;
    }

    // Move assignment
    Buffer& operator=(Buffer&& other) noexcept {
        if (this == &other) return *this;
        delete[] data;
        data = other.data;
        size = other.size;
        other.data = nullptr;
        other.size = 0;
        return *this;
    }
};

Buffer makeBuffer() { return Buffer(1000); }  // triggers move, not copy`,
          },
          {
            type: "quiz",
            question:
              "After a move operation, what should the 'moved-from' object's state be?",
            options: [
              "Deleted immediately",
              "Unchanged — move is non-destructive",
              "In a valid but unspecified (empty) state",
              "Undefined — don't touch it",
            ],
            answer: 2,
            explanation:
              "After a move, the source object must be in a valid destructible state — typically 'empty' (nullptr pointers, zero sizes). It may be used or destroyed, but the invariants must hold.",
          },
        ],
        challenge: {
          title: "Moveable Resource",
          description:
            "Extend a `Resource` class with: constructor (takes a name, prints `'Acquired: name'`), destructor (prints `'Released: name'` only if not moved-from), move constructor (transfers name, prints `'Moved: name'`). Demonstrate by moving a Resource and showing only one release.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Resource class with move semantics


int main() {
    Resource r1("GPU");
    Resource r2 = move(r1);  // move constructor
    cout << "--- end of main ---" << endl;
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Resource {
    string name;
    bool moved = false;
public:
    Resource(string n) : name(n) {
        cout << "Acquired: " << name << endl;
    }
    ~Resource() {
        if (!moved) cout << "Released: " << name << endl;
    }
    Resource(Resource&& other) noexcept : name(move(other.name)) {
        other.moved = true;
        cout << "Moved: " << name << endl;
    }
};

int main() {
    Resource r1("GPU");
    Resource r2 = move(r1);
    cout << "--- end of main ---" << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Constructor prints 'Acquired: GPU'" },
            { id: 2, label: "Move constructor prints 'Moved: GPU'" },
            { id: 3, label: "Only one 'Released' printed (not two)" },
            { id: 4, label: "Moved-from object not double-freed" },
          ],
        },
      },
      {
        id: "adv-3",
        title: "Templates & Generic OOP",
        xp: 35,
        theory: [
          {
            type: "text",
            content:
              "**Templates** let you write classes and functions that work with any type. Combined with OOP, they enable powerful, type-safe generic containers and algorithms.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Class template",
            content: `template <typename T>
class Stack {
    vector<T> data;
public:
    void push(T val) { data.push_back(val); }

    T pop() {
        if (data.empty()) throw runtime_error("Stack is empty");
        T val = data.back();
        data.pop_back();
        return val;
    }

    T peek() const { return data.back(); }
    bool isEmpty() const { return data.empty(); }
    int size() const { return data.size(); }
};

int main() {
    Stack<int> intStack;
    intStack.push(10);
    intStack.push(20);
    cout << intStack.pop() << endl;  // 20

    Stack<string> strStack;
    strStack.push("hello");
    cout << strStack.peek() << endl; // hello
}`,
          },
          {
            type: "code",
            lang: "cpp",
            label: "Template with multiple type params",
            content: `template <typename K, typename V>
class Pair {
public:
    K key;
    V value;
    Pair(K k, V v) : key(k), value(v) {}

    void print() {
        cout << key << " → " << value << endl;
    }
};

int main() {
    Pair<string, int> p("age", 25);
    p.print(); // age → 25
}`,
          },
          {
            type: "quiz",
            question: "When is a class template instantiated (compiled)?",
            options: [
              "When the template is defined",
              "When the template is first included",
              "When you use it with a specific type, e.g. Stack<int>",
              "At program startup",
            ],
            answer: 2,
            explanation:
              "Templates are compiled lazily — the compiler generates the actual code only when you instantiate with a specific type like `Stack<int>` or `Stack<string>`.",
          },
        ],
        challenge: {
          title: "Generic Pair with Comparison",
          description:
            "Create a class template `MinMax<T>` that tracks the minimum and maximum of values added via `add(T val)`. Implement `getMin()` and `getMax()`. Test with `MinMax<int>` using values {5, 2, 8, 1, 9, 3}.",
          starterCode: `#include <iostream>
#include <climits>
using namespace std;

// TODO: MinMax<T> template class


int main() {
    MinMax<int> mm;
    for (int v : {5, 2, 8, 1, 9, 3}) mm.add(v);
    cout << "Min: " << mm.getMin() << endl; // 1
    cout << "Max: " << mm.getMax() << endl; // 9
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <climits>
using namespace std;

template <typename T>
class MinMax {
    T minVal, maxVal;
    bool hasValue = false;
public:
    void add(T val) {
        if (!hasValue || val < minVal) minVal = val;
        if (!hasValue || val > maxVal) maxVal = val;
        hasValue = true;
    }
    T getMin() const { return minVal; }
    T getMax() const { return maxVal; }
};

int main() {
    MinMax<int> mm;
    for (int v : {5, 2, 8, 1, 9, 3}) mm.add(v);
    cout << "Min: " << mm.getMin() << endl;
    cout << "Max: " << mm.getMax() << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "MinMax is a class template" },
            { id: 2, label: "add() updates min and max" },
            { id: 3, label: "getMin() returns 1" },
            { id: 4, label: "getMax() returns 9" },
          ],
        },
      },
      {
        id: "adv-4",
        title: "Design Patterns: Singleton & Factory",
        xp: 40,
        theory: [
          {
            type: "text",
            content:
              "**Design patterns** are proven OOP solutions to common problems. The **Singleton** ensures only one instance exists. The **Factory** creates objects without specifying exact classes.",
          },
          {
            type: "code",
            lang: "cpp",
            label: "Singleton pattern",
            content: `class Config {
private:
    static Config* instance;
    string dbHost = "localhost";

    Config() {}  // private constructor

public:
    static Config* getInstance() {
        if (!instance) instance = new Config();
        return instance;
    }

    string getDbHost() { return dbHost; }
    void setDbHost(string h) { dbHost = h; }

    // Prevent copy
    Config(const Config&) = delete;
    Config& operator=(const Config&) = delete;
};

Config* Config::instance = nullptr;

int main() {
    Config::getInstance()->setDbHost("prod.db.com");
    cout << Config::getInstance()->getDbHost(); // prod.db.com
}`,
          },
          {
            type: "code",
            lang: "cpp",
            label: "Factory pattern",
            content: `class Button {
public:
    virtual void render() = 0;
    virtual ~Button() = default;
};

class WinButton : public Button {
public:
    void render() override { cout << "[Windows Button]" << endl; }
};

class MacButton : public Button {
public:
    void render() override { cout << "(Mac Button)" << endl; }
};

// Factory function
Button* createButton(string os) {
    if (os == "windows") return new WinButton();
    if (os == "mac")     return new MacButton();
    return nullptr;
}

int main() {
    Button* btn = createButton("mac");
    btn->render();  // (Mac Button)
    delete btn;
}`,
          },
          {
            type: "quiz",
            question:
              "Why does the Singleton pattern make its constructor private?",
            options: [
              "To prevent the class from being inherited",
              "To prevent external code from creating multiple instances",
              "To improve performance",
              "It's required by the C++ standard",
            ],
            answer: 1,
            explanation:
              "A private constructor prevents any code outside the class from calling `new Config()` directly — forcing all access through the controlled `getInstance()` method, which ensures only one instance exists.",
          },
        ],
        challenge: {
          title: "Logger Singleton",
          description:
            "Implement a `Logger` Singleton with a private constructor and static `getInstance()`. Add `log(string msg)` that prints `[LOG] <msg>` and a static counter `logCount` tracking how many messages were logged. Call it from two separate functions to confirm it's the same instance.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Logger Singleton


void moduleA() { Logger::getInstance()->log("Module A started"); }
void moduleB() { Logger::getInstance()->log("Module B started"); }

int main() {
    moduleA();
    moduleB();
    cout << "Total logs: " << Logger::getInstance()->logCount << endl;
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Logger {
    static Logger* instance;
    Logger() {}
public:
    int logCount = 0;

    static Logger* getInstance() {
        if (!instance) instance = new Logger();
        return instance;
    }

    void log(string msg) {
        logCount++;
        cout << "[LOG] " << msg << endl;
    }

    Logger(const Logger&) = delete;
    Logger& operator=(const Logger&) = delete;
};

Logger* Logger::instance = nullptr;

void moduleA() { Logger::getInstance()->log("Module A started"); }
void moduleB() { Logger::getInstance()->log("Module B started"); }

int main() {
    moduleA();
    moduleB();
    cout << "Total logs: " << Logger::getInstance()->logCount << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "Constructor is private" },
            { id: 2, label: "getInstance() returns same object always" },
            { id: 3, label: "log() prints [LOG] prefix" },
            { id: 4, label: "logCount = 2 after two calls" },
          ],
        },
      },
      {
        id: "adv-5",
        title: "RAII & Smart Pointers",
        xp: 40,
        theory: [
          {
            type: "text",
            content:
              "**RAII** (Resource Acquisition Is Initialization) ties resource lifetime to object lifetime. The constructor acquires; the destructor releases. C++11 smart pointers implement RAII for heap memory.",
          },
          {
            type: "table",
            headers: ["Smart Pointer", "Ownership", "Use When"],
            rows: [
              [
                "unique_ptr<T>",
                "Exclusive (one owner)",
                "Most heap objects — no sharing needed",
              ],
              [
                "shared_ptr<T>",
                "Shared (ref-counted)",
                "Multiple owners, shared resources",
              ],
              ["weak_ptr<T>", "Non-owning observer", "Break shared_ptr cycles"],
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "unique_ptr vs shared_ptr",
            content: `#include <memory>
using namespace std;

class Engine {
public:
    Engine() { cout << "Engine created" << endl; }
    ~Engine() { cout << "Engine destroyed" << endl; }
    void start() { cout << "Vroom!" << endl; }
};

int main() {
    // unique_ptr — exclusive ownership
    {
        unique_ptr<Engine> e1 = make_unique<Engine>();
        e1->start();
        // auto e2 = e1;  // ❌ can't copy — must move
        auto e2 = move(e1);  // transfer ownership
    } // Engine destroyed when scope ends

    // shared_ptr — shared ownership
    {
        shared_ptr<Engine> s1 = make_shared<Engine>();
        shared_ptr<Engine> s2 = s1;  // both own it
        cout << "Ref count: " << s1.use_count() << endl; // 2
    } // Engine destroyed when LAST shared_ptr dies
}`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Prefer `unique_ptr` by default. Only use `shared_ptr` when you genuinely need shared ownership.",
          },
          {
            type: "quiz",
            question: "When is the object managed by a `unique_ptr` destroyed?",
            options: [
              "When you call delete on it",
              "When the unique_ptr goes out of scope",
              "When another unique_ptr is assigned",
              "At program exit",
            ],
            answer: 1,
            explanation:
              "`unique_ptr`'s destructor calls `delete` on the managed object automatically when the `unique_ptr` itself goes out of scope. No manual `delete` needed.",
          },
        ],
        challenge: {
          title: "Smart File Manager",
          description:
            "Create a `File` class (constructor prints `'Opened: name'`, destructor prints `'Closed: name'`). Use `unique_ptr` to manage two File objects — one in a nested scope (shows early closing) and one at main scope. Observe the destruction order.",
          starterCode: `#include <iostream>
#include <memory>
using namespace std;

// TODO: File class


int main() {
    auto f1 = make_unique<File>("main.log");

    {
        auto f2 = make_unique<File>("temp.log");
        cout << "Both files open" << endl;
    }  // f2 closes here

    cout << "Only main.log open" << endl;
    return 0;
}  // f1 closes here`,
          solutionCode: `#include <iostream>
#include <memory>
using namespace std;

class File {
    string name;
public:
    File(string n) : name(n) { cout << "Opened: " << name << endl; }
    ~File() { cout << "Closed: " << name << endl; }
};

int main() {
    auto f1 = make_unique<File>("main.log");

    {
        auto f2 = make_unique<File>("temp.log");
        cout << "Both files open" << endl;
    }

    cout << "Only main.log open" << endl;
    return 0;
}`,
          tests: [
            { id: 1, label: "unique_ptr used (no raw new/delete)" },
            { id: 2, label: "temp.log closes before 'Only main.log open'" },
            { id: 3, label: "main.log closes at end of main" },
            { id: 4, label: "Correct open/close order in output" },
          ],
        },
      },
      {
        id: "adv-6",
        title: "Exception Safety in OOP",
        xp: 35,
        theory: [
          {
            type: "text",
            content:
              "Writing exception-safe OOP code means your objects remain in a valid state even when exceptions are thrown. There are three levels: **basic**, **strong**, and **no-throw** guarantees.",
          },
          {
            type: "table",
            headers: ["Guarantee", "Meaning", "Example"],
            rows: [
              [
                "No-throw",
                "Function never throws",
                "Destructor, move constructor",
              ],
              [
                "Strong",
                "If it throws, state is unchanged (commit-or-rollback)",
                "copy-and-swap idiom",
              ],
              [
                "Basic",
                "No leaks, object still valid, but state may change",
                "Most operations",
              ],
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Exception-safe class with try/catch",
            content: `class Matrix {
    double* data;
    int rows, cols;
public:
    Matrix(int r, int c) : rows(r), cols(c) {
        if (r <= 0 || c <= 0)
            throw invalid_argument("Dimensions must be positive");
        data = new double[r * c]();
    }
    ~Matrix() { delete[] data; }

    double at(int r, int c) const {
        if (r < 0 || r >= rows || c < 0 || c >= cols)
            throw out_of_range("Index out of bounds");
        return data[r * cols + c];
    }
};

int main() {
    try {
        Matrix m(3, 3);
        cout << m.at(5, 0);  // throws out_of_range
    } catch (const out_of_range& e) {
        cout << "Caught: " << e.what() << endl;
    } catch (const invalid_argument& e) {
        cout << "Bad dimensions: " << e.what() << endl;
    }
}`,
          },
          {
            type: "quiz",
            question:
              "Which exception guarantee do destructors typically provide?",
            options: ["Basic", "Strong", "No-throw", "None"],
            answer: 2,
            explanation:
              "Destructors should never throw — if an exception is thrown during stack unwinding from another exception, the program terminates with `std::terminate`. Mark destructors `noexcept`.",
          },
        ],
        challenge: {
          title: "Safe Stack with Exceptions",
          description:
            'Implement a `SafeStack<T>` class with `push(T)`, `pop()`, and `peek()`. `pop()` and `peek()` should throw `runtime_error("Stack is empty")` if called on an empty stack. In main, demonstrate: push 3 items, pop all, then catch the exception on the 4th pop.',
          starterCode: `#include <iostream>
#include <vector>
#include <stdexcept>
using namespace std;

// TODO: SafeStack<T> template class


int main() {
    SafeStack<int> s;
    s.push(1); s.push(2); s.push(3);
    cout << s.pop() << endl;  // 3
    cout << s.pop() << endl;  // 2
    cout << s.pop() << endl;  // 1
    try {
        s.pop();  // should throw
    } catch (const runtime_error& e) {
        cout << "Caught: " << e.what() << endl;
    }
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <vector>
#include <stdexcept>
using namespace std;

template <typename T>
class SafeStack {
    vector<T> data;
public:
    void push(T val) { data.push_back(val); }

    T pop() {
        if (data.empty()) throw runtime_error("Stack is empty");
        T val = data.back();
        data.pop_back();
        return val;
    }

    T peek() const {
        if (data.empty()) throw runtime_error("Stack is empty");
        return data.back();
    }

    bool empty() const { return data.empty(); }
};

int main() {
    SafeStack<int> s;
    s.push(1); s.push(2); s.push(3);
    cout << s.pop() << endl;
    cout << s.pop() << endl;
    cout << s.pop() << endl;
    try {
        s.pop();
    } catch (const runtime_error& e) {
        cout << "Caught: " << e.what() << endl;
    }
    return 0;
}`,
          tests: [
            { id: 1, label: "pop() returns values in LIFO order" },
            { id: 2, label: "pop() throws on empty stack" },
            { id: 3, label: "Exception caught and message printed" },
            { id: 4, label: "Output: 3, 2, 1, Caught: Stack is empty" },
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════
  //  CHAPTER 7 — OOP Design Lab
  // ═══════════════════════════════════════
  {
    id: "design-lab",
    title: "OOP Design Lab",
    icon: "🧩",
    color: "#14b8a6",
    lessons: [
      {
        id: "design-1",
        title: "Composition over Inheritance",
        xp: 30,
        theory: [
          {
            type: "text",
            content:
              "**Composition** means building a class from smaller objects it owns or uses. In C++, this often produces simpler designs than deep inheritance trees.",
          },
          {
            type: "diagram",
            title: "Has-a vs Is-a",
            nodes: [
              {
                id: "inheritance",
                label: "Inheritance: is-a",
                color: "#ff6b6b",
                items: [
                  "`SportsCar` is a `Car`",
                  "Good when substitution is true",
                  "Uses `class SportsCar : public Car`",
                ],
              },
              {
                id: "composition",
                label: "Composition: has-a",
                color: "#14b8a6",
                items: [
                  "`Car` has an `Engine`",
                  "Good for replaceable parts",
                  "Uses member objects",
                ],
              },
              {
                id: "delegation",
                label: "Delegation",
                color: "#f59e0b",
                items: [
                  "`Car::start()` calls `engine.start()`",
                  "Keeps responsibilities small",
                  "Avoids fragile base classes",
                ],
              },
            ],
          },
          {
            type: "stepthrough",
            title: "Choosing the Relationship",
            steps: [
              {
                label: "Ask is-a",
                code: "class Rectangle : public Shape { ... };",
                desc: "Use inheritance only when a derived object can be safely used anywhere the base object is expected.",
              },
              {
                label: "Ask has-a",
                code: "class Car {\n    Engine engine;\n};",
                desc: "Use composition when one object is made of another object or delegates work to it.",
              },
              {
                label: "Delegate behavior",
                code: "void Car::start() {\n    engine.ignite();\n}",
                desc: "The outer class exposes a clear public interface while the inner object handles the detail.",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Car composed with Engine",
            content: `class Engine {
public:
    void ignite() {
        cout << "Engine ignition" << endl;
    }
};

class Car {
private:
    Engine engine;

public:
    void start() {
        engine.ignite();
        cout << "Car ready" << endl;
    }
};`,
          },
          {
            type: "quiz",
            question:
              "Which design best models a `Laptop` that uses a replaceable `Battery`?",
            options: [
              "`class Laptop : public Battery`",
              "`class Battery : public Laptop`",
              "`class Laptop { Battery battery; }`",
              "A global Battery variable",
            ],
            answer: 2,
            explanation:
              "A laptop has a battery. Composition models that relationship without pretending the laptop is a battery.",
          },
        ],
        challenge: {
          title: "Compose a Notification Service",
          description:
            "Create an `EmailSender` class with `send(string message)`. Create a `NotificationService` class that has an `EmailSender` member and a `notify(string user, string message)` method. `notify()` should print the user and delegate the message to `EmailSender::send()`.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: EmailSender and NotificationService using composition


int main() {
    NotificationService service;
    service.notify("Alice", "Your build passed");
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class EmailSender {
public:
    void send(string message) {
        cout << "Email: " << message << endl;
    }
};

class NotificationService {
private:
    EmailSender sender;

public:
    void notify(string user, string message) {
        cout << "Notify " << user << endl;
        sender.send(message);
    }
};

int main() {
    NotificationService service;
    service.notify("Alice", "Your build passed");
    return 0;
}`,
          tests: [
            {
              id: 1,
              label: "EmailSender class exists",
              keywords: ["class EmailSender"],
            },
            {
              id: 2,
              label: "NotificationService has an EmailSender member",
              keywords: ["class NotificationService", "EmailSender"],
            },
            {
              id: 3,
              label: "notify() delegates to sender.send(message)",
              keywords: ["notify", ".send(message)"],
              hint: "Call the composed object's send method inside notify().",
            },
            {
              id: 4,
              label: "Output includes the user and email message",
              keywords: ["Alice", "Your build passed", "cout"],
            },
          ],
        },
      },
      {
        id: "design-2",
        title: "Interfaces & Dependency Inversion",
        xp: 35,
        theory: [
          {
            type: "text",
            content:
              "C++ does not have an `interface` keyword, but an abstract class with only pure virtual functions works as an interface. This lets high-level classes depend on behavior, not concrete details.",
          },
          {
            type: "diagram",
            title: "Depend on an Interface",
            nodes: [
              {
                id: "checkout",
                label: "Checkout",
                color: "#14b8a6",
                items: [
                  "High-level workflow",
                  "Uses `IPaymentProcessor&`",
                  "Does not care which payment provider runs",
                ],
              },
              {
                id: "interface",
                label: "IPaymentProcessor",
                color: "#00d4ff",
                items: [
                  "`virtual pay(double) = 0`",
                  "Stable contract",
                  "Enables mocks and plugins",
                ],
              },
              {
                id: "stripe",
                label: "CardProcessor",
                color: "#a855f7",
                items: ["Concrete implementation", "Overrides `pay()`"],
                parent: "interface",
              },
              {
                id: "cash",
                label: "WalletProcessor",
                color: "#f59e0b",
                items: ["Another implementation", "Same interface"],
                parent: "interface",
              },
            ],
          },
          {
            type: "code",
            lang: "cpp",
            label: "Interface-driven design",
            content: `class IPaymentProcessor {
public:
    virtual void pay(double amount) = 0;
    virtual ~IPaymentProcessor() = default;
};

class Checkout {
    IPaymentProcessor& processor;
public:
    Checkout(IPaymentProcessor& p) : processor(p) {}
    void complete(double total) {
        processor.pay(total);
    }
};`,
          },
          {
            type: "quiz",
            question:
              "Why should `Checkout` store an `IPaymentProcessor&` instead of a `CardProcessor` directly?",
            options: [
              "It makes the program slower on purpose",
              "It allows Checkout to work with any compatible payment processor",
              "It removes the need for virtual functions",
              "It makes the interface private",
            ],
            answer: 1,
            explanation:
              "The checkout workflow becomes reusable with cards, wallets, test doubles, or future processors as long as they implement the same interface.",
          },
        ],
        challenge: {
          title: "Switchable Report Exporters",
          description:
            "Create an interface `IExporter` with pure virtual `exportReport(string title)`. Implement `PdfExporter` and `CsvExporter`. Create `ReportService` that receives an `IExporter&` in its constructor and calls it from `publish()`.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: IExporter, PdfExporter, CsvExporter, ReportService


int main() {
    PdfExporter pdf;
    CsvExporter csv;

    ReportService pdfReports(pdf);
    ReportService csvReports(csv);

    pdfReports.publish("Revenue");
    csvReports.publish("Inventory");
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class IExporter {
public:
    virtual void exportReport(string title) = 0;
    virtual ~IExporter() = default;
};

class PdfExporter : public IExporter {
public:
    void exportReport(string title) override {
        cout << "PDF: " << title << endl;
    }
};

class CsvExporter : public IExporter {
public:
    void exportReport(string title) override {
        cout << "CSV: " << title << endl;
    }
};

class ReportService {
    IExporter& exporter;
public:
    ReportService(IExporter& e) : exporter(e) {}
    void publish(string title) {
        exporter.exportReport(title);
    }
};

int main() {
    PdfExporter pdf;
    CsvExporter csv;

    ReportService pdfReports(pdf);
    ReportService csvReports(csv);

    pdfReports.publish("Revenue");
    csvReports.publish("Inventory");
    return 0;
}`,
          tests: [
            {
              id: 1,
              label: "IExporter is an abstract interface",
              keywords: ["class IExporter", "virtual void exportReport", "= 0"],
            },
            {
              id: 2,
              label: "PdfExporter and CsvExporter override exportReport()",
              keywords: ["class PdfExporter", "class CsvExporter", "override"],
            },
            {
              id: 3,
              label: "ReportService depends on IExporter&",
              keywords: ["IExporter& exporter", "ReportService(IExporter&"],
            },
            {
              id: 4,
              label: "publish() delegates to exporter.exportReport(title)",
              keywords: ["publish", "exporter.exportReport(title)"],
            },
          ],
        },
      },
      {
        id: "design-3",
        title: "From UML to C++ Classes",
        xp: 35,
        theory: [
          {
            type: "text",
            content:
              "UML class diagrams are a planning tool. They help you decide class names, data ownership, public methods, and relationships before writing code.",
          },
          {
            type: "diagram",
            title: "Library Checkout Model",
            nodes: [
              {
                id: "book",
                label: "Book",
                color: "#00d4ff",
                items: [
                  "- title: string",
                  "- checkedOut: bool",
                  "+ checkout()",
                  "+ returnBook()",
                ],
              },
              {
                id: "member",
                label: "Member",
                color: "#14b8a6",
                items: ["- name: string", "+ borrow(Book&)", "+ returnItem(Book&)"],
              },
              {
                id: "library",
                label: "Library",
                color: "#f59e0b",
                items: [
                  "- books: vector<Book>",
                  "+ addBook(Book)",
                  "+ listAvailable()",
                ],
              },
            ],
          },
          {
            type: "stepthrough",
            title: "Translate UML Symbols",
            steps: [
              {
                label: "Private fields",
                code: "- title: string\n- checkedOut: bool",
                desc: "A minus sign maps to `private` member variables in the C++ class.",
              },
              {
                label: "Public methods",
                code: "+ checkout()\n+ returnBook()",
                desc: "A plus sign maps to `public` member functions that form the class interface.",
              },
              {
                label: "References",
                code: "void borrow(Book& book);",
                desc: "When one object acts on another without owning it, pass a reference instead of copying.",
              },
            ],
          },
          {
            type: "quiz",
            question:
              "In UML, which C++ construct is usually represented by `- balance: double`?",
            options: [
              "A public method named balance",
              "A private double member named balance",
              "A global variable",
              "A constructor parameter only",
            ],
            answer: 1,
            explanation:
              "`-` means private visibility, `balance` is the member name, and `double` is the type.",
          },
        ],
        challenge: {
          title: "Code the Library Model",
          description:
            "Create a `Book` class with private `title` and `checkedOut`. Add `checkout()`, `returnBook()`, `isAvailable()`, and `getTitle()`. Create a `Member` class with `borrow(Book&)` and `returnItem(Book&)`. In main, let Sam borrow and return a book.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Book and Member classes from the UML model


int main() {
    Book book("Clean Code");
    Member sam("Sam");
    sam.borrow(book);
    sam.returnItem(book);
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Book {
private:
    string title;
    bool checkedOut;

public:
    Book(string t) : title(t), checkedOut(false) {}

    void checkout() { checkedOut = true; }
    void returnBook() { checkedOut = false; }
    bool isAvailable() const { return !checkedOut; }
    string getTitle() const { return title; }
};

class Member {
private:
    string name;

public:
    Member(string n) : name(n) {}

    void borrow(Book& book) {
        if (book.isAvailable()) {
            book.checkout();
            cout << name << " borrowed " << book.getTitle() << endl;
        }
    }

    void returnItem(Book& book) {
        book.returnBook();
        cout << name << " returned " << book.getTitle() << endl;
    }
};

int main() {
    Book book("Clean Code");
    Member sam("Sam");
    sam.borrow(book);
    sam.returnItem(book);
    return 0;
}`,
          tests: [
            {
              id: 1,
              label: "Book encapsulates title and checkedOut",
              keywords: ["class Book", "private:", "string title", "bool checkedOut"],
            },
            {
              id: 2,
              label: "Book exposes checkout, returnBook, isAvailable, getTitle",
              keywords: ["checkout()", "returnBook()", "isAvailable()", "getTitle()"],
            },
            {
              id: 3,
              label: "Member borrows and returns by Book& reference",
              keywords: ["borrow(Book&", "returnItem(Book&"],
            },
            {
              id: 4,
              label: "Main demonstrates borrow and return",
              keywords: ["Sam", "Clean Code", "sam.borrow(book)", "sam.returnItem(book)"],
            },
          ],
        },
      },
      {
        id: "design-4",
        title: "Const-Correct Class APIs",
        xp: 30,
        theory: [
          {
            type: "text",
            content:
              "**Const-correctness** tells C++ which methods promise not to mutate object state. It makes APIs safer and lets objects work through `const` references.",
          },
          {
            type: "stepthrough",
            title: "Read-only object contract",
            steps: [
              {
                label: "Pass by const reference",
                code: "void printProfile(const Profile& profile)",
                desc: "The function avoids a copy and promises not to modify the object.",
              },
              {
                label: "Mark getters const",
                code: "string getUsername() const { return username; }",
                desc: "Only `const` member functions can be called through a `const Profile&`.",
              },
              {
                label: "Keep mutation explicit",
                code: "void addReputation(int points) { reputation += points; }",
                desc: "Methods that change state should not be marked `const`; mutation becomes visible in the API.",
              },
            ],
          },
          {
            type: "quiz",
            question:
              "Why should a getter like `getBalance()` usually be marked `const`?",
            options: [
              "It makes the return value global",
              "It allows the getter to mutate private data",
              "It promises the getter will not change the object",
              "It removes the need for private fields",
            ],
            answer: 2,
            explanation:
              "A `const` member function promises not to modify observable object state, so it can be used safely through const references.",
          },
        ],
        challenge: {
          title: "Create a Const-Correct Profile",
          description:
            "Create a `Profile` class with private `username` and `reputation`. Add const getters `getUsername()` and `getReputation()`, plus `addReputation(int points)`. Write `printProfile(const Profile& p)` that prints both values.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: const-correct Profile class and printProfile()


int main() {
    Profile profile("senodroom", 10);
    profile.addReputation(5);
    printProfile(profile);
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Profile {
private:
    string username;
    int reputation;

public:
    Profile(string u, int r) : username(u), reputation(r) {}
    string getUsername() const { return username; }
    int getReputation() const { return reputation; }
    void addReputation(int points) { reputation += points; }
};

void printProfile(const Profile& p) {
    cout << p.getUsername() << ": " << p.getReputation() << endl;
}

int main() {
    Profile profile("senodroom", 10);
    profile.addReputation(5);
    printProfile(profile);
    return 0;
}`,
          tests: [
            {
              id: 1,
              label: "Profile keeps username and reputation private",
              keywords: ["class Profile", "private:", "string username", "int reputation"],
            },
            {
              id: 2,
              label: "Getters are marked const",
              keywords: ["getUsername() const", "getReputation() const"],
            },
            {
              id: 3,
              label: "printProfile accepts const Profile&",
              keywords: ["printProfile(const Profile&"],
            },
            {
              id: 4,
              label: "addReputation mutates reputation intentionally",
              keywords: ["addReputation", "reputation +="],
            },
          ],
        },
      },
      {
        id: "design-5",
        title: "Object Slicing & Polymorphic References",
        xp: 35,
        theory: [
          {
            type: "text",
            content:
              "**Object slicing** happens when a derived object is copied into a base object by value. The derived part gets sliced away, so polymorphic behavior can disappear.",
          },
          {
            type: "diagram",
            title: "Slicing vs References",
            nodes: [
              {
                id: "bad",
                label: "Bad: pass by value",
                color: "#ff6b6b",
                items: ["`void draw(Shape s)`", "Copies only the Shape portion", "Derived data is lost"],
              },
              {
                id: "good-ref",
                label: "Good: reference",
                color: "#14b8a6",
                items: ["`void draw(const Shape& s)`", "No copy", "Virtual dispatch keeps working"],
              },
              {
                id: "good-ptr",
                label: "Good: smart pointer",
                color: "#00d4ff",
                items: ["`unique_ptr<Shape>`", "Owns polymorphic objects safely", "Needs virtual destructor"],
              },
            ],
          },
          {
            type: "quiz",
            question:
              "Which function signature avoids object slicing for polymorphic objects?",
            options: [
              "`void render(Shape shape)`",
              "`void render(const Shape& shape)`",
              "`void render(int shape)`",
              "`void render(Shape shape = Circle())`",
            ],
            answer: 1,
            explanation:
              "Passing by reference avoids copying the derived object into a base object, preserving runtime polymorphism.",
          },
        ],
        challenge: {
          title: "Render Without Slicing",
          description:
            "Create an abstract `Widget` with virtual `draw() const` and virtual destructor. Implement `Button` and `Slider`. Create `render(const Widget& widget)` and call it for both objects.",
          starterCode: `#include <iostream>
using namespace std;

// TODO: Widget, Button, Slider, render(const Widget&)


int main() {
    Button button;
    Slider slider;
    render(button);
    render(slider);
    return 0;
}`,
          solutionCode: `#include <iostream>
using namespace std;

class Widget {
public:
    virtual void draw() const = 0;
    virtual ~Widget() = default;
};

class Button : public Widget {
public:
    void draw() const override { cout << "Drawing button" << endl; }
};

class Slider : public Widget {
public:
    void draw() const override { cout << "Drawing slider" << endl; }
};

void render(const Widget& widget) {
    widget.draw();
}

int main() {
    Button button;
    Slider slider;
    render(button);
    render(slider);
    return 0;
}`,
          tests: [
            {
              id: 1,
              label: "Widget is abstract and has a virtual destructor",
              keywords: ["class Widget", "virtual void draw() const = 0", "virtual ~Widget()"],
            },
            {
              id: 2,
              label: "Button and Slider override draw() const",
              keywords: ["class Button", "class Slider", "override"],
            },
            {
              id: 3,
              label: "render() accepts const Widget&",
              keywords: ["render(const Widget&"],
            },
            {
              id: 4,
              label: "Main renders both concrete widgets",
              keywords: ["render(button)", "render(slider)"],
            },
          ],
        },
      },
    ],
  },

  // ═══════════════════════════════════════
  //  CHAPTER 8 — OOP Capstone Projects
  // ═══════════════════════════════════════
  {
    id: "capstone",
    title: "Capstone Projects",
    icon: "🏆",
    color: "#f43f5e",
    lessons: [
      {
        id: "cap-1",
        title: "Mini Banking System",
        xp: 50,
        theory: [
          {
            type: "text",
            content:
              "Put it all together: build a mini banking system using inheritance, polymorphism, encapsulation, and templates. This project mirrors a real-world OOP design.",
          },
          {
            type: "diagram",
            title: "Banking System UML",
            nodes: [
              {
                id: "acct",
                label: "Account (abstract)",
                color: "#f43f5e",
                items: [
                  "owner: string",
                  "balance: double",
                  "deposit() = 0",
                  "withdraw() = 0",
                ],
              },
              {
                id: "savings",
                label: "SavingsAccount",
                color: "#10b981",
                items: ["interestRate", "applyInterest()"],
                parent: "acct",
              },
              {
                id: "checking",
                label: "CheckingAccount",
                color: "#a855f7",
                items: ["overdraftLimit", "withdraw() with limit"],
                parent: "acct",
              },
            ],
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use `virtual` and `= 0` for `deposit()` and `withdraw()`. Each account type enforces its own rules in the override.",
          },
        ],
        challenge: {
          title: "Implement the Banking System",
          description:
            "Create abstract `Account` (owner, balance, virtual deposit/withdraw). Implement `SavingsAccount` (interest rate, applyInterest() multiplies balance). Implement `CheckingAccount` (overdraftLimit — can go negative up to limit). Add `getBalance()` and `displayInfo()` to both. Test: deposit $1000 into savings, apply 5% interest. Withdraw $500 from checking with $0 balance and $200 limit.",
          starterCode: `#include <iostream>
#include <iomanip>
using namespace std;

// TODO: Account, SavingsAccount, CheckingAccount


int main() {
    SavingsAccount sa("Alice", 0.05);
    sa.deposit(1000);
    sa.applyInterest();
    sa.displayInfo();  // Alice - Savings: $1050.00

    CheckingAccount ca("Bob", 200.0);
    ca.withdraw(500);
    ca.displayInfo();  // Bob - Checking: $-500.00 (overdraft)
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <iomanip>
using namespace std;

class Account {
protected:
    string owner;
    double balance;
public:
    Account(string o, double b = 0) : owner(o), balance(b) {}
    virtual void deposit(double amount) = 0;
    virtual void withdraw(double amount) = 0;
    double getBalance() const { return balance; }
    virtual void displayInfo() const = 0;
    virtual ~Account() = default;
};

class SavingsAccount : public Account {
    double interestRate;
public:
    SavingsAccount(string o, double rate) : Account(o, 0), interestRate(rate) {}
    void deposit(double amount) override { if (amount > 0) balance += amount; }
    void withdraw(double amount) override {
        if (amount <= balance) balance -= amount;
        else cout << "Insufficient funds" << endl;
    }
    void applyInterest() { balance += balance * interestRate; }
    void displayInfo() const override {
        cout << owner << " - Savings: $" << fixed << setprecision(2) << balance << endl;
    }
};

class CheckingAccount : public Account {
    double overdraftLimit;
public:
    CheckingAccount(string o, double limit) : Account(o, 0), overdraftLimit(limit) {}
    void deposit(double amount) override { balance += amount; }
    void withdraw(double amount) override {
        if (balance - amount >= -overdraftLimit) balance -= amount;
        else cout << "Overdraft limit exceeded" << endl;
    }
    void displayInfo() const override {
        cout << owner << " - Checking: $" << fixed << setprecision(2) << balance << endl;
    }
};

int main() {
    SavingsAccount sa("Alice", 0.05);
    sa.deposit(1000);
    sa.applyInterest();
    sa.displayInfo();

    CheckingAccount ca("Bob", 200.0);
    ca.withdraw(500);
    ca.displayInfo();
    return 0;
}`,
          tests: [
            { id: 1, label: "Account is abstract with pure virtual methods" },
            { id: 2, label: "SavingsAccount: $1000 + 5% = $1050.00" },
            { id: 3, label: "CheckingAccount: withdraw $500 → balance $-500" },
            { id: 4, label: "displayInfo() shows correct formatted output" },
          ],
        },
      },
      {
        id: "cap-2",
        title: "Game Entity System",
        xp: 60,
        theory: [
          {
            type: "text",
            content:
              "Game engines heavily rely on OOP. Build a mini entity system with a base `Entity`, polymorphic behavior, and a `World` that manages entities via smart pointers.",
          },
          {
            type: "diagram",
            title: "Entity System",
            nodes: [
              {
                id: "entity",
                label: "Entity (abstract)",
                color: "#f43f5e",
                items: ["name, hp", "update() = 0", "render() = 0"],
              },
              {
                id: "player",
                label: "Player",
                color: "#10b981",
                items: ["score", "update(): move", "render(): @P"],
                parent: "entity",
              },
              {
                id: "enemy",
                label: "Enemy",
                color: "#a855f7",
                items: ["damage", "update(): patrol", "render(): @E"],
                parent: "entity",
              },
              {
                id: "world",
                label: "World",
                color: "#f59e0b",
                items: ["vector<unique_ptr<Entity>>", "addEntity()", "tick()"],
              },
            ],
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use `vector<unique_ptr<Entity>>` to own a polymorphic collection safely — no manual memory management needed.",
          },
        ],
        challenge: {
          title: "Build the Entity System",
          description:
            "Create abstract `Entity(name, hp)` with virtual `update()` and `render()`. Create `Player` (score, update prints `'Player moves'`, render prints `'[P] <name>'`) and `Enemy` (damage, update prints `'Enemy patrols'`, render prints `'[E] <name>'`). Create `World` with `addEntity(unique_ptr<Entity>)` and `tick()` that calls update() + render() on all. Run one tick with one Player and one Enemy.",
          starterCode: `#include <iostream>
#include <memory>
#include <vector>
using namespace std;

// TODO: Entity, Player, Enemy, World


int main() {
    World world;
    world.addEntity(make_unique<Player>("Hero", 100, 0));
    world.addEntity(make_unique<Enemy>("Goblin", 30, 5));
    world.tick();
    return 0;
}`,
          solutionCode: `#include <iostream>
#include <memory>
#include <vector>
using namespace std;

class Entity {
protected:
    string name;
    int hp;
public:
    Entity(string n, int h) : name(n), hp(h) {}
    virtual void update() = 0;
    virtual void render() = 0;
    virtual ~Entity() = default;
};

class Player : public Entity {
    int score;
public:
    Player(string n, int h, int s) : Entity(n, h), score(s) {}
    void update() override { cout << "Player moves" << endl; }
    void render() override { cout << "[P] " << name << endl; }
};

class Enemy : public Entity {
    int damage;
public:
    Enemy(string n, int h, int d) : Entity(n, h), damage(d) {}
    void update() override { cout << "Enemy patrols" << endl; }
    void render() override { cout << "[E] " << name << endl; }
};

class World {
    vector<unique_ptr<Entity>> entities;
public:
    void addEntity(unique_ptr<Entity> e) {
        entities.push_back(move(e));
    }
    void tick() {
        for (auto& e : entities) {
            e->update();
            e->render();
        }
    }
};

int main() {
    World world;
    world.addEntity(make_unique<Player>("Hero", 100, 0));
    world.addEntity(make_unique<Enemy>("Goblin", 30, 5));
    world.tick();
    return 0;
}`,
          tests: [
            { id: 1, label: "Entity is abstract (pure virtual update/render)" },
            { id: 2, label: "World uses vector<unique_ptr<Entity>>" },
            { id: 3, label: "tick() calls both update() and render()" },
            {
              id: 4,
              label: "Polymorphism: Player and Enemy behave differently",
            },
          ],
        },
      },
    ],
  },
];

// ──────────────────────────────────────────────
//  Utility exports
// ──────────────────────────────────────────────

/** Flat list of all lessons for quick lookup */
export const ALL_LESSONS = applyLessonVideoLinks(
  CHAPTERS.flatMap((ch) =>
    ch.lessons.map((l) => ({
      ...l,
      chapterId: ch.id,
      chapterTitle: ch.title,
      chapterColor: ch.color,
    })),
  ),
  OOPS_VIDEO_LINKS,
);

export const TOTAL_XP = ALL_LESSONS.reduce((s, l) => s + l.xp, 0);

export const TOTAL_CHAPTERS = CHAPTERS.length;
export const TOTAL_LESSONS = ALL_LESSONS.length;
