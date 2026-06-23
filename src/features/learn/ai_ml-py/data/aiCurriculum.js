// PolyCode — AI / ML / DL full curriculum
// 15 chapters · 45 lessons · Python coding challenges
// YouTube links: edit aiVideoLinks.js (not this file).

import { applyLessonVideoLinks } from "../../shared/applyLessonVideoLinks";
import { AI_VIDEO_LINKS } from "./aiVideoLinks";

export const AI_CHAPTERS = [

  // ── Ch 1 ──────────────────────────────────────────────────────────────
  {
    id: "ai-intro",
    title: "What is AI?",
    icon: "🤖",
    color: "#059669",
    lessons: [
      {
        id: "aiml-0",
        title: "Introduction to Artificial Intelligence",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "**Artificial Intelligence (AI)** is the field of computer science focused on building systems that can perform tasks normally requiring human intelligence, recognising images, understanding speech, making decisions, and learning from experience.",
          },
          {
            type: "text",
            content:
              "AI is not magic. At its core, an AI system takes input data, processes it through mathematical models, and produces an output. What makes it powerful is its ability to **learn patterns from data** rather than following hard-coded rules.",
          },
          {
            type: "diagram",
            title: "What AI can do",
            nodes: [
              {
                id: "perceive",
                label: "Perceive",
                color: "#059669",
                items: ["Images", "Audio", "Text", "Sensors"],
              },
              {
                id: "reason",
                label: "Reason",
                color: "#0891b2",
                items: ["Plan", "Decide", "Predict", "Classify"],
              },
              {
                id: "act",
                label: "Act",
                color: "#4f46e5",
                items: ["Generate text", "Control robots", "Recommend", "Translate"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "A simple rule-based AI",
            content: `def diagnose(temp):
    if temp > 38.5:
        return "Fever detected — see a doctor"
    elif temp > 37.5:
        return "Mild fever — rest and hydrate"
    else:
        return "Normal temperature"

print(diagnose(39.0))
print(diagnose(37.2))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "AI is a broad field. Machine Learning (ML) and Deep Learning (DL) are **subsets** of AI, you will study all three in this course.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "The term 'Artificial Intelligence' was coined in 1956 by John McCarthy at the Dartmouth Conference, the formal birth of AI as a discipline.",
          },
          {
            type: "quiz",
            question: "Which best describes Artificial Intelligence?",
            options: [
              "A robot that looks like a human",
              "Systems that perform tasks requiring human-like intelligence",
              "A programming language for scientists",
              "A type of database",
            ],
            answer: 1,
            explanation:
              "AI refers to systems designed to perform tasks, like reasoning, learning, or perception, that typically require human intelligence.",
          },
          {
            type: "quiz",
            question: "Is Machine Learning the same as Artificial Intelligence?",
            options: [
              "Yes, they are identical",
              "No, ML is a subset of AI",
              "No, AI is a subset of ML",
              "They are completely unrelated fields",
            ],
            answer: 1,
            explanation:
              "Machine Learning is one approach within the broader field of AI. Deep Learning is a further subset of ML.",
          },
        ],
        challenge: {
          title: "Your First AI Decision",
          description:
            "Write a function `classify_age(age)` that returns `'child'` if age < 13, `'teen'` if age is 13–17, and `'adult'` if age >= 18. Print results for ages 8, 15, and 25.",
          starterCode: `# Write classify_age(age) and test it

`,
          solutionCode: `def classify_age(age):
    if age < 13:
        return 'child'
    elif age <= 17:
        return 'teen'
    else:
        return 'adult'

print(classify_age(8))
print(classify_age(15))
print(classify_age(25))`,
          tests: [
            { id: 1, label: "Defines classify_age", keywords: [{ pattern: "def\\s+classify_age\\s*\\(" }] },
            { id: 2, label: "Returns child/teen/adult", keywords: ["child", "teen", "adult"] },
            { id: 3, label: "Prints results", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-1",
        title: "Types of AI",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "AI is classified in two major ways: by **capability** and by **approach**. Understanding these categories helps you know which tool to use for which problem.",
          },
          {
            type: "text",
            content:
              "By capability: **Narrow AI (ANI)** does one task extremely well, like a chess engine or spam filter. **General AI (AGI)** would match human-level reasoning across all tasks, it does not yet exist. **Super AI (ASI)** would surpass human intelligence, purely theoretical.",
          },
          {
            type: "diagram",
            title: "AI by capability",
            nodes: [
              {
                id: "narrow",
                label: "Narrow AI (ANI)",
                color: "#059669",
                items: ["Exists today", "One task only", "ChatGPT, AlphaGo, Siri"],
              },
              {
                id: "general",
                label: "General AI (AGI)",
                color: "#0891b2",
                items: ["Does not exist yet", "Human-level all tasks"],
              },
              {
                id: "super",
                label: "Super AI (ASI)",
                color: "#4f46e5",
                items: ["Theoretical only", "Exceeds all human ability"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Mapping AI examples to types",
            content: `ai_examples = {
    'chess_engine': 'Narrow AI',
    'spam_filter':  'Narrow AI',
    'Siri':         'Narrow AI',
    'human_robot':  'General AI (future)',
}

for name, ai_type in ai_examples.items():
    print(f"{name:15} → {ai_type}")`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Everything you will build in this course falls under **Narrow AI**, the only kind that currently exists as working software.",
          },
          {
            type: "quiz",
            question: "Which type of AI exists as working software today?",
            options: [
              "Super AI (ASI)",
              "General AI (AGI)",
              "Narrow AI (ANI)",
              "None — AI is still theoretical",
            ],
            answer: 2,
            explanation:
              "Narrow AI is the only type that exists today. It excels at specific tasks but cannot generalise across all domains.",
          },
          {
            type: "quiz",
            question: "In reinforcement learning, how does an agent improve?",
            options: [
              "By memorising a dataset",
              "By grouping similar data points",
              "By trial and error using rewards and penalties",
              "By reading documentation",
            ],
            answer: 2,
            explanation:
              "Reinforcement learning agents take actions in an environment and receive reward/penalty signals, gradually learning the best strategy.",
          },
        ],
        challenge: {
          title: "Classify AI Types",
          description:
            "Create a dictionary `ai_examples` with at least 3 entries mapping tool names to their AI type ('Narrow AI', 'General AI', etc.). Loop over it and print each key-value pair.",
          starterCode: `# Create ai_examples dict and print each item

`,
          solutionCode: `ai_examples = {
    'chess_engine': 'Narrow AI',
    'human_robot':  'General AI',
    'spam_filter':  'Narrow AI',
}

for name, ai_type in ai_examples.items():
    print(f"{name}: {ai_type}")`,
          tests: [
            { id: 1, label: "Creates ai_examples dict", keywords: ["ai_examples"] },
            { id: 2, label: "Loops over .items()", keywords: [{ pattern: "\\.items\\s*\\(\\)" }] },
            { id: 3, label: "Prints pairs", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-2",
        title: "AI vs ML vs DL",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "**AI** is the broadest concept — any technique that makes machines act intelligently. **Machine Learning (ML)** is a subset of AI where systems learn from data. **Deep Learning (DL)** is a subset of ML that uses multi-layered neural networks to learn features automatically.",
          },
          {
            type: "text",
            content:
              "Think of it as nested circles: DL ⊂ ML ⊂ AI. Every deep learning model is also an ML model and an AI model, but not every AI system uses ML.",
          },
          {
            type: "diagram",
            title: "AI ⊃ ML ⊃ DL",
            nodes: [
              {
                id: "ai",
                label: "Artificial Intelligence",
                color: "#059669",
                items: ["Rule-based systems", "Search algorithms", "Expert systems"],
              },
              {
                id: "ml",
                label: "Machine Learning",
                color: "#0891b2",
                items: ["Learns from data", "SVM, Decision Trees", "Random Forests"],
              },
              {
                id: "dl",
                label: "Deep Learning",
                color: "#7c3aed",
                items: ["Neural networks", "CNNs, RNNs", "Transformers"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Hierarchy in code",
            content: `# Representing the AI/ML/DL hierarchy
hierarchy = {
    'AI': ['Rule-based', 'Search', 'ML', 'Expert Systems'],
    'ML': ['Linear Regression', 'Decision Tree', 'SVM', 'DL'],
    'DL': ['CNN', 'RNN', 'Transformer', 'GAN'],
}

for level, examples in hierarchy.items():
    print(f"{level}: {', '.join(examples)}")`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use ML when you have structured tabular data (rows & columns). Use DL when you have unstructured data like images, audio, or raw text.",
          },
          {
            type: "quiz",
            question: "Which is the correct relationship?",
            options: [
              "ML ⊂ DL ⊂ AI",
              "AI ⊂ ML ⊂ DL",
              "DL ⊂ ML ⊂ AI",
              "All three are equal and separate",
            ],
            answer: 2,
            explanation:
              "Deep Learning is a subset of Machine Learning, which is a subset of Artificial Intelligence. DL ⊂ ML ⊂ AI.",
          },
          {
            type: "quiz",
            question: "Which type of data is Deep Learning best suited for?",
            options: [
              "Small spreadsheets with under 100 rows",
              "Unstructured data like images, audio, and raw text",
              "SQL database tables",
              "Any data type — DL always outperforms ML",
            ],
            answer: 1,
            explanation:
              "Deep Learning excels at unstructured data (images, audio, text) because its layers automatically learn hierarchical features. For tabular data, classical ML is often better and faster.",
          },
        ],
        challenge: {
          title: "Build the Hierarchy",
          description:
            "Create a dictionary `hierarchy` with keys `'AI'`, `'ML'`, and `'DL'` each mapped to a list of at least 2 examples. Print each level and its examples.",
          starterCode: `# Build hierarchy dict and print it

`,
          solutionCode: `hierarchy = {
    'AI': ['Rule-based systems', 'Search algorithms'],
    'ML': ['Decision Tree', 'SVM'],
    'DL': ['CNN', 'Transformer'],
}

for level, examples in hierarchy.items():
    print(f"{level}: {examples}")`,
          tests: [
            { id: 1, label: "Creates hierarchy dict", keywords: ["hierarchy"] },
            { id: 2, label: "Has AI, ML, DL keys", keywords: ["'AI'", "'ML'", "'DL'"] },
            { id: 3, label: "Prints each level", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },
    ],
  },

  // ── Ch 2 ──────────────────────────────────────────────────────────────
  {
    id: "python-tools",
    title: "Python Tools for AI",
    icon: "🐍",
    color: "#0891b2",
    lessons: [
      {
        id: "aiml-3",
        title: "NumPy for AI",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "**NumPy** is the foundation of all AI and ML work in Python. Every dataset, every neural network weight, and every prediction is stored as a **NumPy array** — a fast, memory-efficient grid of numbers.",
          },
          {
            type: "text",
            content:
              "In AI, data lives in arrays: a dataset of 1000 rows and 10 features is a `(1000, 10)` array. Images are `(height, width, 3)` arrays. Understanding array shapes is critical before writing any model.",
          },
          {
            type: "diagram",
            title: "NumPy arrays in AI",
            nodes: [
              {
                id: "1d",
                label: "1D array",
                color: "#0891b2",
                items: ["One feature", "shape: (n,)", "e.g. prices"],
              },
              {
                id: "2d",
                label: "2D array",
                color: "#0369a1",
                items: ["Dataset table", "shape: (rows, cols)", "e.g. dataset"],
              },
              {
                id: "3d",
                label: "3D array",
                color: "#075985",
                items: ["Images / sequences", "shape: (n, h, w)", "e.g. photos"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "NumPy essentials for AI",
            content: `import numpy as np

# A dataset: 4 samples, 2 features each
X = np.array([[1.0, 2.0],
              [3.0, 4.0],
              [5.0, 6.0],
              [7.0, 8.0]])

print("Shape:", X.shape)
print("Mean per column:", X.mean(axis=0))
print("Normalised:\\n", ((X - X.mean()) / X.std()).round(3))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "`axis=0` operates down rows (per column). `axis=1` operates across columns (per row). You will use this constantly in ML.",
          },
          {
            type: "quiz",
            question: "What does `X.shape` return for a dataset with 100 rows and 5 features?",
            options: ["(5, 100)", "(100, 5)", "(100,)", "(5,)"],
            answer: 1,
            explanation:
              "By convention, datasets are shaped (samples, features). 100 rows × 5 features → shape (100, 5).",
          },
          {
            type: "quiz",
            question: "What does `X.mean(axis=0)` compute?",
            options: [
              "Mean of the entire array",
              "Mean of each row",
              "Mean of each column",
              "Mean of the first row only",
            ],
            answer: 2,
            explanation:
              "`axis=0` collapses along the row dimension, leaving one value per column — the column-wise mean.",
          },
        ],
        challenge: {
          title: "Dataset Stats with NumPy",
          description:
            "Create a 2D NumPy array `data` with 3 rows and 3 columns (any values). Print its `shape`, the `mean` of each column (`axis=0`), and the `max` of the entire array.",
          starterCode: `import numpy as np

# Create data (3 rows, 3 cols) and print stats

`,
          solutionCode: `import numpy as np

data = np.array([[1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]])

print("Shape:", data.shape)
print("Column means:", data.mean(axis=0))
print("Max:", data.max())`,
          tests: [
            { id: 1, label: "Imports numpy", keywords: ["import numpy"] },
            { id: 2, label: "Uses np.array with 2D data", keywords: ["np.array"] },
            { id: 3, label: "Prints shape", keywords: [".shape"] },
            { id: 4, label: "Column mean axis=0", keywords: ["axis=0"] },
          ],
        },
      },

      {
        id: "aiml-4",
        title: "Pandas for AI",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "Before training any model, data lives in **Pandas DataFrames**. Real-world AI datasets come as CSV files, database exports, or API responses — all of which load naturally into Pandas. You explore, clean, and prepare data here before handing it to scikit-learn.",
          },
          {
            type: "text",
            content:
              "The standard workflow is: load → inspect → clean missing values → select features → convert to NumPy for modelling. The `.values` property extracts the underlying NumPy array from a DataFrame.",
          },
          {
            type: "diagram",
            title: "Pandas → NumPy pipeline",
            nodes: [
              {
                id: "load",
                label: "Load data",
                color: "#0891b2",
                items: ["pd.read_csv()", "pd.DataFrame()"],
              },
              {
                id: "clean",
                label: "Clean",
                color: "#0369a1",
                items: ["dropna()", "fillna()", "astype()"],
              },
              {
                id: "extract",
                label: "Extract for model",
                color: "#075985",
                items: ["df[cols].values", "→ numpy array"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Prepare features for ML",
            content: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    "age":    [25, 32, None, 45, 28],
    "salary": [50000, 72000, 65000, 90000, 58000],
    "hired":  [1, 1, 0, 1, 0],
})

df["age"] = df["age"].fillna(df["age"].mean())

X = df[["age", "salary"]].values   # numpy array
y = df["hired"].values

print("X shape:", X.shape)
print("y:", y)`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "`.values` converts a Pandas DataFrame or Series to a plain NumPy array — this is what scikit-learn's `fit()` expects.",
          },
          {
            type: "quiz",
            question: "What does `df[['age', 'salary']].values` return?",
            options: ["A Pandas DataFrame", "A Python list", "A NumPy array", "A dictionary"],
            answer: 2,
            explanation:
              "`.values` extracts the underlying NumPy array from a DataFrame — the format expected by most ML libraries.",
          },
          {
            type: "quiz",
            question: "Why fill missing values before passing data to a model?",
            options: [
              "To make the DataFrame smaller",
              "Because most ML models cannot handle NaN values",
              "To improve plotting",
              "Because Pandas requires it",
            ],
            answer: 1,
            explanation:
              "Most scikit-learn models raise an error if NaN values are present. Filling or dropping them is a required preprocessing step.",
          },
        ],
        challenge: {
          title: "Feature Matrix",
          description:
            "Create a DataFrame `df` with columns `height` = `[160, 175, 180, 155]` and `weight` = `[55, 80, 85, 50]`. Extract a NumPy feature matrix `X` using `.values` and print `X` and `X.shape`.",
          starterCode: `import pandas as pd
import numpy as np

# Create df, extract X, print X and X.shape

`,
          solutionCode: `import pandas as pd
import numpy as np

df = pd.DataFrame({
    "height": [160, 175, 180, 155],
    "weight": [55, 80, 85, 50],
})

X = df[["height", "weight"]].values
print(X)
print(X.shape)`,
          tests: [
            { id: 1, label: "Creates DataFrame", keywords: ["pd.DataFrame"] },
            { id: 2, label: "Extracts .values", keywords: [{ pattern: "\\.values" }] },
            { id: 3, label: "Prints shape", keywords: [".shape"] },
          ],
        },
      },

      {
        id: "aiml-5",
        title: "Matplotlib for AI",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "**Matplotlib** is Python's standard plotting library. In AI and ML, visualising data before training — and predictions after — is essential. You cannot fix what you cannot see.",
          },
          {
            type: "text",
            content:
              "The most common plots in ML are: **scatter plots** (to see relationships between features), **histograms** (to see data distribution), and **line plots** (to track training loss over epochs).",
          },
          {
            type: "diagram",
            title: "When to use each plot",
            nodes: [
              {
                id: "scatter",
                label: "Scatter plot",
                color: "#0891b2",
                items: ["Feature vs feature", "Spot clusters", "Check separability"],
              },
              {
                id: "hist",
                label: "Histogram",
                color: "#0369a1",
                items: ["Value distribution", "Spot skew/outliers"],
              },
              {
                id: "line",
                label: "Line plot",
                color: "#075985",
                items: ["Loss over epochs", "Accuracy curves"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Scatter plot of two features",
            content: `import numpy as np
import matplotlib.pyplot as plt

np.random.seed(0)
x = np.random.randn(50)
y = 2 * x + np.random.randn(50) * 0.5

plt.scatter(x, y, color='teal', alpha=0.7)
plt.title("Feature Scatter")
plt.xlabel("Feature 1")
plt.ylabel("Feature 2")
plt.show()`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Always call `plt.show()` at the end. In Jupyter notebooks `%matplotlib inline` shows plots automatically.",
          },
          {
            type: "quiz",
            question: "Which plot is best for tracking model training loss over time?",
            options: ["Scatter plot", "Bar chart", "Histogram", "Line plot"],
            answer: 3,
            explanation:
              "Loss values change with each training epoch — a line plot is the natural choice to see the trend over time.",
          },
          {
            type: "quiz",
            question: "What does a histogram show?",
            options: [
              "Relationship between two variables",
              "Distribution of values in one variable",
              "Categories and their counts",
              "Model accuracy over epochs",
            ],
            answer: 1,
            explanation:
              "A histogram shows how the values of a single variable are distributed — where they cluster, whether they are skewed, and whether outliers exist.",
          },
        ],
        challenge: {
          title: "Plot Two Features",
          description:
            "Create `feature1 = np.array([1,2,3,4,5])` and `feature2 = np.array([2,4,5,4,5])`. Plot a scatter chart with feature1 on x-axis and feature2 on y-axis. Add a title `'Feature Scatter'` and call `plt.show()`.",
          starterCode: `import numpy as np
import matplotlib.pyplot as plt

feature1 = np.array([1, 2, 3, 4, 5])
feature2 = np.array([2, 4, 5, 4, 5])

# Create scatter plot here

`,
          solutionCode: `import numpy as np
import matplotlib.pyplot as plt

feature1 = np.array([1, 2, 3, 4, 5])
feature2 = np.array([2, 4, 5, 4, 5])

plt.scatter(feature1, feature2)
plt.title('Feature Scatter')
plt.show()`,
          tests: [
            { id: 1, label: "Uses plt.scatter", keywords: ["plt.scatter"] },
            { id: 2, label: "Adds title", keywords: [{ pattern: "plt\\.title\\s*\\(" }] },
            { id: 3, label: "Calls plt.show", keywords: ["plt.show()"] },
          ],
        },
      },
    ],
  },

  // ── Ch 3 ──────────────────────────────────────────────────────────────
  {
    id: "ml-overview",
    title: "Machine Learning Overview",
    icon: "🧠",
    color: "#7c3aed",
    lessons: [
      {
        id: "aiml-6",
        title: "What is Machine Learning?",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "**Machine Learning** is a subfield of AI where systems learn patterns from data instead of following hand-coded rules. You give the algorithm data and expected outputs; it figures out the mapping on its own.",
          },
          {
            type: "text",
            content:
              "The ML workflow always follows the same steps: collect data → preprocess → choose a model → train → evaluate → predict. Every ML project you will ever do follows this pipeline.",
          },
          {
            type: "diagram",
            title: "ML workflow",
            nodes: [
              {
                id: "data",
                label: "Data",
                color: "#7c3aed",
                items: ["Collect & label", "Features + targets"],
              },
              {
                id: "model",
                label: "Model",
                color: "#0891b2",
                items: ["Choose algorithm", "Train on data"],
              },
              {
                id: "evaluate",
                label: "Evaluate & Deploy",
                color: "#059669",
                items: ["Test accuracy", "Predict new data"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "The simplest ML possible",
            content: `from sklearn.linear_model import LinearRegression
import numpy as np

# Training data: house size (sqft) → price ($k)
X_train = np.array([[800], [1200], [1500], [2000], [2500]])
y_train = np.array([150,    200,    250,    320,    400  ])

model = LinearRegression()
model.fit(X_train, y_train)

print("Predicted price for 1800 sqft:", round(model.predict([[1800]])[0], 1), "$k")`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "In ML, `X` (capital) is always the **feature matrix** and `y` (lowercase) is always the **target vector**. This naming convention is universal.",
          },
          {
            type: "callout",
            variant: "info",
            content:
              "scikit-learn's API is consistent: `model.fit(X_train, y_train)` to train, `model.predict(X_new)` to predict.",
          },
          {
            type: "quiz",
            question: "What does an ML model learn from?",
            options: [
              "Hand-written if-else rules",
              "Patterns in training data",
              "Internet searches",
              "Hard-coded weights provided by the programmer",
            ],
            answer: 1,
            explanation:
              "ML models learn the mapping from inputs to outputs by optimising internal parameters against training data.",
          },
          {
            type: "quiz",
            question: "In ML notation, what does `X` represent?",
            options: [
              "The target variable to predict",
              "The model error",
              "The feature matrix (input data)",
              "The training algorithm",
            ],
            answer: 2,
            explanation:
              "`X` (capital) conventionally represents the feature matrix — input data with samples as rows and features as columns.",
          },
        ],
        challenge: {
          title: "Your First sklearn Model",
          description:
            "Import `LinearRegression`. Create `X_train = np.array([[1],[2],[3],[4]])` and `y_train = np.array([2,4,6,8])`. Fit the model and print the prediction for `X = [[5]]`.",
          starterCode: `from sklearn.linear_model import LinearRegression
import numpy as np

X_train = np.array([[1], [2], [3], [4]])
y_train = np.array([2, 4, 6, 8])

# Fit model and predict for X=[[5]]

`,
          solutionCode: `from sklearn.linear_model import LinearRegression
import numpy as np

X_train = np.array([[1], [2], [3], [4]])
y_train = np.array([2, 4, 6, 8])

model = LinearRegression()
model.fit(X_train, y_train)
print("Prediction for 5:", model.predict([[5]])[0])`,
          tests: [
            { id: 1, label: "Imports LinearRegression", keywords: ["LinearRegression"] },
            { id: 2, label: "Calls model.fit", keywords: [{ pattern: "\\.fit\\s*\\(" }] },
            { id: 3, label: "Calls model.predict", keywords: [{ pattern: "\\.predict\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-7",
        title: "Supervised vs Unsupervised",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "ML is divided into three main paradigms. **Supervised learning** trains on labelled data (inputs + correct outputs). **Unsupervised learning** finds hidden structure in unlabelled data. **Reinforcement learning** learns by interacting with an environment and collecting rewards.",
          },
          {
            type: "diagram",
            title: "Three ML paradigms",
            nodes: [
              {
                id: "supervised",
                label: "Supervised",
                color: "#7c3aed",
                items: ["Labelled data", "Classification, Regression", "Spam filter, price prediction"],
              },
              {
                id: "unsupervised",
                label: "Unsupervised",
                color: "#0891b2",
                items: ["No labels", "Clustering, Compression", "Customer segments"],
              },
              {
                id: "rl",
                label: "Reinforcement",
                color: "#059669",
                items: ["Reward signal", "Trial and error", "Games, robotics"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Supervised vs Unsupervised in code",
            content: `import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.cluster import KMeans

# Supervised (labelled)
X = np.array([[1],[2],[3],[4],[5]])
y = np.array([2, 4, 6, 8, 10])
lr = LinearRegression().fit(X, y)
print("Supervised prediction for 6:", lr.predict([[6]])[0])

# Unsupervised (no labels)
data = np.array([[1,1],[1,2],[8,8],[8,9],[9,8]])
km = KMeans(n_clusters=2, random_state=0, n_init=10).fit(data)
print("Cluster assignments:", km.labels_)`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "This course focuses on supervised and unsupervised learning. Reinforcement learning is covered conceptually — it requires its own full course to implement.",
          },
          {
            type: "quiz",
            question: "Which paradigm is used to build a spam email classifier?",
            options: [
              "Reinforcement learning",
              "Unsupervised learning",
              "Supervised learning",
              "Rule-based AI",
            ],
            answer: 2,
            explanation:
              "A spam classifier is trained on labelled emails (spam/not spam) — a supervised learning task.",
          },
          {
            type: "quiz",
            question: "Which paradigm groups customers without predefined categories?",
            options: [
              "Supervised learning",
              "Reinforcement learning",
              "Unsupervised learning",
              "Deep learning",
            ],
            answer: 2,
            explanation:
              "Customer segmentation has no predefined labels — the algorithm discovers natural groupings, which is unsupervised learning.",
          },
        ],
        challenge: {
          title: "Identify the Paradigm",
          description:
            "Create a list of tuples `tasks` with at least 3 entries: each tuple is `(task_name, paradigm)`. Include examples of supervised, unsupervised, and reinforcement learning. Loop and print each.",
          starterCode: `# Create tasks list and print each item

`,
          solutionCode: `tasks = [
    ('predict house price', 'supervised'),
    ('group news articles', 'unsupervised'),
    ('train a chess AI', 'reinforcement'),
]

for task, paradigm in tasks:
    print(f"'{task}' → {paradigm}")`,
          tests: [
            { id: 1, label: "Creates tasks list", keywords: ["tasks"] },
            { id: 2, label: "Loops over tasks", keywords: [{ pattern: "for\\s+\\w+.*in\\s+tasks" }] },
            { id: 3, label: "Prints each pair", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-8",
        title: "Train-Test Split",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "A model trained and evaluated on the **same data** will appear perfect — but it has only memorised the data, not learned to generalise. This is **overfitting**. The solution is to split data into a **training set** (to fit) and a **test set** (to evaluate).",
          },
          {
            type: "text",
            content:
              "The standard split is **80/20** (80% train, 20% test). Always set a `random_state` for reproducibility. Never touch the test set during training or feature selection.",
          },
          {
            type: "diagram",
            title: "Train-test split",
            nodes: [
              {
                id: "train",
                label: "Training set (80%)",
                color: "#7c3aed",
                items: ["Model learns from this", "fit() is called here"],
              },
              {
                id: "test",
                label: "Test set (20%)",
                color: "#0891b2",
                items: ["Held-out evaluation", "Never seen during training"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "train_test_split",
            content: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.array([[i] for i in range(1, 21)])
y = np.array([i * 3 + 1 for i in range(1, 21)])

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = LinearRegression().fit(X_train, y_train)
score = model.score(X_test, y_test)
print(f"Train size: {len(X_train)}, Test size: {len(X_test)}")
print(f"Test R²: {score:.4f}")`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "For classification tasks, pass `stratify=y` to `train_test_split` to ensure both splits have the same class proportion as the original data.",
          },
          {
            type: "quiz",
            question: "Why must the test set never be used during training?",
            options: [
              "The test set is too small",
              "To get an unbiased estimate of real-world performance",
              "sklearn raises an error otherwise",
              "The test set contains duplicate rows",
            ],
            answer: 1,
            explanation:
              "If the model sees test data during training, its performance on that data is no longer a fair measure of generalisation.",
          },
          {
            type: "quiz",
            question: "What does `random_state=42` do in `train_test_split`?",
            options: [
              "It trains the model 42 times",
              "It makes the split reproducible across runs",
              "It uses 42% of data for testing",
              "It seeds the model weights",
            ],
            answer: 1,
            explanation:
              "Setting `random_state` fixes the random seed, ensuring the same split is produced every time the code is run.",
          },
        ],
        challenge: {
          title: "Split and Score",
          description:
            "Create `X = np.arange(1, 51).reshape(-1, 1)` and `y = X.flatten() * 2`. Split with `test_size=0.2, random_state=0`. Fit a `LinearRegression` on the train set. Print `X_train.shape`, `X_test.shape`, and the test R² score.",
          starterCode: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.arange(1, 51).reshape(-1, 1)
y = X.flatten() * 2

# Split, fit, and print shapes + score

`,
          solutionCode: `from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import numpy as np

X = np.arange(1, 51).reshape(-1, 1)
y = X.flatten() * 2

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
model = LinearRegression().fit(X_train, y_train)

print("Train shape:", X_train.shape)
print("Test shape:", X_test.shape)
print("Test R²:", round(model.score(X_test, y_test), 4))`,
          tests: [
            { id: 1, label: "Uses train_test_split", keywords: ["train_test_split"] },
            { id: 2, label: "Fits on train set", keywords: [{ pattern: "\\.fit\\s*\\(\\s*X_train" }] },
            { id: 3, label: "Scores on test set", keywords: [{ pattern: "\\.score\\s*\\(\\s*X_test" }] },
          ],
        },
      },
    ],
  },

  // ── Ch 4 ──────────────────────────────────────────────────────────────
  {
    id: "preprocessing",
    title: "Data Preprocessing",
    icon: "🔧",
    color: "#0369a1",
    lessons: [
      {
        id: "aiml-9",
        title: "Feature Scaling",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Most ML algorithms are sensitive to the **scale** of features. If one feature ranges 0–1 and another 0–1,000,000, the large-scale feature dominates. **Feature scaling** brings all features to a comparable range.",
          },
          {
            type: "text",
            content:
              "Two main methods: **StandardScaler** (z-score — mean 0, std 1, best for algorithms assuming Gaussian distribution) and **MinMaxScaler** (scales to [0,1], best for neural networks).",
          },
          {
            type: "diagram",
            title: "Scaling methods",
            nodes: [
              {
                id: "standard",
                label: "StandardScaler",
                color: "#0369a1",
                items: ["z = (x − mean) / std", "Mean=0, Std=1", "Best for SVM, KNN, LR"],
              },
              {
                id: "minmax",
                label: "MinMaxScaler",
                color: "#0891b2",
                items: ["x_s = (x−min)/(max−min)", "Range: [0, 1]", "Best for neural nets"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "StandardScaler in practice",
            content: `from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([[1000, 0.5],
              [2000, 1.0],
              [1500, 0.8],
              [3000, 1.5]])

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print("Original X:\\n", X)
print("\\nScaled X:\\n", X_scaled.round(3))
print("\\nMean after scaling:", X_scaled.mean(axis=0).round(6))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Always `fit` the scaler on training data only, then `transform` both train and test sets. Fitting on test data causes **data leakage**.",
          },
          {
            type: "quiz",
            question: "Why is feature scaling important for algorithms like KNN and SVM?",
            options: [
              "It makes training data smaller",
              "These algorithms use distances — large-scale features dominate without scaling",
              "It prevents overfitting",
              "It removes missing values",
            ],
            answer: 1,
            explanation:
              "KNN and SVM compute distances. Without scaling, a large-valued feature dominates over a small-valued one.",
          },
          {
            type: "quiz",
            question: "What does StandardScaler transform data to?",
            options: [
              "Range [0, 1]",
              "Range [-1, 1]",
              "Mean = 0 and standard deviation = 1",
              "All values become positive",
            ],
            answer: 2,
            explanation:
              "StandardScaler applies z-score normalisation: each feature is shifted to mean 0 and scaled to std 1.",
          },
        ],
        challenge: {
          title: "Scale a Dataset",
          description:
            "Create `X = np.array([[10, 200], [20, 400], [30, 600]])`. Apply `StandardScaler` to get `X_scaled`. Print `X_scaled` and verify column means are ~0 by printing `X_scaled.mean(axis=0).round(6)`.",
          starterCode: `from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([[10, 200], [20, 400], [30, 600]])

# Scale X and print results

`,
          solutionCode: `from sklearn.preprocessing import StandardScaler
import numpy as np

X = np.array([[10, 200], [20, 400], [30, 600]])

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X)

print("Scaled X:\\n", X_scaled)
print("Column means:", X_scaled.mean(axis=0).round(6))`,
          tests: [
            { id: 1, label: "Imports StandardScaler", keywords: ["StandardScaler"] },
            { id: 2, label: "Calls fit_transform", keywords: ["fit_transform"] },
            { id: 3, label: "Prints scaled result", keywords: ["X_scaled"] },
          ],
        },
      },

      {
        id: "aiml-10",
        title: "Encoding Categorical Features",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "ML models work with numbers, not strings. **Categorical features** like `'red'`, `'blue'`, `'green'` must be converted to numbers before training. The wrong encoding can introduce false ordinal relationships.",
          },
          {
            type: "text",
            content:
              "Two main strategies: **Label Encoding** assigns integers (0, 1, 2…) — fine for ordinal data. **One-Hot Encoding** creates a binary column per category — correct for nominal data with no natural order.",
          },
          {
            type: "diagram",
            title: "Encoding strategies",
            nodes: [
              {
                id: "label",
                label: "Label Encoding",
                color: "#0369a1",
                items: ["red→0, blue→1, green→2", "Use for ordinal data", "Risk: false order"],
              },
              {
                id: "onehot",
                label: "One-Hot Encoding",
                color: "#0891b2",
                items: ["One column per category", "Binary 0/1 values", "Use for nominal data"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "One-hot encoding with pandas",
            content: `import pandas as pd

df = pd.DataFrame({
    "color": ["red", "blue", "green", "red", "blue"],
    "size":  ["S", "M", "L", "M", "S"],
})

encoded = pd.get_dummies(df, columns=["color"], drop_first=False)
print(encoded)`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use `drop_first=True` in `get_dummies()` to avoid the **dummy variable trap** — with k categories, only k-1 columns are needed.",
          },
          {
            type: "quiz",
            question: "Why is label encoding dangerous for nominal (unordered) categories?",
            options: [
              "It produces too many columns",
              "It introduces a false numerical ordering between categories",
              "It cannot handle more than two categories",
              "It always causes overfitting",
            ],
            answer: 1,
            explanation:
              "Label encoding assigns integers implying red < blue < green — a false relationship for unordered categories.",
          },
          {
            type: "quiz",
            question: "How many columns does one-hot encoding create for a feature with 5 categories?",
            options: ["1", "5", "4 (with drop_first=True)", "10"],
            answer: 1,
            explanation:
              "Without `drop_first`, one-hot encoding creates one column per category (5 columns). With `drop_first=True`, it creates 4 (k−1).",
          },
        ],
        challenge: {
          title: "One-Hot Encode",
          description:
            "Create `df = pd.DataFrame({'city': ['Lahore','Karachi','Islamabad','Lahore','Karachi']})`. Apply `pd.get_dummies(df, columns=['city'])` and print the result.",
          starterCode: `import pandas as pd

df = pd.DataFrame({'city': ['Lahore', 'Karachi', 'Islamabad', 'Lahore', 'Karachi']})

# One-hot encode 'city' and print

`,
          solutionCode: `import pandas as pd

df = pd.DataFrame({'city': ['Lahore', 'Karachi', 'Islamabad', 'Lahore', 'Karachi']})

encoded = pd.get_dummies(df, columns=['city'])
print(encoded)`,
          tests: [
            { id: 1, label: "Creates DataFrame", keywords: ["pd.DataFrame"] },
            { id: 2, label: "Uses get_dummies", keywords: ["get_dummies"] },
            { id: 3, label: "Prints encoded", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-11",
        title: "sklearn Pipelines",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "A **Pipeline** chains preprocessing steps and a model into a single object. Without it, you must manually apply each transformation to train and test data separately — a common source of bugs and data leakage.",
          },
          {
            type: "text",
            content:
              "With a Pipeline: `pipe.fit(X_train, y_train)` fits all steps. `pipe.predict(X_test)` applies all transforms then predicts. The scaler's `fit` never sees test data — **leakage-free by design**.",
          },
          {
            type: "diagram",
            title: "Pipeline steps",
            nodes: [
              {
                id: "step1",
                label: "Step 1: Scaler",
                color: "#0369a1",
                items: ["StandardScaler", "fit on train only"],
              },
              {
                id: "step2",
                label: "Step 2: Model",
                color: "#0891b2",
                items: ["Any sklearn estimator", "Receives scaled data"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Pipeline: scaler + classifier",
            content: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('clf',    LogisticRegression(max_iter=200)),
])

pipe.fit(X_train, y_train)
print("Pipeline test accuracy:", round(pipe.score(X_test, y_test), 4))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Pipelines work seamlessly with `cross_val_score` and `GridSearchCV` — the entire transform+fit loop is handled correctly for each fold.",
          },
          {
            type: "quiz",
            question: "What is the main advantage of using a sklearn Pipeline?",
            options: [
              "It trains the model faster",
              "It prevents data leakage by fitting transformers only on training data",
              "It automatically selects the best model",
              "It handles missing values automatically",
            ],
            answer: 1,
            explanation:
              "A Pipeline ensures scalers are fit only on training data, preventing test data from influencing preprocessing.",
          },
          {
            type: "quiz",
            question: "When does a Pipeline's scaler fit on test data?",
            options: [
              "Every time predict() is called",
              "Never — it only transforms test data using train-fit parameters",
              "When you call pipe.score(X_test, y_test)",
              "When the test size is larger than 20%",
            ],
            answer: 1,
            explanation:
              "A Pipeline's preprocessors are fit only once during `pipe.fit(X_train, ...)`. The transform step on test data uses parameters learned from training.",
          },
        ],
        challenge: {
          title: "Build a Pipeline",
          description:
            "Using `load_iris`, create a Pipeline with `StandardScaler` and `LogisticRegression(max_iter=200)`. Split 80/20 with `random_state=1`. Fit the pipeline and print the test accuracy.",
          starterCode: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)

# Create pipeline, split, fit, and print accuracy

`,
          solutionCode: `from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1)

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', LogisticRegression(max_iter=200)),
])

pipe.fit(X_train, y_train)
print("Test accuracy:", round(pipe.score(X_test, y_test), 4))`,
          tests: [
            { id: 1, label: "Creates Pipeline", keywords: ["Pipeline"] },
            { id: 2, label: "Includes StandardScaler", keywords: ["StandardScaler"] },
            { id: 3, label: "Fits pipeline", keywords: [{ pattern: "pipe\\.fit\\s*\\(" }] },
            { id: 4, label: "Prints accuracy", keywords: [{ pattern: "pipe\\.score\\s*\\(" }] },
          ],
        },
      },
    ],
  },

  // ── Ch 5 ──────────────────────────────────────────────────────────────
  {
    id: "regression",
    title: "Regression",
    icon: "📈",
    color: "#2563eb",
    lessons: [
      {
        id: "aiml-12",
        title: "Linear Regression",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Linear regression** models the relationship between a continuous output `y` and input features `X` as a straight line: `y = w₀ + w₁x₁ + … + wₙxₙ`. The model learns weights `w` that minimise the **Mean Squared Error (MSE)**.",
          },
          {
            type: "text",
            content:
              "**MSE** = mean of (predicted − actual)². **R²** measures how much variance in `y` the model explains — 1.0 is perfect, 0.0 means the model is no better than predicting the mean.",
          },
          {
            type: "diagram",
            title: "Linear regression concepts",
            nodes: [
              {
                id: "line",
                label: "Best-fit line",
                color: "#2563eb",
                items: ["y = w₀ + w₁x", "Minimises MSE", "Learned weights w"],
              },
              {
                id: "error",
                label: "Error metrics",
                color: "#3b82f6",
                items: ["MSE = mean(ŷ−y)²", "R² ∈ [0, 1]"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Linear regression with evaluation",
            content: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.model_selection import train_test_split
import numpy as np

np.random.seed(1)
X = np.random.rand(100, 1) * 10
y = 3.5 * X.flatten() + 2 + np.random.randn(100) * 2

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=1)
model = LinearRegression().fit(X_train, y_train)
y_pred = model.predict(X_test)

print(f"Slope:     {model.coef_[0]:.4f}")
print(f"Intercept: {model.intercept_:.4f}")
print(f"MSE:       {mean_squared_error(y_test, y_pred):.4f}")
print(f"R²:        {r2_score(y_test, y_pred):.4f}")`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "A high R² does not always mean a good model. Always plot residuals to check for patterns — patterns in residuals indicate the model is missing something.",
          },
          {
            type: "quiz",
            question: "What does an R² of 0.85 mean?",
            options: [
              "The model is wrong 85% of the time",
              "The model explains 85% of the variance in y",
              "The MSE is 0.85",
              "The model uses 85% of the features",
            ],
            answer: 1,
            explanation:
              "R² represents the proportion of variance in the target that the model accounts for. R²=0.85 means 85% of the variation in y is explained.",
          },
          {
            type: "quiz",
            question: "What does linear regression minimise during training?",
            options: ["R² score", "Number of features", "Mean Squared Error (MSE)", "Standard deviation of features"],
            answer: 2,
            explanation:
              "Linear regression finds the weights that minimise MSE between the model's predictions and actual target values.",
          },
        ],
        challenge: {
          title: "Fit and Evaluate",
          description:
            "Create `X = np.array([[1],[2],[3],[4],[5],[6],[7],[8]])` and `y = np.array([1.5,3.1,4.9,6.8,8.5,10.2,11.8,13.5])`. Split 75/25. Fit `LinearRegression`. Print the slope, intercept, and test R².",
          starterCode: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split
import numpy as np

X = np.array([[1],[2],[3],[4],[5],[6],[7],[8]])
y = np.array([1.5, 3.1, 4.9, 6.8, 8.5, 10.2, 11.8, 13.5])

# Split, fit, print slope, intercept, R²

`,
          solutionCode: `from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
from sklearn.model_selection import train_test_split
import numpy as np

X = np.array([[1],[2],[3],[4],[5],[6],[7],[8]])
y = np.array([1.5, 3.1, 4.9, 6.8, 8.5, 10.2, 11.8, 13.5])

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=0)
model = LinearRegression().fit(X_train, y_train)

print("Slope:", round(model.coef_[0], 4))
print("Intercept:", round(model.intercept_, 4))
print("R²:", round(r2_score(y_test, model.predict(X_test)), 4))`,
          tests: [
            { id: 1, label: "Fits LinearRegression", keywords: ["LinearRegression"] },
            { id: 2, label: "Prints slope", keywords: ["coef_"] },
            { id: 3, label: "Prints R²", keywords: ["r2_score"] },
          ],
        },
      },

      {
        id: "aiml-13",
        title: "Gradient Descent",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**Gradient descent** is the optimisation algorithm that powers almost all of machine learning. Compute the gradient (slope) of the loss with respect to each weight, then nudge the weights in the opposite direction to decrease the loss.",
          },
          {
            type: "text",
            content:
              "Update rule: `w = w − learning_rate × gradient`. The **learning rate** controls step size — too large and the algorithm overshoots, too small and training is slow.",
          },
          {
            type: "diagram",
            title: "Gradient descent steps",
            nodes: [
              {
                id: "forward",
                label: "Forward pass",
                color: "#2563eb",
                items: ["Compute ŷ = wX + b", "Compute MSE loss"],
              },
              {
                id: "backward",
                label: "Compute gradients",
                color: "#3b82f6",
                items: ["∂Loss/∂w", "∂Loss/∂b"],
              },
              {
                id: "update",
                label: "Update weights",
                color: "#60a5fa",
                items: ["w -= lr × grad_w", "b -= lr × grad_b"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Gradient descent from scratch",
            content: `import numpy as np

np.random.seed(0)
X = np.random.rand(50)
y = 3 * X + 2 + np.random.randn(50) * 0.3

w, b, lr, n = 0.0, 0.0, 0.05, len(X)

for epoch in range(300):
    y_pred = w * X + b
    loss   = ((y_pred - y) ** 2).mean()
    grad_w = (2 / n) * ((y_pred - y) * X).sum()
    grad_b = (2 / n) * (y_pred - y).sum()
    w -= lr * grad_w
    b -= lr * grad_b
    if epoch % 100 == 0:
        print(f"Epoch {epoch}: loss={loss:.4f}, w={w:.4f}, b={b:.4f}")`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "sklearn's `LinearRegression` uses an exact analytical solution, not gradient descent. But `SGDRegressor` does use gradient descent — useful for very large datasets.",
          },
          {
            type: "quiz",
            question: "What happens if the learning rate is too large?",
            options: [
              "Training converges faster",
              "The algorithm may overshoot and diverge",
              "The model underfits",
              "Gradients become zero",
            ],
            answer: 1,
            explanation:
              "A large learning rate causes weight updates to overshoot the minimum, making the loss increase or oscillate instead of decreasing.",
          },
          {
            type: "quiz",
            question: "What does `lr` control in `w = w - lr * grad`?",
            options: [
              "The number of training epochs",
              "The size of each weight update step",
              "The number of features",
              "The model's complexity",
            ],
            answer: 1,
            explanation:
              "The learning rate controls how large each update step is, balancing convergence speed and stability.",
          },
        ],
        challenge: {
          title: "Gradient Descent Loop",
          description:
            "Given `X = np.array([1.0,2.0,3.0,4.0,5.0])` and `y = np.array([2.0,4.0,6.0,8.0,10.0])`, start with `w=0, b=0, lr=0.01`. Run 500 epochs updating `w` and `b` each iteration. Print final `w` and `b` (should be close to 2 and 0).",
          starterCode: `import numpy as np

X = np.array([1.0, 2.0, 3.0, 4.0, 5.0])
y = np.array([2.0, 4.0, 6.0, 8.0, 10.0])

w, b, lr, n = 0.0, 0.0, 0.01, len(X)

# Run 500 epochs of gradient descent
# grad_w = (2/n) * sum((w*X+b - y) * X)
# grad_b = (2/n) * sum(w*X+b - y)

`,
          solutionCode: `import numpy as np

X = np.array([1.0, 2.0, 3.0, 4.0, 5.0])
y = np.array([2.0, 4.0, 6.0, 8.0, 10.0])

w, b, lr, n = 0.0, 0.0, 0.01, len(X)

for _ in range(500):
    y_pred = w * X + b
    grad_w = (2 / n) * ((y_pred - y) * X).sum()
    grad_b = (2 / n) * (y_pred - y).sum()
    w -= lr * grad_w
    b -= lr * grad_b

print(f"w = {w:.4f}")
print(f"b = {b:.4f}")`,
          tests: [
            { id: 1, label: "Uses a training loop", keywords: [{ pattern: "for\\s+\\w+\\s+in" }] },
            { id: 2, label: "Updates w and b", keywords: ["w -=", "b -="] },
            { id: 3, label: "Prints final w and b", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-14",
        title: "Polynomial & Multiple Regression",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Multiple linear regression** uses more than one feature: `y = w₀ + w₁x₁ + w₂x₂ + …`. When the relationship is curved, **polynomial features** let you model non-linear trends while still using linear regression.",
          },
          {
            type: "text",
            content:
              "`PolynomialFeatures(degree=2)` creates new features like x², x₁x₂, etc. A single-feature dataset becomes [x, x²] — then LinearRegression can fit parabolas.",
          },
          {
            type: "diagram",
            title: "Multiple vs Polynomial",
            nodes: [
              {
                id: "multiple",
                label: "Multiple regression",
                color: "#2563eb",
                items: ["Many features", "y = w₀ + w₁x₁ + w₂x₂", "Still a hyperplane"],
              },
              {
                id: "poly",
                label: "Polynomial regression",
                color: "#3b82f6",
                items: ["Adds x², x³… features", "Curves the fit", "Beware overfitting"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Polynomial regression",
            content: `from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
import numpy as np

np.random.seed(0)
X = np.linspace(-3, 3, 60).reshape(-1, 1)
y = 2 * X.flatten()**2 - X.flatten() + 1 + np.random.randn(60)

poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)

