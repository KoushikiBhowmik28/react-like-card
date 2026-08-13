# React Like/Unlike Technology Cards

A small React SPA where each card represents a technology and can be
independently liked or unliked. Built to practice components, props,
`useState`, event handling, and conditional rendering.

## Features

- Reusable `Card` component driven entirely by props
- Six technology cards (React, JavaScript, Python, Node.js, MongoDB, Git & GitHub)
- Independent like/unlike state per card
- Conditional rendering of heart icon, status text, and button label
- Fully responsive grid: 3 columns desktop, 2 tablet, 1 mobile
- Keyboard-accessible buttons with `aria-pressed` and `aria-label`

## Technologies

- React
- JavaScript
- Vite
- CSS

## Installation

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## React Concepts Demonstrated

### Components
`Card` is a single, self-contained unit of UI. Because it only depends on
its props and its own internal state, the exact same component definition
can be rendered six times with six different results.

### Props
`CardList` owns the list of technology data and passes `title`, `tag`, and
`description` down into each `<Card />` as props — read-only inputs the
`Card` component renders but never modifies directly.

### State
```jsx
const [liked, setLiked] = useState(false);
```
Each `Card` calls `useState` itself, so React gives every rendered card
its own independent `liked` value in memory.

### Event Handling
The button's `onClick={toggleLiked}` calls a function that flips `liked`
using the functional updater form, `setLiked(prev => !prev)`, which is the
safer way to toggle a boolean based on its previous value.

### Conditional Rendering
The heart emoji, the "Liked"/"Not Liked" text, the button label, and even
the card's CSS class all branch on the same `liked` boolean, so the whole
card's appearance updates consistently from one source of truth.
