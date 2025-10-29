# TODO: Integrate Mock Backend with MSW

## Overview
Transform the frontend-only app into one that simulates a fully functional backend using Mock Service Worker (MSW). This will make all features work seamlessly with mocked API responses.

## Steps
- [x] Install MSW and related dependencies
- [x] Set up MSW handlers for all API endpoints
- [x] Configure MSW in the app (enable in development)
- [x] Update Dashboard page to fetch stats from API
- [x] Update Subjects page to fetch subjects from API
- [x] Update Exams page to fetch exams from API
- [x] Update PastPapers page to fetch papers from API
- [x] Update Flashcards page to fetch decks from API
- [x] Update AI Tutor page to enable chat functionality with mocked responses
- [x] Test all features to ensure they work like a real backend
- [x] Update any loading/error states as needed

## API Endpoints to Mock
- GET /api/dashboard/stats
- GET /api/subjects
- GET /api/exams
- GET /api/past-papers
- GET /api/flashcards
- POST /api/tutor/chat

## Notes
- Use React Query for data fetching
- Ensure mocked data matches current static data structure
- Make AI Tutor chat interactive with simulated responses

# TODO: Implement Lesson Page Navigation

## Overview
Add navigation from subjects to a detailed lesson page with Coursera-like styling, including video player, content, and progress indicators.

## Steps
- [ ] Create Lesson page component with Coursera-style layout
- [ ] Add mock API handlers for lessons data
- [ ] Update App.tsx routing to include /subject/:id route
- [ ] Implement video player placeholder
- [ ] Add lesson content sections
- [ ] Add progress indicators and navigation
- [ ] Test navigation from subjects page
- [ ] Style components to match Coursera design

## API Endpoints to Mock
- GET /api/subjects/:id/lessons

## Notes
- Use dummy data for lessons with video URLs, content, etc.
- Include progress tracking UI elements
- Ensure responsive design
