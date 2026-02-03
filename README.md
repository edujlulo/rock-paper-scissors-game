# Rock, Paper, Scissors Game 🎮✊📄✂️

A simple and interactive **Rock, Paper, Scissors** game built with **React**. This project showcases my skills in **React**, **state management**, **component-based architecture**, and **responsive design**, making it a strong example of my frontend development abilities.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [How to Play](#how-to-play)
- [Installation](#installation)
- [Future Improvements](#future-improvements)
- [Author](#author)

---

## Demo

You can try the live demo here: [Eduardo Lulo Portfolio](https://eduardo-lulo-portfolio.netlify.app)

---

## Features

- **Interactive Gameplay:** Play against the computer with instant results.
- **Score Tracking:** Human and computer scores are displayed and updated in real time.
- **Responsive Design:** Optimized for mobile, tablet, and desktop screens using CSS Flexbox and media queries.
- **Visual Feedback:** Icons for Rock, Paper, and Scissors, with animations and color-coded results (Win / Loss / Tie).
- **Component-Based Architecture:** Clean separation of concerns with `Board`, `Footer`, and main `App` components.
- **Reusable Logic:** Game logic encapsulated in a separate utility function for maintainability.

---

## Technologies

- **React** – Functional components and hooks (`useState`)
- **JavaScript** – Game logic and event handling
- **CSS3** – Flexbox, responsive design, and styling
- **SVG Icons** – Hand icons for Rock, Paper, and Scissors
- **Vite / Create React App** – For project setup (depending on setup)

---

## Project Structure

```text
src/
├── Assets/
│ ├── hand-rock.svg
│ ├── hand-paper.svg
│ └── hand-scissor.svg
├── Components/
│ ├── Board.jsx
│ ├── Board.css
│ ├── Footer.jsx
│ └── Footer.css
├── Logic/
│ └── gameLogic.js
├── App.jsx
├── App.css
└── index.js
```

**Component Breakdown:**

- `App.jsx`: Main component that manages state (`humanScore`, `computerScore`, `humanPlay`, `computerPlay`, `result`) and handles user interactions.
- `Board.jsx`: Displays the current game state, player and computer moves, and the scoreboard.
- `Footer.jsx`: Simple footer with author information and a portfolio link.
- `gameLogic.js`: Contains the game logic function `getGameResult()` to determine the winner.

---

## How to Play

1. Choose a move by clicking on **Rock**, **Paper**, or **Scissors**.
2. The computer will randomly choose its move.
3. The result is displayed for both human and computer.
4. The scores update automatically after each round.
5. The game is fully responsive and works across different devices.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/rock-paper-scissors.git
```

Navigate to the project folder:

```bash
cd rock-paper-scissors
```

Install dependencies:

```bash
npm install
```

Run the project locally:

```bash
npm start
```

Open http://localhost:3000 in your browser to play.


## Author

Eduardo Lulo – [Portfolio](https://eduardo-lulo-portfolio.netlify.app)

This project demonstrates my abilities in React, JavaScript, and responsive frontend development, and serves as a showcase for potential employers in a junior frontend developer role.
