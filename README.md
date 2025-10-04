# Ticktock Timesheet (React + Vite)

## Credentials
Email: user@example.com, 
Password: 123456

Ticktock is a minimal timesheet web app built with React 19 and Vite 7. It demonstrates a simple auth flow using `sessionStorage`, protected routing with React Router v7, data fetching from a hosted backend, toast notifications, and Tailwind CSS v4 styling.

---

## Tech Stack
- React 19 (`react`, `react-dom`)
- Vite 7 (dev server and build)
- React Router v7 (`react-router`, `react-router-dom`)
- Tailwind CSS v4 + PostCSS + Autoprefixer
- Icons: `lucide-react`
- Toasts: `react-hot-toast`
- ESLint 9 with React hooks and refresh plugins

---

## Features
- Login form with basic client-side validation
- Auth token stored in `sessionStorage`
- Protected route for the timesheet page via a custom `PrivateRouteTimesheet`
- Fetches user and timesheet data from a hosted backend (Render)
- Toast notifications for success/error states
- Basic layout components (Navbar, Footer) and a timesheet table UI

---

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+ (recommended)

### Install
```bash
npm install
```

### Run (development)
```bash
npm run dev
```
This starts Vite on a local port (shown in the terminal). Open the printed URL in your browser.

### Build (production)
```bash
npm run build
```

### Preview built app
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

---

## Routing
Defined in `src/App.jsx` using React Router v7:
- `/` → `Home`
- `/timesheet` → Protected by `PrivateRouteTimesheet` and renders `TimeSheet`
- `*` → `NotFound`

Router is initialized in `src/main.jsx` with `BrowserRouter`.

---

## Authentication Flow
- On login submit (`src/components/LoginCard.jsx`), calls `login(email, password)`.
- `login` (`src/api/login.js`) fetches the first user from `fetchUserdata` and validates credentials:
  - On success: creates a basic token string and stores `token`, `email`, and `password` in `sessionStorage`.
  - On invalid credentials: returns status 401.
- `PrivateRouteTimesheet` (`src/utils/PrivateRouteTimesheet.jsx`) checks for `sessionStorage.getItem('token')` and redirects to `/` if missing.



---

## Data Fetching
- Users: `src/api/Fetchuserdata.js` calls `https://timesheet-backend-fz99.onrender.com/userdata`
- Timesheets: `src/components/TimesheetTable.jsx` calls `https://timesheet-backend-fz99.onrender.com/timesheetdata`

These endpoints are expected to return JSON with a `data` field. Network errors are logged to the console.

---

## Styling and UI
- Tailwind CSS v4 (`tailwindcss`, `@tailwindcss/postcss`, `postcss`, `autoprefixer`)
- Icon components from `lucide-react`
- Toast notifications via `react-hot-toast` (configured in `main.jsx`)

Tailwind utilities are used throughout components and pages.

---

## Available npm Scripts
- `dev`: Start Vite dev server
- `build`: Build for production
- `preview`: Preview the production build
- `lint`: Run ESLint across the project

---

## Development Notes
- This project uses React 19 and React Router v7. Ensure you import from `react-router` (as used in the codebase) and `react-router-dom` where needed (e.g., `Navigate`).
- Auth is session-based and purely client-side for demonstration.
- Replace the Render backend URLs with your own if needed.
- If Tailwind classes are not applying, ensure PostCSS/Tailwind setup is correct and restart the dev server.

---

## How to Use (Demo)
1. Start the app with `npm run dev`.
2. On `/`, enter the email/password that match the first user returned by the backend `userdata` endpoint.
3. On successful login, you'll be redirected to `/timesheet` where timesheet data is fetched and displayed.

---