model = LinearRegression().fit(X_poly, y)
print("R² with degree-2 poly:", round(r2_score(y, model.predict(X_poly)), 4))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "High-degree polynomials overfit severely — a degree-20 curve passes through every training point but fails on new data. Always validate on a held-out test set.",
          },
          {
            type: "quiz",
            question: "What does `PolynomialFeatures(degree=2)` add to a single feature x?",
            options: ["x only", "x and x³", "x and x²", "x², x³, and x⁴"],
            answer: 2,
            explanation:
              "With degree=2 and one input feature x, PolynomialFeatures creates [x, x²], allowing a quadratic curve fit.",
          },
          {
            type: "quiz",
            question: "What is a risk of using a very high polynomial degree?",
            options: [
              "The model cannot be trained",
              "The model overfits the training data",
              "The model always underfits",
              "R² always drops to zero",
            ],
            answer: 1,
            explanation:
              "High-degree polynomials have enough parameters to memorise training data exactly, resulting in overfitting.",
          },
        ],
        challenge: {
          title: "Polynomial Fit",
          description:
            "Create `X = np.linspace(0, 4, 30).reshape(-1,1)` and `y = X.flatten()**2 + np.random.randn(30)*0.5`. Use `PolynomialFeatures(degree=2)` and `LinearRegression` to fit. Print the R² score.",
          starterCode: `from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
import numpy as np

np.random.seed(7)
X = np.linspace(0, 4, 30).reshape(-1, 1)
y = X.flatten()**2 + np.random.randn(30) * 0.5

# Apply polynomial features, fit, and print R²

`,
          solutionCode: `from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.metrics import r2_score
import numpy as np

np.random.seed(7)
X = np.linspace(0, 4, 30).reshape(-1, 1)
y = X.flatten()**2 + np.random.randn(30) * 0.5

poly = PolynomialFeatures(degree=2, include_bias=False)
X_poly = poly.fit_transform(X)

model = LinearRegression().fit(X_poly, y)
print("R²:", round(r2_score(y, model.predict(X_poly)), 4))`,
          tests: [
            { id: 1, label: "Uses PolynomialFeatures", keywords: ["PolynomialFeatures"] },
            { id: 2, label: "Fits LinearRegression", keywords: ["LinearRegression"] },
            { id: 3, label: "Prints R²", keywords: ["r2_score"] },
          ],
        },
      },
    ],
  },

  // ── Ch 6 ──────────────────────────────────────────────────────────────
  {
    id: "classification",
    title: "Classification",
    icon: "🏷️",
    color: "#7c3aed",
    lessons: [
      {
        id: "aiml-15",
        title: "Logistic Regression",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Despite the name, **logistic regression** is a **classification** algorithm. It uses the **sigmoid function** to squash any real number into a probability between 0 and 1. If P > 0.5, predict class 1; otherwise class 0.",
          },
          {
            type: "text",
            content:
              "Sigmoid: `σ(z) = 1 / (1 + e⁻ᶻ)` where `z = w·X + b`. The model is trained by minimising **binary cross-entropy loss**.",
          },
          {
            type: "diagram",
            title: "Logistic regression flow",
            nodes: [
              {
                id: "linear",
                label: "Linear combination",
                color: "#7c3aed",
                items: ["z = w·X + b"],
              },
              {
                id: "sigmoid",
                label: "Sigmoid",
                color: "#8b5cf6",
                items: ["σ(z) → probability", "Output ∈ (0, 1)"],
              },
              {
                id: "threshold",
                label: "Threshold",
                color: "#a78bfa",
                items: ["P > 0.5 → class 1", "P ≤ 0.5 → class 0"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Logistic regression on breast cancer",
            content: `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import accuracy_score

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

model = LogisticRegression(max_iter=5000)
model.fit(X_train, y_train)

print("Accuracy:", accuracy_score(y_test, model.predict(X_test)).round(4))
print("Probabilities (first 3):", model.predict_proba(X_test)[:3].round(3))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use `model.predict_proba(X)[:, 1]` to get probability scores for class 1 — useful for ROC curves and threshold tuning.",
          },
          {
            type: "quiz",
            question: "What does the sigmoid function output?",
            options: [
              "Any real number",
              "An integer class label",
              "A probability between 0 and 1",
              "A value between -1 and 1",
            ],
            answer: 2,
            explanation:
              "The sigmoid function maps any real number to (0, 1), making its output interpretable as a probability.",
          },
          {
            type: "quiz",
            question: "What loss function does logistic regression minimise?",
            options: ["Mean Squared Error", "Mean Absolute Error", "Binary cross-entropy (log loss)", "R² score"],
            answer: 2,
            explanation:
              "Logistic regression minimises binary cross-entropy, which penalises confident wrong predictions much more than uncertain ones.",
          },
        ],
        challenge: {
          title: "Binary Classifier",
          description:
            "Load `load_breast_cancer`. Split 80/20 with `random_state=0`. Fit `LogisticRegression(max_iter=5000)`. Print the test accuracy.",
          starterCode: `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import accuracy_score

X, y = load_breast_cancer(return_X_y=True)

# Split, fit, print accuracy

`,
          solutionCode: `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import accuracy_score

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

model = LogisticRegression(max_iter=5000)
model.fit(X_train, y_train)
print("Test accuracy:", accuracy_score(y_test, model.predict(X_test)).round(4))`,
          tests: [
            { id: 1, label: "Uses load_breast_cancer", keywords: ["load_breast_cancer"] },
            { id: 2, label: "Fits LogisticRegression", keywords: ["LogisticRegression"] },
            { id: 3, label: "Prints accuracy", keywords: ["accuracy_score"] },
          ],
        },
      },

      {
        id: "aiml-16",
        title: "Decision Trees",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "A **decision tree** classifier automatically learns which feature splits best separate the classes. It measures split quality using **Gini impurity** or **entropy** — lower impurity means purer groups.",
          },
          {
            type: "text",
            content:
              "Decision trees are highly interpretable and require no feature scaling. However, they easily **overfit** to training data. Limiting `max_depth` constrains complexity.",
          },
          {
            type: "diagram",
            title: "Decision tree concepts",
            nodes: [
              {
                id: "gini",
                label: "Gini impurity",
                color: "#7c3aed",
                items: ["G = 1 − Σpᵢ²", "0 = pure, 0.5 = max impure"],
              },
              {
                id: "entropy",
                label: "Entropy",
                color: "#8b5cf6",
                items: ["H = −Σpᵢ log₂pᵢ", "0 = pure, 1 = max impure"],
              },
              {
                id: "overfit",
                label: "Overfitting control",
                color: "#a78bfa",
                items: ["max_depth", "min_samples_split", "min_samples_leaf"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Decision tree on Iris",
            content: `from sklearn.tree import DecisionTreeClassifier, export_text
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

dt = DecisionTreeClassifier(max_depth=3, random_state=42)
dt.fit(X_train, y_train)

print("Test accuracy:", dt.score(X_test, y_test).round(4))
print("\\nTree rules:\\n", export_text(dt, feature_names=load_iris().feature_names))`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Use `export_text(model)` to visualise exactly what rules the decision tree learned — one of its biggest advantages over black-box models.",
          },
          {
            type: "quiz",
            question: "What does Gini impurity of 0 mean for a node?",
            options: [
              "The node has maximum uncertainty",
              "The node contains samples from all classes equally",
              "All samples in the node belong to the same class",
              "The split is random",
            ],
            answer: 2,
            explanation:
              "Gini impurity of 0 means the node is completely pure — all samples belong to one class.",
          },
          {
            type: "quiz",
            question: "How does `max_depth` affect a decision tree?",
            options: [
              "It increases the training data size",
              "It limits tree depth to reduce overfitting",
              "It increases the number of features used",
              "It sets the learning rate",
            ],
            answer: 1,
            explanation:
              "`max_depth` stops the tree from splitting beyond a certain depth, reducing overfitting.",
          },
        ],
        challenge: {
          title: "Train a Decision Tree",
          description:
            "Load the wine dataset with `load_wine`. Split 80/20 with `random_state=42`. Train `DecisionTreeClassifier(max_depth=4, random_state=42)`. Print train accuracy and test accuracy.",
          starterCode: `from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)

# Split, fit, print train and test accuracy

`,
          solutionCode: `from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

dt = DecisionTreeClassifier(max_depth=4, random_state=42)
dt.fit(X_train, y_train)

print("Train accuracy:", dt.score(X_train, y_train).round(4))
print("Test accuracy:", dt.score(X_test, y_test).round(4))`,
          tests: [
            { id: 1, label: "Uses DecisionTreeClassifier", keywords: ["DecisionTreeClassifier"] },
            { id: 2, label: "Prints train accuracy", keywords: [{ pattern: "score\\s*\\(\\s*X_train" }] },
            { id: 3, label: "Prints test accuracy", keywords: [{ pattern: "score\\s*\\(\\s*X_test" }] },
          ],
        },
      },

      {
        id: "aiml-17",
        title: "Support Vector Machine (SVM)",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "A **Support Vector Machine (SVM)** finds the **maximum-margin hyperplane** — the boundary as far as possible from the nearest training examples of each class. Those boundary-defining examples are called **support vectors**.",
          },
          {
            type: "text",
            content:
              "SVMs handle non-linearly separable data using the **kernel trick** — mapping data to higher-dimensional space where a linear boundary becomes possible. Common kernels: `linear`, `rbf` (Gaussian), `poly`.",
          },
          {
            type: "diagram",
            title: "SVM concepts",
            nodes: [
              {
                id: "margin",
                label: "Maximum margin",
                color: "#7c3aed",
                items: ["Widest possible gap", "Between two classes", "Robust to new data"],
              },
              {
                id: "kernel",
                label: "Kernel trick",
                color: "#8b5cf6",
                items: ["Maps to higher dim", "rbf, poly, sigmoid", "Non-linear boundaries"],
              },
              {
                id: "C",
                label: "C parameter",
                color: "#a78bfa",
                items: ["High C → narrow margin", "Low C → wide margin", "Regularisation tradeoff"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "SVM with RBF kernel",
            content: `from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('svm',    SVC(kernel='rbf', C=1.0, gamma='scale')),
])
pipe.fit(X_train, y_train)
print("SVM test accuracy:", pipe.score(X_test, y_test).round(4))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "**Always scale before SVM**. SVMs are highly sensitive to feature scale because they compute distances. Wrap in a Pipeline with StandardScaler.",
          },
          {
            type: "quiz",
            question: "What are support vectors?",
            options: [
              "All training examples",
              "The training examples closest to the decision boundary",
              "Randomly chosen examples",
              "The misclassified training examples",
            ],
            answer: 1,
            explanation:
              "Support vectors are the training examples on the margin boundaries — they directly determine the hyperplane.",
          },
          {
            type: "quiz",
            question: "What does a larger C value do in SVM?",
            options: [
              "Wider margin, more regularisation",
              "Narrower margin, fewer misclassifications allowed",
              "Uses more support vectors",
              "Switches to a linear kernel",
            ],
            answer: 1,
            explanation:
              "A larger C penalises misclassifications more, causing a narrower margin and risking overfitting.",
          },
        ],
        challenge: {
          title: "SVM Classifier",
          description:
            "Load `load_wine`. Build a Pipeline with `StandardScaler` and `SVC(kernel='rbf', random_state=42)`. Split 80/20 with `random_state=42`. Print the test accuracy.",
          starterCode: `from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)

# Build pipeline, split, fit, print accuracy

`,
          solutionCode: `from sklearn.svm import SVC
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('svm', SVC(kernel='rbf', random_state=42)),
])
pipe.fit(X_train, y_train)
print("SVM test accuracy:", pipe.score(X_test, y_test).round(4))`,
          tests: [
            { id: 1, label: "Uses SVC", keywords: ["SVC"] },
            { id: 2, label: "Uses Pipeline + StandardScaler", keywords: ["StandardScaler", "Pipeline"] },
            { id: 3, label: "Prints accuracy", keywords: [{ pattern: "\\.score\\s*\\(" }] },
          ],
        },
      },
    ],
  },

  // ── Ch 7 ──────────────────────────────────────────────────────────────
  {
    id: "ensembles",
    title: "Ensemble Methods",
    icon: "🌲",
    color: "#047857",
    lessons: [
      {
        id: "aiml-18",
        title: "Random Forest",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "A **Random Forest** is an ensemble of many decision trees. Each tree is trained on a random subset of the training data (bagging) and a random subset of features. The final prediction is the majority vote (classification) or average (regression) across all trees.",
          },
          {
            type: "text",
            content:
              "Random Forests fix the biggest weakness of decision trees — overfitting. Individual trees overfit, but averaging many diverse trees cancels out their individual errors.",
          },
          {
            type: "diagram",
            title: "Random Forest process",
            nodes: [
              {
                id: "sample",
                label: "Bootstrap sampling",
                color: "#047857",
                items: ["Random rows (with replacement)", "Different data per tree"],
              },
              {
                id: "trees",
                label: "Many decision trees",
                color: "#059669",
                items: ["Each on different data", "Random feature subsets"],
              },
              {
                id: "vote",
                label: "Aggregate",
                color: "#10b981",
                items: ["Vote (classification)", "Average (regression)"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Random Forest vs Decision Tree",
            content: `from sklearn.ensemble import RandomForestClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

dt = DecisionTreeClassifier(random_state=42).fit(X_train, y_train)
rf = RandomForestClassifier(n_estimators=100, random_state=42).fit(X_train, y_train)

print("Decision Tree test:", dt.score(X_test, y_test).round(4))
print("Random Forest test:", rf.score(X_test, y_test).round(4))`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "`feature_importances_` on a trained RandomForest tells you which features contributed most to predictions — a powerful tool for feature selection.",
          },
          {
            type: "quiz",
            question: "How does Random Forest reduce overfitting compared to a single decision tree?",
            options: [
              "By using deeper trees",
              "By averaging predictions from many diverse trees",
              "By removing outliers",
              "By using only one feature",
            ],
            answer: 1,
            explanation:
              "Averaging many trees trained on different data subsets cancels out individual errors, producing a more generalised model.",
          },
          {
            type: "quiz",
            question: "What is bootstrap sampling in Random Forest?",
            options: [
              "Sampling features with replacement",
              "Sampling rows with replacement to create different training sets per tree",
              "Removing 20% of data",
              "Selecting the best split feature",
            ],
            answer: 1,
            explanation:
              "Bootstrap sampling draws rows with replacement — each tree sees a slightly different version of the training set, creating diversity.",
          },
        ],
        challenge: {
          title: "Random Forest Classifier",
          description:
            "Load `load_breast_cancer`. Split 80/20 with `random_state=42`. Train `RandomForestClassifier(n_estimators=100, random_state=42)`. Print test accuracy and the top 3 feature importances.",
          starterCode: `from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer
import numpy as np

X, y = load_breast_cancer(return_X_y=True)

# Split, fit, print accuracy + top 3 feature importances

`,
          solutionCode: `from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer
import numpy as np

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

print("Test accuracy:", rf.score(X_test, y_test).round(4))
importances = rf.feature_importances_
top3 = np.argsort(importances)[::-1][:3]
print("Top 3 feature indices:", top3)
print("Top 3 importances:", importances[top3].round(4))`,
          tests: [
            { id: 1, label: "Uses RandomForestClassifier", keywords: ["RandomForestClassifier"] },
            { id: 2, label: "Prints test accuracy", keywords: [{ pattern: "\\.score\\s*\\(" }] },
            { id: 3, label: "Uses feature_importances_", keywords: ["feature_importances_"] },
          ],
        },
      },

      {
        id: "aiml-19",
        title: "Bagging & Boosting",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Bagging** (Bootstrap AGGregating) trains multiple models independently on different data subsets and averages their predictions — Random Forest is bagging with trees. **Boosting** trains models sequentially, where each new model focuses on the errors of the previous one.",
          },
          {
            type: "text",
            content:
              "Popular boosting algorithms: **AdaBoost** (adjusts sample weights), **Gradient Boosting** (fits residuals), and **XGBoost/LightGBM** (optimised versions). Boosting often achieves higher accuracy but is slower to train.",
          },
          {
            type: "diagram",
            title: "Bagging vs Boosting",
            nodes: [
              {
                id: "bagging",
                label: "Bagging",
                color: "#047857",
                items: ["Independent models", "Parallel training", "Reduce variance"],
              },
              {
                id: "boosting",
                label: "Boosting",
                color: "#059669",
                items: ["Sequential models", "Fix previous errors", "Reduce bias"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "AdaBoost vs GradientBoosting",
            content: `from sklearn.ensemble import AdaBoostClassifier, GradientBoostingClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

ada = AdaBoostClassifier(n_estimators=50, random_state=42).fit(X_train, y_train)
gb  = GradientBoostingClassifier(n_estimators=50, random_state=42).fit(X_train, y_train)

print("AdaBoost test accuracy:", ada.score(X_test, y_test).round(4))
print("GradientBoosting test: ", gb.score(X_test, y_test).round(4))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Boosting is powerful but prone to overfitting on noisy data. Tune `n_estimators` and `learning_rate` together — more estimators needs a smaller learning rate.",
          },
          {
            type: "quiz",
            question: "How does boosting differ from bagging?",
            options: [
              "Boosting trains models in parallel; bagging trains sequentially",
              "Boosting trains models sequentially, each fixing previous errors",
              "Boosting uses more trees than bagging",
              "There is no difference",
            ],
            answer: 1,
            explanation:
              "Boosting trains models sequentially — each model focuses on the mistakes of the previous one. Bagging trains independently in parallel.",
          },
          {
            type: "quiz",
            question: "Which property does bagging primarily reduce?",
            options: ["Bias", "Variance", "Training time", "Number of features"],
            answer: 1,
            explanation:
              "Bagging reduces variance by averaging many independent high-variance models (like deep decision trees).",
          },
        ],
        challenge: {
          title: "Compare Boosting Methods",
          description:
            "Load `load_breast_cancer`. Split 80/20 with `random_state=0`. Fit both `AdaBoostClassifier(n_estimators=50, random_state=0)` and `GradientBoostingClassifier(n_estimators=50, random_state=0)`. Print both test accuracies.",
          starterCode: `from sklearn.ensemble import AdaBoostClassifier, GradientBoostingClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer

X, y = load_breast_cancer(return_X_y=True)

# Split, fit both, print accuracies

`,
          solutionCode: `from sklearn.ensemble import AdaBoostClassifier, GradientBoostingClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

ada = AdaBoostClassifier(n_estimators=50, random_state=0).fit(X_train, y_train)
gb  = GradientBoostingClassifier(n_estimators=50, random_state=0).fit(X_train, y_train)

print("AdaBoost:", ada.score(X_test, y_test).round(4))
print("GradientBoosting:", gb.score(X_test, y_test).round(4))`,
          tests: [
            { id: 1, label: "Uses AdaBoostClassifier", keywords: ["AdaBoostClassifier"] },
            { id: 2, label: "Uses GradientBoostingClassifier", keywords: ["GradientBoostingClassifier"] },
            { id: 3, label: "Prints both accuracies", keywords: [{ pattern: "\\.score\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-20",
        title: "Naive Bayes",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Naive Bayes** applies Bayes' theorem with the strong assumption that all features are **conditionally independent** given the class label. Despite this naive assumption, it performs surprisingly well for text classification and spam detection.",
          },
          {
            type: "text",
            content:
              "It is extremely fast to train (single pass through the data), requires very little data, and works well even in high-dimensional spaces. `MultinomialNB` is for text (word counts), `GaussianNB` is for continuous features.",
          },
          {
            type: "diagram",
            title: "Naive Bayes variants",
            nodes: [
              {
                id: "gaussian",
                label: "GaussianNB",
                color: "#047857",
                items: ["Continuous features", "Assumes Gaussian dist.", "General purpose"],
              },
              {
                id: "multinomial",
                label: "MultinomialNB",
                color: "#059669",
                items: ["Discrete counts", "Text classification", "Word frequencies"],
              },
              {
                id: "bernoulli",
                label: "BernoulliNB",
                color: "#10b981",
                items: ["Binary features", "Word present/absent", "Short texts"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "GaussianNB on Iris",
            content: `from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris
from sklearn.metrics import accuracy_score

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

nb = GaussianNB()
nb.fit(X_train, y_train)

print("Accuracy:", accuracy_score(y_test, nb.predict(X_test)).round(4))
print("Probabilities (first 3):", nb.predict_proba(X_test)[:3].round(3))`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Naive Bayes is one of the fastest classifiers available. It is a great baseline to beat before trying more complex models.",
          },
          {
            type: "quiz",
            question: "What is the 'naive' assumption in Naive Bayes?",
            options: [
              "The model uses a simple linear boundary",
              "All features are conditionally independent given the class",
              "All features have equal importance",
              "The dataset is always balanced",
            ],
            answer: 1,
            explanation:
              "Naive Bayes assumes features are conditionally independent given the class — a simplification that is rarely true but works well in practice.",
          },
          {
            type: "quiz",
            question: "Which Naive Bayes variant is best for text classification with word counts?",
            options: ["GaussianNB", "BernoulliNB", "MultinomialNB", "CategoricalNB"],
            answer: 2,
            explanation:
              "MultinomialNB is designed for discrete counts (like word frequencies in text), making it the standard choice for text classification.",
          },
        ],
        challenge: {
          title: "Naive Bayes Classifier",
          description:
            "Load `load_wine`. Split 80/20 with `random_state=42`. Fit `GaussianNB`. Print test accuracy. Then print the predicted class for the first test sample.",
          starterCode: `from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)

# Split, fit, print accuracy and first prediction

`,
          solutionCode: `from sklearn.naive_bayes import GaussianNB
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

nb = GaussianNB()
nb.fit(X_train, y_train)

print("Test accuracy:", round(nb.score(X_test, y_test), 4))
print("First test prediction:", nb.predict(X_test[:1])[0])`,
          tests: [
            { id: 1, label: "Uses GaussianNB", keywords: ["GaussianNB"] },
            { id: 2, label: "Prints test accuracy", keywords: [{ pattern: "\\.score\\s*\\(" }] },
            { id: 3, label: "Prints first prediction", keywords: ["predict"] },
          ],
        },
      },
    ],
  },

  // ── Ch 8 ──────────────────────────────────────────────────────────────
  {
    id: "model-evaluation",
    title: "Model Evaluation",
    icon: "📊",
    color: "#b45309",
    lessons: [
      {
        id: "aiml-21",
        title: "Accuracy, Precision, Recall & F1",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Accuracy** (correct / total) is misleading for imbalanced datasets — a model predicting 'not spam' for everything achieves 99% accuracy if only 1% of emails are spam. We need better metrics.",
          },
          {
            type: "text",
            content:
              "**Precision** = TP / (TP + FP) — of all predicted positives, how many were actually positive. **Recall** = TP / (TP + FN) — of all actual positives, how many were predicted positive. **F1** = harmonic mean of both.",
          },
          {
            type: "diagram",
            title: "Classification metrics",
            nodes: [
              {
                id: "precision",
                label: "Precision",
                color: "#b45309",
                items: ["TP / (TP + FP)", "Quality of positives", "Use when false positives are costly"],
              },
              {
                id: "recall",
                label: "Recall",
                color: "#d97706",
                items: ["TP / (TP + FN)", "Coverage of positives", "Use when false negatives are costly"],
              },
              {
                id: "f1",
                label: "F1 Score",
                color: "#f59e0b",
                items: ["2 × P × R / (P + R)", "Balanced metric", "Use for imbalanced classes"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Full classification report",
            content: `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import classification_report, confusion_matrix

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

model = LogisticRegression(max_iter=5000).fit(X_train, y_train)
y_pred = model.predict(X_test)

print(classification_report(y_test, y_pred))
print("Confusion matrix:\\n", confusion_matrix(y_test, y_pred))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use **F1 score** when your classes are imbalanced. Use **precision** when false positives are expensive (e.g. spam filter). Use **recall** when false negatives are dangerous (e.g. cancer diagnosis).",
          },
          {
            type: "quiz",
            question: "When is accuracy a misleading metric?",
            options: [
              "When the model is very complex",
              "When the dataset has heavily imbalanced classes",
              "When using regression instead of classification",
              "When the test set is too small",
            ],
            answer: 1,
            explanation:
              "With imbalanced classes, a model can achieve high accuracy by always predicting the majority class while ignoring the minority class entirely.",
          },
          {
            type: "quiz",
            question: "Which metric should you prioritise for cancer diagnosis?",
            options: [
              "Precision — minimise false positives",
              "Recall — minimise false negatives (missed cancers)",
              "Accuracy",
              "F1 — equal balance",
            ],
            answer: 1,
            explanation:
              "In cancer diagnosis, missing an actual cancer (false negative) is far more dangerous than an unnecessary follow-up (false positive) — so we prioritise recall.",
          },
        ],
        challenge: {
          title: "Classification Report",
          description:
            "Load `load_breast_cancer`. Split 80/20 with `random_state=0`. Fit `LogisticRegression(max_iter=5000)`. Print the full `classification_report` on the test set.",
          starterCode: `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import classification_report

X, y = load_breast_cancer(return_X_y=True)

# Split, fit, print classification_report

`,
          solutionCode: `from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_breast_cancer
from sklearn.metrics import classification_report

X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

model = LogisticRegression(max_iter=5000).fit(X_train, y_train)
print(classification_report(y_test, model.predict(X_test)))`,
          tests: [
            { id: 1, label: "Fits LogisticRegression", keywords: ["LogisticRegression"] },
            { id: 2, label: "Uses classification_report", keywords: ["classification_report"] },
            { id: 3, label: "Prints report", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-22",
        title: "Cross-Validation",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "A single train-test split can give misleading results depending on which data ended up in each set. **K-fold cross-validation** splits data into k folds, trains k times (using k-1 folds for training and 1 for testing each time), and averages the scores.",
          },
          {
            type: "text",
            content:
              "With k=5, you train 5 models and average their test scores. This gives a **more reliable estimate** of real-world performance than a single split.",
          },
          {
            type: "diagram",
            title: "5-fold cross-validation",
            nodes: [
              {
                id: "fold1",
                label: "Fold 1",
                color: "#b45309",
                items: ["Test: fold 1", "Train: folds 2-5"],
              },
              {
                id: "fold2",
                label: "Fold 2…5",
                color: "#d97706",
                items: ["Each fold = 1 test run", "5 scores → average"],
              },
              {
                id: "result",
                label: "Final score",
                color: "#f59e0b",
                items: ["Mean of 5 scores", "± std for uncertainty"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "cross_val_score",
            content: `from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
import numpy as np

X, y = load_iris(return_X_y=True)

model = RandomForestClassifier(n_estimators=50, random_state=42)
scores = cross_val_score(model, X, y, cv=5, scoring='accuracy')

print("CV scores:", scores.round(4))
print(f"Mean: {scores.mean():.4f} ± {scores.std():.4f}")`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use `StratifiedKFold` for classification to ensure each fold has the same class distribution. `cross_val_score` does this automatically for classifiers.",
          },
          {
            type: "quiz",
            question: "Why use k-fold cross-validation instead of a single train-test split?",
            options: [
              "It is faster to compute",
              "It gives a more reliable estimate by averaging across multiple splits",
              "It prevents overfitting automatically",
              "It requires less data",
            ],
            answer: 1,
            explanation:
              "A single split result can be lucky or unlucky depending on random assignment. Cross-validation averages k results, giving a more stable and reliable performance estimate.",
          },
          {
            type: "quiz",
            question: "In 5-fold cross-validation, how many times is the model trained?",
            options: ["1", "5", "4", "10"],
            answer: 1,
            explanation:
              "In k-fold CV, the model is trained k times — once for each fold acting as the test set.",
          },
        ],
        challenge: {
          title: "5-Fold Cross-Validation",
          description:
            "Load `load_wine`. Run 5-fold cross-validation with `RandomForestClassifier(n_estimators=50, random_state=0)`. Print all 5 scores, the mean, and the standard deviation.",
          starterCode: `from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_wine
import numpy as np

X, y = load_wine(return_X_y=True)

# Run 5-fold CV and print scores, mean, std

`,
          solutionCode: `from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_wine
import numpy as np

X, y = load_wine(return_X_y=True)

model = RandomForestClassifier(n_estimators=50, random_state=0)
scores = cross_val_score(model, X, y, cv=5)

print("CV scores:", scores.round(4))
print(f"Mean: {scores.mean():.4f}")
print(f"Std:  {scores.std():.4f}")`,
          tests: [
            { id: 1, label: "Uses cross_val_score", keywords: ["cross_val_score"] },
            { id: 2, label: "Uses cv=5", keywords: ["cv=5"] },
            { id: 3, label: "Prints mean and std", keywords: [".mean()", ".std()"] },
          ],
        },
      },

      {
        id: "aiml-23",
        title: "Hyperparameter Tuning",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**Hyperparameters** are settings you configure before training (e.g. `n_estimators`, `max_depth`, `C`). The model does not learn them — you must search for the best values. This is called **hyperparameter tuning**.",
          },
          {
            type: "text",
            content:
              "**GridSearchCV** exhaustively tries every combination in a grid. **RandomizedSearchCV** samples random combinations — faster for large grids. Both use cross-validation internally to evaluate each configuration.",
          },
          {
            type: "diagram",
            title: "GridSearch vs RandomSearch",
            nodes: [
              {
                id: "grid",
                label: "GridSearchCV",
                color: "#b45309",
                items: ["All combinations", "Guaranteed best", "Slow for large grids"],
              },
              {
                id: "random",
                label: "RandomizedSearchCV",
                color: "#d97706",
                items: ["Random sample", "Faster", "Near-optimal"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "GridSearchCV in action",
            content: `from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

param_grid = {
    'n_estimators': [10, 50, 100],
    'max_depth': [None, 3, 5],
}

gs = GridSearchCV(RandomForestClassifier(random_state=42),
                  param_grid, cv=5, scoring='accuracy')
gs.fit(X_train, y_train)

print("Best params:", gs.best_params_)
print("Best CV score:", round(gs.best_score_, 4))
print("Test accuracy:", round(gs.score(X_test, y_test), 4))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "`gs.best_estimator_` returns the already-fitted best model — you can call `.predict()` on it directly without refitting.",
          },
          {
            type: "quiz",
            question: "What is a hyperparameter?",
            options: [
              "A parameter learned from data during training",
              "A configuration set before training that the model does not learn",
              "A feature in the dataset",
              "The model's bias term",
            ],
            answer: 1,
            explanation:
              "Hyperparameters (like learning rate, n_estimators, max_depth) are set before training. The model learns regular parameters (weights) from data.",
          },
          {
            type: "quiz",
            question: "Why is RandomizedSearchCV preferred over GridSearchCV for large parameter grids?",
            options: [
              "It always finds better parameters",
              "It is much faster by sampling a subset of combinations",
              "It does not use cross-validation",
              "It works only with tree models",
            ],
            answer: 1,
            explanation:
              "GridSearchCV tries every combination — exponentially expensive. RandomizedSearchCV samples a fixed number of combinations, reaching near-optimal results much faster.",
          },
        ],
        challenge: {
          title: "GridSearch Tuning",
          description:
            "Load `load_wine`. Split 80/20 with `random_state=0`. Run `GridSearchCV` on `RandomForestClassifier` with `param_grid = {'n_estimators': [10, 50], 'max_depth': [3, 5]}` and `cv=3`. Print best params and test accuracy.",
          starterCode: `from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)

# Run GridSearchCV, print best params + test accuracy

`,
          solutionCode: `from sklearn.model_selection import GridSearchCV, train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

param_grid = {'n_estimators': [10, 50], 'max_depth': [3, 5]}
gs = GridSearchCV(RandomForestClassifier(random_state=0), param_grid, cv=3)
gs.fit(X_train, y_train)

print("Best params:", gs.best_params_)
print("Test accuracy:", round(gs.score(X_test, y_test), 4))`,
          tests: [
            { id: 1, label: "Uses GridSearchCV", keywords: ["GridSearchCV"] },
            { id: 2, label: "Prints best_params_", keywords: ["best_params_"] },
            { id: 3, label: "Prints test accuracy", keywords: [{ pattern: "\\.score\\s*\\(" }] },
          ],
        },
      },
    ],
  },

  // ── Ch 9 ──────────────────────────────────────────────────────────────
  {
    id: "clustering",
    title: "Clustering",
    icon: "🔵",
    color: "#0284c7",
    lessons: [
      {
        id: "aiml-24",
        title: "K-Means Clustering",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**K-Means** is the most popular clustering algorithm. It groups `n` samples into `k` clusters by iteratively assigning each point to the nearest centroid and updating centroids as the mean of assigned points.",
          },
          {
            type: "text",
            content:
              "Choosing the right `k` is critical. The **Elbow Method** plots inertia (within-cluster sum of squares) for different values of k — the 'elbow' point is usually the best k.",
          },
          {
            type: "diagram",
            title: "K-Means algorithm",
            nodes: [
              {
                id: "init",
                label: "1. Initialise",
                color: "#0284c7",
                items: ["Place k random centroids"],
              },
              {
                id: "assign",
                label: "2. Assign",
                color: "#0369a1",
                items: ["Each point → nearest centroid"],
              },
              {
                id: "update",
                label: "3. Update",
                color: "#075985",
                items: ["Centroids = mean of cluster", "Repeat until stable"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "K-Means + Elbow Method",
            content: `from sklearn.cluster import KMeans
import numpy as np

np.random.seed(0)
X = np.vstack([
    np.random.randn(50, 2) + [0, 0],
    np.random.randn(50, 2) + [5, 5],
    np.random.randn(50, 2) + [0, 5],
])

# Elbow method
inertias = []
for k in range(1, 7):
    km = KMeans(n_clusters=k, random_state=0, n_init=10)
    km.fit(X)
    inertias.append(km.inertia_)
    print(f"k={k}: inertia={km.inertia_:.1f}")

# Fit with best k
km3 = KMeans(n_clusters=3, random_state=0, n_init=10).fit(X)
print("\\nCluster labels:", km3.labels_[:10])`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "K-Means assumes clusters are roughly **spherical and equal-sized**. For irregular shapes, use DBSCAN. For unknown number of clusters, use DBSCAN or hierarchical clustering.",
          },
          {
            type: "quiz",
            question: "What does inertia measure in K-Means?",
            options: [
              "The number of clusters",
              "The within-cluster sum of squared distances to the centroid",
              "The distance between centroids",
              "The number of iterations",
            ],
            answer: 1,
            explanation:
              "Inertia measures how compact the clusters are — the sum of squared distances from each point to its assigned centroid. Lower is better.",
          },
          {
            type: "quiz",
            question: "What does the Elbow Method help determine?",
            options: [
              "The learning rate",
              "The optimal number of clusters k",
              "The number of features to use",
              "Whether to use KMeans or DBSCAN",
            ],
            answer: 1,
            explanation:
              "The Elbow Method plots inertia vs k and looks for the point where adding more clusters gives diminishing returns — the 'elbow' in the curve.",
          },
        ],
        challenge: {
          title: "K-Means on Generated Data",
          description:
            "Create `X = np.vstack([np.random.randn(30,2)+[0,0], np.random.randn(30,2)+[5,5]])` with `np.random.seed(1)`. Fit `KMeans(n_clusters=2, random_state=0, n_init=10)`. Print `inertia_` and the first 10 `labels_`.",
          starterCode: `from sklearn.cluster import KMeans
import numpy as np

np.random.seed(1)
X = np.vstack([
    np.random.randn(30, 2) + [0, 0],
    np.random.randn(30, 2) + [5, 5],
])

# Fit KMeans, print inertia and first 10 labels

`,
          solutionCode: `from sklearn.cluster import KMeans
import numpy as np

np.random.seed(1)
X = np.vstack([
    np.random.randn(30, 2) + [0, 0],
    np.random.randn(30, 2) + [5, 5],
])

km = KMeans(n_clusters=2, random_state=0, n_init=10)
km.fit(X)

print("Inertia:", round(km.inertia_, 2))
print("First 10 labels:", km.labels_[:10])`,
          tests: [
            { id: 1, label: "Uses KMeans", keywords: ["KMeans"] },
            { id: 2, label: "Prints inertia", keywords: ["inertia_"] },
            { id: 3, label: "Prints labels", keywords: ["labels_"] },
          ],
        },
      },

      {
        id: "aiml-25",
        title: "PCA — Dimensionality Reduction",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Principal Component Analysis (PCA)** reduces the number of features while preserving as much variance as possible. It finds new axes (principal components) that capture the most information, ranked by explained variance.",
          },
          {
            type: "text",
            content:
              "PCA is used for: visualising high-dimensional data in 2D/3D, removing correlated features before training, and speeding up training by reducing input dimensions.",
          },
          {
            type: "diagram",
            title: "PCA concepts",
            nodes: [
              {
                id: "variance",
                label: "Explained variance",
                color: "#0284c7",
                items: ["How much info each PC captures", "Sum = 1.0 (100%)"],
              },
              {
                id: "components",
                label: "Principal components",
                color: "#0369a1",
                items: ["New axes (eigenvectors)", "Orthogonal to each other"],
              },
              {
                id: "reduce",
                label: "Reduce dimensions",
                color: "#075985",
                items: ["Keep top k components", "Reconstruct approximately"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "PCA on Iris dataset",
            content: `from sklearn.decomposition import PCA
from sklearn.datasets import load_iris
import numpy as np

X, y = load_iris(return_X_y=True)

pca = PCA(n_components=2)
X_2d = pca.fit_transform(X)

print("Original shape:", X.shape)
print("Reduced shape:", X_2d.shape)
print("Explained variance ratio:", pca.explained_variance_ratio_.round(4))
print(f"Total variance captured: {pca.explained_variance_ratio_.sum():.2%}")`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Always standardise features before PCA — otherwise features with larger scales dominate the principal components.",
          },
          {
            type: "quiz",
            question: "What does PCA preserve when reducing dimensions?",
            options: [
              "The original feature names",
              "As much variance (information) as possible",
              "The number of rows",
              "The class labels",
            ],
            answer: 1,
            explanation:
              "PCA finds the directions of maximum variance in the data and projects onto those axes, preserving as much information as possible in fewer dimensions.",
          },
          {
            type: "quiz",
            question: "Why standardise before PCA?",
            options: [
              "To speed up computation",
              "So features with larger scales don't dominate the components",
              "To remove missing values",
              "PCA requires integer inputs",
            ],
            answer: 1,
            explanation:
              "PCA is based on variance. A feature with range 0–1000 will dominate over one with range 0–1 if not standardised first.",
          },
        ],
        challenge: {
          title: "PCA Dimensionality Reduction",
          description:
            "Load `load_wine` (13 features). Standardise with `StandardScaler`. Apply `PCA(n_components=2)`. Print original shape, reduced shape, and the explained variance ratio.",
          starterCode: `from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)

# Standardise, apply PCA, print shapes and explained variance

`,
          solutionCode: `from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)

X_scaled = StandardScaler().fit_transform(X)
pca = PCA(n_components=2)
X_2d = pca.fit_transform(X_scaled)

print("Original shape:", X.shape)
print("Reduced shape:", X_2d.shape)
print("Explained variance ratio:", pca.explained_variance_ratio_.round(4))`,
          tests: [
            { id: 1, label: "Uses PCA", keywords: ["PCA"] },
            { id: 2, label: "Prints both shapes", keywords: ["X.shape", "X_2d.shape"] },
            { id: 3, label: "Prints explained variance", keywords: ["explained_variance_ratio_"] },
          ],
        },
      },

      {
        id: "aiml-26",
        title: "Feature Engineering",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Feature engineering** is the process of creating, selecting, and transforming input features to improve model performance. It is often more impactful than choosing a more complex algorithm.",
          },
          {
            type: "text",
            content:
              "Common techniques: **feature creation** (combining columns), **feature selection** (removing irrelevant features), **binning** (turning continuous into categorical), and **log transforms** (handling skewed distributions).",
          },
          {
            type: "diagram",
            title: "Feature engineering techniques",
            nodes: [
              {
                id: "create",
                label: "Create features",
                color: "#0284c7",
                items: ["Combine columns", "Interaction terms", "Domain knowledge"],
              },
              {
                id: "select",
                label: "Select features",
                color: "#0369a1",
                items: ["Remove redundant", "SelectKBest", "feature_importances_"],
              },
              {
                id: "transform",
                label: "Transform",
                color: "#075985",
                items: ["Log transform", "Binning", "Polynomial features"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Feature creation and selection",
            content: `import pandas as pd
import numpy as np
from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
feature_names = load_iris().feature_names

# Feature selection: pick best 2
selector = SelectKBest(f_classif, k=2)
X_new = selector.fit_transform(X, y)

# Which features were selected?
mask = selector.get_support()
selected = [f for f, m in zip(feature_names, mask) if m]
print("Selected features:", selected)
print("Original shape:", X.shape, "→ New shape:", X_new.shape)`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "Feature engineering is where domain knowledge matters most. A good feature can make a simple model outperform a complex one on bad features.",
          },
          {
            type: "quiz",
            question: "Why does feature engineering often matter more than model choice?",
            options: [
              "More features always improve models",
              "Good features make the problem easier regardless of algorithm",
              "Feature engineering is required by sklearn",
              "Complex models cannot use engineered features",
            ],
            answer: 1,
            explanation:
              "A well-engineered feature can expose the signal in the data directly. Even a simple model will perform well if given the right features.",
          },
          {
            type: "quiz",
            question: "What does SelectKBest do?",
            options: [
              "Selects the k best rows",
              "Selects the k most informative features based on a statistical test",
              "Selects the k most correlated features",
              "Selects the k largest values",
            ],
            answer: 1,
            explanation:
              "SelectKBest ranks features by a statistical score (e.g. F-statistic for classification) and keeps only the top k.",
          },
        ],
        challenge: {
          title: "Feature Selection",
          description:
            "Load `load_wine`. Use `SelectKBest(f_classif, k=5)` to select the 5 best features. Print the original shape, new shape, and the names of selected features using `load_wine().feature_names`.",
          starterCode: `from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)
feature_names = load_wine().feature_names

# Select 5 best features, print shapes and names

`,
          solutionCode: `from sklearn.feature_selection import SelectKBest, f_classif
from sklearn.datasets import load_wine

X, y = load_wine(return_X_y=True)
feature_names = load_wine().feature_names

selector = SelectKBest(f_classif, k=5)
X_new = selector.fit_transform(X, y)

mask = selector.get_support()
selected = [f for f, m in zip(feature_names, mask) if m]

print("Original shape:", X.shape)
print("New shape:", X_new.shape)
print("Selected features:", selected)`,
          tests: [
            { id: 1, label: "Uses SelectKBest", keywords: ["SelectKBest"] },
            { id: 2, label: "Prints both shapes", keywords: ["X.shape", "X_new.shape"] },
            { id: 3, label: "Prints selected features", keywords: ["selected"] },
          ],
        },
      },
    ],
  },

  // ── Ch 10 ─────────────────────────────────────────────────────────────
  {
    id: "neural-nets",
    title: "Neural Networks",
    icon: "🔬",
    color: "#4f46e5",
    lessons: [
      {
        id: "aiml-27",
        title: "Perceptrons & Activation Functions",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "A **perceptron** is the simplest neural unit. It computes a weighted sum of inputs, adds a bias, and passes the result through an **activation function** that introduces non-linearity.",
          },
          {
            type: "text",
            content:
              "Without activation functions, stacking layers is equivalent to a single linear transformation — useless for complex patterns. Common activations: **ReLU** (max(0,x)), **Sigmoid** (0–1), **Tanh** (-1 to 1), **Softmax** (probabilities for multi-class).",
          },
          {
            type: "diagram",
            title: "Activation functions",
            nodes: [
              {
                id: "relu",
                label: "ReLU",
                color: "#4f46e5",
                items: ["max(0, x)", "Most used in hidden layers", "No vanishing gradient"],
              },
              {
                id: "sigmoid",
                label: "Sigmoid",
                color: "#6366f1",
                items: ["σ(x) = 1/(1+e⁻ˣ)", "Output layers (binary)", "Can vanish"],
              },
              {
                id: "softmax",
                label: "Softmax",
                color: "#818cf8",
                items: ["Probabilities sum to 1", "Multi-class output"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Activation functions from scratch",
            content: `import numpy as np

def relu(x):
    return np.maximum(0, x)

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def softmax(x):
    e = np.exp(x - x.max())
    return e / e.sum()

x = np.array([-2.0, -1.0, 0.0, 1.0, 2.0])
print("Input:  ", x)
print("ReLU:   ", relu(x))
print("Sigmoid:", sigmoid(x).round(4))
print("Softmax:", softmax(x).round(4))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use **ReLU** for hidden layers and **Sigmoid/Softmax** for output layers. ReLU is preferred because it avoids the vanishing gradient problem that slows training.",
          },
          {
            type: "quiz",
            question: "Why do neural networks need activation functions?",
            options: [
              "To speed up computation",
              "To introduce non-linearity, enabling the network to learn complex patterns",
              "To normalise the input data",
              "To reduce the number of parameters",
            ],
            answer: 1,
            explanation:
              "Without non-linear activation functions, stacking layers produces only a linear transformation — no more expressive than a single layer.",
          },
          {
            type: "quiz",
            question: "What is the output range of the ReLU activation?",
            options: ["(-1, 1)", "(0, 1)", "[0, ∞)", "(-∞, ∞)"],
            answer: 2,
            explanation:
              "ReLU(x) = max(0, x) — it outputs 0 for negative inputs and x for positive inputs, so the range is [0, ∞).",
          },
        ],
        challenge: {
          title: "Implement Activation Functions",
          description:
            "Implement `relu(x)`, `sigmoid(x)`, and `softmax(x)` using NumPy. Test all three on `x = np.array([-1.0, 0.0, 1.0, 2.0])` and print the results.",
          starterCode: `import numpy as np

x = np.array([-1.0, 0.0, 1.0, 2.0])

def relu(x):
    pass  # implement me

def sigmoid(x):
    pass  # implement me

def softmax(x):
    pass  # implement me

print("ReLU:", relu(x))
print("Sigmoid:", sigmoid(x))
print("Softmax:", softmax(x))`,
          solutionCode: `import numpy as np

x = np.array([-1.0, 0.0, 1.0, 2.0])

def relu(x):
    return np.maximum(0, x)

def sigmoid(x):
    return 1 / (1 + np.exp(-x))

def softmax(x):
    e = np.exp(x - x.max())
    return e / e.sum()

print("ReLU:", relu(x))
print("Sigmoid:", sigmoid(x).round(4))
print("Softmax:", softmax(x).round(4))`,
          tests: [
            { id: 1, label: "Implements relu", keywords: [{ pattern: "def\\s+relu\\s*\\(" }] },
            { id: 2, label: "Implements sigmoid", keywords: [{ pattern: "def\\s+sigmoid\\s*\\(" }] },
            { id: 3, label: "Implements softmax", keywords: [{ pattern: "def\\s+softmax\\s*\\(" }] },
            { id: 4, label: "Prints all three", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-28",
        title: "Backpropagation",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**Backpropagation** is the algorithm that trains neural networks. After a forward pass computes the loss, backprop uses the **chain rule** of calculus to compute gradients of the loss with respect to every weight in the network — layer by layer, backwards.",
          },
          {
            type: "text",
            content:
              "The chain rule says: if `L = f(g(x))`, then `dL/dx = (dL/df) × (df/dg) × (dg/dx)`. Backpropagation applies this repeatedly through each layer to efficiently compute all gradients in one backward pass.",
          },
          {
            type: "diagram",
            title: "Forward & backward pass",
            nodes: [
              {
                id: "forward",
                label: "Forward pass",
                color: "#4f46e5",
                items: ["Input → hidden → output", "Compute loss"],
              },
              {
                id: "backward",
                label: "Backward pass",
                color: "#6366f1",
                items: ["Compute ∂L/∂W via chain rule", "Propagate errors backwards"],
              },
              {
                id: "update",
                label: "Weight update",
                color: "#818cf8",
                items: ["W -= lr × ∂L/∂W", "Gradient descent step"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "One-layer network with backprop",
            content: `import numpy as np

np.random.seed(0)
X = np.random.randn(4, 2)
y = np.array([[0], [1], [1], [0]])

# Initialise weights
W = np.random.randn(2, 1) * 0.1
b = 0.0
lr = 0.1

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

for epoch in range(1000):
    # Forward
    z = X @ W + b
    a = sigmoid(z)
    loss = -np.mean(y * np.log(a + 1e-8) + (1-y) * np.log(1-a + 1e-8))

    # Backward
    dL = (a - y) / len(y)
    dW = X.T @ dL
    db = dL.sum()

    W -= lr * dW
    b -= lr * db

print(f"Final loss: {loss:.4f}")
print("Predictions:", sigmoid(X @ W + b).flatten().round(3))`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "In practice you never implement backpropagation by hand — PyTorch and TensorFlow compute gradients automatically via **autograd**. Understanding it is essential to debug training problems.",
          },
          {
            type: "quiz",
            question: "What mathematical rule does backpropagation use?",
            options: ["Product rule", "Chain rule of calculus", "Integration by parts", "Bayes' theorem"],
            answer: 1,
            explanation:
              "Backpropagation applies the chain rule of calculus repeatedly through each layer to efficiently compute gradients of the loss with respect to all weights.",
          },
          {
            type: "quiz",
            question: "What is the purpose of the forward pass?",
            options: [
              "To update the model weights",
              "To compute predictions and the loss",
              "To initialise weights",
              "To select hyperparameters",
            ],
            answer: 1,
            explanation:
              "The forward pass propagates inputs through the network to compute predictions and then the loss — which the backward pass then differentiates.",
          },
        ],
        challenge: {
          title: "Manual Forward Pass",
          description:
            "Given `X = np.array([[1.0, 2.0], [3.0, 4.0]])`, `W = np.array([[0.5], [-0.3]])`, `b = 0.1`, compute the forward pass: `z = X @ W + b`, then `a = sigmoid(z)`. Print `z` and `a`.",
          starterCode: `import numpy as np

X = np.array([[1.0, 2.0], [3.0, 4.0]])
W = np.array([[0.5], [-0.3]])
b = 0.1

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Compute z and a, then print both

`,
          solutionCode: `import numpy as np

X = np.array([[1.0, 2.0], [3.0, 4.0]])
W = np.array([[0.5], [-0.3]])
b = 0.1

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

z = X @ W + b
a = sigmoid(z)

print("z:", z.flatten().round(4))
print("a:", a.flatten().round(4))`,
          tests: [
            { id: 1, label: "Computes z = X @ W + b", keywords: ["X @ W"] },
            { id: 2, label: "Applies sigmoid", keywords: ["sigmoid"] },
            { id: 3, label: "Prints z and a", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-29",
        title: "Neural Network with sklearn",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "sklearn's `MLPClassifier` (Multi-Layer Perceptron) lets you train a fully connected neural network without PyTorch or TensorFlow. It handles backpropagation, weight initialisation, and mini-batch training automatically.",
          },
          {
            type: "text",
            content:
              "`hidden_layer_sizes=(100, 50)` means two hidden layers with 100 and 50 neurons. `max_iter` controls training iterations. `activation='relu'` sets the hidden layer activation.",
          },
          {
            type: "diagram",
            title: "MLPClassifier parameters",
            nodes: [
              {
                id: "layers",
                label: "hidden_layer_sizes",
                color: "#4f46e5",
                items: ["(100,) = 1 hidden layer", "(100, 50) = 2 layers"],
              },
              {
                id: "activation",
                label: "activation",
                color: "#6366f1",
                items: ["'relu' (default)", "'tanh', 'logistic'"],
              },
              {
                id: "solver",
                label: "solver",
                color: "#818cf8",
                items: ["'adam' (default)", "'sgd', 'lbfgs'"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "MLPClassifier on digits dataset",
            content: `from sklearn.neural_network import MLPClassifier
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.datasets import load_digits

X, y = load_digits(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test  = scaler.transform(X_test)

mlp = MLPClassifier(hidden_layer_sizes=(128, 64), max_iter=500, random_state=42)
mlp.fit(X_train, y_train)

print("Test accuracy:", mlp.score(X_test, y_test).round(4))
print("Number of layers:", mlp.n_layers_)`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Always standardise inputs before training an MLP — neural networks are very sensitive to feature scale because all weights are initialised to small values.",
          },
          {
            type: "quiz",
            question: "What does `hidden_layer_sizes=(100, 50)` mean?",
            options: [
              "100 input features and 50 outputs",
              "Two hidden layers with 100 neurons and 50 neurons",
              "One hidden layer with 150 neurons",
              "Training for 100 then 50 iterations",
            ],
            answer: 1,
            explanation:
              "`hidden_layer_sizes` defines the architecture of hidden layers — `(100, 50)` creates two hidden layers with 100 and 50 neurons respectively.",
          },
          {
            type: "quiz",
            question: "Why standardise data before training an MLP?",
            options: [
              "sklearn requires it for all models",
              "Neural networks are sensitive to feature scale due to small weight initialisation",
              "To reduce training time",
              "To increase the number of features",
            ],
            answer: 1,
            explanation:
              "Neural networks initialise weights to small values. Large-scale features produce large activations that destabilise training. Standardising prevents this.",
          },
        ],
        challenge: {
          title: "Train an MLP",
          description:
            "Load `load_digits`. Standardise with `StandardScaler`. Split 80/20 with `random_state=42`. Fit `MLPClassifier(hidden_layer_sizes=(64,), max_iter=300, random_state=42)`. Print test accuracy.",
          starterCode: `from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_digits

X, y = load_digits(return_X_y=True)

# Standardise, split, fit MLP, print accuracy

`,
          solutionCode: `from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_digits

X, y = load_digits(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test  = scaler.transform(X_test)

mlp = MLPClassifier(hidden_layer_sizes=(64,), max_iter=300, random_state=42)
mlp.fit(X_train, y_train)
print("Test accuracy:", mlp.score(X_test, y_test).round(4))`,
          tests: [
            { id: 1, label: "Uses MLPClassifier", keywords: ["MLPClassifier"] },
            { id: 2, label: "Uses StandardScaler", keywords: ["StandardScaler"] },
            { id: 3, label: "Prints test accuracy", keywords: [{ pattern: "\\.score\\s*\\(" }] },
          ],
        },
      },
    ],
  },

  // ── Ch 11 ─────────────────────────────────────────────────────────────
  {
    id: "cnn",
    title: "Convolutional Neural Networks",
    icon: "🖼️",
    color: "#b45309",
    lessons: [
      {
        id: "aiml-30",
        title: "How CNNs Work",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Convolutional Neural Networks (CNNs)** are designed for grid-like data — images. Instead of fully-connected layers, they use **convolutional layers** that apply a small learnable filter (kernel) across the image, detecting local patterns like edges, corners, and textures.",
          },
          {
            type: "text",
            content:
              "CNN architecture: **Convolution** (feature detection) → **ReLU** (non-linearity) → **Pooling** (downsample, reduce size) → **Flatten** → **Dense layers** (classification).",
          },
          {
            type: "diagram",
            title: "CNN architecture",
            nodes: [
              {
                id: "conv",
                label: "Convolutional layer",
                color: "#b45309",
                items: ["Learnable filters", "Detect local patterns", "Shares weights"],
              },
              {
                id: "pool",
                label: "Pooling layer",
                color: "#d97706",
                items: ["MaxPool or AvgPool", "Reduce spatial size", "Translation invariance"],
              },
              {
                id: "dense",
                label: "Dense layers",
                color: "#f59e0b",
                items: ["Flatten + FC layers", "Final classification"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "2D convolution from scratch",
            content: `import numpy as np

def convolve2d(image, kernel):
    kh, kw = kernel.shape
    oh = image.shape[0] - kh + 1
    ow = image.shape[1] - kw + 1
    output = np.zeros((oh, ow))
    for i in range(oh):
        for j in range(ow):
            output[i, j] = (image[i:i+kh, j:j+kw] * kernel).sum()
    return output

# Simple 4×4 image and edge-detection kernel
image = np.array([[1,2,3,4],
                  [5,6,7,8],
                  [9,8,7,6],
                  [5,4,3,2]], dtype=float)

edge_kernel = np.array([[-1, 0, 1],
                        [-2, 0, 2],
                        [-1, 0, 1]], dtype=float)

result = convolve2d(image, edge_kernel)
print("Convolution output:\\n", result)`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "A CNN's lower layers detect low-level features (edges, colours). Deeper layers combine these into higher-level features (shapes, objects). This hierarchical feature learning is why CNNs work so well on images.",
          },
          {
            type: "quiz",
            question: "What does a convolutional layer learn?",
            options: [
              "The class labels",
              "Learnable filters that detect local patterns in the input",
              "The input image pixels directly",
              "Hyperparameters for the next layer",
            ],
            answer: 1,
            explanation:
              "Convolutional layers learn small filters (kernels) that detect local patterns like edges, textures, and shapes by sliding over the input.",
          },
          {
            type: "quiz",
            question: "What is the purpose of a pooling layer?",
            options: [
              "To add more parameters",
              "To increase spatial resolution",
              "To downsample feature maps and add translation invariance",
              "To apply the softmax function",
            ],
            answer: 2,
            explanation:
              "Pooling (e.g. MaxPool) reduces the spatial dimensions of feature maps, making the model more efficient and robust to small translations in the input.",
          },
        ],
        challenge: {
          title: "2D Convolution",
          description:
            "Implement `convolve2d(image, kernel)` using NumPy loops. Apply it to a 4×4 image and a 2×2 kernel of your choice. Print the output shape and values.",
          starterCode: `import numpy as np

def convolve2d(image, kernel):
    # Implement the 2D convolution
    pass

image = np.array([[1,2,3,4],[5,6,7,8],[9,8,7,6],[5,4,3,2]], dtype=float)
kernel = np.array([[1,0],[0,-1]], dtype=float)

result = convolve2d(image, kernel)
print("Output shape:", result.shape)
print("Output:\\n", result)`,
          solutionCode: `import numpy as np

def convolve2d(image, kernel):
    kh, kw = kernel.shape
    oh = image.shape[0] - kh + 1
    ow = image.shape[1] - kw + 1
    output = np.zeros((oh, ow))
    for i in range(oh):
        for j in range(ow):
            output[i, j] = (image[i:i+kh, j:j+kw] * kernel).sum()
    return output

image = np.array([[1,2,3,4],[5,6,7,8],[9,8,7,6],[5,4,3,2]], dtype=float)
kernel = np.array([[1,0],[0,-1]], dtype=float)

result = convolve2d(image, kernel)
print("Output shape:", result.shape)
print("Output:\\n", result)`,
          tests: [
            { id: 1, label: "Defines convolve2d", keywords: [{ pattern: "def\\s+convolve2d\\s*\\(" }] },
            { id: 2, label: "Prints output shape", keywords: [".shape"] },
            { id: 3, label: "Prints output values", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-31",
        title: "Pooling & Regularisation",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Max pooling** takes the maximum value in each pooling window — preserving the strongest activation. **Average pooling** takes the mean. Both reduce spatial dimensions by a factor of the stride.",
          },
          {
            type: "text",
            content:
              "**Dropout** is the main regularisation technique for neural networks. During training, a fraction of neurons is randomly set to zero on each forward pass, forcing the network to learn redundant representations and reducing overfitting.",
          },
          {
            type: "diagram",
            title: "Regularisation techniques",
            nodes: [
              {
                id: "dropout",
                label: "Dropout",
                color: "#b45309",
                items: ["Random neuron deactivation", "Prevents co-adaptation", "rate=0.2–0.5"],
              },
              {
                id: "batchnorm",
                label: "Batch Normalisation",
                color: "#d97706",
                items: ["Normalise layer inputs", "Faster training", "Reduces internal covariate shift"],
              },
              {
                id: "l2",
                label: "L2 Regularisation",
                color: "#f59e0b",
                items: ["Penalises large weights", "Weight decay", "Controls overfitting"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Max pooling from scratch",
            content: `import numpy as np

def max_pool2d(feature_map, pool_size=2, stride=2):
    h, w = feature_map.shape
    out_h = (h - pool_size) // stride + 1
    out_w = (w - pool_size) // stride + 1
    output = np.zeros((out_h, out_w))
    for i in range(out_h):
        for j in range(out_w):
            region = feature_map[i*stride:i*stride+pool_size,
                                  j*stride:j*stride+pool_size]
            output[i, j] = region.max()
    return output

fm = np.array([[1,3,2,4],[5,6,1,2],[9,2,3,1],[4,5,6,7]], dtype=float)
pooled = max_pool2d(fm)
print("Before:", fm.shape, "\\nAfter:", pooled.shape)
print("Pooled:\\n", pooled)`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "A typical dropout rate is 0.2–0.5. Use lower dropout (0.1–0.2) near input layers and higher (0.3–0.5) in deeper layers.",
          },
          {
            type: "quiz",
            question: "What does max pooling do?",
            options: [
              "Averages all values in the window",
              "Takes the maximum value from each pooling window",
              "Applies a convolutional filter",
              "Normalises activations",
            ],
            answer: 1,
            explanation:
              "Max pooling takes the maximum activation in each window, preserving the strongest detected feature while reducing spatial dimensions.",
          },
          {
            type: "quiz",
            question: "How does dropout prevent overfitting?",
            options: [
              "By reducing the learning rate",
              "By randomly deactivating neurons during training, preventing co-adaptation",
              "By removing outlier data points",
              "By increasing the number of layers",
            ],
            answer: 1,
            explanation:
              "Dropout prevents neurons from relying on specific other neurons (co-adaptation). Each neuron must learn useful features independently.",
          },
        ],
        challenge: {
          title: "Max Pooling",
          description:
            "Implement `max_pool2d(fm, pool_size=2, stride=2)` using NumPy. Apply it to `fm = np.array([[1,3,2,4],[5,6,1,2],[9,2,3,1],[4,5,6,7]], dtype=float)`. Print input and output shapes.",
          starterCode: `import numpy as np

def max_pool2d(fm, pool_size=2, stride=2):
    # Implement max pooling
    pass

fm = np.array([[1,3,2,4],[5,6,1,2],[9,2,3,1],[4,5,6,7]], dtype=float)
pooled = max_pool2d(fm)
print("Input shape:", fm.shape)
print("Output shape:", pooled.shape)
print("Pooled:\\n", pooled)`,
          solutionCode: `import numpy as np

def max_pool2d(fm, pool_size=2, stride=2):
    h, w = fm.shape
    out_h = (h - pool_size) // stride + 1
    out_w = (w - pool_size) // stride + 1
    output = np.zeros((out_h, out_w))
    for i in range(out_h):
        for j in range(out_w):
            region = fm[i*stride:i*stride+pool_size, j*stride:j*stride+pool_size]
            output[i, j] = region.max()
    return output

fm = np.array([[1,3,2,4],[5,6,1,2],[9,2,3,1],[4,5,6,7]], dtype=float)
pooled = max_pool2d(fm)
print("Input shape:", fm.shape)
print("Output shape:", pooled.shape)
print("Pooled:\\n", pooled)`,
          tests: [
            { id: 1, label: "Defines max_pool2d", keywords: [{ pattern: "def\\s+max_pool2d\\s*\\(" }] },
            { id: 2, label: "Prints both shapes", keywords: ["fm.shape", "pooled.shape"] },
            { id: 3, label: "Prints pooled output", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-32",
        title: "Transfer Learning",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**Transfer learning** uses a model pre-trained on a large dataset (like ImageNet with 1.2M images) as a starting point for a new task. Instead of training from scratch, you **fine-tune** the pre-trained weights on your smaller dataset.",
          },
          {
            type: "text",
            content:
              "Two strategies: **Feature extraction** — freeze all layers, add a new classifier head, train only the head. **Fine-tuning** — unfreeze some later layers and train them alongside the new head with a small learning rate.",
          },
          {
            type: "diagram",
            title: "Transfer learning strategies",
            nodes: [
              {
                id: "pretrained",
                label: "Pre-trained model",
                color: "#b45309",
                items: ["Trained on ImageNet", "Knows edges, shapes, objects"],
              },
              {
                id: "freeze",
                label: "Feature extraction",
                color: "#d97706",
                items: ["Freeze early layers", "Train new head only", "Fast, less data needed"],
              },
              {
                id: "finetune",
                label: "Fine-tuning",
                color: "#f59e0b",
                items: ["Unfreeze later layers", "Small learning rate", "Best accuracy"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Transfer learning concept with sklearn",
            content: `from sklearn.neural_network import MLPClassifier
from sklearn.datasets import load_digits
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import numpy as np

# Simulate transfer learning: train on digits 0-4, transfer to 5-9
X, y = load_digits(return_X_y=True)

# "Source" task: digits 0-4
mask_src = y < 5
X_src, y_src = X[mask_src], y[mask_src]
scaler = StandardScaler().fit(X_src)
X_src_s = scaler.transform(X_src)

# Train base model
base = MLPClassifier(hidden_layer_sizes=(64, 32), max_iter=300, random_state=42)
base.fit(X_src_s, y_src)
print("Source task accuracy:", round(base.score(X_src_s, y_src), 4))

# Transfer: use same scaler + architecture on target task (5-9)
mask_tgt = y >= 5
X_tgt = scaler.transform(X[mask_tgt])
y_tgt = y[mask_tgt]
X_tr, X_te, y_tr, y_te = train_test_split(X_tgt, y_tgt, test_size=0.2, random_state=0)

new_model = MLPClassifier(hidden_layer_sizes=(64, 32), max_iter=300, random_state=0)
new_model.fit(X_tr, y_tr)
print("Target task accuracy:", round(new_model.score(X_te, y_te), 4))`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "In practice, transfer learning uses PyTorch/TensorFlow with models like ResNet, VGG, or BERT. It drastically reduces the data and compute needed for new tasks.",
          },
          {
            type: "quiz",
            question: "What is the main benefit of transfer learning?",
            options: [
              "It always improves accuracy by 10%",
              "It reuses knowledge from a large task, requiring less data and compute for a new task",
              "It removes the need for any training",
              "It works only on text data",
            ],
            answer: 1,
            explanation:
              "A pre-trained model already knows low-level features (edges, shapes). Transfer learning reuses this knowledge, needing far less data and compute for the new task.",
          },
          {
            type: "quiz",
            question: "In the feature extraction strategy, what layers are frozen?",
            options: [
              "All layers including the new head",
              "Only the new classification head",
              "The pre-trained layers — only the new head is trained",
              "No layers are frozen",
            ],
            answer: 2,
            explanation:
              "Feature extraction freezes the pre-trained backbone and only trains the new classification head added on top.",
          },
        ],
        challenge: {
          title: "Feature Extraction Simulation",
          description:
            "Load `load_digits`. Standardise with `StandardScaler`. Split into source (y<5) and target (y>=5) tasks. Train `MLPClassifier(hidden_layer_sizes=(64,), max_iter=200, random_state=0)` on both. Print accuracy for each.",
          starterCode: `from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_digits

X, y = load_digits(return_X_y=True)

# Source task (y < 5) and target task (y >= 5)
# Standardise, train two models, print accuracies

`,
          solutionCode: `from sklearn.neural_network import MLPClassifier
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_digits

X, y = load_digits(return_X_y=True)

scaler = StandardScaler().fit(X)
X_s = scaler.transform(X)

# Source task
mask_src = y < 5
m1 = MLPClassifier(hidden_layer_sizes=(64,), max_iter=200, random_state=0)
m1.fit(X_s[mask_src], y[mask_src])
print("Source accuracy:", round(m1.score(X_s[mask_src], y[mask_src]), 4))

# Target task
mask_tgt = y >= 5
X_tr, X_te, y_tr, y_te = train_test_split(X_s[mask_tgt], y[mask_tgt], test_size=0.2, random_state=0)
m2 = MLPClassifier(hidden_layer_sizes=(64,), max_iter=200, random_state=0)
m2.fit(X_tr, y_tr)
print("Target accuracy:", round(m2.score(X_te, y_te), 4))`,
          tests: [
            { id: 1, label: "Uses StandardScaler", keywords: ["StandardScaler"] },
            { id: 2, label: "Trains two MLPs", keywords: ["MLPClassifier"] },
            { id: 3, label: "Prints both accuracies", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },
    ],
  },

  // ── Ch 12 ─────────────────────────────────────────────────────────────
  {
    id: "rnn",
    title: "RNNs & LSTMs",
    icon: "🔄",
    color: "#0891b2",
    lessons: [
      {
        id: "aiml-33",
        title: "Sequences & RNNs",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Recurrent Neural Networks (RNNs)** are designed for **sequential data** — text, time series, audio. Unlike feedforward networks, RNNs have a hidden state that carries information from one time step to the next, giving them a form of memory.",
          },
          {
            type: "text",
            content:
              "At each time step `t`, the RNN computes: `h_t = tanh(W_h × h_{t-1} + W_x × x_t + b)`. The hidden state `h_t` is passed to the next step, allowing the network to remember context from earlier in the sequence.",
          },
          {
            type: "diagram",
            title: "RNN unrolled",
            nodes: [
              {
                id: "t1",
                label: "Time step t-1",
                color: "#0891b2",
                items: ["x_{t-1}", "h_{t-1} → h_t"],
              },
              {
                id: "t2",
                label: "Time step t",
                color: "#0369a1",
                items: ["x_t", "Shares weights W"],
              },
              {
                id: "t3",
                label: "Time step t+1",
                color: "#075985",
                items: ["x_{t+1}", "h_t → h_{t+1}"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Simple RNN cell from scratch",
            content: `import numpy as np

np.random.seed(0)

# Tiny RNN: input_size=3, hidden_size=4
input_size, hidden_size = 3, 4
Wx = np.random.randn(hidden_size, input_size) * 0.1
Wh = np.random.randn(hidden_size, hidden_size) * 0.1
b  = np.zeros(hidden_size)

def rnn_step(x_t, h_prev):
    return np.tanh(Wh @ h_prev + Wx @ x_t + b)

# Process a sequence of 5 time steps
sequence = np.random.randn(5, input_size)
h = np.zeros(hidden_size)

for t, x_t in enumerate(sequence):
    h = rnn_step(x_t, h)
    print(f"Step {t}: h = {h.round(3)}")`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "RNNs suffer from the **vanishing gradient problem** — gradients shrink exponentially as they propagate back through long sequences. LSTMs and GRUs were designed to solve this.",
          },
          {
            type: "quiz",
            question: "What makes RNNs different from feedforward networks?",
            options: [
              "They use different activation functions",
              "They have a hidden state that carries information across time steps",
              "They are faster to train",
              "They do not use backpropagation",
            ],
            answer: 1,
            explanation:
              "RNNs maintain a hidden state that is updated at each time step — this allows them to use context from earlier parts of the sequence.",
          },
          {
            type: "quiz",
            question: "What is the vanishing gradient problem in RNNs?",
            options: [
              "The weights become too large",
              "Gradients shrink exponentially when backpropagating through long sequences",
              "The hidden state grows too large",
              "The model forgets recent inputs",
            ],
            answer: 1,
            explanation:
              "When backpropagating through many time steps, gradients are multiplied by the same weight matrix repeatedly, causing them to shrink toward zero — making it hard to learn long-range dependencies.",
          },
        ],
        challenge: {
          title: "RNN Forward Pass",
          description:
            "Implement an RNN forward pass. Given `Wx = np.eye(2)*0.5`, `Wh = np.eye(2)*0.5`, `b = np.zeros(2)`, process a sequence of 3 time steps `[[1,0],[0,1],[1,1]]` starting from `h = np.zeros(2)`. Print `h` after each step.",
          starterCode: `import numpy as np

Wx = np.eye(2) * 0.5
Wh = np.eye(2) * 0.5
b  = np.zeros(2)
sequence = np.array([[1,0],[0,1],[1,1]], dtype=float)
h = np.zeros(2)

# Process sequence, print h after each step

`,
          solutionCode: `import numpy as np

Wx = np.eye(2) * 0.5
Wh = np.eye(2) * 0.5
b  = np.zeros(2)
sequence = np.array([[1,0],[0,1],[1,1]], dtype=float)
h = np.zeros(2)

for t, x_t in enumerate(sequence):
    h = np.tanh(Wh @ h + Wx @ x_t + b)
    print(f"Step {t}: h = {h.round(4)}")`,
          tests: [
            { id: 1, label: "Uses np.tanh", keywords: ["np.tanh"] },
            { id: 2, label: "Iterates over sequence", keywords: [{ pattern: "for\\s+\\w+.*in\\s+sequence" }] },
            { id: 3, label: "Prints h each step", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-34",
        title: "LSTMs",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**Long Short-Term Memory (LSTM)** networks solve the vanishing gradient problem through **gating mechanisms**: three gates control what information to remember, forget, and output.",
          },
          {
            type: "text",
            content:
              "The three gates: **Forget gate** (what to erase from cell state), **Input gate** (what new information to store), **Output gate** (what to output as hidden state). This allows LSTMs to maintain relevant information across hundreds of time steps.",
          },
          {
            type: "diagram",
            title: "LSTM gates",
            nodes: [
              {
                id: "forget",
                label: "Forget gate",
                color: "#0891b2",
                items: ["f_t = σ(Wf·[h,x] + b)", "0 = forget, 1 = keep"],
              },
              {
                id: "input",
                label: "Input gate",
                color: "#0369a1",
                items: ["i_t = σ(Wi·[h,x] + b)", "What new info to store"],
              },
              {
                id: "output",
                label: "Output gate",
                color: "#075985",
                items: ["o_t = σ(Wo·[h,x] + b)", "What to output as h_t"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "LSTM cell equations",
            content: `import numpy as np

def lstm_step(x_t, h_prev, c_prev, Wf, Wi, Wc, Wo, bf, bi, bc, bo):
    combined = np.concatenate([h_prev, x_t])

    f_t = 1 / (1 + np.exp(-(Wf @ combined + bf)))   # forget gate
    i_t = 1 / (1 + np.exp(-(Wi @ combined + bi)))   # input gate
    g_t = np.tanh(Wc @ combined + bc)               # candidate cell
    o_t = 1 / (1 + np.exp(-(Wo @ combined + bo)))   # output gate

    c_t = f_t * c_prev + i_t * g_t                  # new cell state
    h_t = o_t * np.tanh(c_t)                        # new hidden state

    return h_t, c_t

print("LSTM cell equations implemented.")
print("Gates: forget (f), input (i), candidate (g), output (o)")
print("Cell state c_t controls long-term memory.")`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "**GRU (Gated Recurrent Unit)** is a simpler alternative to LSTM with only 2 gates. It achieves similar performance with fewer parameters.",
          },
          {
            type: "quiz",
            question: "What problem do LSTMs solve that vanilla RNNs cannot?",
            options: [
              "Processing images",
              "Learning long-range dependencies due to the vanishing gradient problem",
              "Multi-class classification",
              "Handling missing data",
            ],
            answer: 1,
            explanation:
              "LSTMs use gating mechanisms that allow gradients to flow unchanged through long sequences, enabling learning of long-range dependencies.",
          },
          {
            type: "quiz",
            question: "What does the forget gate decide?",
            options: [
              "What new information to store in the cell state",
              "What to output as the hidden state",
              "What information to erase from the cell state",
              "The learning rate",
            ],
            answer: 2,
            explanation:
              "The forget gate produces values between 0 (forget completely) and 1 (keep completely) for each dimension of the cell state.",
          },
        ],
        challenge: {
          title: "LSTM Gate Computation",
          description:
            "Given `x = np.array([1.0, 0.5])` and `h_prev = np.zeros(2)`, compute the forget gate as `f = sigmoid(x + h_prev)` (simplified). Compute input gate as `i = sigmoid(x - h_prev)`. Print both gates.",
          starterCode: `import numpy as np

x = np.array([1.0, 0.5])
h_prev = np.zeros(2)

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# Compute forget gate f and input gate i, print both

`,
          solutionCode: `import numpy as np

x = np.array([1.0, 0.5])
h_prev = np.zeros(2)

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

f = sigmoid(x + h_prev)
i = sigmoid(x - h_prev)

print("Forget gate:", f.round(4))
print("Input gate:", i.round(4))`,
          tests: [
            { id: 1, label: "Defines sigmoid", keywords: ["sigmoid"] },
            { id: 2, label: "Computes forget gate f", keywords: ["f ="] },
            { id: 3, label: "Computes input gate i", keywords: ["i ="] },
            { id: 4, label: "Prints both gates", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-35",
        title: "Time Series with ML",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Time series** data is sequential — each value depends on past values. Before using ML for forecasting, you must create **lag features** (past values as inputs) to give the model temporal context.",
          },
          {
            type: "text",
            content:
              "**Feature engineering for time series**: create lag features (`y[t-1]`, `y[t-2]`…), rolling statistics (rolling mean, rolling std), and time-based features (hour, day of week). Then any sklearn model can be applied.",
          },
          {
            type: "diagram",
            title: "Time series to supervised learning",
            nodes: [
              {
                id: "lags",
                label: "Lag features",
                color: "#0891b2",
                items: ["y[t-1], y[t-2]", "Sliding window", "Input to model"],
              },
              {
                id: "rolling",
                label: "Rolling stats",
                color: "#0369a1",
                items: ["Rolling mean", "Rolling std", "Trend capture"],
              },
              {
                id: "target",
                label: "Target",
                color: "#075985",
                items: ["y[t]", "Next value to predict"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Lag features for time series forecasting",
            content: `import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

np.random.seed(0)
t = np.arange(100)
series = np.sin(0.1 * t) + np.random.randn(100) * 0.1

df = pd.DataFrame({'y': series})
df['lag1'] = df['y'].shift(1)
df['lag2'] = df['y'].shift(2)
df['roll_mean'] = df['y'].rolling(3).mean()
df = df.dropna()

X = df[['lag1', 'lag2', 'roll_mean']].values
y = df['y'].values

split = int(0.8 * len(X))
model = LinearRegression().fit(X[:split], y[:split])
print("Test R²:", round(model.score(X[split:], y[split:]), 4))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Always split time series data **chronologically** — never shuffle. Using future data for training causes data leakage and inflated scores.",
          },
          {
            type: "quiz",
            question: "What is a lag feature in time series forecasting?",
            options: [
              "A feature with missing values",
              "A past value of the series used as an input",
              "A feature with low variance",
              "A timestamp column",
            ],
            answer: 1,
            explanation:
              "A lag feature is the value of the time series at a previous time step (y[t-1], y[t-2]…), giving the model information about recent history.",
          },
          {
            type: "quiz",
            question: "Why should you not shuffle time series data before splitting?",
            options: [
              "sklearn does not support shuffling",
              "Shuffling destroys temporal order and causes data leakage",
              "It makes training slower",
              "Shuffling increases overfitting",
            ],
            answer: 1,
            explanation:
              "Shuffling mixes past and future data. If the model trains on future values, its test score is artificially inflated — this is data leakage.",
          },
        ],
        challenge: {
          title: "Lag Feature Forecasting",
          description:
            "Create `series = np.cumsum(np.random.randn(60))` with `np.random.seed(0)`. Build a DataFrame, add `lag1 = y.shift(1)` and `lag2 = y.shift(2)`, drop NaN. Split 80/20 chronologically. Fit `LinearRegression`. Print test R².",
          starterCode: `import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

np.random.seed(0)
series = np.cumsum(np.random.randn(60))

# Build lag features, split chronologically, fit, print R²

`,
          solutionCode: `import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression

np.random.seed(0)
series = np.cumsum(np.random.randn(60))

df = pd.DataFrame({'y': series})
df['lag1'] = df['y'].shift(1)
df['lag2'] = df['y'].shift(2)
df = df.dropna()

X = df[['lag1', 'lag2']].values
y = df['y'].values

split = int(0.8 * len(X))
model = LinearRegression().fit(X[:split], y[:split])
print("Test R²:", round(model.score(X[split:], y[split:]), 4))`,
          tests: [
            { id: 1, label: "Creates lag features", keywords: [".shift(1)", ".shift(2)"] },
            { id: 2, label: "Drops NaN", keywords: [".dropna()"] },
            { id: 3, label: "Prints R²", keywords: [{ pattern: "\\.score\\s*\\(" }] },
          ],
        },
      },
    ],
  },

  // ── Ch 13 ─────────────────────────────────────────────────────────────
  {
    id: "transformers",
    title: "Transformers & Attention",
    icon: "⚡",
    color: "#7c3aed",
    lessons: [
      {
        id: "aiml-36",
        title: "The Attention Mechanism",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**Attention** lets a model focus on the most relevant parts of the input when producing each output. In translation, when generating the word 'bank' in French, the model attends to 'bank' in the English input. This is impossible for RNNs which must compress all history into a fixed-size vector.",
          },
          {
            type: "text",
            content:
              "**Scaled dot-product attention**: compute similarity (dot product) between a **Query** (what we're looking for) and all **Keys** (what's available), scale by √d, apply softmax to get attention weights, then take weighted sum of **Values**.",
          },
          {
            type: "diagram",
            title: "Attention components",
            nodes: [
              {
                id: "qkv",
                label: "Q, K, V",
                color: "#7c3aed",
                items: ["Query — what to look for", "Key — what's available", "Value — what to retrieve"],
              },
              {
                id: "score",
                label: "Attention score",
                color: "#8b5cf6",
                items: ["score = Q·K / √d", "Softmax → weights", "High = attend more"],
              },
              {
                id: "output",
                label: "Output",
                color: "#a78bfa",
                items: ["Weighted sum of V", "Context vector"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Scaled dot-product attention",
            content: `import numpy as np

def scaled_dot_product_attention(Q, K, V):
    d_k = Q.shape[-1]
    scores = Q @ K.T / np.sqrt(d_k)
    weights = np.exp(scores) / np.exp(scores).sum(axis=-1, keepdims=True)  # softmax
    return weights @ V, weights

np.random.seed(0)
seq_len, d_k = 4, 8
Q = np.random.randn(seq_len, d_k)
K = np.random.randn(seq_len, d_k)
V = np.random.randn(seq_len, d_k)

output, weights = scaled_dot_product_attention(Q, K, V)
print("Attention weights (first row):", weights[0].round(3))
print("Output shape:", output.shape)`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "**Multi-head attention** runs several attention operations in parallel, each focusing on different aspects of the input. This is the core innovation in Transformers.",
          },
          {
            type: "quiz",
            question: "What does the Query in attention represent?",
            options: [
              "The full input sequence",
              "What the current token is looking for in the context",
              "The output prediction",
              "A random vector",
            ],
            answer: 1,
            explanation:
              "The Query represents what the current position is 'asking for' — it is compared against all Keys to determine which Values to attend to.",
          },
          {
            type: "quiz",
            question: "Why divide by √d_k in scaled dot-product attention?",
            options: [
              "To ensure weights sum to 1",
              "To prevent large dot products from pushing softmax into regions of very small gradients",
              "To speed up computation",
              "To normalise the Value vectors",
            ],
            answer: 1,
            explanation:
              "For large d_k, dot products grow large in magnitude, pushing softmax into regions of very small gradients. Dividing by √d_k keeps magnitudes stable.",
          },
        ],
        challenge: {
          title: "Attention Weights",
          description:
            "Implement `attention(Q, K)` that computes `scores = Q @ K.T / sqrt(d_k)` then applies softmax row-wise to get attention weights. Test with `Q = K = np.eye(3)` and print the weights.",
          starterCode: `import numpy as np

def attention(Q, K):
    # Compute scaled dot-product attention weights
    pass

Q = np.eye(3)
K = np.eye(3)

weights = attention(Q, K)
print("Attention weights:\\n", weights.round(4))`,
          solutionCode: `import numpy as np

def attention(Q, K):
    d_k = Q.shape[-1]
    scores = Q @ K.T / np.sqrt(d_k)
    exp_scores = np.exp(scores)
    weights = exp_scores / exp_scores.sum(axis=-1, keepdims=True)
    return weights

Q = np.eye(3)
K = np.eye(3)

weights = attention(Q, K)
print("Attention weights:\\n", weights.round(4))`,
          tests: [
            { id: 1, label: "Defines attention", keywords: [{ pattern: "def\\s+attention\\s*\\(" }] },
            { id: 2, label: "Uses sqrt scaling", keywords: ["np.sqrt"] },
            { id: 3, label: "Applies softmax", keywords: ["np.exp"] },
          ],
        },
      },

      {
        id: "aiml-37",
        title: "Transformers & BERT",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "The **Transformer** architecture (2017) replaced RNNs for most NLP tasks. It uses **multi-head self-attention** to process entire sequences in parallel — no recurrence means it trains much faster on GPUs.",
          },
          {
            type: "text",
            content:
              "**BERT** (Bidirectional Encoder Representations from Transformers) pre-trains a Transformer on massive text. It is 'bidirectional' — it sees both left and right context simultaneously. Fine-tuning BERT on any NLP task typically achieves state-of-the-art results.",
          },
          {
            type: "diagram",
            title: "Transformer components",
            nodes: [
              {
                id: "attention",
                label: "Multi-head attention",
                color: "#7c3aed",
                items: ["Multiple attention heads", "Each attends differently", "Concatenated + projected"],
              },
              {
                id: "ffn",
                label: "Feed-forward network",
                color: "#8b5cf6",
                items: ["Applied position-wise", "Two linear layers + ReLU"],
              },
              {
                id: "norm",
                label: "Add & Norm",
                color: "#a78bfa",
                items: ["Residual connection", "Layer normalisation", "Stable training"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Positional encoding",
            content: `import numpy as np

def positional_encoding(seq_len, d_model):
    PE = np.zeros((seq_len, d_model))
    positions = np.arange(seq_len)[:, np.newaxis]
    dims = np.arange(0, d_model, 2)
    div_term = 10000 ** (dims / d_model)
    PE[:, 0::2] = np.sin(positions / div_term)
    PE[:, 1::2] = np.cos(positions / div_term)
    return PE

PE = positional_encoding(seq_len=5, d_model=8)
print("Positional encoding shape:", PE.shape)
print("First position:\\n", PE[0].round(4))`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "**GPT** models (like GPT-4) use only the Transformer decoder (autoregressive — see only past context). **BERT** uses only the encoder (bidirectional). Modern LLMs are mostly decoder-only.",
          },
          {
            type: "quiz",
            question: "Why did Transformers replace RNNs for most NLP tasks?",
            options: [
              "They use less memory",
              "They process sequences in parallel using self-attention — much faster to train",
              "They have fewer parameters",
              "They require less data",
            ],
            answer: 1,
            explanation:
              "RNNs process tokens one by one sequentially — impossible to parallelise. Transformers use self-attention to process all positions simultaneously, making them much faster on GPUs.",
          },
          {
            type: "quiz",
            question: "What makes BERT 'bidirectional'?",
            options: [
              "It reads text forwards and backwards in two separate passes",
              "It attends to both left and right context simultaneously at every layer",
              "It uses two separate models",
              "It processes two languages at once",
            ],
            answer: 1,
            explanation:
              "BERT uses self-attention that looks at all positions — both left and right — simultaneously, giving richer contextual representations than left-to-right models.",
          },
        ],
        challenge: {
          title: "Positional Encoding",
          description:
            "Implement `positional_encoding(seq_len, d_model)` using the sine/cosine formula: even dims use sin, odd dims use cos with `10000^(2i/d_model)`. Print the shape for `seq_len=4, d_model=8`.",
          starterCode: `import numpy as np

def positional_encoding(seq_len, d_model):
    # Implement positional encoding
    pass

PE = positional_encoding(4, 8)
print("Shape:", PE.shape)
print("Values (first row):", PE[0].round(4))`,
          solutionCode: `import numpy as np

def positional_encoding(seq_len, d_model):
    PE = np.zeros((seq_len, d_model))
    positions = np.arange(seq_len)[:, np.newaxis]
    dims = np.arange(0, d_model, 2)
    div_term = 10000 ** (dims / d_model)
    PE[:, 0::2] = np.sin(positions / div_term)
    PE[:, 1::2] = np.cos(positions / div_term)
    return PE

PE = positional_encoding(4, 8)
print("Shape:", PE.shape)
print("Values (first row):", PE[0].round(4))`,
          tests: [
            { id: 1, label: "Defines positional_encoding", keywords: [{ pattern: "def\\s+positional_encoding\\s*\\(" }] },
            { id: 2, label: "Uses sin and cos", keywords: ["np.sin", "np.cos"] },
            { id: 3, label: "Prints shape", keywords: [".shape"] },
          ],
        },
      },

      {
        id: "aiml-38",
        title: "Using HuggingFace Transformers",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**HuggingFace Transformers** is the standard library for using pre-trained NLP models. With just a few lines, you can use BERT, GPT, T5, or hundreds of other models for classification, generation, translation, and summarisation.",
          },
          {
            type: "text",
            content:
              "The key components: **Tokenizer** (converts text to token IDs), **Model** (pre-trained weights), **Pipeline** (the easiest API — wraps tokenization + model + post-processing).",
          },
          {
            type: "diagram",
            title: "HuggingFace workflow",
            nodes: [
              {
                id: "tokenizer",
                label: "Tokenizer",
                color: "#7c3aed",
                items: ["Text → token IDs", "Adds special tokens", "Handles padding"],
              },
              {
                id: "model",
                label: "Pre-trained model",
                color: "#8b5cf6",
                items: ["BERT, GPT, T5, etc.", "Millions of parameters", "Frozen or fine-tuned"],
              },
              {
                id: "pipeline",
                label: "Pipeline API",
                color: "#a78bfa",
                items: ["Easiest interface", "tokenize + model + decode", "One-liner inference"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "HuggingFace pipeline example (conceptual)",
            content: `# This shows the HuggingFace API — install transformers to run
# pip install transformers

# from transformers import pipeline
# classifier = pipeline("sentiment-analysis")
# result = classifier("I love learning AI!")
# print(result)  # [{'label': 'POSITIVE', 'score': 0.9998}]

# Simulating the same concept with sklearn
from sklearn.linear_model import LogisticRegression
import numpy as np

# Simulated text embeddings (in real HF, BERT produces these)
embeddings = np.array([
    [0.9, 0.1],   # "I love this!" → positive
    [0.1, 0.9],   # "Terrible experience" → negative
    [0.8, 0.2],   # "Amazing!" → positive
])
labels = [1, 0, 1]  # 1=positive, 0=negative

model = LogisticRegression().fit(embeddings, labels)
test = np.array([[0.7, 0.3]])  # "Pretty good"
print("Prediction:", "Positive" if model.predict(test)[0] else "Negative")
print("Confidence:", model.predict_proba(test)[0].round(3))`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "The HuggingFace Hub (huggingface.co) hosts 300,000+ models. You can load any model with `from_pretrained('model-name')` in seconds.",
          },
          {
            type: "quiz",
            question: "What does a HuggingFace tokenizer do?",
            options: [
              "Translates text to another language",
              "Converts text into token IDs the model can process",
              "Generates new text",
              "Computes attention weights",
            ],
            answer: 1,
            explanation:
              "A tokenizer splits text into tokens (words, subwords, or characters) and maps them to integer IDs from the model's vocabulary.",
          },
          {
            type: "quiz",
            question: "What is the HuggingFace `pipeline` function?",
            options: [
              "A sklearn Pipeline wrapper",
              "A high-level API that wraps tokenisation, model inference, and post-processing",
              "A model training loop",
              "A data loading utility",
            ],
            answer: 1,
            explanation:
              "The HuggingFace `pipeline` is the easiest way to do inference — it handles tokenisation, model calls, and decoding automatically.",
          },
        ],
        challenge: {
          title: "Simulate a Sentiment Classifier",
          description:
            "Create `embeddings = np.array([[0.9,0.1],[0.1,0.9],[0.8,0.2],[0.2,0.8]])` and `labels = [1, 0, 1, 0]` (simulating BERT embeddings). Train `LogisticRegression`. Predict and print results for `[[0.7, 0.3]]` and `[[0.3, 0.7]]`.",
          starterCode: `from sklearn.linear_model import LogisticRegression
import numpy as np

embeddings = np.array([[0.9,0.1],[0.1,0.9],[0.8,0.2],[0.2,0.8]])
labels = [1, 0, 1, 0]

# Fit model, predict for [[0.7,0.3]] and [[0.3,0.7]], print results

`,
          solutionCode: `from sklearn.linear_model import LogisticRegression
import numpy as np

embeddings = np.array([[0.9,0.1],[0.1,0.9],[0.8,0.2],[0.2,0.8]])
labels = [1, 0, 1, 0]

model = LogisticRegression().fit(embeddings, labels)

for test in [[0.7, 0.3], [0.3, 0.7]]:
    pred = model.predict([test])[0]
    prob = model.predict_proba([test])[0]
    label = "Positive" if pred else "Negative"
    print(f"{test} → {label} (confidence: {prob.max():.3f})")`,
          tests: [
            { id: 1, label: "Fits LogisticRegression", keywords: ["LogisticRegression"] },
            { id: 2, label: "Predicts for both inputs", keywords: ["predict"] },
            { id: 3, label: "Prints results", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },
    ],
  },

  // ── Ch 14 ─────────────────────────────────────────────────────────────
  {
    id: "generative-ai",
    title: "Generative AI",
    icon: "✨",
    color: "#9333ea",
    lessons: [
      {
        id: "aiml-39",
        title: "What is Generative AI?",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "**Generative AI** models learn the distribution of training data and can **generate new samples** — images, text, audio, video — that look like they came from the same distribution. This is fundamentally different from discriminative models that only classify or predict.",
          },
          {
            type: "text",
            content:
              "Major generative architectures: **GANs** (Generative Adversarial Networks), **VAEs** (Variational Autoencoders), **Diffusion Models** (Stable Diffusion, DALL-E), and **Large Language Models** (GPT, LLaMA).",
          },
          {
            type: "diagram",
            title: "Generative model families",
            nodes: [
              {
                id: "gan",
                label: "GANs",
                color: "#9333ea",
                items: ["Generator vs Discriminator", "Adversarial training", "Image generation"],
              },
              {
                id: "vae",
                label: "VAEs",
                color: "#a855f7",
                items: ["Encoder + Decoder", "Latent space", "Smooth interpolation"],
              },
              {
                id: "diffusion",
                label: "Diffusion Models",
                color: "#c084fc",
                items: ["Add then remove noise", "DALL-E, Stable Diffusion", "Best image quality"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Generative vs Discriminative",
            content: `import numpy as np

# Discriminative: P(y|x) — given input x, predict label y
# Example: logistic regression P(spam | email_features)

# Generative: P(x) — learn the data distribution, then sample from it
# Simulate a generative model: Gaussian Mixture Model
np.random.seed(0)

def generate_samples(n=20):
    """Simple generative model: mixture of 2 Gaussians"""
    component = np.random.choice([0, 1], size=n)
    samples = np.where(
        component == 0,
        np.random.normal(0, 0.5, n),
        np.random.normal(5, 0.5, n)
    )
    return samples

new_data = generate_samples(20)
print("Generated samples:", new_data.round(2))
print("Mean:", new_data.mean().round(2), "Std:", new_data.std().round(2))`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "ChatGPT, Midjourney, Stable Diffusion, and GitHub Copilot are all generative AI models. They generate new content conditioned on a prompt.",
          },
          {
            type: "quiz",
            question: "What is the key difference between generative and discriminative models?",
            options: [
              "Generative models use neural networks; discriminative models do not",
              "Generative models learn P(x) to generate new data; discriminative models learn P(y|x) to classify",
              "Generative models are always more accurate",
              "Discriminative models require more data",
            ],
            answer: 1,
            explanation:
              "Discriminative models learn to classify (P(y|x)). Generative models learn the data distribution P(x) and can sample new examples from it.",
          },
          {
            type: "quiz",
            question: "Which generative model family currently produces the best image quality?",
            options: ["GANs", "VAEs", "Diffusion models", "Decision Trees"],
            answer: 2,
            explanation:
              "Diffusion models (Stable Diffusion, DALL-E 3, Midjourney) currently produce the highest-quality images by iteratively denoising from pure noise.",
          },
        ],
        challenge: {
          title: "Gaussian Mixture Generator",
          description:
            "Write a function `generate(n, mu1=0, mu2=5, std=0.5)` that randomly selects between two Gaussians with equal probability and generates `n` samples. Print 20 samples, their mean, and std.",
          starterCode: `import numpy as np
np.random.seed(42)

def generate(n, mu1=0, mu2=5, std=0.5):
    # Generate n samples from a mixture of 2 Gaussians
    pass

samples = generate(20)
print("Samples:", samples.round(2))
print("Mean:", round(samples.mean(), 2))
print("Std:", round(samples.std(), 2))`,
          solutionCode: `import numpy as np
np.random.seed(42)

def generate(n, mu1=0, mu2=5, std=0.5):
    component = np.random.choice([0, 1], size=n)
    return np.where(
        component == 0,
        np.random.normal(mu1, std, n),
        np.random.normal(mu2, std, n)
    )

samples = generate(20)
print("Samples:", samples.round(2))
print("Mean:", round(samples.mean(), 2))
print("Std:", round(samples.std(), 2))`,
          tests: [
            { id: 1, label: "Defines generate", keywords: [{ pattern: "def\\s+generate\\s*\\(" }] },
            { id: 2, label: "Uses numpy random", keywords: ["np.random"] },
            { id: 3, label: "Prints mean and std", keywords: [".mean()", ".std()"] },
          ],
        },
      },

      {
        id: "aiml-40",
        title: "GANs — Generative Adversarial Networks",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "A **GAN** consists of two competing networks: a **Generator** that creates fake data from random noise, and a **Discriminator** that tries to distinguish real from fake. They train adversarially — the generator gets better at fooling the discriminator, and the discriminator gets better at catching fakes.",
          },
          {
            type: "text",
            content:
              "Training is a minimax game: the Generator minimises `log(1 - D(G(z)))` and the Discriminator maximises `log(D(x)) + log(1 - D(G(z)))`. At convergence, the Generator produces data indistinguishable from real.",
          },
          {
            type: "diagram",
            title: "GAN training loop",
            nodes: [
              {
                id: "gen",
                label: "Generator",
                color: "#9333ea",
                items: ["Noise z → fake data", "Wants D(G(z)) = 1", "Fool the discriminator"],
              },
              {
                id: "disc",
                label: "Discriminator",
                color: "#a855f7",
                items: ["Real vs fake", "D(x)=1 real, D(G(z))=0 fake", "Get fooled less"],
              },
              {
                id: "loop",
                label: "Adversarial loop",
                color: "#c084fc",
                items: ["Alternate training", "Generator improves", "Until Nash equilibrium"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Toy GAN training loop",
            content: `import numpy as np

# Toy 1D GAN: learn to generate N(3, 0.5) data
np.random.seed(0)

def real_data(n=32):
    return np.random.normal(3, 0.5, (n, 1))

def generator(z, w_g, b_g):
    return z * w_g + b_g

def discriminator(x, w_d, b_d):
    score = x * w_d + b_d
    return 1 / (1 + np.exp(-score))   # sigmoid

w_g, b_g = 1.0, 0.0   # generator params
w_d, b_d = 1.0, 0.0   # discriminator params
lr = 0.01

for step in range(200):
    z = np.random.randn(32, 1)
    fake = generator(z, w_g, b_g)
    real = real_data()

    d_real = discriminator(real, w_d, b_d)
    d_fake = discriminator(fake, w_d, b_d)

    # Discriminator update
    w_d += lr * (d_real.mean() - d_fake.mean())

    # Generator update
    w_g -= lr * (-d_fake.mean())

print(f"Generator params: w={w_g:.3f}, b={b_g:.3f}")
print(f"Sample mean: {generator(np.random.randn(100, 1), w_g, b_g).mean():.3f}")`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "GANs are notoriously hard to train — they suffer from **mode collapse** (Generator produces only a few types of output) and **training instability**. Variants like Wasserstein GAN address this.",
          },
          {
            type: "quiz",
            question: "What does the Generator in a GAN receive as input?",
            options: [
              "Real training data",
              "Random noise vector z",
              "The discriminator's output",
              "Class labels",
            ],
            answer: 1,
            explanation:
              "The Generator takes a random noise vector z (sampled from a simple distribution like N(0,1)) and transforms it into a synthetic data sample.",
          },
          {
            type: "quiz",
            question: "What is mode collapse in GANs?",
            options: [
              "The discriminator stops improving",
              "The generator produces only a limited variety of outputs",
              "Training loss goes to zero",
              "The model converges too quickly",
            ],
            answer: 1,
            explanation:
              "Mode collapse occurs when the Generator learns to produce only a few types of outputs that consistently fool the Discriminator, ignoring the full diversity of the real data.",
          },
        ],
        challenge: {
          title: "GAN Generator",
          description:
            "Implement a simple 1D generator function `generator(z, w, b)` that returns `z * w + b`. Set `w=2.0, b=3.0`. Generate 50 samples from `z = np.random.randn(50)`. Print the mean and std of the generated samples.",
          starterCode: `import numpy as np
np.random.seed(0)

def generator(z, w, b):
    # Implement generator
    pass

z = np.random.randn(50)
w, b = 2.0, 3.0
samples = generator(z, w, b)

print("Generated mean:", round(samples.mean(), 3))
print("Generated std:", round(samples.std(), 3))`,
          solutionCode: `import numpy as np
np.random.seed(0)

def generator(z, w, b):
    return z * w + b

z = np.random.randn(50)
w, b = 2.0, 3.0
samples = generator(z, w, b)

print("Generated mean:", round(samples.mean(), 3))
print("Generated std:", round(samples.std(), 3))`,
          tests: [
            { id: 1, label: "Defines generator", keywords: [{ pattern: "def\\s+generator\\s*\\(" }] },
            { id: 2, label: "Applies transformation", keywords: ["z * w", "w * z"] },
            { id: 3, label: "Prints mean and std", keywords: [".mean()", ".std()"] },
          ],
        },
      },

      {
        id: "aiml-41",
        title: "Large Language Models & Prompting",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "**Large Language Models (LLMs)** like GPT-4, LLaMA, and Gemini are Transformer-based models pre-trained on trillions of tokens. They learn to predict the next token — from this simple objective, they develop broad capabilities: reasoning, coding, translation, and creative writing.",
          },
          {
            type: "text",
            content:
              "**Prompt engineering** is the skill of crafting inputs to elicit the best responses from LLMs. Key techniques: **zero-shot** (just ask), **few-shot** (provide examples), **chain-of-thought** (ask to reason step by step), and **system prompts** (define the model's role).",
          },
          {
            type: "diagram",
            title: "Prompting techniques",
            nodes: [
              {
                id: "zeroshot",
                label: "Zero-shot",
                color: "#9333ea",
                items: ["Just ask directly", "Classify this text as…", "No examples needed"],
              },
              {
                id: "fewshot",
                label: "Few-shot",
                color: "#a855f7",
                items: ["Provide 2-5 examples", "Model learns pattern", "Better accuracy"],
              },
              {
                id: "cot",
                label: "Chain-of-thought",
                color: "#c084fc",
                items: ["'Think step by step'", "Better on reasoning", "Reduces errors"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Simulating few-shot prompting",
            content: `# LLMs take text prompts. This simulates the concept.

zero_shot = """
Classify the sentiment of this review:
"The product quality is excellent and delivery was fast."
Sentiment:"""

few_shot = """
Review: "Amazing product!"  → Sentiment: Positive
Review: "Terrible, broke immediately." → Sentiment: Negative
Review: "It's okay, nothing special." → Sentiment: Neutral

Review: "Best purchase I ever made!"
Sentiment:"""

cot = """
Q: If I have 23 apples and give away 8, then buy 15 more, how many do I have?
A: Let me think step by step.
   Start: 23 apples
   After giving away 8: 23 - 8 = 15 apples
   After buying 15 more: 15 + 15 = 30 apples
   Answer: 30"""

for name, prompt in [("Zero-shot", zero_shot), ("Few-shot", few_shot), ("CoT", cot)]:
    print(f"--- {name} prompt ---")
    print(prompt[:80].strip(), "...")
    print()`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "For complex reasoning tasks, always use chain-of-thought prompting: add 'Think step by step' or 'Let's reason through this'. It dramatically improves accuracy on math and logic.",
          },
          {
            type: "quiz",
            question: "What training objective do LLMs like GPT use?",
            options: [
              "Image classification",
              "Next-token prediction on massive text corpora",
              "Reinforcement learning with human feedback only",
              "Supervised classification on labelled data",
            ],
            answer: 1,
            explanation:
              "LLMs are trained to predict the next token in a sequence — a self-supervised objective applied to trillions of tokens. From this, broad capabilities emerge.",
          },
          {
            type: "quiz",
            question: "What is chain-of-thought prompting?",
            options: [
              "Asking the model to generate multiple responses",
              "Asking the model to reason step by step before giving a final answer",
              "Providing many examples in the prompt",
              "Using a system prompt to define the model's role",
            ],
            answer: 1,
            explanation:
              "Chain-of-thought prompting encourages the model to show its reasoning process step by step, which significantly improves performance on complex reasoning tasks.",
          },
        ],
        challenge: {
          title: "Prompt Templates",
          description:
            "Create a Python dictionary `prompts` with three keys: `'zero_shot'`, `'few_shot'`, and `'chain_of_thought'`, each mapped to a string prompt template for sentiment classification. Print each key and the first 50 characters of its value.",
          starterCode: `# Create prompts dictionary with 3 prompt styles

prompts = {
    # Add your prompts here
}

for style, template in prompts.items():
    print(f"{style}: {template[:50]}...")`,
          solutionCode: `prompts = {
    'zero_shot': 'Classify sentiment: "{text}"\nSentiment:',
    'few_shot': '"Great!" → Positive\n"Terrible!" → Negative\n"{text}" →',
    'chain_of_thought': 'Analyze "{text}" step by step, then state the sentiment.',
}

for style, template in prompts.items():
    print(f"{style}: {template[:50]}...")`,
          tests: [
            { id: 1, label: "Creates prompts dict", keywords: ["prompts"] },
            { id: 2, label: "Has all three keys", keywords: ["zero_shot", "few_shot", "chain_of_thought"] },
            { id: 3, label: "Loops and prints", keywords: [{ pattern: "for\\s+\\w+.*in\\s+prompts" }] },
          ],
        },
      },
    ],
  },

  // ── Ch 15 ─────────────────────────────────────────────────────────────
  {
    id: "mlops",
    title: "MLOps & Deployment",
    icon: "🚀",
    color: "#0369a1",
    lessons: [
      {
        id: "aiml-42",
        title: "Model Saving & Loading",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "After training a model, you need to **save** it to disk so it can be used later without retraining. In Python/sklearn, the standard tools are **joblib** (recommended for sklearn models) and **pickle**.",
          },
          {
            type: "text",
            content:
              "Always save the **entire pipeline** including the scaler — not just the model. If you save the model but not the scaler, you cannot correctly preprocess new data at inference time.",
          },
          {
            type: "diagram",
            title: "Save & load workflow",
            nodes: [
              {
                id: "train",
                label: "Train",
                color: "#0369a1",
                items: ["Train pipeline", "Evaluate on test set"],
              },
              {
                id: "save",
                label: "Save",
                color: "#0891b2",
                items: ["joblib.dump(model, 'model.pkl')", "Save full pipeline"],
              },
              {
                id: "load",
                label: "Load & infer",
                color: "#0ea5e9",
                items: ["joblib.load('model.pkl')", "model.predict(new_X)"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Save and load with joblib",
            content: `import joblib
import io
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', RandomForestClassifier(n_estimators=50, random_state=42))
])
pipe.fit(X_train, y_train)

# Save to buffer (simulating file save in browser)
buf = io.BytesIO()
joblib.dump(pipe, buf)
buf.seek(0)

# Load back
loaded_pipe = joblib.load(buf)
print("Original score:", pipe.score(X_test, y_test).round(4))
print("Loaded score:  ", loaded_pipe.score(X_test, y_test).round(4))
print("Scores match:", pipe.score(X_test, y_test) == loaded_pipe.score(X_test, y_test))`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Use `joblib` instead of `pickle` for sklearn models — joblib is optimised for large NumPy arrays and is significantly faster.",
          },
          {
            type: "quiz",
            question: "Why save the entire pipeline, not just the model?",
            options: [
              "The pipeline is smaller than the model",
              "The scaler must transform new data using training statistics — if not saved, inference is wrong",
              "sklearn requires it",
              "Pipelines load faster",
            ],
            answer: 1,
            explanation:
              "The scaler was fit on training data — it knows the training mean and std. At inference, new data must be scaled the same way. Saving only the model loses these statistics.",
          },
          {
            type: "quiz",
            question: "Which library is recommended for saving sklearn models?",
            options: ["pickle", "json", "joblib", "csv"],
            answer: 2,
            explanation:
              "joblib is optimised for large NumPy arrays (which make up most sklearn models) and is faster and more efficient than standard pickle.",
          },
        ],
        challenge: {
          title: "Save and Load a Model",
          description:
            "Train a `RandomForestClassifier(n_estimators=10, random_state=0)` on `load_iris`. Save it to a `BytesIO` buffer with `joblib.dump`. Load it back with `joblib.load`. Print test accuracy from both the original and loaded model.",
          starterCode: `import joblib, io
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

# Train, save to buffer, load, print both scores

`,
          solutionCode: `import joblib, io
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)

model = RandomForestClassifier(n_estimators=10, random_state=0)
model.fit(X_train, y_train)

buf = io.BytesIO()
joblib.dump(model, buf)
buf.seek(0)
loaded = joblib.load(buf)

print("Original accuracy:", model.score(X_test, y_test).round(4))
print("Loaded accuracy:  ", loaded.score(X_test, y_test).round(4))`,
          tests: [
            { id: 1, label: "Uses joblib.dump", keywords: ["joblib.dump"] },
            { id: 2, label: "Uses joblib.load", keywords: ["joblib.load"] },
            { id: 3, label: "Prints both scores", keywords: [{ pattern: "\\.score\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-43",
        title: "Flask API for ML",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "To deploy an ML model for others to use, you wrap it in a **REST API** using **Flask** or **FastAPI**. The API receives a JSON request with input features, runs the model, and returns a JSON prediction.",
          },
          {
            type: "text",
            content:
              "A minimal ML API has: a `/predict` endpoint that accepts POST requests with feature data, loads the saved model, runs `.predict()`, and returns the result as JSON.",
          },
          {
            type: "diagram",
            title: "ML API architecture",
            nodes: [
              {
                id: "client",
                label: "Client (app/user)",
                color: "#0369a1",
                items: ["POST /predict", "JSON: {features: [...]}", "Gets back: {prediction: X}"],
              },
              {
                id: "api",
                label: "Flask API",
                color: "#0891b2",
                items: ["Receive request", "Load model", "Return JSON"],
              },
              {
                id: "model",
                label: "Saved model",
                color: "#0ea5e9",
                items: ["model.pkl", "Pipeline with scaler", ".predict(X)"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Flask API structure (conceptual)",
            content: `# Full Flask app structure — install flask to deploy
# pip install flask

# app.py
# from flask import Flask, request, jsonify
# import joblib, numpy as np
#
# app = Flask(__name__)
# model = joblib.load('pipeline.pkl')
#
# @app.route('/predict', methods=['POST'])
# def predict():
#     data = request.get_json()
#     X = np.array(data['features']).reshape(1, -1)
#     prediction = model.predict(X)[0]
#     probability = model.predict_proba(X)[0].max()
#     return jsonify({'prediction': int(prediction),
#                     'confidence': round(float(probability), 4)})
#
# if __name__ == '__main__':
#     app.run(debug=True)

# Simulating the prediction function
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris

X, y = load_iris(return_X_y=True)
model = RandomForestClassifier(n_estimators=50, random_state=42).fit(X, y)

def predict_api(features):
    X = np.array(features).reshape(1, -1)
    prediction = model.predict(X)[0]
    probability = model.predict_proba(X)[0].max()
    return {"prediction": int(prediction), "confidence": round(float(probability), 4)}

result = predict_api([5.1, 3.5, 1.4, 0.2])
print("API response:", result)`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "**FastAPI** is the modern alternative to Flask for ML APIs — it is faster, auto-generates docs, and has built-in data validation with Pydantic.",
          },
          {
            type: "quiz",
            question: "What HTTP method does an ML prediction endpoint typically use?",
            options: ["GET", "POST", "PUT", "DELETE"],
            answer: 1,
            explanation:
              "POST is used for prediction endpoints because you send data (features) in the request body — GET is for retrieving existing resources, not sending complex input data.",
          },
          {
            type: "quiz",
            question: "What format does a Flask ML API typically return predictions in?",
            options: ["CSV", "XML", "JSON", "Plain text"],
            answer: 2,
            explanation:
              "JSON (JavaScript Object Notation) is the standard format for REST APIs — it is lightweight, human-readable, and supported by all programming languages.",
          },
        ],
        challenge: {
          title: "Prediction Function",
          description:
            "Train `RandomForestClassifier(n_estimators=50, random_state=42)` on `load_iris`. Write a function `predict_api(features)` that takes a list of 4 features, runs `.predict()` and `.predict_proba()`, and returns a dict `{'prediction': int, 'confidence': float}`. Test it with `[5.1, 3.5, 1.4, 0.2]`.",
          starterCode: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
import numpy as np

X, y = load_iris(return_X_y=True)
model = RandomForestClassifier(n_estimators=50, random_state=42).fit(X, y)

def predict_api(features):
    # Return {'prediction': int, 'confidence': float}
    pass

result = predict_api([5.1, 3.5, 1.4, 0.2])
print(result)`,
          solutionCode: `from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
import numpy as np

X, y = load_iris(return_X_y=True)
model = RandomForestClassifier(n_estimators=50, random_state=42).fit(X, y)

def predict_api(features):
    X_in = np.array(features).reshape(1, -1)
    prediction = model.predict(X_in)[0]
    confidence = model.predict_proba(X_in)[0].max()
    return {'prediction': int(prediction), 'confidence': round(float(confidence), 4)}

result = predict_api([5.1, 3.5, 1.4, 0.2])
print(result)`,
          tests: [
            { id: 1, label: "Defines predict_api", keywords: [{ pattern: "def\\s+predict_api\\s*\\(" }] },
            { id: 2, label: "Returns dict with prediction", keywords: ["'prediction'", "prediction"] },
            { id: 3, label: "Returns confidence", keywords: ["'confidence'", "confidence"] },
            { id: 4, label: "Prints result", keywords: [{ pattern: "print\\s*\\(" }] },
          ],
        },
      },

      {
        id: "aiml-44",
        title: "The Full AI/ML Pipeline",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "You have now learned the complete AI/ML stack: data preparation, preprocessing, classical ML, deep learning, NLP, generative AI, and deployment. This final lesson ties everything together as a **production ML pipeline**.",
          },
          {
            type: "text",
            content:
              "A production pipeline follows: **Data ingestion** → **Preprocessing** → **Feature engineering** → **Model selection & tuning** → **Evaluation** → **Deployment** → **Monitoring**. Each step is repeatable, testable, and automated.",
          },
          {
            type: "diagram",
            title: "Production ML pipeline",
            nodes: [
              {
                id: "data",
                label: "Data",
                color: "#0369a1",
                items: ["Ingest & validate", "Feature engineering", "Train/test split"],
              },
              {
                id: "model",
                label: "Model",
                color: "#0891b2",
                items: ["Choose algorithm", "Cross-validate", "Hyperparameter tune"],
              },
              {
                id: "deploy",
                label: "Deploy & Monitor",
                color: "#0ea5e9",
                items: ["Save pipeline", "REST API", "Track performance drift"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Complete end-to-end pipeline",
            content: `import joblib, io
import numpy as np
from sklearn.datasets import load_breast_cancer
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.metrics import classification_report

# 1. Load data
X, y = load_breast_cancer(return_X_y=True)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 2. Build pipeline
pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', GradientBoostingClassifier(n_estimators=100, learning_rate=0.1, random_state=42))
])

# 3. Cross-validate
cv_scores = cross_val_score(pipe, X_train, y_train, cv=5)
print(f"CV accuracy: {cv_scores.mean():.4f} ± {cv_scores.std():.4f}")

# 4. Train final model
pipe.fit(X_train, y_train)

# 5. Evaluate
print("\\nTest classification report:")
print(classification_report(y_test, pipe.predict(X_test)))

# 6. Save
buf = io.BytesIO()
joblib.dump(pipe, buf)
print("Pipeline saved:", buf.tell(), "bytes")`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "**MLflow** and **Weights & Biases** are popular experiment tracking tools. They log metrics, parameters, and model artifacts for every experiment — essential for team ML projects.",
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "The best ML engineers spend 80% of their time on data quality and feature engineering — not on choosing models. Clean data + simple model almost always beats dirty data + complex model.",
          },
          {
            type: "quiz",
            question: "What is model drift?",
            options: [
              "The model's weights change after deployment",
              "Real-world data distribution shifts, making the model's performance degrade over time",
              "The model trains on too many epochs",
              "The API endpoint stops responding",
            ],
            answer: 1,
            explanation:
              "Model drift occurs when the distribution of production data changes from the training data — causing the model's accuracy to decline. Monitoring and retraining are required.",
          },
          {
            type: "quiz",
            question: "What is the correct order of a production ML pipeline?",
            options: [
              "Deploy → Train → Evaluate → Collect data",
              "Collect data → Preprocess → Train → Evaluate → Deploy → Monitor",
              "Train → Collect data → Deploy → Evaluate",
              "Evaluate → Train → Preprocess → Deploy",
            ],
            answer: 1,
            explanation:
              "The standard pipeline is: collect & prepare data → preprocess & engineer features → train model → evaluate rigorously → deploy → monitor in production.",
          },
        ],
        challenge: {
          title: "End-to-End Pipeline",
          description:
            "Build a complete pipeline on `load_wine`: (1) Split 80/20 with `random_state=42`, (2) Create Pipeline with `StandardScaler` + `GradientBoostingClassifier(n_estimators=50, random_state=42)`, (3) Run 5-fold CV and print mean score, (4) Fit on train, print test accuracy, (5) Save to `BytesIO` and print buffer size.",
          starterCode: `import joblib, io
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import GradientBoostingClassifier

X, y = load_wine(return_X_y=True)

# 1. Split
# 2. Build pipeline
# 3. Cross-validate (print mean)
# 4. Fit + print test accuracy
# 5. Save to BytesIO + print size

`,
          solutionCode: `import joblib, io
from sklearn.datasets import load_wine
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import GradientBoostingClassifier

X, y = load_wine(return_X_y=True)

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('clf', GradientBoostingClassifier(n_estimators=50, random_state=42))
])

cv = cross_val_score(pipe, X_train, y_train, cv=5)
print(f"CV mean: {cv.mean():.4f}")

pipe.fit(X_train, y_train)
print(f"Test accuracy: {pipe.score(X_test, y_test):.4f}")

buf = io.BytesIO()
joblib.dump(pipe, buf)
print(f"Saved: {buf.tell()} bytes")`,
          tests: [
            { id: 1, label: "Builds Pipeline", keywords: ["Pipeline"] },
            { id: 2, label: "Runs cross_val_score", keywords: ["cross_val_score"] },
            { id: 3, label: "Prints test accuracy", keywords: [{ pattern: "\\.score\\s*\\(" }] },
            { id: 4, label: "Saves with joblib", keywords: ["joblib.dump"] },
          ],
        },
      },
    ],
  },
];

export const AI_LESSONS = applyLessonVideoLinks(
  AI_CHAPTERS.flatMap((ch) =>
    ch.lessons.map((l) => ({
      ...l,
      chapterId: ch.id,
      chapterTitle: ch.title,
      chapterColor: ch.color,
    })),
  ),
  AI_VIDEO_LINKS,
);

export const AI_TOTAL_XP = AI_LESSONS.reduce((s, l) => s + l.xp, 0);
