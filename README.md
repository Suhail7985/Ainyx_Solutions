# 🚀 App Graph Builder

![App Preview](./preview.png)

A modern, responsive "App Graph Builder" UI built as part of a take-home task. This project focuses strictly on correctness, clarity, and clean architecture, fulfilling all requirements to visualize and configure microservice architectures using ReactFlow, Zustand, and TanStack Query.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Language**: TypeScript (Strict Mode)
- **Canvas / Graph**: ReactFlow (xyflow)
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Mocking**: MSW (Mock Service Worker)
- **UI Components**: Tailwind CSS + shadcn/ui

---

## ✅ Functional Requirements Checklist

### 1. Screenshot Layout & Responsiveness
- [x] **Layout Composition**: Top bar, left rail, right app panel, and dotted canvas perfectly aligned with the provided screenshot.
- [x] **Responsive Mobile Drawer**: On small screens, the right panel seamlessly converts into a slide-over drawer controlled by Zustand global state.

### 2. ReactFlow (xyflow) Basics
- [x] **Graph Rendering**: Displays a graph of microservice nodes (e.g., Postgres, Redis, MongoDB) and relational edges.
- [x] **Interactions**: Drag nodes, pan, zoom, and select nodes.
- [x] **Delete Action**: Selected nodes can be natively deleted using the `Delete`/`Backspace` keys.
- [x] **Fit View**: Graph automatically fits to the viewport on initial load.
- [x] **Canvas Styling**: Integrated ReactFlow `Background` with custom theme-aware dots that seamlessly adapt between light and dark modes.

### 3. Service Node Inspector UI
- [x] **Bespoke Custom Node**: To match the screenshot perfectly, the inspector UI was built natively *inside* the custom ReactFlow node (`ServiceNode`).
- [x] **Status Pill**: Shows real-time simulated statuses (e.g., Success, Error) via dynamic badges.
- [x] **Tabs**: Interactive Shadcn tabs for nested metrics (CPU, Memory, Disk, Region).
- [x] **Synced Controls**: Embedded slider (0-100) seamlessly synchronized with a numeric input field, reading from and writing to the node's local state.

### 4. TanStack Query & MSW (Mock APIs)
- [x] **MSW Integration**: Local browser-level request interception to simulate a real backend environment.
- [x] **Endpoints Implemented**:
  - `GET /apps`: Returns the list of applications.
  - `GET /apps/:appId/graph`: Returns the specific nodes and edges for the dynamically selected app.
- [x] **State Handling**: Beautifully handled skeleton loading states and simulated error boundaries.
- [x] **Caching**: Full cache invalidation and refetching logic when toggling between different applications.

### 5. Zustand State Management
- [x] **Minimal Setup**: Non-server UI state managed strictly by Zustand without over-storing derived data.
- [x] **Tracked State**: `selectedAppId`, `selectedNodeId`, `isMobilePanelOpen`, and `theme`.

---

## ⚙️ Setup & Scripts

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Required Engineering Scripts**:
   ```bash
   npm run build       # Builds the production bundle
   npm run preview     # Previews the production build locally
   npm run lint        # Runs ESLint checks for React + TS
   npm run typecheck   # Verifies strict TypeScript compliance (tsc --noEmit)
   ```

---

## 🏗️ Engineering Decisions

- **Node Inspector Architecture**: The initial prompt mentioned a "Right Panel Node Inspector", but the provided design mockups strictly visualized the inspector UI (tabs, sliders, stats) embedded *directly* within the node cards on the canvas itself. To match the visual spec perfectly and demonstrate advanced ReactFlow composition, the inspector was built entirely inside the custom `<ServiceNode />`.
- **Theme Variables**: Strict styling requirements were abstracted into Tailwind CSS variables in `index.css`. This avoids spaghetti code and ensures the UI scales perfectly between Dark and Light mode.
- **Separation of Concerns**: Layout, canvas components, API hooks, and store logic are strictly decoupled to avoid prop-drilling and ensure clean ReactFlow state updates.

---

## 📝 Known Limitations

- **Mock Persistence**: Adjusting a node's slider updates the visual state instantaneously, but because the mocked API endpoints are read-only, edits are not persisted to the "backend" if you switch away from the application and return.
