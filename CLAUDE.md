# CLAUDE.md - Assistance Guide for Zodism

## Build & Development Commands
- **Setup**: `npm install` or `yarn install`
- **Dev server**: `npm run dev` or `yarn dev`
- **Build**: `npm run build` or `yarn build`
- **Lint**: `npm run lint` or `yarn lint`
- **Type check**: `npm run typecheck` or `yarn typecheck`
- **Test**: `npm test` or `yarn test`
- **Single test**: `npm test -- -t "test name"` or `yarn test -t "test name"`

## Code Style Guidelines
- **Framework**: React with TypeScript for frontend
- **State Management**: React hooks for local state, context for shared state
- **API Calls**: Fetch API with async/await
- **Formatting**: Use Prettier with default configuration
- **Naming**: camelCase for variables/functions, PascalCase for components/classes
- **Component Structure**: Functional components with hooks
- **Error Handling**: Try/catch for async operations, error boundaries for components
- **Types**: Prefer explicit typing over inference, use interfaces for objects
- **CSS**: Styled-components with theme-based styling
- **Imports**: Group by external, internal, then relative paths
- **Testing**: Jest for unit tests, React Testing Library for component tests

This is a web application for astrological interpretation of conversations, prioritizing a fun, vibrant UX with clean, modern code.