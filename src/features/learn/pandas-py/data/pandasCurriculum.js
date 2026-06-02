// PolyCode — Pandas (Python) full curriculum
// 8 chapters · 20 lessons · Python coding challenges

export const PANDAS_CHAPTERS = [
  {
    id: "intro",
    title: "What is Pandas?",
    icon: "📊",
    color: "#059669",
    lessons: [
      {
        id: "pandas-0",
        title: "What is Pandas?",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "**Pandas** is Python's go-to library for **tabular data** — rows and columns like a spreadsheet. If NumPy is about fast number arrays, Pandas is about labeled tables you can filter, sort, and summarize.",
          },
          {
            type: "text",
            content:
              "The two core objects are a **Series** (one labeled column) and a **DataFrame** (a table of many columns). Most real data work — CSV files, sales reports, survey results — lives in DataFrames.",
          },
          {
            type: "diagram",
            title: "Where Pandas fits",
            nodes: [
              {
                id: "csv",
                label: "Real files",
                color: "#059669",
                items: ["CSV exports", "Excel sheets", "API tables"],
              },
              {
                id: "clean",
                label: "Data cleaning",
                color: "#10b981",
                items: ["Missing values", "Type fixes", "Filters"],
              },
              {
                id: "analyze",
                label: "Analysis",
                color: "#34d399",
                items: ["Group totals", "Averages", "Joins"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "A tiny table in Pandas",
            content: `import pandas as pd

students = pd.DataFrame({
    "name": ["Ali", "Sara", "Mo"],
    "score": [88, 92, 75]
})
print(students)`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Standard import: `import pandas as pd`. Everyone uses `pd` — same idea as `np` for NumPy.",
          },
          {
            type: "quiz",
            question: "What is a DataFrame?",
            options: [
              "A Python game engine",
              "A spreadsheet-like table",
              "A database server",
              "A web browser",
            ],
            answer: 1,
            explanation:
              "A DataFrame is Pandas' table structure containing rows and columns.",
          },

          {
            type: "quiz",
            question: "What does Pandas mainly help with?",
            options: [
              "Building games",
              "Creating websites",
              "Working with tabular data",
              "Compiling programs",
            ],
            answer: 2,
            explanation:
              "Pandas is designed for tables of data such as CSV files, spreadsheets, and reports.",
          },
        ],
        challenge: {
          title: "Your First DataFrame",
          description:
            'Import pandas as `pd`, create a DataFrame `df` with columns `fruit` and `qty` (values `["apple", "banana"]` and `[3, 5]`), and print `df`.',
          starterCode: `# Import pandas as pd
# Create df and print it

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"fruit": ["apple", "banana"], "qty": [3, 5]})
print(df)`,
          tests: [
            {
              id: 1,
              label: "Imports pandas as pd",
              keywords: [{ pattern: "import\\s+pandas\\s+as\\s+pd" }],
            },
            {
              id: 2,
              label: "Creates pd.DataFrame",
              keywords: [{ pattern: "pd\\.DataFrame\\s*\\(" }],
            },
            {
              id: 3,
              label: "Prints df",
              keywords: [{ pattern: "print\\s*\\(\\s*df\\s*\\)" }],
            },
          ],
        },
      },
      {
        id: "pandas-1",
        title: "Series vs DataFrame",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "Pandas has **two main data structures**: a **Series** and a **DataFrame**. Learning these two objects is the foundation of working with Pandas.",
          },
          {
            type: "text",
            content:
              "Think of a **Series** as a single column in a spreadsheet. It stores one type of information, such as student scores, product prices, or temperatures.",
          },
          {
            type: "text",
            content:
              "A **DataFrame** is a complete table made up of multiple Series. Each column contains related data, and together the columns form a structured dataset.",
          },
          {
            type: "diagram",
            title: "Series vs DataFrame",
            nodes: [
              {
                id: "series",
                label: "Series",
                color: "#14b8a6",
                items: [
                  "One column of data",
                  "Has row labels (index)",
                  "Example: student scores",
                ],
              },
              {
                id: "dataframe",
                label: "DataFrame",
                color: "#0891b2",
                items: [
                  "Multiple columns",
                  "Rows and columns",
                  "Example: student records",
                ],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Creating a Series and a DataFrame",
            content: `import pandas as pd
          
scores = pd.Series([90, 85, 78], index=["Ali", "Sara", "Mo"])
table = pd.DataFrame(
              {"math": [90, 85, 78], "english": [88, 91, 80]},
              index=["Ali", "Sara", "Mo"]
          )
          
print(scores)
print(table)`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "A DataFrame is essentially a collection of Series that share the same row index.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              'Selecting a single column from a DataFrame returns a Series: `students["Math"]`.',
          },
          {
            type: "quiz",
            question: "Which Pandas object represents a single column of data?",
            options: ["DataFrame", "Series", "Dictionary", "List"],
            answer: 1,
            explanation:
              "A Series stores one column of data with labels, while a DataFrame stores multiple columns.",
          },
        ],

        challenge: {
          title: "Build a Series",
          description:
            'Create a Series called `prices` containing the values `10`, `20`, and `30` with index labels `"a"`, `"b"`, and `"c"`. Then print the Series.',
          starterCode: `import pandas as pd
      
      # Create prices Series here
      
      `,
          solutionCode: `import pandas as pd
      
      prices = pd.Series(
          [10, 20, 30],
          index=["a", "b", "c"]
      )
      
      print(prices)`,
          tests: [
            {
              id: 1,
              label: "Uses pd.Series",
              keywords: [{ pattern: "pd\\.Series\\s*\\(" }],
            },
            {
              id: 2,
              label: "Has index a, b, c",
              keywords: ['"a"', '"b"', '"c"'],
            },
            {
              id: 3,
              label: "Prints prices",
              keywords: [{ pattern: "print\\s*\\(\\s*prices\\s*\\)" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "series",
    title: "Series Basics",
    icon: "📈",
    color: "#0d9488",
    lessons: [
      {
        id: "pandas-2",
        title: "Creating Series",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "Create a Series from a list, dict, or NumPy array. The **index** labels each row — default is 0, 1, 2… or use custom names.",
          },
          {
            type: "code",
            lang: "python",
            label: "Series from a dict (keys become index)",
            content: `import pandas as pd

temps = pd.Series({"Mon": 18, "Tue": 22, "Wed": 19})
print(temps["Tue"])   # 22`,
          },
          {
            type: "callout",
            variant: "tip",
            content: "Use `.values` for the raw NumPy array behind a Series.",
          },
        ],
        challenge: {
          title: "Dict to Series",
          description:
            'Create `colors = pd.Series({"r": "red", "g": "green", "b": "blue"})` and print `colors["g"]`.',
          starterCode: `import pandas as pd

`,
          solutionCode: `import pandas as pd

colors = pd.Series({"r": "red", "g": "green", "b": "blue"})
print(colors["g"])`,
          tests: [
            { id: 1, label: "pd.Series from dict", keywords: ["pd.Series"] },
            {
              id: 2,
              label: 'Prints colors["g"]',
              keywords: [{ pattern: 'colors\\s*\\[\\s*"g"\\s*\\]' }],
            },
          ],
        },
      },
      {
        id: "pandas-3",
        title: "Series Math",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "Series support vectorized math — add, multiply, compare — aligned by index. Missing labels become NaN.",
          },
          {
            type: "code",
            lang: "python",
            label: "Add 5 to every value",
            content: `import pandas as pd

s = pd.Series([1, 2, 3])
print(s + 5)`,
          },
        ],
        challenge: {
          title: "Double the Series",
          description: "Create `s = pd.Series([4, 8, 12])`, print `s * 2`.",
          starterCode: `import pandas as pd

`,
          solutionCode: `import pandas as pd

s = pd.Series([4, 8, 12])
print(s * 2)`,
          tests: [
            { id: 1, label: "Creates Series", keywords: ["pd.Series"] },
            { id: 2, label: "Multiplies by 2", keywords: ["s * 2", "s*2"] },
          ],
        },
      },
      {
        id: "pandas-4",
        title: "Series Methods",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "Handy methods: `.sum()`, `.mean()`, `.max()`, `.min()`, `.count()`. They skip NaN by default.",
          },
          {
            type: "code",
            lang: "python",
            label: "Quick stats",
            content: `import pandas as pd

sales = pd.Series([100, 150, 120])
print(sales.mean())`,
          },
        ],
        challenge: {
          title: "Average Score",
          description:
            "Create `scores = pd.Series([70, 85, 90])` and print `scores.mean()`.",
          starterCode: `import pandas as pd

`,
          solutionCode: `import pandas as pd

scores = pd.Series([70, 85, 90])
print(scores.mean())`,
          tests: [
            { id: 1, label: "pd.Series", keywords: ["pd.Series"] },
            { id: 2, label: "Uses .mean()", keywords: [".mean()"] },
          ],
        },
      },
    ],
  },
  {
    id: "dataframe",
    title: "DataFrames",
    icon: "🗂️",
    color: "#0891b2",
    lessons: [
      {
        id: "pandas-5",
        title: "Building DataFrames",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "Pass a **dict of column name → list** to `pd.DataFrame()`. Each list is one column; all lists must be the same length.",
          },
          {
            type: "code",
            lang: "python",
            label: "From a dict of lists",
            content: `import pandas as pd

df = pd.DataFrame({
    "city": ["London", "Paris"],
    "pop": [9_000_000, 2_100_000]
})
print(df.columns)`,
          },
        ],
        challenge: {
          title: "Two-Column Table",
          description:
            'Create `df` with `item` = `["pen", "book"]` and `price` = `[2, 8]`. Print `df.shape`.',
          starterCode: `import pandas as pd

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"item": ["pen", "book"], "price": [2, 8]})
print(df.shape)`,
          tests: [
            { id: 1, label: "pd.DataFrame", keywords: ["pd.DataFrame"] },
            { id: 2, label: "Prints shape", keywords: [".shape"] },
          ],
        },
      },
      {
        id: "pandas-6",
        title: "head, info, describe",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "`.head(n)` shows first rows. `.info()` shows dtypes and non-null counts. `.describe()` summarizes numeric columns.",
          },
          {
            type: "code",
            lang: "python",
            label: "Peek at a table",
            content: `import pandas as pd

df = pd.DataFrame({"a": [1, 2, 3, 4, 5]})
print(df.head(3))`,
          },
        ],
        challenge: {
          title: "First Three Rows",
          description: "Create any 5-row DataFrame and print `df.head(3)`.",
          starterCode: `import pandas as pd

df = pd.DataFrame({"x": [10, 20, 30, 40, 50]})
# print first 3 rows

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"x": [10, 20, 30, 40, 50]})
print(df.head(3))`,
          tests: [
            {
              id: 1,
              label: "Uses head(3)",
              keywords: [{ pattern: "\\.head\\s*\\(\\s*3\\s*\\)" }],
            },
          ],
        },
      },
      {
        id: "pandas-7",
        title: "Columns & dtypes",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              'Access columns with `df["col"]` or `df.col`. Check types with `df.dtypes`. Cast with `.astype()`.',
          },
          {
            type: "code",
            lang: "python",
            label: "Select one column",
            content: `import pandas as pd

df = pd.DataFrame({"name": ["A", "B"], "age": [20, 21]})
ages = df["age"]
print(ages)`,
          },
        ],
        challenge: {
          title: "Pick a Column",
          description:
            'Given `df = pd.DataFrame({"name": ["Ann"], "score": [95]})`, print `df["score"]`.',
          starterCode: `import pandas as pd

df = pd.DataFrame({"name": ["Ann"], "score": [95]})

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"name": ["Ann"], "score": [95]})
print(df["score"])`,
          tests: [
            {
              id: 1,
              label: "Selects score column",
              keywords: [{ pattern: 'df\\s*\\[\\s*"score"\\s*\\]' }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "selection",
    title: "Selecting Data",
    icon: "🎯",
    color: "#0284c7",
    lessons: [
      {
        id: "pandas-8",
        title: "loc — label-based",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**`loc`** selects by **labels**: rows, columns, or both. Syntax: `df.loc[row_label, col_label]`.",
          },
          {
            type: "code",
            lang: "python",
            label: "Select one cell by label",
            content: `import pandas as pd

df = pd.DataFrame({"score": [88, 92]}, index=["Ali", "Sara"])
print(df.loc["Ali", "score"])`,
          },
        ],
        challenge: {
          title: "loc One Row",
          description:
            'Create `df` with index `["x", "y"]` and column `val` = `[1, 2]`. Print `df.loc["y", "val"]`.',
          starterCode: `import pandas as pd

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"val": [1, 2]}, index=["x", "y"])
print(df.loc["y", "val"])`,
          tests: [{ id: 1, label: "Uses .loc", keywords: [".loc"] }],
        },
      },
      {
        id: "pandas-9",
        title: "iloc — position-based",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**`iloc`** selects by **integer position** (0-based), like list indexing. `df.iloc[0, 1]` = first row, second column.",
          },
          {
            type: "code",
            lang: "python",
            label: "First row, all columns",
            content: `import pandas as pd

df = pd.DataFrame({"a": [1, 2], "b": [3, 4]})
print(df.iloc[0])`,
          },
        ],
        challenge: {
          title: "First Cell",
          description: "Create a 2×2 DataFrame and print `df.iloc[0, 0]`.",
          starterCode: `import pandas as pd

df = pd.DataFrame({"a": [10, 20], "b": [30, 40]})

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"a": [10, 20], "b": [30, 40]})
print(df.iloc[0, 0])`,
          tests: [
            {
              id: 1,
              label: "Uses iloc[0, 0]",
              keywords: [{ pattern: "iloc\\s*\\[\\s*0\\s*,\\s*0\\s*\\]" }],
            },
          ],
        },
      },
      {
        id: "pandas-10",
        title: "Boolean filtering",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              'Filter rows with a condition: `df[df["score"] >= 90]` returns only rows where the condition is True.',
          },
          {
            type: "code",
            lang: "python",
            label: "High scores only",
            content: `import pandas as pd

df = pd.DataFrame({"name": ["A", "B"], "score": [95, 70]})
high = df[df["score"] >= 90]
print(high)`,
          },
        ],
        challenge: {
          title: "Filter Rows",
          description:
            'Given `df` with `age` = `[17, 22, 15]`, create `adults = df[df["age"] >= 18]` and print `adults`.',
          starterCode: `import pandas as pd

df = pd.DataFrame({"age": [17, 22, 15]})

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"age": [17, 22, 15]})
adults = df[df["age"] >= 18]
print(adults)`,
          tests: [
            {
              id: 1,
              label: "Boolean filter",
              keywords: [{ pattern: 'df\\s*\\[\\s*df\\s*\\[\\s*"age"\\s*\\]' }],
            },
            { id: 2, label: "Variable adults", keywords: ["adults"] },
          ],
        },
      },
    ],
  },
  {
    id: "cleaning",
    title: "Cleaning Data",
    icon: "🧹",
    color: "#2563eb",
    lessons: [
      {
        id: "pandas-11",
        title: "Missing values",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Missing data shows as **NaN**. Use `.isna()` to detect and `.fillna(value)` to replace.",
          },
          {
            type: "code",
            lang: "python",
            label: "Fill missing with zero",
            content: `import pandas as pd
import numpy as np

s = pd.Series([1, np.nan, 3])
print(s.fillna(0))`,
          },
        ],
        challenge: {
          title: "Fill NaN",
          description:
            "Create `s = pd.Series([5, None, 8])` and print `s.fillna(0)`.",
          starterCode: `import pandas as pd

`,
          solutionCode: `import pandas as pd

s = pd.Series([5, None, 8])
print(s.fillna(0))`,
          tests: [{ id: 1, label: "Uses fillna", keywords: [".fillna"] }],
        },
      },
      {
        id: "pandas-12",
        title: "dropna & astype",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "`.dropna()` removes rows/cols with NaN. `.astype(int)` or `.astype(str)` converts column types.",
          },
          {
            type: "code",
            lang: "python",
            label: "Drop rows with missing values",
            content: `import pandas as pd

df = pd.DataFrame({"x": [1, None, 3]})
print(df.dropna())`,
          },
        ],
        challenge: {
          title: "Drop Missing Rows",
          description:
            'Create `df = pd.DataFrame({"v": [1, None, 2]})` and print `df.dropna()`.',
          starterCode: `import pandas as pd

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"v": [1, None, 2]})
print(df.dropna())`,
          tests: [{ id: 1, label: "Uses dropna", keywords: [".dropna()"] }],
        },
      },
      {
        id: "pandas-13",
        title: "Adding columns",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              'Assign new columns with `df["new_col"] = ...`. You can compute from existing columns.',
          },
          {
            type: "code",
            lang: "python",
            label: "Derived column",
            content: `import pandas as pd

df = pd.DataFrame({"price": [10, 20]})
df["tax"] = df["price"] * 0.1
print(df)`,
          },
        ],
        challenge: {
          title: "New Column",
          description:
            'Given `df` with `qty` = `[2, 3]`, add `df["double"] = df["qty"] * 2` and print `df`.',
          starterCode: `import pandas as pd

df = pd.DataFrame({"qty": [2, 3]})

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"qty": [2, 3]})
df["double"] = df["qty"] * 2
print(df)`,
          tests: [
            {
              id: 1,
              label: "Adds double column",
              keywords: [{ pattern: 'df\\s*\\[\\s*"double"\\s*\\]' }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "groupby",
    title: "Group & Aggregate",
    icon: "📦",
    color: "#4f46e5",
    lessons: [
      {
        id: "pandas-14",
        title: "groupby basics",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              '**`groupby("col")`** splits the table into groups, then you `.sum()`, `.mean()`, etc. on each group.',
          },
          {
            type: "code",
            lang: "python",
            label: "Total sales per city",
            content: `import pandas as pd

df = pd.DataFrame({"city": ["A", "A", "B"], "sales": [10, 20, 5]})
print(df.groupby("city")["sales"].sum())`,
          },
        ],
        challenge: {
          title: "Sum by Group",
          description:
            'Create `df` with `team` = `["red", "red", "blue"]` and `pts` = `[3, 5, 2]`. Print `df.groupby("team")["pts"].sum()`.',
          starterCode: `import pandas as pd

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"team": ["red", "red", "blue"], "pts": [3, 5, 2]})
print(df.groupby("team")["pts"].sum())`,
          tests: [
            { id: 1, label: "Uses groupby", keywords: [".groupby"] },
            { id: 2, label: "Uses .sum()", keywords: [".sum()"] },
          ],
        },
      },
      {
        id: "pandas-15",
        title: "agg & multiple stats",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              '`.agg(["mean", "max"])` computes several statistics at once. Great for quick reports.',
          },
          {
            type: "code",
            lang: "python",
            label: "Mean and max per group",
            content: `import pandas as pd

df = pd.DataFrame({"g": ["x", "x", "y"], "v": [1, 3, 10]})
print(df.groupby("g")["v"].agg(["mean", "max"]))`,
          },
        ],
        challenge: {
          title: "Group Mean",
          description:
            'Given `df` with `dept` and `salary`, print `df.groupby("dept")["salary"].mean()`.',
          starterCode: `import pandas as pd

df = pd.DataFrame({"dept": ["IT", "IT", "HR"], "salary": [50, 60, 45]})

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"dept": ["IT", "IT", "HR"], "salary": [50, 60, 45]})
print(df.groupby("dept")["salary"].mean())`,
          tests: [
            {
              id: 1,
              label: "groupby dept",
              keywords: [{ pattern: 'groupby\\s*\\(\\s*"dept"\\s*\\)' }],
            },
            { id: 2, label: "mean salary", keywords: [".mean()"] },
          ],
        },
      },
    ],
  },
  {
    id: "merge",
    title: "Combining Tables",
    icon: "🔗",
    color: "#7c3aed",
    lessons: [
      {
        id: "pandas-16",
        title: "concat rows",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "`pd.concat([df1, df2])` stacks tables vertically (more rows) when columns match.",
          },
          {
            type: "code",
            lang: "python",
            label: "Stack two tables",
            content: `import pandas as pd

a = pd.DataFrame({"x": [1]})
b = pd.DataFrame({"x": [2]})
print(pd.concat([a, b]))`,
          },
        ],
        challenge: {
          title: "Concat Two Frames",
          description:
            "Create `a` and `b` with column `n` = `[1]` and `[2]`. Print `pd.concat([a, b])`.",
          starterCode: `import pandas as pd

`,
          solutionCode: `import pandas as pd

a = pd.DataFrame({"n": [1]})
b = pd.DataFrame({"n": [2]})
print(pd.concat([a, b]))`,
          tests: [{ id: 1, label: "Uses pd.concat", keywords: ["pd.concat"] }],
        },
      },
      {
        id: "pandas-17",
        title: "merge on a key",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              '`pd.merge(left, right, on="key")` joins two tables like a SQL join on a shared column.',
          },
          {
            type: "code",
            lang: "python",
            label: "Join orders with customers",
            content: `import pandas as pd

orders = pd.DataFrame({"id": [1], "item": ["book"]})
names = pd.DataFrame({"id": [1], "name": ["Ali"]})
print(pd.merge(orders, names, on="id"))`,
          },
        ],
        challenge: {
          title: "Simple Merge",
          description:
            'Merge `left` and `right` on `id` where left has `id=[1], val=[10]` and right has `id=[1], tag=["a"]`. Print result.',
          starterCode: `import pandas as pd

left = pd.DataFrame({"id": [1], "val": [10]})
right = pd.DataFrame({"id": [1], "tag": ["a"]})

`,
          solutionCode: `import pandas as pd

left = pd.DataFrame({"id": [1], "val": [10]})
right = pd.DataFrame({"id": [1], "tag": ["a"]})
print(pd.merge(left, right, on="id"))`,
          tests: [
            { id: 1, label: "Uses pd.merge", keywords: ["pd.merge"] },
            {
              id: 2,
              label: "on id",
              keywords: [{ pattern: 'on\\s*=\\s*"id"' }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "io",
    title: "Reading & Writing",
    icon: "💾",
    color: "#9333ea",
    lessons: [
      {
        id: "pandas-18",
        title: "read_csv concept",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              '`pd.read_csv("file.csv")` loads a CSV into a DataFrame. `df.to_csv("out.csv", index=False)` saves without row numbers.',
          },
          {
            type: "code",
            lang: "python",
            label: "From CSV string (concept)",
            content: `import pandas as pd
from io import StringIO

csv_text = "name,score\\nAli,90\\nSara,85"
df = pd.read_csv(StringIO(csv_text))
print(df)`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Always inspect with `df.head()` after loading a new file.",
          },
        ],
        challenge: {
          title: "Parse CSV Text",
          description:
            "Use `StringIO` and `pd.read_csv` on `'a,b\\n1,2\\n3,4'` (store in `csv_text`). Print `df`.",
          starterCode: `import pandas as pd
from io import StringIO

csv_text = "a,b\\n1,2\\n3,4"

`,
          solutionCode: `import pandas as pd
from io import StringIO

csv_text = "a,b\\n1,2\\n3,4"
df = pd.read_csv(StringIO(csv_text))
print(df)`,
          tests: [
            { id: 1, label: "read_csv", keywords: ["read_csv"] },
            { id: 2, label: "StringIO", keywords: ["StringIO"] },
          ],
        },
      },
      {
        id: "pandas-19",
        title: "Export & recap",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "You now know Series, DataFrames, selection, cleaning, groupby, merge, and I/O — the core Pandas toolkit for real projects.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Next steps: combine with NumPy for numeric work and Matplotlib for charts.",
          },
          {
            type: "quiz",
            question: "Which method loads a CSV file?",
            options: [
              "pd.load_csv",
              "pd.read_csv",
              "pd.open_csv",
              "pd.import_csv",
            ],
            answer: 1,
            explanation:
              "`pd.read_csv(path)` is the standard way to load CSV files.",
          },
        ],
        challenge: {
          title: "Mini Pipeline",
          description:
            'Create `df = pd.DataFrame({"cat": ["A", "A", "B"], "val": [1, 2, 3]})`, print `df.groupby("cat")["val"].sum()`, then print `df.to_csv(index=False)`.',
          starterCode: `import pandas as pd

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({"cat": ["A", "A", "B"], "val": [1, 2, 3]})
print(df.groupby("cat")["val"].sum())
print(df.to_csv(index=False))`,
          tests: [
            { id: 1, label: "groupby sum", keywords: [".groupby", ".sum()"] },
            { id: 2, label: "to_csv", keywords: [".to_csv"] },
            { id: 3, label: "index=False", keywords: ["index=False"] },
          ],
        },
      },
    ],
  },
];

export const PANDAS_LESSONS = PANDAS_CHAPTERS.flatMap((ch) =>
  ch.lessons.map((l) => ({
    ...l,
    chapterId: ch.id,
    chapterTitle: ch.title,
    chapterColor: ch.color,
  })),
);

export const PANDAS_TOTAL_XP = PANDAS_LESSONS.reduce((s, l) => s + l.xp, 0);
