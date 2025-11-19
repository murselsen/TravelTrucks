# TravelTrucks - AI Coding Agent Instructions

## Project Overview

This is a React + Vite application for browsing travel/camping trucks with Redux Toolkit state management and React Router for navigation.

## Architecture & State Management

### Redux Structure (`src/redux/`)

- **Store**: Configured in `store.js` with disabled serializable checks for flexibility
- **Campers Slice**: Main entity managing truck/camper data with filtering capabilities
- **Async Thunks**: Located in `thunks.js` - uses axios with MockAPI backend
- **State Shape**: `{ items: [], filter: { location: "" }, loading: false, error: null }`

### API Configuration

- Base URL: `https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers`
- Uses axios with thunk error handling pattern
- Error responses stored in Redux state for UI feedback

## File Organization Patterns

### Component Structure

- **App.jsx**: Uses Suspense wrapper with lazy loading pattern
- **Routing**: React Router with dynamic routes (`/catalog/:id`)
- **CSS Modules**: Referenced as `App.module.css` (note: currently missing)

### Import Conventions

```javascript
// Redux imports with explicit .js extensions
import store from "./redux/store.js";
import { fetchCampers } from "./thunks.js";

// Component imports expect lazy loading setup
const Home = React.lazy(() => import("./pages/Home"));
```

## Development Workflow

### Scripts (package.json)

- `npm run dev` - Start development server (Vite with HMR)
- `npm run build` - Production build
- `npm run lint` - ESLint with React hooks and refresh plugins
- `npm run preview` - Preview production build

### Build Configuration

- **Vite**: Uses rolldown-vite fork for enhanced performance
- **ESLint**: Custom config with unused vars pattern `^[A-Z_]` ignored
- **React**: Version 19.1.1 with concurrent features enabled

## Code Patterns & Conventions

### Redux Toolkit Patterns

```javascript
// Async thunk error handling
export const fetchCampers = createAsyncThunk(
  "campers/fetchCampers",
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get("/");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// Reducer with filter management
reducers: {
  setFilter(state, action) {
    state.filter = action.payload;
  }
}
```

### Component Setup

- All components should be wrapped in Suspense for lazy loading
- Use React Router's dynamic segments for detail views (`/catalog/:id`)
- Redux Provider and BrowserRouter configured in `main.jsx`

## Missing Components to Implement

Based on App.jsx routing, you'll need:

- `src/pages/Home.jsx` - Landing page component
- `src/pages/Catalog.jsx` - Truck listing and detail view
- `src/App.module.css` - CSS modules for App component styling

## Integration Points

- **MockAPI**: External service for camper data (read-only operations)
- **React Router**: Handle navigation state and URL parameters
- **Redux**: Centralized state with location-based filtering capability

When implementing new features, follow the established Redux Toolkit patterns for async operations and maintain the lazy loading approach for components.
