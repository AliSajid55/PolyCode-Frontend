// PolyCode — Matplotlib (Python) full curriculum
// Beginner → Pro · YouTube links: edit matplotlibVideoLinks.js (not this file).

import { applyLessonVideoLinks } from "../../shared/applyLessonVideoLinks";
import { MATPLOTLIB_VIDEO_LINKS } from "./matplotlibVideoLinks";
import { applyChapterEnhancements } from "./matplotlibLessonEnhancements";

const RAW_MATPLOTLIB_CHAPTERS = [
  {
    id: "foundations",
    title: "Foundations",
    icon: "🧱",
    color: "#2563eb",
    lessons: [
      {
        id: "plt-0",
        title: "What is Matplotlib?",
        xp: 10,
        theory: [
          {
            type: "text",
            content:
              "**Matplotlib** is Python's core plotting library. It turns lists, arrays, and table columns into visual stories that people can understand quickly.",
          },
          {
            type: "text",
            content:
              "Most students start with `matplotlib.pyplot`, imported as `plt`. This interface is easy for quick experiments and still powerful for production workflows.",
          },
          {
            type: "diagram",
            title: "Visualization pipeline",
            nodes: [
              {
                id: "input",
                label: "Data",
                color: "#2563eb",
                items: ["Lists", "NumPy arrays", "Pandas columns"],
              },
              {
                id: "plot",
                label: "Matplotlib API",
                color: "#3b82f6",
                items: ["plt.plot()", "plt.scatter()", "plt.bar()"],
              },
              {
                id: "output",
                label: "Communication",
                color: "#60a5fa",
                items: ["Insights", "Decisions", "Reports"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "First line plot",
            content: `import matplotlib.pyplot as plt

x = [1, 2, 3]
y = [2, 4, 6]
plt.plot(x, y)
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: Matplotlib is not only about drawing; it is a communication tool for making quantitative reasoning visible.",
          },
          {
            type: "quiz",
            question:
              "Which alias is the standard import for `matplotlib.pyplot`?",
            options: ["mp", "plot", "plt", "py"],
            answer: 2,
            explanation:
              "The accepted convention in Python tutorials, notebooks, and production code is `import matplotlib.pyplot as plt`.",
          },
        ],
        challenge: {
          title: "Create your first plot",
          description:
            "Import `matplotlib.pyplot` as `plt`, plot `[1,2,3]` against `[2,4,6]`, and display the figure.",
          starterCode: `# Write your Matplotlib code below

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [2, 4, 6])
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Imports pyplot as plt",
              keywords: [
                { pattern: "import\\s+matplotlib\\.pyplot\\s+as\\s+plt" },
              ],
            },
            {
              id: 2,
              label: "Calls plt.plot",
              keywords: [{ pattern: "plt\\.plot\\s*\\(" }],
            },
            {
              id: 3,
              label: "Calls plt.show",
              keywords: [{ pattern: "plt\\.show\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "plt-0b",
        title: "Why Visualize Data?",
        xp: 12,
        theory: [
          {
            type: "text",
            content:
              "Visualization reveals patterns that are hard to catch in raw tables: trends, outliers, seasonality, and class imbalance.",
          },
          {
            type: "text",
            content:
              "In data science projects, plots support three phases: exploration, explanation, and monitoring. Good visuals reduce ambiguity in each phase.",
          },
          {
            type: "diagram",
            title: "Where plots help",
            nodes: [
              {
                id: "eda",
                label: "Exploration",
                color: "#1d4ed8",
                items: ["Find shape", "Check assumptions"],
              },
              {
                id: "story",
                label: "Communication",
                color: "#2563eb",
                items: ["Present findings", "Support decisions"],
              },
              {
                id: "ops",
                label: "Operations",
                color: "#3b82f6",
                items: ["Track drift", "Watch KPIs"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Visualizing trend vs noise",
            content: `import matplotlib.pyplot as plt

days = [1, 2, 3, 4, 5, 6, 7]
visits = [120, 126, 130, 142, 145, 160, 168]
plt.plot(days, visits, marker="o")
plt.title("Weekly traffic trend")
plt.xlabel("Day")
plt.ylabel("Visits")
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: choose a plot because it answers a question, not because it looks pretty.",
          },
          {
            type: "quiz",
            question: "What is the strongest reason to visualize data?",
            options: [
              "To make notebooks colorful",
              "To reduce file size",
              "To expose structure and support decisions",
              "To avoid using statistics",
            ],
            answer: 2,
            explanation:
              "Visualization makes patterns and anomalies visible, helping people reason about data and make better decisions.",
          },
        ],
        challenge: {
          title: "Show a trend line",
          description:
            "Plot `days=[1,2,3,4]` and `sales=[20,24,23,30]` with circle markers, then add title and axis labels.",
          starterCode: `import matplotlib.pyplot as plt

days = [1, 2, 3, 4]
sales = [20, 24, 23, 30]

`,
          solutionCode: `import matplotlib.pyplot as plt

days = [1, 2, 3, 4]
sales = [20, 24, 23, 30]
plt.plot(days, sales, marker="o")
plt.title("Sales trend")
plt.xlabel("Day")
plt.ylabel("Sales")
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses line plot",
              keywords: [{ pattern: "plt\\.plot\\s*\\(" }],
            },
            {
              id: 2,
              label: "Adds title",
              keywords: [{ pattern: "plt\\.title\\s*\\(" }],
            },
            {
              id: 3,
              label: "Adds x and y labels",
              keywords: [
                { pattern: "plt\\.xlabel\\s*\\(" },
                { pattern: "plt\\.ylabel\\s*\\(" },
              ],
            },
          ],
        },
      },
      {
        id: "plt-1",
        title: "Figures and Axes",
        xp: 12,
        theory: [
          {
            type: "text",
            content:
              "A **Figure** is the full canvas. An **Axes** object is one plotting area inside that figure. Most chart methods are called on Axes.",
          },
          {
            type: "text",
            content:
              "The object-oriented style (`fig, ax = plt.subplots()`) scales better than pure stateful plotting as your chart complexity grows.",
          },
          {
            type: "diagram",
            title: "Figure and Axes model",
            nodes: [
              {
                id: "fig",
                label: "Figure",
                color: "#2563eb",
                items: ["Canvas", "Contains Axes"],
              },
              {
                id: "ax",
                label: "Axes",
                color: "#3b82f6",
                items: ["Data space", "Labels, ticks, legend"],
              },
              {
                id: "artists",
                label: "Artists",
                color: "#60a5fa",
                items: ["Lines", "Bars", "Text"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "OO plotting style",
            content: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [1, 4, 9])
ax.set_title("Squares")
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: Figure/Axes vocabulary is essential for reading docs and solving real plotting tasks.",
          },
          {
            type: "quiz",
            question: "What does `plt.subplots()` return by default?",
            options: [
              "A single Figure only",
              "A single Axes only",
              "A tuple `(fig, ax)`",
              "A list of charts",
            ],
            answer: 2,
            explanation:
              "It returns both the Figure object and one Axes object, which you use to build the chart.",
          },
        ],
        challenge: {
          title: "Use the OO API",
          description:
            "Create `fig, ax = plt.subplots()`, plot `[1,2,3]` vs `[3,2,1]` with `ax.plot(...)`, and show.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [3, 2, 1])
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Creates figure and axes",
              keywords: [{ pattern: "plt\\.subplots\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses ax.plot",
              keywords: [{ pattern: "ax\\.plot\\s*\\(" }],
            },
            {
              id: 3,
              label: "Shows plot",
              keywords: [{ pattern: "plt\\.show\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "plt-1b",
        title: "Building Solid Line Plots",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "Line plots are best when x has natural order: time, sequence, or continuous variables. They are ideal for trend analysis.",
          },
          {
            type: "text",
            content:
              "Good line charts encode meaning with line shape, slope, and relative level. Add markers if exact points matter to the audience.",
          },
          {
            type: "code",
            lang: "python",
            label: "Two-series trend chart",
            content: `import matplotlib.pyplot as plt

months = [1, 2, 3, 4]
product_a = [10, 14, 16, 20]
product_b = [9, 12, 13, 19]

plt.plot(months, product_a, label="A", marker="o")
plt.plot(months, product_b, label="B", marker="s")
plt.legend()
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: avoid connecting unrelated categories with lines; use bars for purely categorical x-values.",
          },
          {
            type: "quiz",
            question: "When is a line chart most appropriate?",
            options: [
              "For unordered categories",
              "For ordered or continuous x-values",
              "Only for percentages",
              "Only for one data point",
            ],
            answer: 1,
            explanation:
              "Line charts communicate progression and trend, so they need meaningful ordering on the x-axis.",
          },
        ],
        challenge: {
          title: "Plot two lines",
          description:
            "Plot `x=[0,1,2]`, `y1=[1,2,3]`, `y2=[1,1,2]` with labels `A` and `B`, then show legend and chart.",
          starterCode: `import matplotlib.pyplot as plt

x = [0, 1, 2]
y1 = [1, 2, 3]
y2 = [1, 1, 2]

`,
          solutionCode: `import matplotlib.pyplot as plt

x = [0, 1, 2]
y1 = [1, 2, 3]
y2 = [1, 1, 2]
plt.plot(x, y1, label="A")
plt.plot(x, y2, label="B")
plt.legend()
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Creates two plot calls",
              keywords: [
                { pattern: "plt\\.plot\\s*\\(" },
                { pattern: "plt\\.plot\\s*\\(" },
              ],
            },
            {
              id: 2,
              label: "Uses labels and legend",
              keywords: [
                { pattern: "label\\s*=\\s*[\"']A[\"']" },
                { pattern: "label\\s*=\\s*[\"']B[\"']" },
                { pattern: "plt\\.legend\\s*\\(" },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "core-chart-types",
    title: "Core Chart Types",
    icon: "📊",
    color: "#0d9488",
    lessons: [
      {
        id: "plt-2",
        title: "Scatter and Bar Plots",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "Use **scatter plots** for relationships between two numeric variables and **bar plots** for comparing magnitudes across categories.",
          },
          {
            type: "text",
            content:
              "Chart choice should reflect the question: correlation and spread (scatter) vs rank and comparison (bar).",
          },
          {
            type: "diagram",
            title: "Scatter vs bar decision",
            nodes: [
              {
                id: "scatter",
                label: "Scatter",
                color: "#0f766e",
                items: ["x numeric", "y numeric", "Correlation check"],
              },
              {
                id: "bar",
                label: "Bar",
                color: "#0d9488",
                items: ["Category labels", "Magnitude comparison"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Simple scatter and bar",
            content: `import matplotlib.pyplot as plt

plt.scatter([1, 2, 3, 4], [10, 12, 11, 15])
plt.show()

plt.bar(["A", "B", "C"], [5, 8, 6])
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: do not use bars to fake continuity; if the x-axis is continuous, evaluate scatter or line first.",
          },
          {
            type: "quiz",
            question: "Which plot is best for checking correlation?",
            options: ["Bar", "Scatter", "Pie", "Histogram"],
            answer: 1,
            explanation:
              "Scatter plots preserve pairwise numeric coordinates, making relationships and outliers easier to inspect.",
          },
        ],
        challenge: {
          title: "Build a bar chart",
          description:
            "Create a bar chart for categories `['X','Y']` and values `[12,18]`, then display it.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.bar(["X", "Y"], [12, 18])
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses plt.bar",
              keywords: [{ pattern: "plt\\.bar\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses plt.show",
              keywords: [{ pattern: "plt\\.show\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "plt-3",
        title: "Histograms and Pie Charts",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "A histogram groups one numeric variable into bins so you can inspect distribution shape, skew, and spread.",
          },
          {
            type: "text",
            content:
              "Pie charts show parts of a whole, but they become hard to compare with many categories or close values.",
          },
          {
            type: "code",
            lang: "python",
            label: "Histogram with bins",
            content: `import matplotlib.pyplot as plt

scores = [55, 60, 62, 70, 71, 75, 80, 88, 90, 95]
plt.hist(scores, bins=5)
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: histogram bins are modeling choices; changing `bins` can reveal or hide structure.",
          },
          {
            type: "quiz",
            question: "What does `bins=` control in `plt.hist()`?",
            options: [
              "Legend location",
              "Number of grouped intervals",
              "Marker type",
              "Chart font",
            ],
            answer: 1,
            explanation:
              "The bins value sets how many intervals the data range is divided into.",
          },
        ],
        challenge: {
          title: "Plot a histogram",
          description:
            "Use `data=[1,2,2,3,3,3,4,4,5]` and create a histogram with `bins=5`, then show it.",
          starterCode: `import matplotlib.pyplot as plt

data = [1, 2, 2, 3, 3, 3, 4, 4, 5]

`,
          solutionCode: `import matplotlib.pyplot as plt

data = [1, 2, 2, 3, 3, 3, 4, 4, 5]
plt.hist(data, bins=5)
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses plt.hist",
              keywords: [{ pattern: "plt\\.hist\\s*\\(" }],
            },
            {
              id: 2,
              label: "Sets bins",
              keywords: [{ pattern: "bins\\s*=\\s*5" }],
            },
          ],
        },
      },
      {
        id: "plt-3b",
        title: "Choosing the Right Chart Type",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Strong analysts choose charts by analytical intent: trend, comparison, distribution, composition, or uncertainty.",
          },
          {
            type: "text",
            content:
              "Wrong chart choice leads to wrong interpretation. Always identify variable types and audience needs before plotting.",
          },
          {
            type: "diagram",
            title: "Intent-to-chart mapping",
            nodes: [
              {
                id: "trend",
                label: "Trend",
                color: "#14b8a6",
                items: ["Line", "Area"],
              },
              {
                id: "compare",
                label: "Comparison",
                color: "#0d9488",
                items: ["Bar", "Dot plot"],
              },
              {
                id: "dist",
                label: "Distribution",
                color: "#0f766e",
                items: ["Histogram", "Box plot"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Compare category totals",
            content: `import matplotlib.pyplot as plt

models = ["A", "B", "C"]
accuracy = [0.82, 0.86, 0.84]
plt.bar(models, accuracy)
plt.ylim(0.7, 0.9)
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: first write the question in one sentence, then choose the smallest chart that answers it clearly.",
          },
          {
            type: "quiz",
            question:
              "You need to compare category totals. Which chart is usually the best first choice?",
            options: ["Histogram", "Bar chart", "Pie chart", "Contour plot"],
            answer: 1,
            explanation:
              "Bar charts encode magnitude with length, which is easier to compare than angles or areas.",
          },
        ],
        challenge: {
          title: "Choose and build comparison chart",
          description:
            "Use a bar chart to compare `['A','B','C']` with values `[3,7,5]`, set a y-label, and show the plot.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.bar(["A", "B", "C"], [3, 7, 5])
plt.ylabel("Value")
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses bar chart",
              keywords: [{ pattern: "plt\\.bar\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses y label",
              keywords: [{ pattern: "plt\\.ylabel\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "readable-charts",
    title: "Readable Charts",
    icon: "📝",
    color: "#7c3aed",
    lessons: [
      {
        id: "plt-4",
        title: "Titles, Labels, and Legends",
        xp: 14,
        theory: [
          {
            type: "text",
            content:
              "A chart is incomplete without metadata. Titles define context; axis labels define units; legends define series identity.",
          },
          {
            type: "text",
            content:
              "When multiple lines are present, each plotting call needs `label=` so `legend()` can map visual marks to meaning.",
          },
          {
            type: "code",
            lang: "python",
            label: "Readable multi-line chart",
            content: `import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [2, 4, 6], label="Model A")
plt.plot([1, 2, 3], [1, 3, 5], label="Model B")
plt.title("Model comparison")
plt.xlabel("Epoch")
plt.ylabel("Score")
plt.legend()
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: if another person cannot explain your axes in 10 seconds, your chart is not finished.",
          },
          {
            type: "quiz",
            question: "Which argument enables legend entries?",
            options: ["title=", "label=", "color=", "alpha="],
            answer: 1,
            explanation:
              "Legend text comes from `label=` values attached to plotted series.",
          },
        ],
        challenge: {
          title: "Add labels and legend",
          description:
            "Plot `[1,2,3]` vs `[2,4,6]` with `label='Double'`, add title `'My Chart'`, then legend and show.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [2, 4, 6], label="Double")
plt.title("My Chart")
plt.legend()
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses label argument",
              keywords: [{ pattern: "label\\s*=" }],
            },
            {
              id: 2,
              label: "Adds title",
              keywords: [{ pattern: "plt\\.title\\s*\\(" }],
            },
            {
              id: 3,
              label: "Shows legend",
              keywords: [{ pattern: "plt\\.legend\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "plt-5",
        title: "Colors, Styles, and Markers",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Color, line style, and markers can improve readability when used consistently and with clear meaning.",
          },
          {
            type: "text",
            content:
              "Avoid styling noise. Use visual differences to encode real distinctions (e.g., baseline vs experiment), not decoration.",
          },
          {
            type: "diagram",
            title: "Style components",
            nodes: [
              {
                id: "c",
                label: "Color",
                color: "#7c3aed",
                items: ["Category identity", "Contrast"],
              },
              {
                id: "ls",
                label: "Line style",
                color: "#8b5cf6",
                items: ["Solid", "Dashed", "Dotted"],
              },
              {
                id: "mk",
                label: "Marker",
                color: "#a78bfa",
                items: ["Point emphasis", "Sparse data"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Styled line",
            content: `import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [3, 1, 2], color="purple", linestyle=":", marker="s")
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: style should reduce cognitive load; if viewers need a legend to decode every line, simplify.",
          },
          {
            type: "quiz",
            question:
              "Which parameter controls symbols drawn at each data point?",
            options: ["linestyle", "linewidth", "marker", "alpha"],
            answer: 2,
            explanation:
              "`marker=` chooses the point symbol such as `o`, `s`, or `^`.",
          },
        ],
        challenge: {
          title: "Style a line plot",
          description:
            "Plot `[1,2,3]` vs `[3,1,2]` using `color='purple'`, `linestyle=':'`, and `marker='s'`.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [3, 1, 2], color="purple", linestyle=":", marker="s")
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses color",
              keywords: [{ pattern: "color\\s*=" }],
            },
            {
              id: 2,
              label: "Uses linestyle",
              keywords: [{ pattern: "linestyle\\s*=" }],
            },
            {
              id: 3,
              label: "Uses marker",
              keywords: [{ pattern: "marker\\s*=" }],
            },
          ],
        },
      },
      {
        id: "plt-5b",
        title: "Grids, Ticks, and Limits",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Readable axes make a chart trustworthy. Grids aid estimate reading, ticks control reference points, and limits frame the visible domain.",
          },
          {
            type: "text",
            content:
              "Axis limits can clarify focus, but misuse can mislead. Always choose ranges that preserve honest interpretation.",
          },
          {
            type: "code",
            lang: "python",
            label: "Improve axis readability",
            content: `import matplotlib.pyplot as plt

plt.plot([0, 1, 2, 3], [1, 3, 2, 5])
plt.grid(True, linestyle="--", alpha=0.4)
plt.xlim(0, 3)
plt.ylim(0, 6)
plt.xticks([0, 1, 2, 3])
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: axis design is part of statistical ethics; avoid clipped ranges that exaggerate small differences.",
          },
          {
            type: "quiz",
            question: "Which function sets y-axis range?",
            options: ["plt.yticks()", "plt.ylim()", "plt.grid()", "plt.legend()"],
            answer: 1,
            explanation:
              "`plt.ylim(min, max)` controls the visible y-axis interval.",
          },
        ],
        challenge: {
          title: "Control ticks and limits",
          description:
            "Plot `[0,1,2]` vs `[2,1,3]`, enable grid, set x-limits from 0 to 2, and show the chart.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.plot([0, 1, 2], [2, 1, 3])
plt.grid(True)
plt.xlim(0, 2)
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses grid",
              keywords: [{ pattern: "plt\\.grid\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses xlim",
              keywords: [{ pattern: "plt\\.xlim\\s*\\(" }],
            },
            {
              id: 3,
              label: "Displays figure",
              keywords: [{ pattern: "plt\\.show\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "layouts-composition",
    title: "Layouts & Composition",
    icon: "🧩",
    color: "#0891b2",
    lessons: [
      {
        id: "plt-6",
        title: "Multiple Subplots",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "`plt.subplots(rows, cols)` creates a structured grid so related views can be compared in one figure.",
          },
          {
            type: "text",
            content:
              "Subplots improve analytical integrity because the viewer can compare scales and patterns side by side.",
          },
          {
            type: "diagram",
            title: "Grid composition",
            nodes: [
              {
                id: "layout",
                label: "Figure",
                color: "#0891b2",
                items: ["1x2", "2x2", "3x1 layouts"],
              },
              {
                id: "axes-array",
                label: "Axes array",
                color: "#0ea5e9",
                items: ["axs[0]", "axs[1]", "axs[r, c]"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "1x2 dashboard",
            content: `import matplotlib.pyplot as plt

fig, axs = plt.subplots(1, 2)
axs[0].plot([1, 2, 3], [1, 2, 3])
axs[0].set_title("Line")
axs[1].bar(["A", "B"], [3, 5])
axs[1].set_title("Bar")
plt.tight_layout()
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: subplot structure is the foundation for dashboards, reports, and model comparison panels.",
          },
          {
            type: "quiz",
            question: "How many Axes are created by `plt.subplots(2, 2)`?",
            options: ["2", "3", "4", "6"],
            answer: 2,
            explanation:
              "A 2 by 2 layout creates four plotting areas.",
          },
        ],
        challenge: {
          title: "Build a subplot grid",
          description:
            "Create `fig, axs = plt.subplots(1, 2)`, draw a line on `axs[0]` and bars on `axs[1]`, then show.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

fig, axs = plt.subplots(1, 2)
axs[0].plot([1, 2, 3], [1, 2, 3])
axs[1].bar(["A", "B"], [3, 5])
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Creates 1x2 subplots",
              keywords: [{ pattern: "subplots\\s*\\(\\s*1\\s*,\\s*2\\s*\\)" }],
            },
            {
              id: 2,
              label: "Plots on first axes",
              keywords: [{ pattern: "axs\\s*\\[\\s*0\\s*\\]\\.plot\\s*\\(" }],
            },
            {
              id: 3,
              label: "Plots on second axes",
              keywords: [{ pattern: "axs\\s*\\[\\s*1\\s*\\]\\.bar\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "plt-7",
        title: "Figure Size and DPI",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Use `figsize=(w, h)` to control physical chart dimensions and `dpi` to control rendering resolution.",
          },
          {
            type: "text",
            content:
              "Figure sizing is not cosmetic: it determines readability of labels, legends, and dense annotations.",
          },
          {
            type: "code",
            lang: "python",
            label: "Wider, sharper figure",
            content: `import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(8, 4), dpi=120)
ax.plot([1, 2, 3], [3, 1, 4])
ax.set_title("Sized figure")
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: small figure + long labels = unreadable chart; set size early, not after problems appear.",
          },
          {
            type: "quiz",
            question: "Which parameter controls image sharpness?",
            options: ["figsize", "dpi", "alpha", "linewidth"],
            answer: 1,
            explanation:
              "`dpi` (dots per inch) controls output resolution and affects clarity in exports.",
          },
        ],
        challenge: {
          title: "Set figure dimensions",
          description:
            "Create `fig, ax = plt.subplots(figsize=(6,3), dpi=100)`, plot one line, and show it.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(6, 3), dpi=100)
ax.plot([1, 2, 3], [1, 2, 3])
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses figsize",
              keywords: [{ pattern: "figsize\\s*=\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses dpi",
              keywords: [{ pattern: "dpi\\s*=" }],
            },
          ],
        },
      },
      {
        id: "plt-7b",
        title: "Tight Layout and Spacing Control",
        xp: 16,
        theory: [
          {
            type: "text",
            content:
              "Crowded labels and overlapping titles reduce trust. `plt.tight_layout()` auto-adjusts spacing to prevent collisions.",
          },
          {
            type: "text",
            content:
              "For advanced control, `fig.subplots_adjust(...)` lets you tune margins and gaps between panels.",
          },
          {
            type: "code",
            lang: "python",
            label: "Avoid overlap",
            content: `import matplotlib.pyplot as plt

fig, axs = plt.subplots(2, 1, figsize=(6, 5))
axs[0].plot([1, 2, 3], [1, 4, 9])
axs[0].set_title("Top panel")
axs[1].plot([1, 2, 3], [9, 4, 1])
axs[1].set_title("Bottom panel")
plt.tight_layout()
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: spacing is part of chart correctness because clipped labels hide information.",
          },
          {
            type: "quiz",
            question:
              "Which function is the fastest way to reduce subplot overlap?",
            options: [
              "plt.subplots_adjust() only",
              "plt.tight_layout()",
              "plt.legend()",
              "plt.grid()",
            ],
            answer: 1,
            explanation:
              "`plt.tight_layout()` is a quick automatic fix for overlapping subplot elements.",
          },
        ],
        challenge: {
          title: "Fix subplot spacing",
          description:
            "Create a `2x1` subplot figure, plot one line in each axes, call `plt.tight_layout()`, then show.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

fig, axs = plt.subplots(2, 1)
axs[0].plot([1, 2, 3], [1, 2, 3])
axs[1].plot([1, 2, 3], [3, 2, 1])
plt.tight_layout()
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Creates 2x1 subplots",
              keywords: [{ pattern: "subplots\\s*\\(\\s*2\\s*,\\s*1\\s*\\)" }],
            },
            {
              id: 2,
              label: "Calls tight_layout",
              keywords: [{ pattern: "tight_layout\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "real-world-data",
    title: "Real-World Data",
    icon: "📦",
    color: "#16a34a",
    lessons: [
      {
        id: "plt-8",
        title: "NumPy Math Plots",
        xp: 17,
        theory: [
          {
            type: "text",
            content:
              "Real science and ML plots often start with NumPy arrays. Matplotlib consumes arrays directly, which keeps code fast and concise.",
          },
          {
            type: "text",
            content:
              "`np.linspace` is a standard tool for generating smooth x grids for mathematical curves.",
          },
          {
            type: "code",
            lang: "python",
            label: "Sine and cosine curves",
            content: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 2 * np.pi, 200)
plt.plot(x, np.sin(x), label="sin")
plt.plot(x, np.cos(x), label="cos")
plt.legend()
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: arrays let you express whole computations at once, reducing loops and increasing clarity.",
          },
          {
            type: "quiz",
            question: "What does `np.linspace(0, 10, 50)` return?",
            options: [
              "50 random integers",
              "50 equally spaced values",
              "A 10x50 matrix",
              "One scalar",
            ],
            answer: 1,
            explanation:
              "It creates a one-dimensional array of 50 evenly spaced numbers between 0 and 10.",
          },
        ],
        challenge: {
          title: "Plot a sine wave",
          description:
            "Use `np.linspace(0,10,50)` and `np.sin(x)`, then plot and show.",
          starterCode: `import numpy as np
import matplotlib.pyplot as plt

`,
          solutionCode: `import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(0, 10, 50)
y = np.sin(x)
plt.plot(x, y)
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses np.linspace",
              keywords: [{ pattern: "np\\.linspace\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses np.sin",
              keywords: [{ pattern: "np\\.sin\\s*\\(" }],
            },
            {
              id: 3,
              label: "Plots result",
              keywords: [{ pattern: "plt\\.plot\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "plt-8b",
        title: "Plotting Pandas DataFrames",
        xp: 18,
        theory: [
          {
            type: "text",
            content:
              "Pandas integrates tightly with Matplotlib. You can plot using DataFrame columns directly or use `df.plot()` convenience methods.",
          },
          {
            type: "text",
            content:
              "For interview and production readiness, know both approaches: explicit Matplotlib (`plt.plot(df['x'], df['y'])`) and `df.plot(...)`.",
          },
          {
            type: "code",
            lang: "python",
            label: "DataFrame to line chart",
            content: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({
    "day": [1, 2, 3, 4],
    "revenue": [100, 120, 115, 140]
})

plt.plot(df["day"], df["revenue"], marker="o")
plt.xlabel("Day")
plt.ylabel("Revenue")
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: always verify data types and missing values before plotting DataFrame columns.",
          },
          {
            type: "quiz",
            question:
              "Which expression accesses a DataFrame column named `revenue`?",
            options: ["df(revenue)", "df['revenue']", "df.revenue()", "df->revenue"],
            answer: 1,
            explanation:
              "Bracket notation `df['revenue']` is the reliable, explicit column access style.",
          },
        ],
        challenge: {
          title: "Plot DataFrame columns",
          description:
            "Create a DataFrame with `x=[1,2,3]` and `y=[3,5,4]`, then plot `x` vs `y` using Matplotlib.",
          starterCode: `import pandas as pd
import matplotlib.pyplot as plt

`,
          solutionCode: `import pandas as pd
import matplotlib.pyplot as plt

df = pd.DataFrame({"x": [1, 2, 3], "y": [3, 5, 4]})
plt.plot(df["x"], df["y"])
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Creates DataFrame",
              keywords: [{ pattern: "pd\\.DataFrame\\s*\\(" }],
            },
            {
              id: 2,
              label: "Uses DataFrame columns in plot",
              keywords: [
                { pattern: "df\\s*\\[\\s*[\"']x[\"']\\s*\\]" },
                { pattern: "df\\s*\\[\\s*[\"']y[\"']\\s*\\]" },
              ],
            },
          ],
        },
      },
      {
        id: "plt-8c",
        title: "Time Series Basics",
        xp: 18,
        theory: [
          {
            type: "text",
            content:
              "Time series charts show dynamics over time: trends, seasonal cycles, and structural changes.",
          },
          {
            type: "text",
            content:
              "With date-like x-values, preserving chronological order is critical. Sorting and clean parsing are mandatory preprocessing steps.",
          },
          {
            type: "diagram",
            title: "Time series interpretation",
            nodes: [
              {
                id: "trend",
                label: "Trend",
                color: "#16a34a",
                items: ["Long-term direction"],
              },
              {
                id: "season",
                label: "Seasonality",
                color: "#22c55e",
                items: ["Repeating cycles"],
              },
              {
                id: "noise",
                label: "Noise",
                color: "#4ade80",
                items: ["Short-term variation"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Simple time index plot",
            content: `import matplotlib.pyplot as plt

days = [1, 2, 3, 4, 5, 6]
temp = [22, 23, 25, 24, 26, 27]
plt.plot(days, temp, marker="o")
plt.title("Daily temperature")
plt.xlabel("Day")
plt.ylabel("Temp")
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: if timestamps are out of order, your chart can suggest trends that do not exist.",
          },
          {
            type: "quiz",
            question:
              "What should you verify first before plotting a time series?",
            options: [
              "Marker color",
              "Chronological ordering of time values",
              "Pie slice count",
              "Font family",
            ],
            answer: 1,
            explanation:
              "Chronological order is essential; otherwise the line path does not represent true progression.",
          },
        ],
        challenge: {
          title: "Plot a basic time sequence",
          description:
            "Plot `t=[1,2,3,4]` and `v=[10,11,13,12]` with markers and axis labels.",
          starterCode: `import matplotlib.pyplot as plt

t = [1, 2, 3, 4]
v = [10, 11, 13, 12]

`,
          solutionCode: `import matplotlib.pyplot as plt

t = [1, 2, 3, 4]
v = [10, 11, 13, 12]
plt.plot(t, v, marker="o")
plt.xlabel("Time")
plt.ylabel("Value")
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses line plot",
              keywords: [{ pattern: "plt\\.plot\\s*\\(" }],
            },
            {
              id: 2,
              label: "Adds markers",
              keywords: [{ pattern: "marker\\s*=" }],
            },
            {
              id: 3,
              label: "Adds labels",
              keywords: [
                { pattern: "plt\\.xlabel\\s*\\(" },
                { pattern: "plt\\.ylabel\\s*\\(" },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    id: "advanced-visuals",
    title: "Advanced Visuals",
    icon: "🚀",
    color: "#dc2626",
    lessons: [
      {
        id: "plt-9",
        title: "Annotations and Text",
        xp: 18,
        theory: [
          {
            type: "text",
            content:
              "Annotations make charts explanatory by highlighting events, thresholds, peaks, and anomalies directly on the figure.",
          },
          {
            type: "text",
            content:
              "Use `annotate` for arrows and callouts, and `text` for fixed labels. Place text intentionally to avoid overlap with data marks.",
          },
          {
            type: "code",
            lang: "python",
            label: "Annotate key point",
            content: `import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
y = [2, 5, 9, 4]
plt.plot(x, y)
plt.annotate("Peak", xy=(3, 9), xytext=(3.4, 9.5),
             arrowprops={"arrowstyle": "->"})
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: annotation is narrative structure; it guides the viewer to the exact evidence for your claim.",
          },
          {
            type: "quiz",
            question: "In `annotate`, which argument points to the target data point?",
            options: ["xytext", "xy", "textcoords", "fontsize"],
            answer: 1,
            explanation:
              "`xy` is the target coordinate; `xytext` is where the annotation label is drawn.",
          },
        ],
        challenge: {
          title: "Annotate a maximum point",
          description:
            "Plot `[1,2,3]` vs `[1,4,2]` and annotate `(2,4)` with text `'Max'`.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [1, 4, 2])
plt.annotate("Max", xy=(2, 4), xytext=(2.2, 4.3))
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses annotate",
              keywords: [{ pattern: "plt\\.annotate\\s*\\(" }],
            },
            {
              id: 2,
              label: "Includes xy target",
              keywords: [{ pattern: "xy\\s*=\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "plt-9b",
        title: "Colormaps and Heat-Like Encodings",
        xp: 19,
        theory: [
          {
            type: "text",
            content:
              "Colormaps map numeric values to colors. They are useful when a third variable should be encoded in color intensity.",
          },
          {
            type: "text",
            content:
              "Choose perceptually sensible colormaps (`viridis`, `plasma`) for quantitative data; avoid rainbow maps for precision tasks.",
          },
          {
            type: "code",
            lang: "python",
            label: "Colored scatter by value",
            content: `import matplotlib.pyplot as plt

x = [1, 2, 3, 4, 5]
y = [2, 1, 4, 3, 5]
z = [10, 30, 20, 40, 35]
plt.scatter(x, y, c=z, cmap="viridis")
plt.colorbar()
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: color is quantitative only when mapped with a legend or colorbar; otherwise values are ambiguous.",
          },
          {
            type: "quiz",
            question: "Which argument sets the colormap?",
            options: ["c=", "cmap=", "color=", "palette="],
            answer: 1,
            explanation:
              "`cmap=` selects the mapping from numeric values to colors.",
          },
        ],
        challenge: {
          title: "Build a colormap scatter",
          description:
            "Create a scatter plot with `c=[1,2,3]`, set `cmap='viridis'`, and show a colorbar.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.scatter([1, 2, 3], [3, 1, 2], c=[1, 2, 3], cmap="viridis")
plt.colorbar()
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses scatter",
              keywords: [{ pattern: "plt\\.scatter\\s*\\(" }],
            },
            {
              id: 2,
              label: "Sets cmap",
              keywords: [{ pattern: "cmap\\s*=\\s*[\"']viridis[\"']" }],
            },
            {
              id: 3,
              label: "Adds colorbar",
              keywords: [{ pattern: "plt\\.colorbar\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "plt-9c",
        title: "Error Bars and Uncertainty",
        xp: 19,
        theory: [
          {
            type: "text",
            content:
              "Point estimates hide variability. Error bars communicate uncertainty, confidence intervals, or measurement spread.",
          },
          {
            type: "text",
            content:
              "Use `plt.errorbar` when stakeholders need to compare means while acknowledging reliability and sample variance.",
          },
          {
            type: "code",
            lang: "python",
            label: "Mean with uncertainty",
            content: `import matplotlib.pyplot as plt

x = [1, 2, 3, 4]
means = [10, 12, 11, 13]
errors = [0.5, 0.8, 0.4, 0.7]
plt.errorbar(x, means, yerr=errors, fmt="o-", capsize=4)
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: uncertainty is part of the data, not optional decoration.",
          },
          {
            type: "quiz",
            question:
              "Which argument in `plt.errorbar` sets vertical error magnitudes?",
            options: ["xerr", "yerr", "capsize", "fmt"],
            answer: 1,
            explanation:
              "`yerr` defines the vertical error amount for each point.",
          },
        ],
        challenge: {
          title: "Add uncertainty bars",
          description:
            "Use `plt.errorbar` for `x=[1,2,3]`, `y=[4,5,6]`, `yerr=[0.2,0.3,0.1]`, then show.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.errorbar([1, 2, 3], [4, 5, 6], yerr=[0.2, 0.3, 0.1], fmt="o-")
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses errorbar",
              keywords: [{ pattern: "plt\\.errorbar\\s*\\(" }],
            },
            {
              id: 2,
              label: "Sets yerr",
              keywords: [{ pattern: "yerr\\s*=" }],
            },
          ],
        },
      },
      {
        id: "plt-9d",
        title: "Box and Violin Plots",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "Box plots summarize distribution via quartiles and outliers. Violin plots add density shape, revealing multimodality.",
          },
          {
            type: "text",
            content:
              "These plots are powerful for comparing model metrics, experiment groups, or repeated measurements.",
          },
          {
            type: "diagram",
            title: "Distribution comparison tools",
            nodes: [
              {
                id: "box",
                label: "Box plot",
                color: "#dc2626",
                items: ["Median", "IQR", "Outliers"],
              },
              {
                id: "violin",
                label: "Violin plot",
                color: "#ef4444",
                items: ["Density shape", "Symmetry clues"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Box plot example",
            content: `import matplotlib.pyplot as plt

group_a = [7, 8, 8, 9, 10, 11]
group_b = [5, 6, 7, 9, 12, 13]
plt.boxplot([group_a, group_b], labels=["A", "B"])
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: summary plots prevent over-trusting averages by exposing spread and outliers.",
          },
          {
            type: "quiz",
            question: "Which plot shows quartiles and median explicitly?",
            options: ["Pie", "Scatter", "Box plot", "Heatmap"],
            answer: 2,
            explanation:
              "A box plot explicitly encodes quartiles, median, and potential outliers.",
          },
        ],
        challenge: {
          title: "Create a box plot",
          description:
            "Create a box plot for two groups: `[1,2,3,4]` and `[2,3,4,5]`, then show.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.boxplot([[1, 2, 3, 4], [2, 3, 4, 5]])
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses boxplot",
              keywords: [{ pattern: "plt\\.boxplot\\s*\\(" }],
            },
            {
              id: 2,
              label: "Displays output",
              keywords: [{ pattern: "plt\\.show\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "pro-workflows",
    title: "Pro Workflows",
    icon: "⚙️",
    color: "#ea580c",
    lessons: [
      {
        id: "plt-10",
        title: "Saving Figures and Styles",
        xp: 20,
        theory: [
          {
            type: "text",
            content:
              "Professional plotting includes reproducible style and deterministic export settings (`dpi`, `bbox_inches`, filenames).",
          },
          {
            type: "text",
            content:
              "Built-in style sheets provide fast visual consistency across notebooks and reports.",
          },
          {
            type: "code",
            lang: "python",
            label: "Style and save",
            content: `import matplotlib.pyplot as plt

plt.style.use("ggplot")
plt.plot([1, 2, 3], [2, 3, 1])
plt.savefig("out.png", dpi=200, bbox_inches="tight")
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: call `savefig` before `show` to avoid backend-specific blank output issues.",
          },
          {
            type: "quiz",
            question: "Which function exports the current figure to a file?",
            options: ["plt.export()", "plt.savefig()", "plt.publish()", "plt.dump()"],
            answer: 1,
            explanation:
              "`plt.savefig(...)` writes the current figure to disk in formats like PNG, SVG, and PDF.",
          },
        ],
        challenge: {
          title: "Save a styled chart",
          description:
            "Apply style `ggplot`, plot one line, call `plt.savefig('out.png')`, then show.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.style.use("ggplot")
plt.plot([1, 2, 3], [2, 3, 1])
plt.savefig("out.png")
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses style sheet",
              keywords: [{ pattern: "plt\\.style\\.use\\s*\\(" }],
            },
            {
              id: 2,
              label: "Calls savefig",
              keywords: [{ pattern: "plt\\.savefig\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "plt-10b",
        title: "Seaborn Overview and Batch Plot Cleanup",
        xp: 22,
        theory: [
          {
            type: "text",
            content:
              "Seaborn builds on Matplotlib and adds statistical defaults. You can still mix Seaborn charts with Matplotlib customization.",
          },
          {
            type: "text",
            content:
              "When generating many figures in loops, close each figure (`plt.close(fig)`) to prevent memory growth.",
          },
          {
            type: "diagram",
            title: "Pro plotting stack",
            nodes: [
              {
                id: "sns",
                label: "Seaborn",
                color: "#f97316",
                items: ["High-level statistical plots"],
              },
              {
                id: "mpl",
                label: "Matplotlib",
                color: "#ea580c",
                items: ["Fine-grained control", "Export options"],
              },
              {
                id: "close",
                label: "Batch safety",
                color: "#fb923c",
                items: ["plt.close(fig)", "Memory hygiene"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Batch-safe plotting loop",
            content: `import matplotlib.pyplot as plt

for i in range(3):
    fig, ax = plt.subplots()
    ax.plot([1, 2, 3], [i, i + 1, i + 2])
    fig.savefig(f"plot_{i}.png")
    plt.close(fig)`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: production plotting is about repeatability, not one-off notebook screenshots.",
          },
          {
            type: "quiz",
            question:
              "In a loop that creates many figures, what prevents memory buildup?",
            options: ["plt.legend()", "plt.close(fig)", "plt.grid(True)", "plt.ylim()"],
            answer: 1,
            explanation:
              "Closing each figure releases resources and keeps long-running scripts stable.",
          },
        ],
        challenge: {
          title: "Close figures in loop",
          description:
            "Write a loop over `range(2)` that creates a figure, plots data, and closes with `plt.close(fig)`.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

for i in range(2):
    fig, ax = plt.subplots()
    ax.plot([1, 2, 3], [i, i + 1, i + 2])
    plt.close(fig)`,
          tests: [
            {
              id: 1,
              label: "Uses for loop",
              keywords: [{ pattern: "for\\s+\\w+\\s+in\\s+range\\s*\\(" }],
            },
            {
              id: 2,
              label: "Creates figure",
              keywords: [{ pattern: "plt\\.subplots\\s*\\(" }],
            },
            {
              id: 3,
              label: "Closes figure",
              keywords: [{ pattern: "plt\\.close\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
  {
    id: "publication-mastery",
    title: "Publication & Mastery",
    icon: "🏁",
    color: "#9333ea",
    lessons: [
      {
        id: "plt-11",
        title: "Publication-Ready Chart Checklist",
        xp: 23,
        theory: [
          {
            type: "text",
            content:
              "Publication-ready figures are reproducible, readable in grayscale, and interpretable without verbal explanation.",
          },
          {
            type: "text",
            content:
              "Before shipping, verify title clarity, unit labels, font consistency, legend necessity, and export resolution requirements.",
          },
          {
            type: "diagram",
            title: "Publication checklist",
            nodes: [
              {
                id: "clarity",
                label: "Clarity",
                color: "#9333ea",
                items: ["Informative title", "Axes with units"],
              },
              {
                id: "integrity",
                label: "Integrity",
                color: "#a855f7",
                items: ["Honest scales", "Visible uncertainty"],
              },
              {
                id: "delivery",
                label: "Delivery",
                color: "#c084fc",
                items: ["Correct dpi", "Consistent style"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Checklist-oriented chart",
            content: `import matplotlib.pyplot as plt

plt.figure(figsize=(6, 4), dpi=150)
plt.plot([1, 2, 3, 4], [10, 11, 13, 15], marker="o", label="Metric")
plt.title("Quarterly metric trend")
plt.xlabel("Quarter")
plt.ylabel("Value")
plt.grid(True, alpha=0.3)
plt.legend()
plt.tight_layout()
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: publication quality is a process checklist, not an artistic mood.",
          },
          {
            type: "quiz",
            question: "Which item is most critical for reproducible exports?",
            options: [
              "Changing random colors each run",
              "Explicit figure size and dpi",
              "Removing labels",
              "Avoiding legends always",
            ],
            answer: 1,
            explanation:
              "Fixed sizing and resolution ensure the same chart renders consistently across environments.",
          },
        ],
        challenge: {
          title: "Apply publication checklist basics",
          description:
            "Create a line chart with title, x/y labels, grid, legend, and `plt.tight_layout()`.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

plt.plot([1, 2, 3], [2, 3, 5], label="Series")
plt.title("Ready chart")
plt.xlabel("X")
plt.ylabel("Y")
plt.grid(True)
plt.legend()
plt.tight_layout()
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Has title and labels",
              keywords: [
                { pattern: "plt\\.title\\s*\\(" },
                { pattern: "plt\\.xlabel\\s*\\(" },
                { pattern: "plt\\.ylabel\\s*\\(" },
              ],
            },
            {
              id: 2,
              label: "Adds layout and legend",
              keywords: [
                { pattern: "plt\\.tight_layout\\s*\\(" },
                { pattern: "plt\\.legend\\s*\\(" },
              ],
            },
          ],
        },
      },
      {
        id: "plt-12",
        title: "Capstone: Mini Dashboard",
        xp: 25,
        theory: [
          {
            type: "text",
            content:
              "A mini dashboard combines multiple views to answer one business question from several analytical angles.",
          },
          {
            type: "text",
            content:
              "Capstone-quality work means coherent layout, consistent styling, and purposeful chart selection in each panel.",
          },
          {
            type: "diagram",
            title: "Mini dashboard composition",
            nodes: [
              {
                id: "panel1",
                label: "Trend panel",
                color: "#9333ea",
                items: ["Line chart", "Temporal behavior"],
              },
              {
                id: "panel2",
                label: "Comparison panel",
                color: "#a855f7",
                items: ["Bar chart", "Category ranking"],
              },
              {
                id: "panel3",
                label: "Distribution panel",
                color: "#c084fc",
                items: ["Histogram", "Spread and shape"],
              },
            ],
          },
          {
            type: "code",
            lang: "python",
            label: "Three-panel dashboard",
            content: `import matplotlib.pyplot as plt

fig, axs = plt.subplots(1, 3, figsize=(12, 3))
axs[0].plot([1, 2, 3, 4], [10, 12, 11, 14])
axs[0].set_title("Trend")
axs[1].bar(["A", "B", "C"], [4, 7, 5])
axs[1].set_title("Compare")
axs[2].hist([1, 2, 2, 3, 3, 4], bins=4)
axs[2].set_title("Distribution")
plt.tight_layout()
plt.show()`,
          },
          {
            type: "callout",
            variant: "info",
            content:
              "What students need to understand: capstone dashboards should answer one core question with complementary visual evidence.",
          },
          {
            type: "quiz",
            question: "What is the main goal of a dashboard capstone?",
            options: [
              "Use every chart type possible",
              "Display one question with complementary views",
              "Maximize code length",
              "Avoid subplots",
            ],
            answer: 1,
            explanation:
              "A dashboard is successful when its panels work together to answer a focused analytical question.",
          },
        ],
        challenge: {
          title: "Build a 1x3 mini dashboard",
          description:
            "Create `fig, axs = plt.subplots(1,3)`, place a line chart, bar chart, and histogram in the three axes, then tighten layout and show.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

fig, axs = plt.subplots(1, 3)
axs[0].plot([1, 2, 3], [1, 2, 3])
axs[1].bar(["A", "B"], [2, 4])
axs[2].hist([1, 1, 2, 3], bins=3)
plt.tight_layout()
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Creates 1x3 subplots",
              keywords: [{ pattern: "subplots\\s*\\(\\s*1\\s*,\\s*3\\s*\\)" }],
            },
            {
              id: 2,
              label: "Uses line, bar, and hist",
              keywords: [
                { pattern: "axs\\s*\\[\\s*0\\s*\\]\\.plot\\s*\\(" },
                { pattern: "axs\\s*\\[\\s*1\\s*\\]\\.bar\\s*\\(" },
                { pattern: "axs\\s*\\[\\s*2\\s*\\]\\.hist\\s*\\(" },
              ],
            },
            {
              id: 3,
              label: "Uses tight layout",
              keywords: [{ pattern: "tight_layout\\s*\\(" }],
            },
          ],
        },
      },
      {
        id: "plt-13",
        title: "Matplotlib Cheat Sheet",
        xp: 15,
        theory: [
          {
            type: "text",
            content:
              "Keep this lesson bookmarked. It condenses the **questions, chart types, and commands** you use most often when moving from raw data to a clear figure.",
          },
          {
            type: "table",
            title: "Which chart answers your question?",
            columns: ["Your question", "Start with", "Typical call"],
            rows: [
              {
                label: "Trend over time",
                values: ["Line chart", "plt.plot() / ax.plot()"],
              },
              {
                label: "Compare categories",
                values: ["Bar chart", "plt.bar() / ax.bar()"],
              },
              {
                label: "Relationship between two numbers",
                values: ["Scatter plot", "plt.scatter()"],
              },
              {
                label: "Distribution of one variable",
                values: ["Histogram", "plt.hist(bins=...)"],
              },
              {
                label: "Parts of a whole (few categories)",
                values: ["Pie chart", "plt.pie() — use sparingly"],
              },
              {
                label: "Compare group distributions",
                values: ["Box plot", "plt.boxplot()"],
              },
            ],
            showTotals: false,
            footnote:
              "When unsure, write your question as a sentence first — the chart type usually follows naturally.",
          },
          {
            type: "table",
            title: "API quick reference",
            columns: ["Task", "Pyplot shortcut", "Object-oriented"],
            rows: [
              {
                label: "Create figure",
                values: ["plt.figure()", "fig, ax = plt.subplots()"],
              },
              {
                label: "Labels & title",
                values: ["plt.xlabel / ylabel / title", "ax.set_xlabel / set_title"],
              },
              {
                label: "Legend",
                values: ["plt.legend()", "ax.legend()"],
              },
              {
                label: "Multi-panel layout",
                values: ["plt.subplots(r, c)", "Index axs[i] or axs[r,c]"],
              },
              {
                label: "Fix overlap",
                values: ["plt.tight_layout()", "fig.tight_layout()"],
              },
              {
                label: "Export",
                values: ["plt.savefig('out.png', dpi=200)", "fig.savefig(...)"],
              },
            ],
            showTotals: false,
          },
          {
            type: "code",
            lang: "python",
            label: "Starter template — copy for new charts",
            content: `import matplotlib.pyplot as plt

fig, ax = plt.subplots(figsize=(7, 4))
ax.plot([1, 2, 3], [2, 4, 3], marker="o", label="Series")
ax.set_title("Descriptive title with units")
ax.set_xlabel("X axis label")
ax.set_ylabel("Y axis label")
ax.grid(True, alpha=0.3)
ax.legend()
plt.tight_layout()
plt.show()`,
          },
          {
            type: "callout",
            variant: "tip",
            content:
              "Before every `plt.show()`, ask: **Does this chart answer one clear question without me explaining it aloud?** If not, add labels, title, or pick a different chart type.",
          },
          {
            type: "callout",
            variant: "warning",
            content:
              "Common gotchas: empty legend (missing `label=`), blank PNG (savefig after show), overlapping subplot text (forgot `tight_layout`), misleading y-axis (truncated without note).",
          },
          {
            type: "quiz",
            question: "You want to compare average score across five teams. What do you reach for first?",
            options: ["plt.hist()", "plt.bar()", "plt.pie()", "plt.scatter()"],
            answer: 1,
            explanation:
              "Bar charts compare discrete categories. Histograms show distribution of one variable; scatter needs two numeric variables.",
          },
        ],
        challenge: {
          title: "Use the template",
          description:
            "Using `fig, ax = plt.subplots()`, plot `[1,2,3]` vs `[3,1,2]`, set a title, both axis labels, and call `plt.tight_layout()` before show.",
          starterCode: `import matplotlib.pyplot as plt

`,
          solutionCode: `import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.plot([1, 2, 3], [3, 1, 2])
ax.set_title("Sample chart")
ax.set_xlabel("X")
ax.set_ylabel("Y")
plt.tight_layout()
plt.show()`,
          tests: [
            {
              id: 1,
              label: "Uses subplots OO API",
              keywords: [{ pattern: "plt\\.subplots\\s*\\(" }],
            },
            {
              id: 2,
              label: "Sets title and labels",
              keywords: [
                { pattern: "set_title\\s*\\(" },
                { pattern: "set_xlabel\\s*\\(" },
                { pattern: "set_ylabel\\s*\\(" },
              ],
            },
            {
              id: 3,
              label: "Uses tight_layout",
              keywords: [{ pattern: "tight_layout\\s*\\(" }],
            },
          ],
        },
      },
    ],
  },
];

export const MATPLOTLIB_CHAPTERS = applyChapterEnhancements(RAW_MATPLOTLIB_CHAPTERS);

export const MATPLOTLIB_LESSONS = applyLessonVideoLinks(
  MATPLOTLIB_CHAPTERS.flatMap((ch) =>
    ch.lessons.map((l) => ({
      ...l,
      chapterId: ch.id,
      chapterTitle: ch.title,
      chapterColor: ch.color,
    })),
  ),
  MATPLOTLIB_VIDEO_LINKS,
);

export const MATPLOTLIB_TOTAL_XP = MATPLOTLIB_LESSONS.reduce(
  (sum, lesson) => sum + lesson.xp,
  0,
);
