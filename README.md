# **RegTechFlow**

A React-based project with advanced state management, internationalization, secure storage, and responsive design using modern tools and libraries.

## **Table of Contents**

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Installation Instructions](#installation-instructions)
4. [Dependencies](#dependencies)
   - [Core Libraries](#core-libraries)
   - [DevDependencies](#devdependencies)
5. [Usage of Libraries](#usage-of-libraries)
6. [Scripts](#scripts)
7. [Project Structure](#project-structure)

## **Project Overview**

**RegTechFlow** is a modern web application built with React, featuring:

- Advanced **state management** using Redux Toolkit and Redux Saga.
- **Internationalization** support via `i18next`.
- **Secure storage** using `react-secure-storage`.
- **Responsive UI** with Bootstrap and React Bootstrap.

## **Features**

- **State Management**: Powered by Redux Toolkit and Redux Saga.
- **Secure Storage**: Utilizes `react-secure-storage` for encrypted local storage.
- **Internationalization**: Supports multiple languages via `i18next`.
- **Responsive UI**: Built with `bootstrap` and `react-bootstrap`.
- **Testing Framework**: Includes preconfigured testing tools from React Testing Library.

## **Installation Instructions**

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Ahmad0933-dev/regtechflow.git
   cd regtechflow

   ```

2. **Install dependencies**:

   ```bash
   npm install
   npm install --force

   ```

3. **Start the development server**:

   ```bash
   npm start

   ```

4. **Build the project (for production)**:

   ```bash
   npm run build

   ```

# **Dependencies**

## **Core Libraries**

| **Package**                   | **Version** | **Usage**                                                                 |
| ----------------------------- | ----------- | ------------------------------------------------------------------------- |
| `@redux-devtools/extension`   | `^3.3.0`    | Debug Redux state changes using browser DevTools.                         |
| `@reduxjs/toolkit`            | `^2.3.0`    | Simplified Redux state management with built-in best practices.           |
| `@testing-library/jest-dom`   | `^5.17.0`   | Custom matchers for DOM assertions in Jest tests.                         |
| `@testing-library/react`      | `^13.4.0`   | Utilities for testing React components.                                   |
| `@testing-library/user-event` | `^13.5.0`   | Simulates user interactions for testing.                                  |
| `bootstrap`                   | `^5.3.3`    | CSS framework for building responsive layouts.                            |
| `i`                           | `^0.3.7`    | Provides inflection methods for strings.                                  |
| `i18next`                     | `^24.0.2`   | Internationalization library for handling translations.                   |
| `react`                       | `^18.3.1`   | Library for building user interfaces.                                     |
| `react-bootstrap`             | `^2.10.6`   | Bootstrap components as React components.                                 |
| `react-dom`                   | `^18.3.1`   | Enables DOM rendering for React apps.                                     |
| `react-i18next`               | `^15.1.1`   | React bindings for i18next.                                               |
| `react-redux`                 | `^9.1.2`    | Connects React components to the Redux store.                             |
| `react-secure-storage`        | `^1.3.2`    | Secure storage for encrypted local data in React apps.                    |
| `redux`                       | `^5.0.1`    | State management library.                                                 |
| `redux-saga`                  | `^1.3.0`    | Middleware for handling Redux side effects.                               |
| `use-media`                   | `^1.5.0`    | React hook for media queries to handle responsiveness.                    |
| `web-vitals`                  | `^2.1.4`    | Library for measuring and reporting performance metrics (e.g., CLS, LCP). |

# **Dependencies**

## **State Management:**

- Redux Toolkit and Redux Saga simplify managing global application state. Use @redux-devtools/extension for debugging state transitions.

## **Internationalization:**

- Use i18next and react-i18next for creating multilingual applications with seamless language switching.

## **UI and Responsiveness:**

- Use bootstrap and react-bootstrap for responsive layouts, and use-media for handling media queries programmatically.

## **Secure Storage:**

- Store sensitive user data securely in the browser using react-secure-storage.

## **Routing:**

- Navigate between application pages using react-router-dom.

## **Styling:**

- Use tailwindcss for utility-based CSS and autoprefixer for cross-browser compatibility.

## **Testing:**

- Test your components using React Testing Library tools such as @testing-library/react and @testing-library/user-event.

# **Scripts**

| **Command**     | **Usage**                                               |
| --------------- | ------------------------------------------------------- |
| `npm start`     | Starts the development server on http://localhost:3000. |
| `npm run build` | Builds the application for production.                  |
| `npm run test`  | Runs tests using Jest.                                  |
| `npm run eject` | Ejects the react-scripts configuration.                 |

# **Project Structure**

src/
├── components/ # Reusable React components
├── pages/ # Application pages
├── redux/ # Redux store and sagas
├── sections/ # All pages sections
├── translations/ # Languages translations
└── App.js # Main application component
