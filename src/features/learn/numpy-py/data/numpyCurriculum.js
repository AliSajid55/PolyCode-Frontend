// PolyCode — NumPy (Python) full curriculum
// 11 chapters · 36 lessons · Python coding challenges

export const NUMPY_CHAPTERS = [
  {
    id: "intro",
    title: "What is NumPy?",
    icon: "🔢",
    color: "#4f46e5",
    lessons: [
      {
        id: "numpy-0",
        title: "What is NumPy?",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "**NumPy** (Numerical Python) is a free library that helps you work with large sets of numbers in Python — think step counts from a fitness band, pixel brightness in a photo, or prices on a shopping site.",
          },
          {
            type: "text",
            content:
              "Its main building block is the **ndarray**: a grid of numbers stored efficiently. Once your data is in an ndarray, you can add, multiply, or compare whole chunks in one step instead of writing long loops.",
          },
          {
            type: "diagram",
            title: "Where NumPy shows up",
            nodes: [
              {
                id: "science",
                label: "Science & school",
                color: "#4f46e5",
                items: ["Physics formulas", "Statistics homework"],
              },
              {
                id: "data",
                label: "Data & charts",
                color: "#6366f1",
                items: ["pandas tables", "matplotlib plots"],
              },
              {
                id: "ml",
                label: "AI & games",
                color: "#8b5cf6",
                items: ["Neural networks", "Random game levels"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Install habit: import numpy as np",
            content: `import numpy as np

steps = np.array([4000, 5200, 6100])
print(steps + 500)   # bonus steps added to each day`,
          },
          {
            type: "code",
            lang: "python",
            label: "A tiny 2D table (rows and columns)",
            content: `import numpy as np

# Each row = one student, each column = one subject
grades = np.array([[78, 85], [92, 88]])
print(grades.shape)   # (2, 2) → 2 students, 2 subjects`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Almost every data-heavy Python project uses `import numpy as np`. You will use that line in every lesson in this course.",
          },
          {
            type: "quiz",
            question: "What does NumPy mainly give you for numeric work?",
            options: [
              "Faster loops in plain Python lists",
              "ndarrays and vectorized math on many values at once",
              "A way to store text in Excel",
              "Built-in web servers",
            ],
            answer: 1,
            explanation:
              "NumPy centers on ndarrays and operations that run on whole arrays efficiently.",
          },
        ],
        challenge: {
          title: "Your First ndarray",
          description:
            "Import NumPy as `np`, create `temps = np.array([18, 22, 19])`, and print `temps + 3` (three warmer days).",
          starterCode: `# Import NumPy as np
# Create temps and print temps + 3

`,
          solutionCode: `import numpy as np

temps = np.array([18, 22, 19])
print(temps + 3)`,
          tests: [
            {
              id: 1,
              label: "Imports numpy as np",
              hint: "import numpy as np",
              keywords: [{ pattern: "import\\s+numpy\\s+as\\s+np" }],
            },
            {
              id: 2,
              label: "Uses np.array",
              hint: "np.array([18, 22, 19])",
              keywords: [{ pattern: "np\\.array\\s*\\(" }],
            },
            {
              id: 3,
              label: "Prints temps + 3",
              hint: "print(temps + 3)",
              keywords: [{ pattern: "print\\s*\\(\\s*temps\\s*\\+\\s*3\\s*\\)" }],
            },
          ],
        },
      },
      {
        id: "numpy-1",
        title: "Lists vs NumPy Arrays",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "Imagine a **spreadsheet** full of numbers. A Python **list** is like sticky notes — flexible, can hold anything, but slow when you crunch thousands of cells. **NumPy** gives you an **ndarray**: one type, one block of memory, built for speed.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Use lists for mixed data and tiny scripts. Reach for NumPy when you need vector math, speed, and friends like pandas, matplotlib, and scikit-learn.",
          },
          {
            type: "diagram",
            title: "List vs ndarray",
            nodes: [
              {
                id: "list",
                label: "Python list",
                color: "#f43f5e",
                items: ["Any types mixed", "Loop for math", "Flexible"],
              },
              {
                id: "ndarray",
                label: "NumPy ndarray",
                color: "#4f46e5",
                items: ["Same dtype", "Vectorized ops", "Fast C backend"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Python list — loop to double",
            content: `numbers = [1, 2, 3, 4]
doubled = [n * 2 for n in numbers]
print(doubled)  # [2, 4, 6, 8]`,
          },
          {
            type: "code",
            lang: "python",
            label: "NumPy array — one line",
            content: `import numpy as np

numbers = np.array([1, 2, 3, 4])
doubled = numbers * 2
print(doubled)  # [2 4 6 8]`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "The convention is `import numpy as np`. You'll see it everywhere — it's the NumPy handshake.",
          },
          {
            type: "quiz",
            question: "What is the main NumPy container type?",
            options: ["list", "tuple", "ndarray", "dict"],
            answer: 2,
            explanation:
              "NumPy stores numeric data in ndarrays (N-dimensional arrays), optimized for fast math.",
          },
        ],
        challenge: {
          title: "Import NumPy and Build an Array",
          description:
            "Import NumPy as `np`, create a 1D array from `[10, 20, 30]`, and print it.",
          starterCode: `# Import NumPy as np
# Create the array and print it

`,
          solutionCode: `import numpy as np

arr = np.array([10, 20, 30])
print(arr)`,
          tests: [
            {
              id: 1,
              label: "Imports numpy as np",
              hint: "import numpy as np",
              keywords: [{ pattern: "import\\s+numpy\\s+as\\s+np" }],
            },
            {
              id: 2,
              label: "Uses np.array",
              hint: "np.array([10, 20, 30])",
              keywords: [{ pattern: "np\\.array\\s*\\(" }],
            },
            {
              id: 3,
              label: "Prints the array",
              hint: "print(arr)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-2",
        title: "Shape, dtype & Vector Math",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "Every ndarray carries a **shape** (its dimensions) and a **dtype** (element type). Think of **game scores** in a row: shape `(5,)` means five scores; dtype `int64` means whole numbers.",
          },
          {
            type: "diagram",
            title: "Array attributes",
            nodes: [
              {
                id: "shape",
                label: "shape",
                color: "#4f46e5",
                items: ["(4,) → 1D length 4", "(2, 3) → 2 rows × 3 cols", "rows × columns"],
              },
              {
                id: "dtype",
                label: "dtype",
                color: "#10b981",
                items: ["int64", "float64", "bool"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Inspect shape and dtype",
            content: `import numpy as np

scores = np.array([88, 92, 75, 100, 85])
print(scores.shape)   # (5,)
print(scores.dtype)   # int64 (usually)`,
          },
          {
            type: "code",
            lang: "python",
            label: "Vector math — no loop needed",
            content: `import numpy as np

scores = np.array([88, 92, 75, 100, 85])
bonus = scores + 5       # add 5 to every score
doubled = scores * 2     # double every score
print(bonus)
print(doubled)`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Expressions like `a + 10` or `a * 2` apply to **every element at once**. That's vectorization — the heart of NumPy speed.",
          },
          {
            type: "quiz",
            question: "What does `np.array([1, 2, 3]).shape` return for a 1D array?",
            options: ["(3, 1)", "(3,)", "(1, 3)", "3"],
            answer: 1,
            explanation: "A 1D array of length 3 has shape `(3,)`. The trailing comma matters!",
          },
        ],
        challenge: {
          title: "Boost Every Score",
          description:
            "Create `np.array([1, 2, 3, 4])`, add 100 to every element, and print the result and the array's `shape`.",
          starterCode: `import numpy as np

# Create array, add 100, print result and shape

`,
          solutionCode: `import numpy as np

a = np.array([1, 2, 3, 4])
result = a + 100
print(result)
print(result.shape)`,
          tests: [
            {
              id: 1,
              label: "Uses np.array",
              hint: "np.array([1, 2, 3, 4])",
              keywords: [{ pattern: "np\\.array\\s*\\(" }],
            },
            {
              id: 2,
              label: "Adds 100 to the array",
              hint: "a + 100",
              keywords: [{ pattern: "\\+\\s*100" }],
            },
            {
              id: 3,
              label: "Prints shape",
              hint: "print(...shape)",
              keywords: [
                { pattern: "\\.shape" },
                { pattern: "print\\s*\\(" },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "creation",
    title: "Creating Arrays",
    icon: "🧱",
    color: "#6366f1",
    lessons: [
      {
        id: "numpy-2a",
        title: "np.array()",
        xp: 12,
        theory: [
          {
            type: "text",
            content:
              "This lesson will show how to build arrays with `np.array()`. Full lesson content is coming soon.",
          },
        ],
        challenge: {
          title: "Coming Soon",
          description:
            "This challenge will be added when the lesson content is ready.",
          starterCode: `# Lesson content coming soon

`,
          solutionCode: `import numpy as np

arr = np.array([1, 2, 3])
print(arr)`,
          tests: [
            {
              id: 1,
              label: "Uses np.array",
              hint: "np.array([1, 2, 3])",
              keywords: [{ pattern: "np\\.array\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints the array",
              hint: "print(arr)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-3",
        title: "arange & linspace",
        xp: 12,
        theory: [
          {
            type: "text",
            content:
              "Need evenly spaced numbers? **`np.arange(start, stop, step)`** is like a timeline with fixed steps — but **stop is exclusive** (like Python ranges). **`np.linspace(start, stop, num)`** picks exactly `num` points **including both endpoints**.",
          },
          {
            type: "code",
            lang: "python",
            label: "arange — step-based",
            content: `import numpy as np

# 0, 2, 4, 6, 8  (10 is excluded)
print(np.arange(0, 10, 2))`,
          },
          {
            type: "code",
            lang: "python",
            label: "linspace — count-based",
            content: `import numpy as np

# 5 evenly spaced values from 0.0 to 1.0 inclusive
print(np.linspace(0, 1, 5))
# [0.   0.25 0.5  0.75 1.  ]`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Use **arange** when you know the step size. Use **linspace** when you know how many points you want — great for plotting smooth curves.",
          },
          {
            type: "quiz",
            question: "Which function includes the stop value by default?",
            options: ["arange", "linspace", "zeros", "reshape"],
            answer: 1,
            explanation: "linspace always includes both endpoints; arange excludes stop like range().",
          },
        ],
        challenge: {
          title: "Build a Range",
          description:
            "Use `np.arange` to create `[0, 2, 4, 6, 8]` and print it.",
          starterCode: `import numpy as np

# Your code here
`,
          solutionCode: `import numpy as np

arr = np.arange(0, 10, 2)
print(arr)`,
          tests: [
            {
              id: 1,
              label: "Uses np.arange",
              hint: "np.arange(0, 10, 2)",
              keywords: [{ pattern: "np\\.arange\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints the array",
              hint: "print(arr)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-4",
        title: "zeros, ones & identity",
        xp: 12,
        theory: [
          {
            type: "text",
            content:
              "Starting a blank **spreadsheet**? Factory functions fill arrays for you: **`zeros`** (all 0s), **`ones`** (all 1s), and **`eye`** (identity matrix — 1s on the diagonal, 0s elsewhere).",
          },
          {
            type: "code",
            lang: "python",
            label: "Blank grids",
            content: `import numpy as np

z = np.zeros((2, 3))   # 2×3 grid of zeros
o = np.ones(4)         # four ones in a row
print(z.shape)         # (2, 3)
print(o)               # [1. 1. 1. 1.]`,
          },
          {
            type: "code",
            lang: "python",
            label: "Identity matrix",
            content: `import numpy as np

i = np.eye(3)
print(i)
# [[1. 0. 0.]
#  [0. 1. 0.]
#  [0. 0. 1.]]`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Identity matrices are the 'do nothing' of linear algebra — multiply any matrix by `I` and you get the same matrix back.",
          },
          {
            type: "quiz",
            question: "Which function creates a matrix with 1s on the diagonal?",
            options: ["np.ones", "np.zeros", "np.eye", "np.full"],
            answer: 2,
            explanation: "`np.eye(n)` builds an n×n identity matrix.",
          },
        ],
        challenge: {
          title: "Identity Matrix",
          description: "Create a 3×3 identity with `np.eye(3)` and print it.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

m = np.eye(3)
print(m)`,
          tests: [
            {
              id: 1,
              label: "Uses np.eye",
              hint: "np.eye(3)",
              keywords: [{ pattern: "np\\.eye\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints matrix",
              hint: "print(m)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "indexing",
    title: "Indexing & Smart Selection",
    icon: "✂️",
    color: "#8b5cf6",
    lessons: [
      {
        id: "numpy-5",
        title: "Slicing 1D & 2D",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "Picture a **pizza cut into a grid**: rows and columns. NumPy slicing works like Python lists — `a[start:stop:step]` — but 2D arrays use `a[row, col]`. Grab a whole row with `a[1, :]` or a whole column with `a[:, 0]`.",
          },
          {
            type: "diagram",
            title: "2D indexing",
            nodes: [
              {
                id: "cell",
                label: "Single cell",
                color: "#8b5cf6",
                items: ["m[1, 2]", "row 1, col 2"],
              },
              {
                id: "row",
                label: "Whole row",
                color: "#6366f1",
                items: ["m[1, :]", "m[1]"],
              },
              {
                id: "col",
                label: "Whole column",
                color: "#4f46e5",
                items: ["m[:, 0]", "all rows, col 0"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Slice rows and columns",
            content: `import numpy as np

m = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(m[1, :])   # middle row → [4 5 6]
print(m[:, 0])   # first column → [1 4 7]`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Negative indices work too! `m[-1]` is the last row, just like Python lists.",
          },
          {
            type: "quiz",
            question: "How do you select row index 2 from a 2D array `grid`?",
            options: ["grid[2]", "grid[2, :]", "grid[:, 2]", "grid(2)"],
            answer: 1,
            explanation: "Both `grid[2]` and `grid[2, :]` select row 2. The comma form is clearer for 2D.",
          },
        ],
        challenge: {
          title: "Grab the Middle Row",
          description:
            "From `np.array([[10,20],[30,40],[50,60]])`, print row index `1` (the middle row).",
          starterCode: `import numpy as np

grid = np.array([[10, 20], [30, 40], [50, 60]])
`,
          solutionCode: `import numpy as np

grid = np.array([[10, 20], [30, 40], [50, 60]])
print(grid[1])`,
          tests: [
            {
              id: 1,
              label: "Indexes row 1",
              hint: "grid[1]",
              keywords: [{ pattern: "\\[1\\]" }],
            },
            {
              id: 2,
              label: "Prints result",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-6",
        title: "Boolean Masks",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "A **boolean mask** is a True/False filter — like highlighting only high **game scores** in a spreadsheet. Write a condition (`scores > 90`) and use it inside brackets: `arr[arr > 0]`.",
          },
          {
            type: "code",
            lang: "python",
            label: "Filter positives",
            content: `import numpy as np

a = np.array([-1, 3, 0, 7, -2])
positives = a[a > 0]
print(positives)  # [3 7]`,
          },
          {
            type: "code",
            lang: "python",
            label: "See the mask itself",
            content: `import numpy as np

scores = np.array([55, 92, 78, 100, 63])
mask = scores >= 90
print(mask)              # [False  True False  True False]
print(scores[mask])      # [ 92 100]`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Masks never change the original array — they return a **new selection**. The original stays untouched.",
          },
          {
            type: "quiz",
            question: "What does `arr[arr > 5]` return?",
            options: [
              "All elements greater than 5",
              "A boolean array",
              "The index of 5",
              "An error",
            ],
            answer: 0,
            explanation: "The condition creates a mask; bracket indexing returns only elements where True.",
          },
        ],
        challenge: {
          title: "Filter Evens",
          description:
            "From `np.array([1,2,3,4,5,6])`, print only even numbers using a boolean mask.",
          starterCode: `import numpy as np

nums = np.array([1, 2, 3, 4, 5, 6])
`,
          solutionCode: `import numpy as np

nums = np.array([1, 2, 3, 4, 5, 6])
print(nums[nums % 2 == 0])`,
          tests: [
            {
              id: 1,
              label: "Uses modulo mask",
              hint: "nums % 2 == 0",
              keywords: [{ pattern: "%\\s*2\\s*==\\s*0" }],
            },
            {
              id: 2,
              label: "Prints filtered",
              hint: "print(nums[...])",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-17",
        title: "np.where & Fancy Indexing",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**`np.where(condition, x, y)`** is an if/else for arrays: where True, pick from `x`; where False, pick from `y`. **Fancy indexing** uses a list of indices to grab specific positions — like picking players #2, #5, and #7 from a roster.",
          },
          {
            type: "code",
            lang: "python",
            label: "np.where — replace values",
            content: `import numpy as np

scores = np.array([45, 88, 52, 95, 70])
# Pass if score >= 60, else 'retry'
result = np.where(scores >= 60, scores, 0)
print(result)  # [ 0 88  0 95 70]`,
          },
          {
            type: "code",
            lang: "python",
            label: "Fancy indexing",
            content: `import numpy as np

temps = np.array([72, 68, 75, 80, 65, 90])
pick = temps[[0, 2, 5]]   # Mon, Wed, Sat readings
print(pick)  # [72 75 90]`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Call `np.where(condition)` with one argument to get **indices** where True — handy for finding positions.",
          },
          {
            type: "quiz",
            question: "What does np.where(arr > 0, arr, -1) do?",
            options: [
              "Keeps positives, replaces others with -1",
              "Removes negative values",
              "Sorts the array",
              "Returns indices only",
            ],
            answer: 0,
            explanation: "Three-argument where is element-wise: positive values stay, rest become -1.",
          },
        ],
        challenge: {
          title: "Where It's Hot",
          description:
            "Given `temps = np.array([55, 72, 88, 61, 95])`, use `np.where` to replace values below 60 with `0` and keep others unchanged. Print the result.",
          starterCode: `import numpy as np

temps = np.array([55, 72, 88, 61, 95])
`,
          solutionCode: `import numpy as np

temps = np.array([55, 72, 88, 61, 95])
print(np.where(temps >= 60, temps, 0))`,
          tests: [
            {
              id: 1,
              label: "Uses np.where",
              hint: "np.where(temps >= 60, temps, 0)",
              keywords: [{ pattern: "np\\.where\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints result",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "broadcast",
    title: "Broadcasting",
    icon: "📡",
    color: "#a855f7",
    lessons: [
      {
        id: "numpy-7",
        title: "Broadcasting Rules",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Broadcasting** lets NumPy stretch smaller arrays to match larger ones — without copying huge blocks of memory. Like giving every **pizza slice** the same extra topping: one scalar `+ 5` applies to every cell.",
          },
          {
            type: "diagram",
            title: "Broadcasting shapes",
            nodes: [
              {
                id: "scalar",
                label: "Scalar + matrix",
                color: "#a855f7",
                items: ["(2,3) + 5", "5 stretches to every cell"],
              },
              {
                id: "rowcol",
                label: "Row + column",
                color: "#8b5cf6",
                items: ["(3,1) + (1,4)", "→ result (3, 4)"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Add scalar to matrix",
            content: `import numpy as np

m = np.ones((2, 3))
print(m + 5)
# [[6. 6. 6.]
#  [6. 6. 6.]]`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Shapes must be compatible from the **right**. A column vector `(3, 1)` plus a row `(1, 4)` broadcasts to `(3, 4)`.",
          },
          {
            type: "quiz",
            question: "Can you add a (3,1) array to a (1,4) array?",
            options: [
              "Yes, broadcasts to (3,4)",
              "No, shapes must match exactly",
              "Only if both are 1D",
              "Only with np.dot",
            ],
            answer: 0,
            explanation: "NumPy stretches both to (3,4) via broadcasting rules.",
          },
        ],
        challenge: {
          title: "Broadcast a Scalar",
          description: "Create `np.zeros((2, 2))`, add `10`, and print the result.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

a = np.zeros((2, 2))
print(a + 10)`,
          tests: [
            {
              id: 1,
              label: "Uses zeros",
              hint: "np.zeros((2, 2))",
              keywords: [{ pattern: "np\\.zeros\\s*\\(" }],
            },
            {
              id: 2,
              label: "Adds 10",
              hint: "a + 10",
              keywords: [{ pattern: "\\+\\s*10" }],
            },
            {
              id: 3,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-7b",
        title: "Row vs Column Operations",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "A 2D array is like a **cafeteria menu board**: rows are dishes, columns are days. **`axis=1`** works **across** a row (one total per dish). **`axis=0`** works **down** a column (one total per day).",
          },
          {
            type: "text",
            content:
              "Example: each row is one food truck’s sales for Mon–Wed. `sum(axis=1)` = weekly total **per truck**. `sum(axis=0)` = total **per day** across all trucks.",
          },
          {
            type: "code",
            lang: "python",
            label: "Total sales per truck (axis=1)",
            content: `import numpy as np

sales = np.array([[100, 120, 90],   # Truck A
                  [80, 95, 110]])    # Truck B
print(sales.sum(axis=1))   # [310 285]`,
          },
          {
            type: "code",
            lang: "python",
            label: "Total sales per day (axis=0)",
            content: `import numpy as np

sales = np.array([[100, 120, 90],
                  [80, 95, 110]])
print(sales.mean(axis=0))   # [90. 107.5 100. ]`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Memory trick: **axis=0** collapses **rows** (you move down). **axis=1** collapses **columns** (you move sideways).",
          },
          {
            type: "quiz",
            question: "For a (3, 4) array, which axis gives one result per row?",
            options: ["axis=0", "axis=1", "axis=2", "no axis"],
            answer: 1,
            explanation: "axis=1 reduces across columns inside each row.",
          },
        ],
        challenge: {
          title: "Busiest Day for All Trucks",
          description:
            "Given `sales = np.array([[50, 60], [70, 40], [55, 65]])`, print `sales.sum(axis=0)` (total per column/day).",
          starterCode: `import numpy as np

sales = np.array([[50, 60], [70, 40], [55, 65]])
`,
          solutionCode: `import numpy as np

sales = np.array([[50, 60], [70, 40], [55, 65]])
print(sales.sum(axis=0))`,
          tests: [
            {
              id: 1,
              label: "Uses sum",
              hint: "sales.sum(axis=0)",
              keywords: [{ pattern: "\\.sum\\s*\\(" }],
            },
            {
              id: 2,
              label: "axis=0",
              hint: "axis=0",
              keywords: [{ pattern: "axis\\s*=\\s*0" }],
            },
            {
              id: 3,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-8",
        title: "2D Element-wise Ops",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Multiply, divide, and compare entire matrices **cell by cell** with `*`, `/`, and `>`. This is **not** matrix multiplication — it's like applying a discount to every item in a price grid independently.",
          },
          {
            type: "code",
            lang: "python",
            label: "Element-wise multiply",
            content: `import numpy as np

prices = np.array([[10, 20], [30, 40]])
multipliers = np.array([[1, 2], [3, 4]])
print(prices * multipliers)
# [[ 10  40]
#  [ 90 160]]`,
          },
          {
            type: "code",
            lang: "python",
            label: "Compare element-wise",
            content: `import numpy as np

scores = np.array([[70, 85], [90, 55]])
print(scores >= 80)
# [[False  True]
#  [ True False]]`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Remember: `*` is element-wise. For true matrix multiply, use `@` or `np.matmul` (coming up in Linear Algebra!).",
          },
          {
            type: "quiz",
            question: "What operator performs element-wise multiplication?",
            options: ["@", "np.dot", "*", "np.cross"],
            answer: 2,
            explanation: "The `*` operator multiplies corresponding elements, not rows×columns.",
          },
        ],
        challenge: {
          title: "Scale Each Cell",
          description:
            "Multiply `np.array([[2,4],[6,8]])` by `np.array([[1,10],[100,1000]])` element-wise and print.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

a = np.array([[2, 4], [6, 8]])
b = np.array([[1, 10], [100, 1000]])
print(a * b)`,
          tests: [
            {
              id: 1,
              label: "Two np.array calls",
              hint: "np.array(...)",
              keywords: [{ pattern: "np\\.array" }],
            },
            {
              id: 2,
              label: "Element-wise *",
              hint: "a * b",
              keywords: [{ pattern: "\\*" }],
            },
            {
              id: 3,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "linalg",
    title: "Linear Algebra",
    icon: "📐",
    color: "#ec4899",
    lessons: [
      {
        id: "numpy-9",
        title: "Dot Product",
        xp: 16,
        theory: [
          {
            type: "text",
            content:
              "The **dot product** multiplies matching pairs and sums them — like combining ingredient amounts with recipe weights. **`np.dot(a, b)`** handles 1D vectors (scalar result) and follows matrix rules for 2D.",
          },
          {
            type: "code",
            lang: "python",
            label: "Vector dot",
            content: `import numpy as np

u = np.array([1, 2, 3])
v = np.array([4, 5, 6])
print(np.dot(u, v))  # 1*4 + 2*5 + 3*6 = 32`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Dot product measures how much two vectors point in the same direction — used in ML, physics, and graphics.",
          },
          {
            type: "quiz",
            question: "np.dot([1,2], [3,4]) equals?",
            options: ["10", "11", "[3, 8]", "[4, 6]"],
            answer: 1,
            explanation: "1×3 + 2×4 = 3 + 8 = 11.",
          },
        ],
        challenge: {
          title: "Dot Two Vectors",
          description: "Dot `[1, 2]` with `[3, 4]` using `np.dot` and print the scalar.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

a = np.array([1, 2])
b = np.array([3, 4])
print(np.dot(a, b))`,
          tests: [
            {
              id: 1,
              label: "Uses np.dot",
              hint: "np.dot(a, b)",
              keywords: [{ pattern: "np\\.dot\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-10",
        title: "Matrix Multiply @",
        xp: 16,
        theory: [
          {
            type: "text",
            content:
              "True **matrix multiplication** combines rows and columns — use **`@`** or **`np.matmul`**. This is different from element-wise `*`! Think of it as a machine: each output cell is a dot product of a row with a column.",
          },
          {
            type: "code",
            lang: "python",
            label: "2×2 multiply",
            content: `import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[2, 0], [1, 2]])
print(A @ B)
# [[4 4]
#  [10 8]]`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Multiplying by an identity matrix `np.eye(n)` leaves your matrix unchanged — a quick sanity check!",
          },
          {
            type: "quiz",
            question: "Which operator performs matrix multiplication?",
            options: ["*", "np.multiply", "@", "np.add"],
            answer: 2,
            explanation: "The `@` operator (Python 3.5+) does matrix multiplication.",
          },
        ],
        challenge: {
          title: "Multiply Matrices",
          description:
            "Multiply `[[1,0],[0,1]]` by `[[5,6],[7,8]]` with `@` and print.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

I = np.array([[1, 0], [0, 1]])
M = np.array([[5, 6], [7, 8]])
print(I @ M)`,
          tests: [
            {
              id: 1,
              label: "Uses @ operator",
              hint: "I @ M",
              keywords: [{ pattern: "@" }],
            },
            {
              id: 2,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-18",
        title: "Solve & Determinants",
        xp: 17,
        theory: [
          {
            type: "text",
            content:
              "Got equations to solve? **`np.linalg.solve(A, b)`** finds `x` in `Ax = b`. **`np.linalg.det(A)`** tells you if a matrix is invertible (det ≠ 0). Like unlocking a puzzle: solve finds the key, determinant checks if the lock exists.",
          },
          {
            type: "code",
            lang: "python",
            label: "Solve a system",
            content: `# 2x + y = 5
# x + 3y = 7
import numpy as np

A = np.array([[2, 1], [1, 3]])
b = np.array([5, 7])
x = np.linalg.solve(A, b)
print(x)  # [1.6 1.8] approximately`,
          },
          {
            type: "code",
            lang: "python",
            label: "Determinant",
            content: `import numpy as np

M = np.array([[1, 2], [3, 4]])
print(np.linalg.det(M))  # -2.0`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Always use square, non-singular matrices with solve. If det is ~0, the system has no unique solution.",
          },
          {
            type: "quiz",
            question: "Which function solves Ax = b?",
            options: ["np.dot", "np.linalg.solve", "np.linalg.det", "np.inv @ b only"],
            answer: 1,
            explanation: "np.linalg.solve(A, b) is the direct, numerically stable solver.",
          },
        ],
        challenge: {
          title: "Solve the System",
          description:
            "Solve `A @ x = b` where `A = [[3, 1], [1, 2]]` and `b = [9, 8]` using `np.linalg.solve`. Print `x`.",
          starterCode: `import numpy as np

A = np.array([[3, 1], [1, 2]])
b = np.array([9, 8])
`,
          solutionCode: `import numpy as np

A = np.array([[3, 1], [1, 2]])
b = np.array([9, 8])
x = np.linalg.solve(A, b)
print(x)`,
          tests: [
            {
              id: 1,
              label: "Uses np.linalg.solve",
              hint: "np.linalg.solve(A, b)",
              keywords: [{ pattern: "np\\.linalg\\.solve\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints x",
              hint: "print(x)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "aggregate",
    title: "Stats & Aggregation",
    icon: "📊",
    color: "#f43f5e",
    lessons: [
      {
        id: "numpy-11",
        title: "sum, mean, min, max",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "**Reductions** collapse many values into one — perfect for **weather data** summaries. NumPy arrays expose `.sum()`, `.mean()`, `.min()`, and `.max()` as fast, one-liner stats.",
          },
          {
            type: "code",
            lang: "python",
            label: "Daily temperature stats",
            content: `import numpy as np

temps = np.array([72, 68, 75, 80, 65])
print(temps.sum())    # 360
print(temps.mean())   # 72.0
print(temps.max())    # 80`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "You can also call `np.mean(temps)` — method vs function, same result.",
          },
          {
            type: "quiz",
            question: "Which method returns the arithmetic average?",
            options: [".sum()", ".mean()", ".max()", ".std()"],
            answer: 1,
            explanation: ".mean() computes the average of all elements.",
          },
        ],
        challenge: {
          title: "Average Score",
          description: "Print the mean of `np.array([80, 90, 70, 100])`.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

scores = np.array([80, 90, 70, 100])
print(scores.mean())`,
          tests: [
            {
              id: 1,
              label: "Uses mean",
              hint: "scores.mean()",
              keywords: [{ pattern: "\\.mean\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-12",
        title: "axis=0 vs axis=1",
        xp: 16,
        theory: [
          {
            type: "text",
            content:
              "In a 2D grid, **`axis=0`** collapses **down columns** (think: sum each column). **`axis=1`** collapses **across rows** (sum each row). Imagine a scoreboard: axis=0 totals per round, axis=1 totals per player.",
          },
          {
            type: "diagram",
            title: "Axis direction",
            nodes: [
              {
                id: "axis0",
                label: "axis=0 ↓",
                color: "#f43f5e",
                items: ["Collapse rows", "One result per column"],
              },
              {
                id: "axis1",
                label: "axis=1 →",
                color: "#ec4899",
                items: ["Collapse columns", "One result per row"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Column vs row sums",
            content: `import numpy as np

m = np.array([[1, 2, 3], [4, 5, 6]])
print(m.sum(axis=0))  # [5 7 9] — column totals
print(m.sum(axis=1))  # [ 6 15] — row totals`,
          },
          {
            type: "quiz",
            question: "To sum each row of a 2D array, use axis=?",
            options: ["0", "1", "-1 only", "None"],
            answer: 1,
            explanation: "axis=1 operates across columns within each row.",
          },
        ],
        challenge: {
          title: "Sum Each Row",
          description:
            "For `np.array([[1,2],[3,4],[5,6]])`, print `sum` along `axis=1`.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

m = np.array([[1, 2], [3, 4], [5, 6]])
print(m.sum(axis=1))`,
          tests: [
            {
              id: 1,
              label: "Uses sum",
              hint: "m.sum(...)",
              keywords: [{ pattern: "\\.sum\\s*\\(" }],
            },
            {
              id: 2,
              label: "axis=1",
              hint: "axis=1",
              keywords: [{ pattern: "axis\\s*=\\s*1" }],
            },
            {
              id: 3,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-19",
        title: "NaN & Percentiles",
        xp: 16,
        theory: [
          {
            type: "text",
            content:
              "Real **weather data** has gaps — missing sensors show up as **NaN** (Not a Number). Use **`np.nanmean`**, **`np.nansum`**, etc. to ignore them. **Percentiles** tell you thresholds: the 90th percentile is hotter than 90% of readings.",
          },
          {
            type: "code",
            lang: "python",
            label: "Ignore NaN in stats",
            content: `import numpy as np

temps = np.array([72, np.nan, 68, 75, np.nan])
print(np.nanmean(temps))  # 71.666...
print(np.isnan(temps))    # [False  True False False  True]`,
          },
          {
            type: "code",
            lang: "python",
            label: "Percentiles",
            content: `import numpy as np

scores = np.array([55, 70, 85, 90, 100])
print(np.percentile(scores, 50))   # median → 85.0
print(np.percentile(scores, 90))   # 90th pct → 97.0`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Regular `.mean()` on NaN data returns NaN. Always reach for `nan*` functions when data has holes.",
          },
          {
            type: "quiz",
            question: "Which function computes mean ignoring NaN?",
            options: ["np.mean", "np.nanmean", "np.average", "np.median only"],
            answer: 1,
            explanation: "np.nanmean skips NaN values automatically.",
          },
        ],
        challenge: {
          title: "Mean Despite Missing Data",
          description:
            "Print `np.nanmean` of `np.array([10.0, np.nan, 20.0, 30.0])`.",
          starterCode: `import numpy as np

data = np.array([10.0, np.nan, 20.0, 30.0])
`,
          solutionCode: `import numpy as np

data = np.array([10.0, np.nan, 20.0, 30.0])
print(np.nanmean(data))`,
          tests: [
            {
              id: 1,
              label: "Uses np.nanmean",
              hint: "np.nanmean(data)",
              keywords: [{ pattern: "np\\.nanmean\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "reshape",
    title: "Reshape & Combine",
    icon: "🔀",
    color: "#f97316",
    lessons: [
      {
        id: "numpy-13",
        title: "reshape",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "**`reshape`** changes the layout of your data without adding or removing values — like turning a line of **12 eggs** into a **3×4** carton. The total count must stay the same.",
          },
          {
            type: "code",
            lang: "python",
            label: "Line of numbers → photo grid",
            content: `import numpy as np

pixels = np.arange(12)
image = pixels.reshape(3, 4)
print(image.shape)   # (3, 4)`,
          },
          {
            type: "code",
            lang: "python",
            label: "Let NumPy pick one side with -1",
            content: `import numpy as np

data = np.arange(20)
table = data.reshape(4, -1)   # 4 rows, auto columns
print(table.shape)   # (4, 5)`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Only one dimension can be `-1`. NumPy fills in that size from the total element count.",
          },
          {
            type: "quiz",
            question: "Can you reshape 6 elements into (2, 4)?",
            options: ["Yes", "No — 2×4=8 ≠ 6", "Only if 1D", "Only with stack"],
            answer: 1,
            explanation: "Rows × columns must equal the number of elements.",
          },
        ],
        challenge: {
          title: "Make a 2×3 Grid",
          description: "Reshape `np.arange(6)` to `(2, 3)` and print.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

a = np.arange(6)
print(a.reshape(2, 3))`,
          tests: [
            {
              id: 1,
              label: "Uses arange",
              hint: "np.arange(6)",
              keywords: [{ pattern: "np\\.arange" }],
            },
            {
              id: 2,
              label: "reshape(2, 3)",
              hint: "reshape(2, 3)",
              keywords: [{ pattern: "reshape\\s*\\(\\s*2\\s*,\\s*3\\s*\\)" }],
            },
            {
              id: 3,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-13b",
        title: "transpose & ravel",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "**.T** (transpose) swaps rows and columns — handy when a **timetable** is stored with days as rows but you need days as columns for a chart.",
          },
          {
            type: "text",
            content:
              "**`ravel()`** flattens any shape into one long 1D list, reading row by row. It is quick and often shares memory with the original (a view).",
          },
          {
            type: "code",
            lang: "python",
            label: "Transpose a class schedule",
            content: `import numpy as np

# rows = periods, cols = Mon–Wed
schedule = np.array([[1, 2, 3],
                     [4, 5, 6]])
print(schedule.T)
# now rows = days, cols = periods`,
          },
          {
            type: "code",
            lang: "python",
            label: "Ravel then reshape again",
            content: `import numpy as np

board = np.array([[9, 8], [7, 6]])
flat = board.ravel()
back = flat.reshape(2, 2)
print(back)`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Need a flat copy you can edit safely? Use `flatten()` — it always copies. `ravel()` is for speed when you only read the data.",
          },
          {
            type: "quiz",
            question: "What does `.T` do on a 2D array?",
            options: [
              "Sorts smallest to largest",
              "Swaps rows and columns",
              "Removes duplicates",
              "Adds a new row",
            ],
            answer: 1,
            explanation: "Transpose flips the grid along the diagonal.",
          },
        ],
        challenge: {
          title: "Flip and Flatten",
          description:
            "Create `grid = np.array([[1,2,3],[4,5,6]])`, print `grid.T`, then print `grid.ravel()`.",
          starterCode: `import numpy as np

grid = np.array([[1, 2, 3], [4, 5, 6]])
`,
          solutionCode: `import numpy as np

grid = np.array([[1, 2, 3], [4, 5, 6]])
print(grid.T)
print(grid.ravel())`,
          tests: [
            {
              id: 1,
              label: "Uses .T",
              hint: "grid.T",
              keywords: [{ pattern: "\\.T" }],
            },
            {
              id: 2,
              label: "Uses ravel",
              hint: "grid.ravel()",
              keywords: [{ pattern: "\\.ravel\\s*\\(" }],
            },
            {
              id: 3,
              label: "Prints twice",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-14",
        title: "stack & concatenate",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "Join arrays like stacking **game score** sheets: **`np.vstack`** stacks rows (vertical), **`np.hstack`** stacks columns (horizontal). **`np.concatenate`** is the general version along any axis.",
          },
          {
            type: "code",
            lang: "python",
            label: "Vertical stack",
            content: `import numpy as np

week1 = np.array([80, 90, 85])
week2 = np.array([88, 92, 78])
combined = np.vstack([week1, week2])
print(combined.shape)  # (2, 3)`,
          },
          {
            type: "code",
            lang: "python",
            label: "Horizontal stack",
            content: `import numpy as np

names_col = np.array([[1], [2]])
scores_col = np.array([[95], [87]])
print(np.hstack([names_col, scores_col]))`,
          },
          {
            type: "quiz",
            question: "Which stacks arrays as new rows?",
            options: ["hstack", "vstack", "concatenate axis=1 only", "dot"],
            answer: 1,
            explanation: "vstack vertically stacks — each input becomes a row.",
          },
        ],
        challenge: {
          title: "Stack Vertically",
          description: "Vertically stack `[1,2]` and `[3,4]` with `np.vstack` and print.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

a = np.array([1, 2])
b = np.array([3, 4])
print(np.vstack([a, b]))`,
          tests: [
            {
              id: 1,
              label: "Uses vstack",
              hint: "np.vstack([a, b])",
              keywords: [{ pattern: "np\\.vstack\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "random",
    title: "Random & Luck",
    icon: "🎲",
    color: "#eab308",
    lessons: [
      {
        id: "numpy-20",
        title: "Random Numbers & Seed",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "Need fake data or simulations? **`np.random.rand`** gives uniform floats in [0, 1). **`np.random.randint`** picks random integers. Set a **seed** with **`np.random.seed(42)`** to get reproducible 'luck' — same seed, same numbers every run.",
          },
          {
            type: "code",
            lang: "python",
            label: "Random floats and ints",
            content: `import numpy as np

print(np.random.rand(3))        # 3 random floats
print(np.random.randint(1, 7, 5))  # five dice rolls (1–6)`,
          },
          {
            type: "code",
            lang: "python",
            label: "Reproducible with seed",
            content: `import numpy as np

np.random.seed(42)
print(np.random.rand(3))

np.random.seed(42)
print(np.random.rand(3))  # identical!`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Seeds are essential for debugging ML models and sharing reproducible experiments.",
          },
          {
            type: "quiz",
            question: "Why set np.random.seed()?",
            options: [
              "Faster computation",
              "Reproducible random results",
              "Better accuracy",
              "Required for arrays",
            ],
            answer: 1,
            explanation: "A fixed seed makes random sequences repeatable.",
          },
        ],
        challenge: {
          title: "Roll the Dice",
          description:
            "Set seed to `7`, then print `np.random.randint(1, 7, size=5)` (five dice rolls).",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

np.random.seed(7)
print(np.random.randint(1, 7, size=5))`,
          tests: [
            {
              id: 1,
              label: "Sets seed",
              hint: "np.random.seed(7)",
              keywords: [{ pattern: "np\\.random\\.seed\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses randint",
              hint: "np.random.randint(1, 7, ...)",
              keywords: [{ pattern: "np\\.random\\.randint\\s*\\(" }],
            },
            {
              id: 3,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-21",
        title: "choice, shuffle & permutation",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**`np.random.choice`** draws items from a list — like picking **raffle tickets** from a bowl. Use `replace=False` when each ticket can only win once.",
          },
          {
            type: "text",
            content:
              "**`shuffle`** reorders an array in place (same cards, new order). **`permutation`** returns a **new** shuffled copy and leaves the original alone — useful when you must keep the old order for records.",
          },
          {
            type: "code",
            lang: "python",
            label: "Pick lunch spots without repeating",
            content: `import numpy as np

spots = np.array(["tacos", "pasta", "sushi", "burger"])
lunch_week = np.random.choice(spots, size=3, replace=False)
print(lunch_week)`,
          },
          {
            type: "code",
            lang: "python",
            label: "Shuffle vs permutation",
            content: `import numpy as np

queue = np.array([101, 102, 103, 104])
np.random.shuffle(queue)
print("shuffled queue:", queue)

nums = np.array([10, 20, 30])
shuffled_copy = np.random.permutation(nums)
print("original:", nums)
print("permuted:", shuffled_copy)`,
          },
          {
            type: "quiz",
            question: "Which leaves the original array unchanged?",
            options: [
              "np.random.shuffle",
              "np.random.permutation",
              "both",
              "neither",
            ],
            answer: 1,
            explanation: "permutation returns a new array; shuffle edits in place.",
          },
        ],
        challenge: {
          title: "Fair Team Picker",
          description:
            "From `teams = np.array(['Red','Blue','Green','Yellow'])`, print `np.random.choice(teams, size=2, replace=False)`.",
          starterCode: `import numpy as np

teams = np.array(["Red", "Blue", "Green", "Yellow"])
`,
          solutionCode: `import numpy as np

teams = np.array(["Red", "Blue", "Green", "Yellow"])
print(np.random.choice(teams, size=2, replace=False))`,
          tests: [
            {
              id: 1,
              label: "Uses np.random.choice",
              hint: "np.random.choice(teams, ...)",
              keywords: [{ pattern: "np\\.random\\.choice\\s*\\(" }],
            },
            {
              id: 2,
              label: "replace=False",
              hint: "replace=False",
              keywords: [{ pattern: "replace\\s*=\\s*False" }],
            },
            {
              id: 3,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-21b",
        title: "Random Simulations",
        xp: 16,
        theory: [
          {
            type: "text",
            content:
              "A **simulation** uses random numbers to mimic real life — coin tosses, dice games, or guessing how many customers visit a shop each hour.",
          },
          {
            type: "text",
            content:
              "Run many trials and look at averages. More trials usually get closer to what you expect (dice average near 3.5). Set a **seed** when you want the same “random” story every time you test code.",
          },
          {
            type: "code",
            lang: "python",
            label: "Simulate 20 coin flips",
            content: `import numpy as np

np.random.seed(0)
flips = np.random.randint(0, 2, size=20)  # 0=heads, 1=tails
heads = np.sum(flips == 0)
print("Heads:", heads, "Tails:", 20 - heads)`,
          },
          {
            type: "code",
            lang: "python",
            label: "Average of 100 dice rolls",
            content: `import numpy as np

np.random.seed(42)
rolls = np.random.randint(1, 7, size=100)
print("Average roll:", rolls.mean())`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Simulations help you test ideas before building expensive real-world experiments.",
          },
          {
            type: "quiz",
            question: "Why run many random trials in a simulation?",
            options: [
              "To slow Python down",
              "To see stable patterns in random outcomes",
              "To remove NaN",
              "To change array dtype",
            ],
            answer: 1,
            explanation: "Large samples reveal averages and probabilities more clearly.",
          },
        ],
        challenge: {
          title: "Roll 50 Dice",
          description:
            "Set `np.random.seed(1)`, create `rolls = np.random.randint(1, 7, size=50)`, and print `rolls.mean()`.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

np.random.seed(1)
rolls = np.random.randint(1, 7, size=50)
print(rolls.mean())`,
          tests: [
            {
              id: 1,
              label: "Sets seed",
              hint: "np.random.seed(1)",
              keywords: [{ pattern: "np\\.random\\.seed\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses randint size 50",
              hint: "randint(1, 7, size=50)",
              keywords: [{ pattern: "randint\\s*\\(\\s*1\\s*,\\s*7" }],
            },
            {
              id: 3,
              label: "Prints mean",
              hint: "rolls.mean()",
              keywords: [{ pattern: "\\.mean\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "data-skills",
    title: "Real-World Data Skills",
    icon: "🌍",
    color: "#14b8a6",
    lessons: [
      {
        id: "numpy-22",
        title: "Cleaning NaN Values",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Messy sensor **weather data**? Find gaps with **`np.isnan`**, fill them with **`np.nan_to_num`** or a custom value, or drop them with **`~np.isnan(arr)`** masks. Clean data = trustworthy stats.",
          },
          {
            type: "code",
            lang: "python",
            label: "Detect and filter NaN",
            content: `import numpy as np

readings = np.array([72.0, np.nan, 68.0, np.nan, 75.0])
clean = readings[~np.isnan(readings)]
print(clean)  # [72. 68. 75.]`,
          },
          {
            type: "code",
            lang: "python",
            label: "Replace NaN with zero",
            content: `import numpy as np

data = np.array([1.0, np.nan, 3.0])
fixed = np.nan_to_num(data, nan=0.0)
print(fixed)  # [1. 0. 3.]`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Choosing fill vs drop depends on context — weather gaps might use interpolation; survey blanks might use zero.",
          },
          {
            type: "quiz",
            question: "How do you keep only non-NaN values?",
            options: [
              "arr[np.isnan(arr)]",
              "arr[~np.isnan(arr)]",
              "arr[None]",
              "np.delete all",
            ],
            answer: 1,
            explanation: "~np.isnan inverts the mask to select valid values.",
          },
        ],
        challenge: {
          title: "Drop the Gaps",
          description:
            "From `readings = np.array([1.0, np.nan, 3.0, np.nan, 5.0])`, print only non-NaN values using a boolean mask.",
          starterCode: `import numpy as np

readings = np.array([1.0, np.nan, 3.0, np.nan, 5.0])
`,
          solutionCode: `import numpy as np

readings = np.array([1.0, np.nan, 3.0, np.nan, 5.0])
print(readings[~np.isnan(readings)])`,
          tests: [
            {
              id: 1,
              label: "Uses isnan",
              hint: "np.isnan(readings)",
              keywords: [{ pattern: "np\\.isnan\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints filtered",
              hint: "print(readings[...])",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-23",
        title: "sort, argsort & unique",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**`np.sort`** lines up values from low to high — like sorting **playlist lengths** shortest first. **`np.argsort`** gives the **positions** that would do that sort, so you can rank data without moving the original list.",
          },
          {
            type: "text",
            content:
              "**`np.unique`** finds distinct values and can count how many times each appears — great for “how many students picked each answer?” on a survey.",
          },
          {
            type: "code",
            lang: "python",
            label: "Sort and find the winner index",
            content: `import numpy as np

times = np.array([42.1, 38.5, 40.0, 39.2])
order = np.argsort(times)
print("Fastest runner index:", order[0])
print("Sorted times:", np.sort(times))`,
          },
          {
            type: "code",
            lang: "python",
            label: "Count shirt sizes sold",
            content: `import numpy as np

sizes = np.array(["M", "S", "M", "L", "S", "M"])
labels, counts = np.unique(sizes, return_counts=True)
print(labels)
print(counts)   # how many S, M, L`,
          },
          {
            type: "quiz",
            question: "Which function returns only distinct values (and optional counts)?",
            options: ["np.sort", "np.unique", "np.argsort", "np.ravel"],
            answer: 1,
            explanation: "np.unique removes duplicates; return_counts=True adds tallies.",
          },
        ],
        challenge: {
          title: "Count Each Answer",
          description:
            "For `answers = np.array([1, 2, 2, 3, 1, 2])`, print `np.unique(answers, return_counts=True)`.",
          starterCode: `import numpy as np

answers = np.array([1, 2, 2, 3, 1, 2])
`,
          solutionCode: `import numpy as np

answers = np.array([1, 2, 2, 3, 1, 2])
print(np.unique(answers, return_counts=True))`,
          tests: [
            {
              id: 1,
              label: "Uses np.unique",
              hint: "np.unique(answers, return_counts=True)",
              keywords: [{ pattern: "np\\.unique\\s*\\(" }],
            },
            {
              id: 2,
              label: "return_counts=True",
              hint: "return_counts=True",
              keywords: [{ pattern: "return_counts\\s*=\\s*True" }],
            },
            {
              id: 3,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-24",
        title: "Save & Load .npy",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Finished crunching? **`np.save('file.npy', arr)`** writes a binary file. **`np.load('file.npy')`** reads it back — fast, compact, and dtype-safe. Like freezing your spreadsheet for later.",
          },
          {
            type: "code",
            lang: "python",
            label: "Save and load",
            content: `import numpy as np

data = np.array([1, 2, 3, 4])
np.save("my_data.npy", data)
loaded = np.load("my_data.npy")
print(loaded)`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use `np.savez` for multiple named arrays in one `.npz` archive — great for train/test splits.",
          },
          {
            type: "quiz",
            question: "Which loads a .npy file?",
            options: ["np.read", "np.load", "np.open", "pickle.load only"],
            answer: 1,
            explanation: "np.load is the standard loader for .npy and .npz files.",
          },
        ],
        challenge: {
          title: "Round-Trip an Array",
          description:
            "Create `arr = np.array([10, 20, 30])`, save it with `np.save('temp_arr.npy', arr)`, load with `np.load('temp_arr.npy')`, and print the loaded array.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

arr = np.array([10, 20, 30])
np.save("temp_arr.npy", arr)
loaded = np.load("temp_arr.npy")
print(loaded)`,
          tests: [
            {
              id: 1,
              label: "Uses np.save",
              hint: "np.save('temp_arr.npy', arr)",
              keywords: [{ pattern: "np\\.save\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses np.load",
              hint: "np.load('temp_arr.npy')",
              keywords: [{ pattern: "np\\.load\\s*\\(" }],
            },
            {
              id: 3,
              label: "Prints loaded",
              hint: "print(loaded)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "mastery",
    title: "NumPy Mastery",
    icon: "⚡",
    color: "#0ea5e9",
    lessons: [
      {
        id: "numpy-25",
        title: "Views vs Copy",
        xp: 16,
        theory: [
          {
            type: "text",
            content:
              "Slicing often returns a **view** — a window into the same memory. Change the view, and the original changes too! **`.copy()`** makes an independent clone. Like photocopying a **pizza order** vs pointing at the same slip.",
          },
          {
            type: "code",
            lang: "python",
            label: "View surprise",
            content: `import numpy as np

a = np.array([1, 2, 3, 4, 5])
view = a[1:4]
view[0] = 99
print(a)  # [ 1 99  3  4  5] — original changed!`,
          },
          {
            type: "code",
            lang: "python",
            label: "Safe copy",
            content: `import numpy as np

a = np.array([1, 2, 3, 4, 5])
safe = a[1:4].copy()
safe[0] = 99
print(a)   # [1 2 3 4 5] — untouched
print(safe)  # [99  2  3]`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "reshape usually returns a view; flatten() always copies. When in doubt, `.copy()`.",
          },
          {
            type: "quiz",
            question: "How do you guarantee an independent array slice?",
            options: [".view()", ".copy()", "[:]", "np.array only"],
            answer: 1,
            explanation: ".copy() allocates new memory for a true duplicate.",
          },
        ],
        challenge: {
          title: "Copy Before You Tweak",
          description:
            "From `a = np.array([10, 20, 30, 40])`, copy `a[1:3]` with `.copy()`, set the first element of the copy to `999`, and print both `a` and the copy.",
          starterCode: `import numpy as np

a = np.array([10, 20, 30, 40])
`,
          solutionCode: `import numpy as np

a = np.array([10, 20, 30, 40])
b = a[1:3].copy()
b[0] = 999
print(a)
print(b)`,
          tests: [
            {
              id: 1,
              label: "Uses .copy()",
              hint: "a[1:3].copy()",
              keywords: [{ pattern: "\\.copy\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints both arrays",
              hint: "print(a) and print(b)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-26",
        title: "ufuncs & vectorization",
        xp: 16,
        theory: [
          {
            type: "text",
            content:
              "**Ufuncs** (universal functions) such as `np.sqrt`, `np.log`, and `np.abs` work on every element at once. **Vectorization** means writing `arr * 2` instead of looping — NumPy runs the work in fast compiled code.",
          },
          {
            type: "text",
            content:
              "Picture converting **1000 battery percentages** to decimals: one ufunc call beats 1000 lines of Python `for` loops.",
          },
          {
            type: "code",
            lang: "python",
            label: "Ufuncs on sensor readings",
            content: `import numpy as np

readings = np.array([0.25, 1.0, 4.0, 9.0])
print(np.sqrt(readings))
print(np.round(readings * 100))   # percent style`,
          },
          {
            type: "code",
            lang: "python",
            label: "Vectorized vs mental loop",
            content: `import numpy as np

prices = np.array([10, 20, 30])
discounted = prices * 0.9 + 1   # 10% off plus $1 fee, all at once
print(discounted)`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Before writing `for x in arr`, check if `+`, `*`, or a ufunc like `np.maximum` can do the job in one line.",
          },
          {
            type: "quiz",
            question: "What is vectorization in NumPy?",
            options: [
              "Drawing arrows on plots",
              "Applying an operation to whole arrays without Python loops",
              "Storing strings only",
              "Using only 1D arrays",
            ],
            answer: 1,
            explanation: "Vectorized code runs bulk math on arrays efficiently.",
          },
        ],
        challenge: {
          title: "Vectorized Square Roots",
          description:
            "Print `np.sqrt` of `np.array([0, 1, 4, 9, 16])`.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

a = np.array([0, 1, 4, 9, 16])
print(np.sqrt(a))`,
          tests: [
            {
              id: 1,
              label: "Uses np.sqrt",
              hint: "np.sqrt(a)",
              keywords: [{ pattern: "np\\.sqrt\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-26b",
        title: "Speed & Memory Efficiency",
        xp: 16,
        theory: [
          {
            type: "text",
            content:
              "NumPy is fast because it stores numbers in a compact block and runs math in C. **Memory** matters when arrays get huge — a million `float64` values use more RAM than a million `float32` values.",
          },
          {
            type: "text",
            content:
              "Avoid extra **copies** when you do not need them. Slicing can be a view (shared memory); `.copy()` is for when you must change data without touching the original.",
          },
          {
            type: "code",
            lang: "python",
            label: "Compare memory: float64 vs float32",
            content: `import numpy as np

big = np.zeros(1_000_000, dtype=np.float64)
small = np.zeros(1_000_000, dtype=np.float32)
print(big.nbytes, small.nbytes)`,
          },
          {
            type: "code",
            lang: "python",
            label: "Vectorized math on a big range",
            content: `import numpy as np

hours = np.arange(24)
bill = hours * 0.15 + 2.0   # energy cost formula, all hours at once
print(bill[0], bill[-1])`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Use float32 for very large image or audio buffers when full double precision is not needed — you save RAM and often gain speed.",
          },
          {
            type: "quiz",
            question: "Why is `arr * 2` usually faster than a Python for-loop?",
            options: [
              "Python forbids loops on lists",
              "NumPy runs the operation in optimized code on the whole array",
              "It always uses less disk space",
              "It converts arrays to strings",
            ],
            answer: 1,
            explanation: "Bulk array ops avoid slow per-element Python overhead.",
          },
        ],
        challenge: {
          title: "Which Uses Less RAM?",
          description:
            "Create `a = np.zeros(100, dtype=np.float64)` and `b = np.zeros(100, dtype=np.float32)`. Print `a.nbytes` and `b.nbytes`.",
          starterCode: `import numpy as np

`,
          solutionCode: `import numpy as np

a = np.zeros(100, dtype=np.float64)
b = np.zeros(100, dtype=np.float32)
print(a.nbytes, b.nbytes)`,
          tests: [
            {
              id: 1,
              label: "float64 array",
              hint: "dtype=np.float64",
              keywords: [{ pattern: "float64" }],
            },
            {
              id: 2,
              label: "float32 array",
              hint: "dtype=np.float32",
              keywords: [{ pattern: "float32" }],
            },
            {
              id: 3,
              label: "Prints nbytes",
              hint: "a.nbytes, b.nbytes",
              keywords: [{ pattern: "\\.nbytes" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "capstone",
    title: "Capstone Lab",
    icon: "🏁",
    color: "#10b981",
    lessons: [
      {
        id: "numpy-15",
        title: "Normalize a Vector (Z-Score)",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**Normalization** puts data on a common scale. The **z-score** formula `(x - mean) / std` centers data around 0 with spread 1 — like asking 'how unusual is this score compared to the group?'",
          },
          {
            type: "code",
            lang: "python",
            label: "Z-score vector",
            content: `import numpy as np

x = np.array([10.0, 20.0, 30.0])
z = (x - x.mean()) / x.std()
print(z)  # [-1.  0.  1.]`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Z-scores above 2 or below -2 are often considered outliers in bell-curve data.",
          },
          {
            type: "quiz",
            question: "Z-score formula is?",
            options: ["x / sum", "(x - mean) / std", "x - min", "x * weights"],
            answer: 1,
            explanation: "Standardizing subtracts mean and divides by standard deviation.",
          },
        ],
        challenge: {
          title: "Z-Score Vector",
          description:
            "For `np.array([2.0, 4.0, 6.0, 8.0])`, print `(x - x.mean()) / x.std()`.",
          starterCode: `import numpy as np

x = np.array([2.0, 4.0, 6.0, 8.0])
`,
          solutionCode: `import numpy as np

x = np.array([2.0, 4.0, 6.0, 8.0])
print((x - x.mean()) / x.std())`,
          tests: [
            {
              id: 1,
              label: "Uses mean",
              hint: "x.mean()",
              keywords: [{ pattern: "\\.mean\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses std",
              hint: "x.std()",
              keywords: [{ pattern: "\\.std\\s*\\(" }],
            },
            {
              id: 3,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-16",
        title: "Weighted Average",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "Not every **game score** counts equally — finals might be worth 40%, homework 60%. A **weighted average** is `sum(values * weights) / sum(weights)`. One elegant line with NumPy dot product.",
          },
          {
            type: "code",
            lang: "python",
            label: "Weighted mean",
            content: `import numpy as np

values = np.array([90, 80, 70])
weights = np.array([0.5, 0.3, 0.2])
avg = np.dot(values, weights) / weights.sum()
print(avg)  # 83.0`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Weights don't have to sum to 1 — dividing by weights.sum() normalizes automatically.",
          },
          {
            type: "quiz",
            question: "Weighted average uses?",
            options: ["values.mean()", "np.dot(values, weights) / weights.sum()", "values.max()", "np.sort"],
            answer: 1,
            explanation: "Dot product for weighted sum, divide by total weight.",
          },
        ],
        challenge: {
          title: "Grade Weighting",
          description:
            "Given `scores = np.array([100, 80])` and `weights = np.array([0.7, 0.3])`, print the weighted average using `np.dot` and `.sum()`.",
          starterCode: `import numpy as np

scores = np.array([100, 80])
weights = np.array([0.7, 0.3])
`,
          solutionCode: `import numpy as np

scores = np.array([100, 80])
weights = np.array([0.7, 0.3])
print(np.dot(scores, weights) / weights.sum())`,
          tests: [
            {
              id: 1,
              label: "Uses np.dot",
              hint: "np.dot(scores, weights)",
              keywords: [{ pattern: "np\\.dot\\s*\\(" }],
            },
            {
              id: 2,
              label: "Divides by weights.sum",
              hint: "weights.sum()",
              keywords: [{ pattern: "weights\\.sum\\s*\\(" }],
            },
            {
              id: 3,
              label: "Prints",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-27",
        title: "Mini Project: Grade Report",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "Time for a **grade report**! Three students took three quizzes — a 2D score grid. You'll sum each student's total with `axis=1`, find the class average, and spot the top scorer. Spreadsheet skills, NumPy speed.",
          },
          {
            type: "code",
            lang: "python",
            label: "Student score grid",
            content: `import numpy as np

grades = np.array([
    [88, 92, 85],   # Alice
    [76, 80, 78],   # Bob
    [95, 98, 100],  # Carol
])
totals = grades.sum(axis=1)
print(totals)           # [265 234 293]
print(grades.mean())    # class average
print(np.argmax(totals))  # index of top student`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "`np.argmax` returns the index of the maximum value — perfect for 'who won?' questions.",
          },
          {
            type: "quiz",
            question: "To sum each student's quizzes across columns, use axis=?",
            options: ["0", "1", "None", "-1 only"],
            answer: 1,
            explanation: "axis=1 sums across columns within each row (each student).",
          },
        ],
        challenge: {
          title: "Class Grade Sheet",
          description:
            "Given `grades = np.array([[90, 80], [70, 100], [85, 95]])`, print row sums with `.sum(axis=1)`, then print the index of the highest row sum using `np.argmax`.",
          starterCode: `import numpy as np

grades = np.array([[90, 80], [70, 100], [85, 95]])
`,
          solutionCode: `import numpy as np

grades = np.array([[90, 80], [70, 100], [85, 95]])
totals = grades.sum(axis=1)
print(totals)
print(np.argmax(totals))`,
          tests: [
            {
              id: 1,
              label: "Uses sum axis=1",
              hint: "grades.sum(axis=1)",
              keywords: [{ pattern: "\\.sum\\s*\\(\\s*axis\\s*=\\s*1\\s*\\)" }],
            },
            {
              id: 2,
              label: "Uses np.argmax",
              hint: "np.argmax(totals)",
              keywords: [{ pattern: "np\\.argmax\\s*\\(" }],
            },
            {
              id: 3,
              label: "Prints results",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-28",
        title: "Mini Project: Score Pipeline",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "Bridge lesson before the final boss! Take raw **game scores**, filter out lows with a boolean mask, normalize survivors with a z-score, and sort them. Four NumPy moves, one pipeline.",
          },
          {
            type: "code",
            lang: "python",
            label: "Filter → normalize → sort",
            content: `import numpy as np

scores = np.array([45, 88, 52, 95, 70, 38, 91])
passed = scores[scores >= 60]
z = (passed - passed.mean()) / passed.std()
ranked = np.sort(z)
print(passed, z, ranked)`,
          },
          {
            type: "diagram",
            title: "Pipeline steps",
            nodes: [
              {
                id: "filter",
                label: "1. Filter",
                color: "#10b981",
                items: ["scores >= 60", "Boolean mask"],
              },
              {
                id: "norm",
                label: "2. Z-score",
                color: "#0ea5e9",
                items: ["(x - mean) / std", "Compare fairly"],
              },
              {
                id: "sort",
                label: "3. Sort",
                color: "#6366f1",
                items: ["np.sort", "Final ranking"],
              },
            ],
          },
          {
            type: "quiz",
            question: "After filtering with scores >= 60, what's the next step in this pipeline?",
            options: ["np.save", "Z-score normalize", "np.random.seed", "reshape"],
            answer: 1,
            explanation: "Normalize filtered scores so they share a common scale before sorting.",
          },
        ],
        challenge: {
          title: "Run the Pipeline",
          description:
            "From `scores = np.array([55, 80, 45, 90, 72])`, keep only values >= 60, print the z-scores `(x - x.mean()) / x.std()` of the filtered array.",
          starterCode: `import numpy as np

scores = np.array([55, 80, 45, 90, 72])
`,
          solutionCode: `import numpy as np

scores = np.array([55, 80, 45, 90, 72])
passed = scores[scores >= 60]
print((passed - passed.mean()) / passed.std())`,
          tests: [
            {
              id: 1,
              label: "Uses boolean filter",
              hint: "scores[scores >= 60]",
              keywords: [{ pattern: ">=\\s*60" }],
            },
            {
              id: 2,
              label: "Uses mean and std",
              hint: "passed.mean() and passed.std()",
              keywords: [
                { pattern: "\\.mean\\s*\\(" },
                { pattern: "\\.std\\s*\\(" },
              ],
            },
            {
              id: 3,
              label: "Prints z-scores",
              hint: "print(...)",
              keywords: [{ pattern: "print\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-29",
        title: "Mini Project: Temperature Stats",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "Let's combine skills on **weather data**! Given a week of daily highs (with one missing reading), you'll clean NaN, compute mean and max, and find how many days exceeded 75°F. Real data science in miniature.",
          },
          {
            type: "code",
            lang: "python",
            label: "Full workflow",
            content: `import numpy as np

temps = np.array([72, np.nan, 78, 80, 68, 76, 74])
clean = temps[~np.isnan(temps)]
print("Mean:", np.mean(clean))
print("Max:", clean.max())
print("Hot days:", np.sum(clean > 75))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Break problems into steps: clean → aggregate → filter → count. NumPy makes each step one line.",
          },
          {
            type: "quiz",
            question: "After removing NaN, which counts days above 75?",
            options: ["clean.count()", "np.sum(clean > 75)", "len(clean)", "clean.max()"],
            answer: 1,
            explanation: "Boolean mask + sum counts True values.",
          },
        ],
        challenge: {
          title: "Weekly Weather Report",
          description:
            "Given `temps = np.array([70, np.nan, 82, 76, 68, 79, 74])`, print the mean of non-NaN values (use `~np.isnan` mask and `.mean()`), then print how many values are > 75.",
          starterCode: `import numpy as np

temps = np.array([70, np.nan, 82, 76, 68, 79, 74])
`,
          solutionCode: `import numpy as np

temps = np.array([70, np.nan, 82, 76, 68, 79, 74])
clean = temps[~np.isnan(temps)]
print(clean.mean())
print(np.sum(clean > 75))`,
          tests: [
            {
              id: 1,
              label: "Filters with isnan",
              hint: "temps[~np.isnan(temps)]",
              keywords: [{ pattern: "np\\.isnan\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses mean",
              hint: "clean.mean()",
              keywords: [{ pattern: "\\.mean\\s*\\(" }],
            },
            {
              id: 3,
              label: "Counts hot days",
              hint: "np.sum(clean > 75)",
              keywords: [{ pattern: "np\\.sum\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "numpy-30",
        title: "Final Boss: Combine All Skills",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**Final boss time!** You'll normalize student **game scores**, compute a weighted class average, and rank students — broadcasting, stats, dot products, and argsort in one pipeline. You've got this.",
          },
          {
            type: "diagram",
            title: "Pipeline",
            nodes: [
              {
                id: "step1",
                label: "1. Normalize",
                color: "#10b981",
                items: ["Z-score each score", "(x - mean) / std"],
              },
              {
                id: "step2",
                label: "2. Weight & rank",
                color: "#0ea5e9",
                items: ["Weighted avg", "argsort for rank"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Boss pattern",
            content: `import numpy as np

scores = np.array([85.0, 92.0, 78.0, 95.0])
weights = np.array([0.25, 0.25, 0.25, 0.25])
z = (scores - scores.mean()) / scores.std()
avg = np.dot(scores, weights) / weights.sum()
rank = np.argsort(scores)
print(z, avg, rank)`,
          },
          {
            type: "quiz",
            question: "To rank scores low→high by index, use?",
            options: ["np.sort", "np.argsort", "np.rank", "np.order"],
            answer: 1,
            explanation: "argsort returns indices that would sort the array.",
          },
        ],
        challenge: {
          title: "Class Report Card",
          description:
            "Given `scores = np.array([70.0, 85.0, 90.0, 100.0])` and equal weights `np.array([0.25, 0.25, 0.25, 0.25])`, print the weighted average, then print `np.argsort(scores)` (ascending rank indices).",
          starterCode: `import numpy as np

scores = np.array([70.0, 85.0, 90.0, 100.0])
weights = np.array([0.25, 0.25, 0.25, 0.25])
`,
          solutionCode: `import numpy as np

scores = np.array([70.0, 85.0, 90.0, 100.0])
weights = np.array([0.25, 0.25, 0.25, 0.25])
print(np.dot(scores, weights) / weights.sum())
print(np.argsort(scores))`,
          tests: [
            {
              id: 1,
              label: "Uses np.dot",
              hint: "np.dot(scores, weights)",
              keywords: [{ pattern: "np\\.dot\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses weights.sum",
              hint: "weights.sum()",
              keywords: [{ pattern: "weights\\.sum\\s*\\(" }],
            },
            {
              id: 3,
              label: "Uses np.argsort",
              hint: "np.argsort(scores)",
              keywords: [{ pattern: "np\\.argsort\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
];

export const NUMPY_LESSONS = NUMPY_CHAPTERS.flatMap((ch) =>
  ch.lessons.map((l) => ({
    ...l,
    chapterId: ch.id,
    chapterTitle: ch.title,
    chapterColor: ch.color,
  })),
);

export const NUMPY_TOTAL_XP = NUMPY_LESSONS.reduce((s, l) => s + l.xp, 0);
