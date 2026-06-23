import {
  Boxes,
  FileText,
  Grid3x3,
  Layers3,
  Play,
  Brain,
  Table2,
  Terminal,
  Presentation,
  BrainCircuit,
} from "lucide-react";

export function languageKey(value = "") {
  return value.toLowerCase().replace(/\s+/g, "");
}

export const generalCourses = [
  {
    title: "Core Documentation Path",
    tag: "Docs",
    icon: FileText,
    description:
      "Read curated guides, examples, syntax notes, and reference material.",
    href: "/hub",
  },
  {
    title: "Practice Playground",
    tag: "Hands-on",
    icon: Play,
    description:
      "Experiment with code, run snippets, and test ideas as you learn.",
    href: "/playground",
  },
  {
    title: "Daily Challenge",
    tag: "Routine",
    icon: Brain,
    description: "Build a steady habit with small problems and feedback.",
    href: "/daily-challenge",
  },
];

/** Interactive courses shown on /language/:language (language-specific only). */
export const languageCourses = {
  cpp: [
    {
      title: "C++ Fundamentals",
      tag: "Interactive Course",
      icon: Terminal,
      description:
        "Beginner to advanced C++: variables, control flow, functions, arrays, pointers, structs, OOP preview, STL, and capstone projects.",
      href: "/learn/cpp-fundamentals",
      accent: "#f34b7d",
    },
    {
      title: "OOPs C++",
      tag: "Interactive Course",
      icon: Boxes,
      description:
        "Classes, constructors, inheritance, polymorphism, design principles, and real coding challenges.",
      href: "/learn/oops-cpp",
      accent: "#ffe566",
    },
    {
      title: "Pointers C++",
      tag: "Memory Course",
      icon: Layers3,
      description:
        "Addresses, dereferencing, nullptr, arrays, 2D arrays, smart pointers, callbacks, and safety.",
      href: "/learn/pointers-cpp",
      accent: "#00d4ff",
    },
  ],
  "c++": [
    {
      title: "C++ Fundamentals",
      tag: "Interactive Course",
      icon: Terminal,
      description:
        "Beginner to advanced C++: variables, control flow, functions, arrays, pointers, structs, OOP preview, STL, and capstone projects.",
      href: "/learn/cpp-fundamentals",
      accent: "#f34b7d",
    },
    {
      title: "OOPs C++",
      tag: "Interactive Course",
      icon: Boxes,
      description:
        "Classes, constructors, inheritance, polymorphism, design principles, and real coding challenges.",
      href: "/learn/oops-cpp",
      accent: "#ffe566",
    },
    {
      title: "Pointers C++",
      tag: "Memory Course",
      icon: Layers3,
      description:
        "Addresses, dereferencing, nullptr, arrays, 2D arrays, smart pointers, callbacks, and safety.",
      href: "/learn/pointers-cpp",
      accent: "#00d4ff",
    },
  ],
  python: [
    {
      title: "NumPy · py",
      tag: "Data Course",
      icon: Grid3x3,
      description:
        "ndarray basics, shape, dtype, vector math, and hands-on Python challenges with NumPy.",
      href: "/learn/numpy-py",
      accent: "#4dabdc",
    },
    {
      title: "Pandas · py",
      tag: "Data Course",
      icon: Table2,
      description:
        "Series, DataFrames, filtering, cleaning, groupby, merges, and CSV workflows with Pandas.",
      href: "/learn/pandas-py",
      accent: "#059669",
    },
    {
      tag: "Data Visualization",
      title: "Matplotlib · py",
      description:
        "Beginner → Pro: line plots to publication dashboards — 8 chapters, objectives per lesson, cheat sheet, and hands-on challenges.",
      href: "/learn/matplotlib-py",
      accent: "#239120",
      icon: Presentation,
    },
    {
      title: "AI/ML · py",
      tag: "Data Course",
      icon: BrainCircuit,
      description:
        "Foundations of AI/ML: Machine Learning, Deep Learning, Neural Networks, Model Evaluation, and Deployment workflows with Python.",
      href: "/learn/ai_ml-py",
      accent: "#dfbe00",
    },
  ],
  javascript: [
    {
      title: "JavaScript Fundamentals",
      tag: "Interactive Course",
      icon: Grid3x3,
      description:
        "Variables, logic, functions, arrays, and objects with friendly theory and hands-on JS challenges.",
      href: "/learn/js-fundamentals",
      accent: "#f59e0b",
    },
  ],
  php: [
    {
      title: "PHP Fundamentals",
      tag: "Interactive Course",
      icon: Terminal,
      description:
        "Modern server-side PHP: strict types, control flow, match expressions, associative arrays, superglobals, OOP constructor property promotion, and custom REST API endpoints.",
      href: "/learn/php-fundamentals",
      accent: "#777bb4",
    },
  ],
  csharp: [
    {
      title: "C# Fundamentals",
      tag: "Interactive Course",
      icon: Terminal,
      description:
        "Master Object-Oriented syntax, variables, switch patterns, collections, and class encapsulation templates locally.",
      href: "/learn/c-sharp-fundamentals",
      accent: "#179c24",
    },
  ],
  "c#": [
    {
      title: "C# Fundamentals",
      tag: "Interactive Course",
      icon: Terminal,
      description:
        "Master Object-Oriented syntax, variables, switch patterns, collections, and class encapsulation templates locally.",
      href: "/learn/c-sharp-fundamentals",
      accent: "#179c24",
    },
  ],
  ruby: [
    {
      title: "Ruby Fundamentals",
      tag: "Interactive Course",
      icon: Terminal,
      description:
        "Foundational Ruby Programming: expressive syntax, block-based iteration, dynamic typing, core object-oriented principles, modules and mixins, error handling, and file I/O operations.",
      href: "/learn/ruby-fundamentals",
      accent: "#701516",
    }
  ]
};

