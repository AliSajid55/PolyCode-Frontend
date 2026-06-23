// Plain-English learning outcomes per NumPy lesson (shown at top of theory view).

export const NUMPY_LESSON_OUTCOMES = {
  "numpy-0": [
    "Say what NumPy is and why people use it for number work",
    "Import NumPy as `np` and build a small array with `np.array()`",
    "Spot real places where arrays beat plain Python lists",
  ],
  "numpy-1": [
    "Compare a Python list with a NumPy array in plain words",
    "Do math on a whole group of numbers without writing a loop",
    "Pick a list or an array depending on the job",
  ],
  "numpy-2": [
    "Read an array's **shape** — how many rows and columns it has",
    "Check **dtype** to see what kind of numbers are stored",
    "Add or multiply a whole row of numbers in one step (vector math)",
  ],
  "numpy-2a": [
    "Turn a Python list into a NumPy array with `np.array()`",
    "Build arrays from nested lists to make small tables",
    "See why `np.array()` is the usual starting point",
  ],
  "numpy-3": [
    "Make evenly spaced numbers with `np.arange()`",
    "Make a fixed count of numbers between two values with `np.linspace()`",
    "Choose arange or linspace for the situation you have",
  ],
  "numpy-4": [
    "Create arrays full of zeros or ones when you need a blank slate",
    "Build an identity matrix with `np.eye()` for square grids",
    "Know when placeholder arrays save you typing",
  ],
  "numpy-5": [
    "Slice a 1D array to grab part of a row",
    "Pick rows and columns in a 2D array with `[row, col]`",
    "Use negative indexes to count from the end",
  ],
  "numpy-6": [
    "Build a True/False mask to filter values you care about",
    "Keep only numbers that pass a condition — no manual loop",
    "Combine masks with `&` and `|` for smarter filters",
  ],
  "numpy-17": [
    "Use `np.where()` to pick values based on a condition",
    "Grab specific positions with fancy indexing",
    "Replace values in one clean array operation",
  ],
  "numpy-7": [
    "Explain broadcasting in simple terms",
    "Add a single number to every cell in an array",
    "Match shapes so NumPy can stretch smaller arrays safely",
  ],
  "numpy-7b": [
    "Sum or average **down columns** (`axis=0`) vs **across rows** (`axis=1`)",
    "Picture row-wise and column-wise operations on a small table",
    "Pick the right axis for “per student” vs “per subject” questions",
  ],
  "numpy-8": [
    "Multiply or divide matching cells in two 2D arrays",
    "Tell element-wise `*` apart from matrix multiply `@`",
    "Scale a whole table without nested loops",
  ],
  "numpy-9": [
    "Compute a dot product — multiply pairs and add them up",
    "Use `np.dot()` for weighted totals (like a receipt)",
    "Connect dot products to real “price × quantity” math",
  ],
  "numpy-10": [
    "Multiply two matrices with the `@` operator",
    "See how rows from A meet columns from B",
    "Know when `@` is the right tool instead of `*` or `np.dot`",
  ],
  "numpy-18": [
    "Solve a small system of equations with `np.linalg.solve()`",
    "Check if a matrix is invertible with the determinant",
    "Match story problems to “solve” vs “determinant”",
  ],
  "numpy-11": [
    "Find total, average, smallest, and largest values in an array",
    "Use `np.sum()`, `np.mean()`, `np.min()`, and `np.max()` confidently",
    "Answer quick stats questions on homework-sized data",
  ],
  "numpy-12": [
    "Sum or average **each row** with `axis=1`",
    "Sum or average **each column** with `axis=0`",
    "Read a 2D table and pick the axis that matches the question",
  ],
  "numpy-19": [
    "Handle missing values (`NaN`) without breaking your average",
    "Use `np.nanmean()` and friends when data has gaps",
    "Find percentiles to see where a score sits in the class",
  ],
  "numpy-13": [
    "Reshape a 1D line of numbers into a 2D table",
    "Check that the total count of cells stays the same",
    "Use `-1` in reshape to let NumPy figure out one dimension",
  ],
  "numpy-13b": [
    "Flip rows and columns with `.T` or `np.transpose()`",
    "Flatten a 2D array into one line with `ravel()`",
    "Choose transpose vs flatten based on what you need next",
  ],
  "numpy-14": [
    "Stack arrays vertically with `np.vstack()`",
    "Join arrays side by side with `np.hstack()` or `np.concatenate()`",
    "Build bigger tables from smaller pieces",
  ],
  "numpy-20": [
    "Generate random numbers with `np.random.rand()` and friends",
    "Set a **seed** so results repeat when you need fair tests",
    "Create dice rolls and other luck-based examples",
  ],
  "numpy-21": [
    "Pick random items with `np.random.choice()`",
    "Shuffle a list in place with `np.random.shuffle()`",
    "Build fair teams or random samples without bias",
  ],
  "numpy-21b": [
    "Run a simple simulation (many random trials)",
    "Count outcomes across lots of random runs",
    "Use random arrays to model real “what if” questions",
  ],
  "numpy-22": [
    "Find `NaN` values in messy data",
    "Drop or fill gaps so stats stay honest",
    "Clean a small dataset before you analyze it",
  ],
  "numpy-23": [
    "Sort values with `np.sort()`",
    "Get ranking indexes with `np.argsort()`",
    "List unique answers with `np.unique()`",
  ],
  "numpy-24": [
    "Save an array to a `.npy` file",
    "Load it back without losing dtype or shape",
    "Move data between practice sessions on your computer",
  ],
  "numpy-25": [
    "Tell a **view** from a **copy** when you slice an array",
    "Use `.copy()` before changing part of an array safely",
    "Avoid surprise bugs when two variables share memory",
  ],
  "numpy-26": [
    "Use universal functions (`ufuncs`) like `np.sqrt` on whole arrays",
    "Vectorize math so Python loops are not needed",
    "Write shorter, faster numeric code",
  ],
  "numpy-26b": [
    "See why NumPy arrays use less memory than lists of numbers",
    "Know when vectorized code is worth it on bigger data",
    "Compare list vs array speed in plain terms",
  ],
  "numpy-15": [
    "Normalize numbers with a z-score (mean 0, spread 1)",
    "Use `(x - mean) / std` on a whole vector at once",
    "Compare scores on the same scale fairly",
  ],
  "numpy-16": [
    "Compute a weighted average (tests with different weights)",
    "Use `np.dot()` with weights that sum to 1",
    "Explain a final grade from parts in one formula",
  ],
  "numpy-27": [
    "Combine stats, masking, and reshape on a grade sheet",
    "Build a small end-to-end report from raw scores",
    "Practice the full “read → clean → summarize” flow",
  ],
  "numpy-28": [
    "Chain filter → sort → summarize on one score list",
    "Turn messy inputs into a clear pipeline",
    "Document each step so others can follow your work",
  ],
  "numpy-29": [
    "Analyze a week of temperatures with min, max, and average",
    "Handle a realistic mini dataset from start to finish",
    "Present results a classmate could understand",
  ],
  "numpy-30": [
    "Mix indexing, stats, linear algebra, and cleaning in one project",
    "Build a class report card from raw arrays",
    "Show you can use NumPy without peeking at hints",
  ],
};
