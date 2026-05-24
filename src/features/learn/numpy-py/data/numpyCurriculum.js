// PolyCode — NumPy (Python) full curriculum
// 8 chapters · 16 lessons · Python coding challenges

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
              "**NumPy** is the standard library for numerical computing in Python. Its core type is the **ndarray** — a fast, homogeneous array instead of a slow, flexible Python list.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Use lists for mixed data and small scripts. Use NumPy when you need speed, vector math, and integration with data science tools (pandas, matplotlib, scikit-learn).",
          },
          {
            type: "code",
            lang: "python",
            label: "Python list",
            content: `numbers = [1, 2, 3, 4]
doubled = [n * 2 for n in numbers]
print(doubled)`,
          },
          {
            type: "code",
            lang: "python",
            label: "NumPy array",
            content: `import numpy as np

numbers = np.array([1, 2, 3, 4])
doubled = numbers * 2
print(doubled)`,
          },
          {
            type: "quiz",
            question: "What is the main NumPy container type?",
            options: ["list", "tuple", "ndarray", "dict"],
            answer: 2,
            explanation:
              "NumPy stores data in ndarrays (N-dimensional arrays), which are optimized for numeric operations.",
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
        title: "Shape, dtype, and Vector Math",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "Every ndarray has a **shape** (dimensions) and **dtype** (element type). Vector operations apply to every element without writing a loop.",
          },
          {
            type: "diagram",
            title: "Array attributes",
            nodes: [
              {
                id: "shape",
                label: "shape",
                color: "#4f46e5",
                items: ["(4,) for 1D", "(2, 3) for 2D", "rows × cols"],
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
            label: "Shape and dtype",
            content: `import numpy as np

a = np.array([1, 2, 3, 4])
print(a.shape)
print(a.dtype)`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Expressions like `a + 10` or `a * 2` broadcast across all elements — this is the heart of NumPy performance.",
          },
          {
            type: "quiz",
            question: "What does `np.array([1,2,3]).shape` return for a 1D array?",
            options: ["(3, 1)", "(3,)", "(1, 3)", "3"],
            answer: 1,
            explanation: "A 1D array of length 3 has shape `(3,)`.",
          },
        ],
        challenge: {
          title: "Vector Operations",
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
        id: "numpy-3",
        title: "arange & linspace",
        xp: 12,
        theory: [
          {
            type: "text",
            content:
              "**`np.arange(start, stop, step)`** builds evenly spaced values (stop is exclusive). **`np.linspace(start, stop, num)`** includes both endpoints.",
          },
          {
            type: "code",
            lang: "python",
            label: "Evenly spaced",
            content: `import numpy as np

print(np.arange(0, 10, 2))
print(np.linspace(0, 1, 5))`,
          },
          {
            type: "quiz",
            question: "Which function includes the stop value by default?",
            options: ["arange", "linspace", "zeros", "reshape"],
            answer: 1,
            explanation: "linspace always includes both endpoints; arange excludes stop.",
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
              keywords: [{ pattern: "np\\.arange\\s*\\(" }],
            },
            {
              id: 2,
              label: "Prints the array",
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
              "Factory functions create arrays filled with constants: **`zeros`**, **`ones`**, and **`eye`** (identity matrix).",
          },
          {
            type: "code",
            lang: "python",
            label: "Factory arrays",
            content: `import numpy as np

z = np.zeros((2, 3))
o = np.ones(4)
i = np.eye(3)
print(z.shape, o, i[0, 0])`,
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
              keywords: [{ pattern: "np\\.eye\\s*\\(" }],
            },
            { id: 2, label: "Prints matrix", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },
    ],
  },
  {
    id: "indexing",
    title: "Indexing & Slicing",
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
              "NumPy slicing works like Python lists: `a[start:stop:step]`. For 2D arrays use `a[row, col]`.",
          },
          {
            type: "code",
            lang: "python",
            label: "Slice rows",
            content: `import numpy as np

m = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(m[1, :])
print(m[:, 0])`,
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
            { id: 1, label: "Indexes row 1", keywords: [{ pattern: "\\[1\\]" }] },
            { id: 2, label: "Prints result", keywords: [{ pattern: "print\\s*\\(" }] },
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
              "A **boolean mask** selects elements where the condition is True: `arr[arr > 0]`.",
          },
          {
            type: "code",
            lang: "python",
            label: "Filter positives",
            content: `import numpy as np

a = np.array([-1, 3, 0, 7, -2])
print(a[a > 0])`,
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
            { id: 1, label: "Uses modulo mask", keywords: [{ pattern: "%\\s*2\\s*==\\s*0" }] },
            { id: 2, label: "Prints filtered", keywords: [{ pattern: "print\\s*\\(" }] },
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
              "**Broadcasting** stretches smaller arrays to match larger ones without copying full data. Shapes must be compatible from the right.",
          },
          {
            type: "callout",
            variant: "tip",
            content: "A column vector `(3, 1)` plus a row `(1, 4)` broadcasts to `(3, 4)`.",
          },
          {
            type: "code",
            lang: "python",
            label: "Add scalar to matrix",
            content: `import numpy as np

m = np.ones((2, 3))
print(m + 5)`,
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
            { id: 1, label: "Uses zeros", keywords: [{ pattern: "np\\.zeros\\s*\\(" }] },
            { id: 2, label: "Adds 10", keywords: [{ pattern: "\\+\\s*10" }] },
            { id: 3, label: "Prints", keywords: [{ pattern: "print\\s*\\(" }] },
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
            content: "Multiply, divide, and compare entire matrices element-wise with `*`, `/`, and `>`.",
          },
          {
            type: "code",
            lang: "python",
            label: "Element-wise multiply",
            content: `import numpy as np

a = np.array([[1, 2], [3, 4]])
b = np.array([[10, 20], [30, 40]])
print(a * b)`,
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
            { id: 1, label: "Two np.array calls", keywords: [{ pattern: "np\\.array" }] },
            { id: 2, label: "Element-wise *", keywords: [{ pattern: "\\*" }] },
            { id: 3, label: "Prints", keywords: [{ pattern: "print\\s*\\(" }] },
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
            content: "**`np.dot(a, b)`** computes dot products for 1D vectors or matrix multiplication rules for 2D.",
          },
          {
            type: "code",
            lang: "python",
            label: "Vector dot",
            content: `import numpy as np

u = np.array([1, 2, 3])
v = np.array([4, 5, 6])
print(np.dot(u, v))`,
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
            { id: 1, label: "Uses np.dot", keywords: [{ pattern: "np\\.dot\\s*\\(" }] },
            { id: 2, label: "Prints", keywords: [{ pattern: "print\\s*\\(" }] },
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
            content: "Use **`@`** or **`np.matmul`** for true matrix multiplication (not element-wise `*`).",
          },
          {
            type: "code",
            lang: "python",
            label: "2x2 multiply",
            content: `import numpy as np

A = np.array([[1, 2], [3, 4]])
B = np.array([[2, 0], [1, 2]])
print(A @ B)`,
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
            { id: 1, label: "Uses @ operator", keywords: [{ pattern: "@" }] },
            { id: 2, label: "Prints", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },
    ],
  },
  {
    id: "aggregate",
    title: "Aggregation",
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
              "Reductions collapse many values to one: **`sum`**, **`mean`**, **`min`**, **`max`**.",
          },
          {
            type: "code",
            lang: "python",
            label: "Stats",
            content: `import numpy as np

data = np.array([3, 1, 4, 1, 5])
print(data.sum(), data.mean(), data.max())`,
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
            { id: 1, label: "Uses mean", keywords: [{ pattern: "\\.mean\\s*\\(" }] },
            { id: 2, label: "Prints", keywords: [{ pattern: "print\\s*\\(" }] },
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
              "`axis=0` collapses **rows** (down columns). `axis=1` collapses **columns** (across rows).",
          },
          {
            type: "code",
            lang: "python",
            label: "Column sums",
            content: `import numpy as np

m = np.array([[1, 2, 3], [4, 5, 6]])
print(m.sum(axis=0))
print(m.sum(axis=1))`,
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
            { id: 1, label: "Uses sum", keywords: [{ pattern: "\\.sum\\s*\\(" }] },
            { id: 2, label: "axis=1", keywords: [{ pattern: "axis\\s*=\\s*1" }] },
            { id: 3, label: "Prints", keywords: [{ pattern: "print\\s*\\(" }] },
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
              "**`reshape`** changes view shape (total elements must match). **`ravel`** / **`flatten`** go to 1D.",
          },
          {
            type: "code",
            lang: "python",
            label: "Reshape",
            content: `import numpy as np

a = np.arange(6)
print(a.reshape(2, 3))`,
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
            { id: 1, label: "Uses arange", keywords: [{ pattern: "np\\.arange" }] },
            { id: 2, label: "reshape(2, 3)", keywords: [{ pattern: "reshape\\s*\\(\\s*2\\s*,\\s*3\\s*\\)" }] },
            { id: 3, label: "Prints", keywords: [{ pattern: "print\\s*\\(" }] },
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
            content: "**`np.concatenate`** joins arrays along an existing axis. **`vstack`** / **`hstack`** stack rows or cols.",
          },
          {
            type: "code",
            lang: "python",
            label: "Stack",
            content: `import numpy as np

a = np.array([1, 2])
b = np.array([3, 4])
print(np.vstack([a, b]))`,
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
            { id: 1, label: "Uses vstack", keywords: [{ pattern: "np\\.vstack\\s*\\(" }] },
            { id: 2, label: "Prints", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },
    ],
  },
  {
    id: "capstone",
    title: "NumPy Capstone",
    icon: "🏁",
    color: "#10b981",
    lessons: [
      {
        id: "numpy-15",
        title: "Normalize a Vector",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "Normalization scales data to a standard range: `(x - mean) / std` using vectorized NumPy.",
          },
          {
            type: "code",
            lang: "python",
            label: "Z-score",
            content: `import numpy as np

x = np.array([10.0, 20.0, 30.0])
z = (x - x.mean()) / x.std()
print(z)`,
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
            { id: 1, label: "Uses mean", keywords: [{ pattern: "\\.mean\\s*\\(" }] },
            { id: 2, label: "Uses std", keywords: [{ pattern: "\\.std\\s*\\(" }] },
            { id: 3, label: "Prints", keywords: [{ pattern: "print\\s*\\(" }] },
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
              "A weighted average is `sum(values * weights) / sum(weights)` — one line with NumPy.",
          },
          {
            type: "code",
            lang: "python",
            label: "Weighted mean",
            content: `import numpy as np

values = np.array([90, 80, 70])
weights = np.array([0.5, 0.3, 0.2])
print(np.dot(values, weights) / weights.sum())`,
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
            { id: 1, label: "Uses np.dot", keywords: [{ pattern: "np\\.dot\\s*\\(" }] },
            { id: 2, label: "Divides by weights.sum", keywords: [{ pattern: "weights\\.sum\\s*\\(" }] },
            { id: 3, label: "Prints", keywords: [{ pattern: "print\\s*\\(" }] },
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
