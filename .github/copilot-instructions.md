# AI Agent Instructions for MedicoMetasearch

This document provides essential context for AI agents working with the MedicoMetasearch codebase.

## Project Overview

MedicoMetasearch is a React-based medical information search application powered by Google's Gemini AI. It provides summarized medical information from trusted sources while maintaining strict ethical boundaries around medical advice.

### Core Architecture

- **Frontend**: React/TypeScript SPA with Tailwind CSS
- **AI Integration**: Google Gemini API via `@google/genai`
- **Deployment**: Netlify-optimized build process

## Key Components

1. **App.tsx** - Main application container
   - Manages global state (loading, errors, search results)
   - Coordinates component interactions

2. **services/geminiService.ts** - AI Integration Layer
   - Handles Gemini API communication
   - Implements system prompting and error handling
   - Critical environment variable: `GEMINI_API_KEY`

3. **Component Structure**:
   - `SearchBar`: User input handling
   - `ResultDisplay`: Formatted search results
   - `LoadingSkeleton`: Loading state UI
   - `icons`: Shared icon components

## Development Workflow

### Environment Setup

1. Install dependencies:
```bash
npm install
```

2. Configure environment:
- Create `.env.local` in project root
- Add Gemini API key: `GEMINI_API_KEY=your_key_here`

### Development Server
```bash
npm run dev
```

## Critical Patterns

### State Management
- Uses React's built-in state management with `useState` and `useCallback`
- State structure follows `types.ts` interfaces

### Error Handling
- Centralized error handling in `geminiService.ts`
- User-facing errors displayed through error component in `App.tsx`

### API Integration
- All Gemini API calls must include system instructions for medical information boundaries
- Always use the grounding metadata for source attribution

## Project-Specific Conventions

### Medical Ethics
- Never generate or modify medical advice content
- Always maintain disclaimer messaging
- Preserve source attribution from Gemini API

### Type Safety
- All data structures defined in `types.ts`
- Use TypeScript interfaces for component props
- Strict error typing in API responses

### UI/UX Patterns
- Dark mode support via Tailwind classes
- Consistent loading states with skeleton UI
- Error messages in red panels with light/dark variants

## Deployment

- Netlify-optimized build configuration
- Environment variables must be prefixed with `VITE_` for Netlify compatibility
- Automatic deployments on main branch commits