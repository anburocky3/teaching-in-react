# Teaching React - Learning Journey

A practical React learning project built with **Vite** and **JSX**, documenting daily learning concepts and implementation examples.

---

## 📚 Learning Path Overview

This project tracks the step-by-step learning of React fundamentals, from DOM manipulation to component-based architecture.

---

## 🗓️ Day 1: DOM, React.createElement & JSX Foundation

**Date:** February 17, 2026

### Concepts Covered

- **JavaScript DOM**: Understanding the Document Object Model and DOM manipulation
- **React.createElement**: Creating React elements programmatically without JSX
- **Vite + React Setup**: Project initialization with Vite and JSX support
- **JSX Syntax**: Writing React components using JSX syntax

### Key Learnings

#### What is DOM?

The DOM (Document Object Model) is a programming interface for HTML and XML documents. It represents the structure of the document as a tree of objects that can be manipulated with JavaScript.

```javascript
// Traditional DOM manipulation
const element = document.createElement("div");
element.textContent = "Hello World";
document.body.appendChild(element);
```

#### React.createElement

React allows you to create elements using `React.createElement()` as an alternative to JSX:

```javascript
import React from "react";

// Without JSX
const element = React.createElement(
  "h1",
  { className: "title" },
  "Hello React",
);

// With JSX (compiles to React.createElement)
const element = <h1 className="title">Hello React</h1>;
```

#### Project Setup with Vite

This project was initialized using Vite's React template, which provides:

- Fast refresh (HMR)
- ESLint configuration
- Optimized build process

### Code References

- **Check this repo**: [https://github.com/anburocky3/dom-vs-virtual-dom](https://github.com/anburocky3/dom-vs-virtual-dom)

---

## 🗓️ Day 2: React Components, Folder Structure & Props

**Date:** February 18, 2026

### Concepts Covered

- **React Folder Structure**: Organizing React projects for scalability
- **React Components**: Breaking UI into reusable functional components
- **Props**: Passing data from parent to child components
- **Object Destructuring**: Extracting props cleanly in component parameters

### Key Learnings

#### Project Folder Structure

```
src/
├── App.jsx                 # Root component
├── main.jsx                # Entry point
├── index.css               # Global styles
└── components/             # Reusable components
    ├── Header.jsx
    ├── Footer.jsx
    ├── BadgeItem.jsx
    └── ...
```

**Best Practice**: Organize components in a dedicated `components/` folder to maintain scalability and separation of concerns.

#### React Components

Components are the building blocks of React applications. They return JSX and can be functional or class-based. Modern React uses **functional components**.

```javascript
// Functional Component
function Header() {
  return <header className="header">React App</header>;
}

export default Header;
```

#### Props (Properties)

Props allow you to pass data from parent to child components. They are read-only and enable component reusability.

```javascript
// Parent Component
<BadgeItem id={1} title="React" level="Beginner" />;

// Child Component - Without Destructuring
function BadgeItem(props) {
  return (
    <div>
      {props.title} - {props.level}
    </div>
  );
}

// Child Component - With Object Destructuring (Recommended)
function BadgeItem({ id, title, level }) {
  return (
    <div>
      <span>{id}</span>
      <h3>{title}</h3>
      <p>Level: {level}</p>
    </div>
  );
}
```

#### Why Object Destructuring?

- **Cleaner Code**: No need to prefix with `props.`
- **Better Readability**: Clear which props the component uses
- **Easier Maintenance**: Easy to see all expected props at a glance

### Code References

#### Component Files

- **Header Component**: [src/components/Header.jsx](src/components/Header.jsx) - Top navigation component
- **Footer Component**: [src/components/Footer.jsx](src/components/Footer.jsx) - Bottom section component
- **BadgeItem Component**: [src/components/BadgeItem.jsx](src/components/BadgeItem.jsx) - Reusable badge component demonstrating props with destructuring
- **App Component**: [src/App.jsx](src/App.jsx) - Main app component showing component composition and props passing

#### Key Implementation Example

The [BadgeItem.jsx](src/components/BadgeItem.jsx) component demonstrates:

- Receiving props with object destructuring
- Rendering data based on props
- Reusability across multiple instances

---

## 🔧 Setup & Running the Project

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 📖 Resources

- [React Official Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [MDN Web Docs - DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

---

## 📝 Next Steps

- **Day 3**: React State with `useState` hook
- **Day 4**: React Effects with `useEffect` hook
- **Day 5**: Conditional Rendering and Lists

---

**Last Updated**: February 18, 2026