/** Ordered stacks for navbar grouping (one row per language, sub-courses inside). */
export const courseStackGroups = [
  {
    id: "cpp",
    label: "C++",
    accent: "#659ad2",
    languagePath: "/language/C++",
  },
  {
    id: "python",
    label: "Python",
    accent: "#3776ab",
    languagePath: "/language/Python",
  },
  {
    id: "javascript",
    label: "JavaScript",
    accent: "#f7df1e",
    languagePath: "/language/JavaScript",
  },
  {
    id: "csharp",
    label: "C#",
    accent: "#179c24",
    languagePath: "/language/C%23",
  },
  {
    id: "php",
    label: "PHP",
    accent: "#777bb4",
    languagePath: "/language/PHP",
  },
  {
    id: "ruby",
    label: "Ruby",
    accent: "#701516",
    languagePath: "/language/Ruby",
  },
];

/** Navbar learn links per language (mirrors languageCourses). */
export const learnNavByLanguage = {
  cpp: [
    { label: "Basics", to: "/learn/cpp-fundamentals" },
    { label: "OOPs", to: "/learn/oops-cpp" },
    { label: "Pointers", to: "/learn/pointers-cpp" },
  ],
  "c++": [
    { label: "Basics", to: "/learn/cpp-fundamentals" },
    { label: "OOPs", to: "/learn/oops-cpp" },
    { label: "Pointers", to: "/learn/pointers-cpp" },
  ],
  python: [
    { label: "NumPy", to: "/learn/numpy-py" },
    { label: "Pandas", to: "/learn/pandas-py" },
    { label: "Matplotlib", to: "/learn/matplotlib-py" },
    { label: "AI/ML", to: "/learn/ai_ml-py" },
  ],
  javascript: [{ label: "JS Basics", to: "/learn/js-fundamentals" }],
  php: [{ label: "PHP Basics", to: "/learn/php-fundamentals" }],
  ruby: [{label: "Ruby Basics", to: "/learn/ruby-fundamentals"}]
};

/** Infer stack from an active /learn/* route when language is not set. */
export function inferLanguageFromLearnPath(pathname = "") {
  if (
    pathname.startsWith("/learn/cpp-fundamentals") ||
    pathname.startsWith("/learn/oops-cpp") ||
    pathname.startsWith("/learn/pointers-cpp")
  ) {
    return "cpp";
  }
  if (
    pathname.startsWith("/learn/numpy-py") ||
    pathname.startsWith("/learn/pandas-py") ||
    pathname.startsWith("/learn/matplotlib-py") ||
    pathname.startsWith("/learn/ai_ml-py")
  ) {
    return "python";
  }
  if (pathname.startsWith("/learn/js-fundamentals")) {
    return "javascript";
  }
  if (pathname.startsWith("/learn/php-fundamentals")) {
    return "php";
  }
  if (pathname.startsWith("/learn/ruby-fundamentals")){
    return "ruby";
  }
  return null;
}

export function getLearnNavLinks(selectedLanguage, pathname = "") {
  const key =
    languageKey(selectedLanguage || "") ||
    inferLanguageFromLearnPath(pathname) ||
    "";
  return learnNavByLanguage[key] || [];
}

export function getLanguageLandingCourses(languageKeyValue) {
  return [...(languageCourses[languageKeyValue] || []), ...generalCourses];
}