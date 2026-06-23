# AI/ML · py — Course Guide

## What is this course?

**AI/ML · py** teaches **Artificial Intelligence, Machine Learning, and Deep Learning** — from Python tools and classical ML algorithms to neural networks, Transformers, Generative AI, and MLOps deployment. Each lesson has theory, then a hands-on **Python challenge**.

**Live URL:** `/learn/ai_ml-py`

**Who it's for:** Learners who know Python basics and want to go from AI fundamentals all the way to building and deploying real ML models — beginner to advanced.

---

## Folder structure (simple map)

```
ai_ml/
├── COURSE_GUIDE.md
├── data/                    ← Lessons & videos
├── hooks/                   ← Progress saving
└── pages/                   ← Hub + lesson screens
```

*(No `components/` folder — this course reuses NumPy's theory and challenge components.)*

---

## What each file does

### `data/`

| File | What it holds |
|------|----------------|
| **aimlCurriculum.js** | All chapters, lessons, theory, quizzes, and Python challenges. **Main content file.** |
| **aimlVideoLinks.js** | YouTube links per lesson id. |

### `hooks/`

| File | What it does |
|------|----------------|
| **useaiProgress.js** | Saves completed lessons, code, notes, bookmarks in `localStorage`. |

### `pages/`

| File | What it does |
|------|----------------|
| **aiHub.jsx** | Course home: progress, chapters, search. |
| **aiLessonPage.jsx** | Single lesson page (theory + challenge tabs). |

---

## Borrowed from other folders

| From | Used for |
|------|----------|
| `numpy-py/components/NumpyIntroTheory.jsx` | Theory layout |
| `numpy-py/components/PythonCodeChallenge.jsx` | Python coding challenges |
| `oops-cpp/components/OopsSidebar.jsx` | Lesson list sidebar |
| `shared/` | Read gate, videos, annotations, `runPython.js` |

---

## Quick tips for editors

1. Edit lesson content in **`data/aiCurriculum.js`**
2. Add videos in **`data/aiVideoLinks.js`**
3. Lesson ids look like `aiml-0`, `aiml-1`, … `aiml-44` — keep ids stable when adding links