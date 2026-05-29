// PolyCode — NumPy (Python) full curriculum
// 11 chapters · 30 lessons · Python coding challenges

export const NUMPY_CHAPTERS = [
  {
    id: "intro",
    title: "What is NumPy?",
    icon: "🔢",
    color: "#4f46e5",
    lessons: [
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
        title: "reshape & flatten",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "**`reshape`** rearranges the same data into new dimensions — like refolding a **pizza box** without changing slice count. Total elements must stay the same! **`ravel()`** and **`flatten()`** squish to 1D.",
          },
          {
            type: "code",
            lang: "python",
            label: "Reshape 1D → 2D",
            content: `import numpy as np

a = np.arange(6)
grid = a.reshape(2, 3)
print(grid)
# [[0 1 2]
#  [3 4 5]]`,
          },
          {
            type: "code",
            lang: "python",
            label: "Flatten",
            content: `import numpy as np

m = np.array([[1, 2], [3, 4]])
print(m.ravel())    # [1 2 3 4] — view when possible
print(m.flatten())  # [1 2 3 4] — always a copy`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use `-1` in one dimension to auto-calculate: `a.reshape(2, -1)` lets NumPy figure out the other size.",
          },
          {
            type: "quiz",
            question: "Can you reshape 6 elements into (2, 4)?",
            options: ["Yes", "No — 2×4=8 ≠ 6", "Only with flatten", "Only 1D"],
            answer: 1,
            explanation: "reshape requires the product of dimensions to equal total elements.",
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
        title: "choice & Shuffle",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**`np.random.choice`** picks random items from an array — like drawing names from a hat. Pass `size` for multiple picks and `replace=False` for no duplicates (lottery style). **`np.random.shuffle`** mixes an array in place.",
          },
          {
            type: "code",
            lang: "python",
            label: "Random choice",
            content: `import numpy as np

prizes = np.array(["pizza", "trophy", "sticker", "high-five"])
print(np.random.choice(prizes, size=3))
print(np.random.choice(prizes, size=2, replace=False))`,
          },
          {
            type: "code",
            lang: "python",
            label: "Shuffle deck",
            content: `import numpy as np

deck = np.arange(1, 11)
np.random.shuffle(deck)
print(deck)  # same array, new order`,
          },
          {
            type: "quiz",
            question: "How do you pick without replacement?",
            options: [
              "replace=True",
              "replace=False",
              "shuffle first only",
              "Use randint",
            ],
            answer: 1,
            explanation: "replace=False ensures each pick is unique.",
          },
        ],
        challenge: {
          title: "Pick a Winner",
          description:
            "From `np.array(['A','B','C','D'])`, use `np.random.choice` with `size=2` and `replace=False`. Print the result.",
          starterCode: `import numpy as np

players = np.array(["A", "B", "C", "D"])
`,
          solutionCode: `import numpy as np

players = np.array(["A", "B", "C", "D"])
print(np.random.choice(players, size=2, replace=False))`,
          tests: [
            {
              id: 1,
              label: "Uses np.random.choice",
              hint: "np.random.choice(players, ...)",
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
        title: "sort & argsort",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**`np.sort`** orders values smallest to largest. **`np.argsort`** returns **indices** that would sort the array — perfect for ranking **game scores** without losing track of who scored what.",
          },
          {
            type: "code",
            lang: "python",
            label: "Sort values",
            content: `import numpy as np

scores = np.array([88, 55, 100, 72])
print(np.sort(scores))  # [ 55  72  88 100]`,
          },
          {
            type: "code",
            lang: "python",
            label: "Argsort for ranking",
            content: `import numpy as np

scores = np.array([88, 55, 100, 72])
rank_idx = np.argsort(scores)
print(rank_idx)           # [1 3 0 2] — index order low→high
print(scores[rank_idx[-1]])  # highest score → 100`,
          },
          {
            type: "quiz",
            question: "argsort returns?",
            options: ["Sorted values", "Indices that sort", "Max index", "Boolean mask"],
            answer: 1,
            explanation: "argsort gives indices; use arr[argsort(arr)] to get sorted values.",
          },
        ],
        challenge: {
          title: "Rank the Scores",
          description:
            "Print `np.argsort` of `np.array([40, 90, 70, 85])`.",
          starterCode: `import numpy as np

scores = np.array([40, 90, 70, 85])
`,
          solutionCode: `import numpy as np

scores = np.array([40, 90, 70, 85])
print(np.argsort(scores))`,
          tests: [
            {
              id: 1,
              label: "Uses np.argsort",
              hint: "np.argsort(scores)",
              keywords: [{ pattern: "np\\.argsort\\s*\\(" }],
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
        title: "ufuncs & Speed",
        xp: 16,
        theory: [
          {
            type: "text",
            content:
              "**Universal functions (ufuncs)** like `np.sqrt`, `np.exp`, and `np.abs` run element-wise in compiled C — much faster than Python loops. NumPy's secret sauce is doing millions of ops without a single `for`.",
          },
          {
            type: "code",
            lang: "python",
            label: "Vectorized ufuncs",
            content: `import numpy as np

a = np.array([1, 4, 9, 16])
print(np.sqrt(a))    # [1. 2. 3. 4.]
print(np.exp([0, 1, 2]))  # e^x for each`,
          },
          {
            type: "code",
            lang: "python",
            label: "abs and log",
            content: `import numpy as np

temps = np.array([-5, 0, 10, -3])
print(np.abs(temps))  # [5 0 10 3]`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Rule of thumb: if you're writing `for x in arr`, ask if a ufunc or vectorized op exists first.",
          },
          {
            type: "quiz",
            question: "np.sqrt applied to an array is?",
            options: [
              "A Python loop",
              "A ufunc applied element-wise",
              "Matrix square root only",
              "Invalid",
            ],
            answer: 1,
            explanation: "sqrt is a ufunc — one call, every element processed in C.",
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
