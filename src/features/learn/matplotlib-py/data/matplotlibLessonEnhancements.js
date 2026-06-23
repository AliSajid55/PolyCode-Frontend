/** Per-lesson objectives, scenarios, and warning callouts merged into curriculum at build time. */

export const LESSON_ENHANCEMENTS = {
  "plt-0": {
    objectives: [
      "Import `matplotlib.pyplot` as `plt`",
      "Create and display a basic line plot",
      "Explain what Matplotlib is used for in data work",
    ],
    scenario:
      "You have three monthly revenue numbers and want stakeholders to see growth at a glance — a line plot is the natural first step.",
    prepend: [
      {
        type: "callout",
        variant: "warning",
        content:
          "Always use `import matplotlib.pyplot as plt`. Mixing aliases (`pyplot`, `plot`) in one notebook confuses teammates and breaks copy-paste examples.",
      },
    ],
  },
  "plt-0b": {
    objectives: [
      "State three reasons teams visualize data",
      "Match a business question to an exploration vs reporting plot",
      "Add title and axis labels when communicating trends",
    ],
    scenario:
      "Marketing shares daily website visits in a spreadsheet. Before building a model, you plot the series to spot a sudden spike on Tuesday.",
  },
  "plt-1": {
    objectives: [
      "Describe the Figure → Axes → Artist hierarchy",
      "Create plots with `fig, ax = plt.subplots()`",
      "Know when the object-oriented API is preferred over `plt.plot()` shortcuts",
    ],
    scenario:
      "You need two charts in one report with separate titles — the OO API gives you `fig` and `ax` handles to control each panel cleanly.",
    prepend: [
      {
        type: "callout",
        variant: "warning",
        content:
          "A **Figure** is the whole canvas; an **Axes** is one plotting area. Do not confuse `ax` (one panel) with `axis` (the x/y dimension).",
      },
    ],
  },
  "plt-1b": {
    objectives: [
      "Build multi-series line plots with `label=`",
      "Compare trends on one chart with a legend",
      "Choose markers when data points are sparse",
    ],
    scenario:
      "Product tracks free vs paid users each week. Two lines on one chart make it easy to compare growth rates side by side.",
  },
  "plt-2": {
    objectives: [
      "Use scatter plots for correlation between two numeric variables",
      "Use bar charts for category comparisons",
      "Pick the chart that matches your data types",
    ],
    scenario:
      "HR compares average salary by department (categories → bar) while analytics checks whether years of experience correlates with pay (scatter).",
    prepend: [
      {
        type: "callout",
        variant: "warning",
        content:
          "Do not use bar charts for continuous time series when order and slope matter — use a line chart instead.",
      },
    ],
  },
  "plt-3": {
    objectives: [
      "Plot distributions with `plt.hist()` and the `bins` parameter",
      "Use pie charts only for small part-to-whole comparisons",
      "Interpret histogram shape (skew, spread, peaks)",
    ],
    scenario:
      "Support team plots response-time histograms to see whether most tickets are resolved quickly or if a long tail exists.",
  },
  "plt-3b": {
    objectives: [
      "Select line, bar, scatter, hist, or pie based on the question",
      "Avoid chart types that distort the message",
      "Justify chart choice in one sentence before coding",
    ],
    scenario:
      "Your manager asks for 'a chart of sales.' You clarify: trend over time, compare regions, or show distribution of order sizes?",
    prepend: [
      {
        type: "callout",
        variant: "tip",
        content:
          "Ask: **What do I want the reader to conclude?** That single question picks the chart faster than guessing.",
      },
    ],
  },
  "plt-4": {
    objectives: [
      "Add title, x-label, and y-label to every presentation chart",
      "Use `label=` and `plt.legend()` for multiple series",
      "Place legends where they do not cover data",
    ],
    scenario:
      "You share a chart in Slack without context. Labels and a descriptive title let it stand alone without a voice-over.",
    prepend: [
      {
        type: "callout",
        variant: "warning",
        content:
          "`plt.legend()` only shows entries for lines that have a `label=` argument. Forgetting `label=` is the #1 empty-legend bug.",
      },
    ],
  },
  "plt-5": {
    objectives: [
      "Control color, linestyle, and marker style",
      "Use format strings like `'ro--'` for quick styling",
      "Keep styles consistent across a report",
    ],
    scenario:
      "Brand guidelines require specific colors for forecast vs actual series — explicit `color=` and `linestyle=` keep charts on-brand.",
  },
  "plt-5b": {
    objectives: [
      "Turn grids on/off for readability",
      "Set axis limits intentionally with `xlim` / `ylim`",
      "Avoid axis ranges that exaggerate or hide change",
    ],
    scenario:
      "A chart from 0 to 100 makes a 2-point change look flat; zooming to 90–100 exaggerates noise. Choose limits that tell the truth.",
    prepend: [
      {
        type: "callout",
        variant: "warning",
        content:
          "Truncating the y-axis can mislead executives. If you zoom, say so in the title or annotation.",
      },
    ],
  },
  "plt-6": {
    objectives: [
      "Build multi-panel figures with `plt.subplots()`",
      "Index into `axs` for each subplot",
      "Use `tight_layout()` to prevent overlap",
    ],
    scenario:
      "An analyst dashboard shows revenue trend, top products, and error distribution — three subplots in one figure export.",
  },
  "plt-7": {
    objectives: [
      "Set figure size with `figsize=(width, height)` in inches",
      "Choose `dpi` for screen vs print quality",
      "Understand trade-offs between clarity and file size",
    ],
    scenario:
      "Slides need 1280px-wide images; a report PDF needs 300 dpi. `figsize` and `dpi` control both.",
  },
  "plt-7b": {
    objectives: [
      "Fix overlapping labels with `tight_layout()`",
      "Know when to adjust margins manually",
      "Keep multi-panel charts readable on small screens",
    ],
    scenario:
      "Your subplot titles collide after adding long axis labels — `tight_layout()` is the first fix before tweaking margins by hand.",
    prepend: [
      {
        type: "callout",
        variant: "tip",
        content:
          "Call `plt.tight_layout()` **after** all titles and labels are set, right before `plt.show()` or `savefig()`.",
      },
    ],
  },
  "plt-8": {
    objectives: [
      "Plot smooth functions with `np.linspace` and NumPy ufuncs",
      "Pass NumPy arrays directly to Matplotlib",
      "Visualize math without manual list building",
    ],
    scenario:
      "Engineering plots a sine wave sampled at 200 points to verify a signal-processing formula before hardware tests.",
  },
  "plt-8b": {
    objectives: [
      "Plot Pandas Series and DataFrame columns",
      "Use `.plot()` on DataFrames for quick EDA",
      "Combine Pandas prep with Matplotlib customization",
    ],
    scenario:
      "You group sales by region in Pandas, then customize colors and titles with Matplotlib for a stakeholder deck.",
    prepend: [
      {
        type: "callout",
        variant: "info",
        content:
          "What students need to understand: `df.plot()` is fast for exploration; drop to `ax.plot(df['x'], df['y'])` when you need fine control.",
      },
    ],
  },
  "plt-8c": {
    objectives: [
      "Plot ordered time series without gaps",
      "Format date axes when needed",
      "Spot trend, seasonality, and anomalies over time",
    ],
    scenario:
      "Operations monitors server latency hourly. A time-series line reveals a outage window that averages hide.",
  },
  "plt-9": {
    objectives: [
      "Highlight points with `plt.annotate()`",
      "Separate label text (`xytext`) from the data point (`xy`)",
      "Add context for spikes and thresholds",
    ],
    scenario:
      "Finance marks the quarter when a policy change landed directly on the revenue chart so executives connect cause and effect.",
  },
  "plt-9b": {
    objectives: [
      "Map numeric values to colors with colormaps",
      "Add a colorbar legend for heat-style plots",
      "Pick sequential vs diverging colormaps appropriately",
    ],
    scenario:
      "A heatmap of city temperatures uses a sequential colormap; profit vs loss by region might use diverging red–blue around zero.",
  },
  "plt-9c": {
    objectives: [
      "Show uncertainty with error bars",
      "Use `fill_between` for bands and ranges",
      "Avoid implying false precision",
    ],
    scenario:
      "Experiment results include mean and standard deviation — error bars communicate that the effect might vary run to run.",
  },
  "plt-9d": {
    objectives: [
      "Compare distributions with box plots",
      "See median, quartiles, and outliers at a glance",
      "Choose box vs violin plots for group comparisons",
    ],
    scenario:
      "QA compares bug-fix duration across teams. Box plots show which team has a higher median and more extreme outliers.",
  },
  "plt-10": {
    objectives: [
      "Apply style sheets with `plt.style.use()`",
      "Export figures with `savefig()` and sensible `dpi`",
      "Save before `show()` to avoid blank files",
    ],
    scenario:
      "You finalize a chart for a blog post: ggplot style for consistency, then `savefig('chart.png', dpi=200, bbox_inches='tight')`.",
    prepend: [
      {
        type: "callout",
        variant: "warning",
        content:
          "Call `plt.savefig()` **before** `plt.show()`. Many backends clear the figure after show, producing empty PNG files.",
      },
    ],
  },
  "plt-10b": {
    objectives: [
      "Know when Seaborn saves time vs raw Matplotlib",
      "Close figures in loops with `plt.close(fig)`",
      "Keep batch report scripts memory-safe",
    ],
    scenario:
      "A nightly job generates 50 regional charts. Closing each figure prevents a memory leak that crashes the pipeline on day three.",
  },
  "plt-11": {
    objectives: [
      "Run a publication checklist before sharing externally",
      "Verify titles, units, legends, and honest scales",
      "Export at resolution required by the medium",
    ],
    scenario:
      "A paper reviewer rejects a figure with missing axis units — your checklist catches that before submission.",
  },
  "plt-12": {
    objectives: [
      "Combine line, bar, and histogram panels in one figure",
      "Answer one analytical question with complementary views",
      "Apply layout and labeling standards from prior lessons",
    ],
    scenario:
      "You present a mini product dashboard: growth trend, category ranking, and user-age distribution — one story, three panels.",
  },
  "plt-13": {
    objectives: [
      "Pick the right chart type from a question checklist",
      "Look up common `plt` and `ax` commands quickly",
      "Reuse starter templates for new projects",
    ],
    scenario:
      "You start a new notebook and keep this lesson open as a reference while exploring an unfamiliar dataset.",
  },
};

export function applyLessonEnhancements(lesson) {
  const meta = LESSON_ENHANCEMENTS[lesson.id];
  if (!meta) return lesson;

  const prefix = [];
  if (meta.objectives?.length) {
    prefix.push({ type: "objectives", items: meta.objectives });
  }
  if (meta.scenario) {
    prefix.push({ type: "scenario", content: meta.scenario });
  }
  if (meta.prepend?.length) {
    prefix.push(...meta.prepend);
  }

  return {
    ...lesson,
    theory: [...prefix, ...lesson.theory, ...(meta.append || [])],
  };
}

export function applyChapterEnhancements(chapters) {
  return chapters.map((chapter) => ({
    ...chapter,
    lessons: chapter.lessons.map(applyLessonEnhancements),
  }));
}
