# English Placement Test - Technical Interview

This project is a React-based web application developed for the technical interview. It handles an end-to-end flow for an English Placement Test, including student registration, a timed multi-step examination, and results submission.

## 🚀 Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

## ✨ Key Features

1.  **Student Registration**:

    - Form validation using Zod schema.
    - Captures student details (Name, Email, Phone, Age).
    - Starts a new test session upon successful submission.

2.  **Examination System**:

    - **Stepper Navigation**: Tracks progress across multiple question sections (1-6, 7-12, etc.) and the final writing task.
    - **Question Rendering**: Dynamically fetches and renders multiple-choice questions based on the current step.
    - **Writing Task**: A dedicated section for essay input.
    - **State Persistence**: Uses Zustand to manage answers, current step, and session data globally.

3.  **Timer Integration**:

    - Real-time stopwatch tracking the duration of the test.
    - Persisted across navigation using global store state.
    - Formatted display (MM:SS).

4.  **Submission Handling**:
    - Builds a structured payload strictly adhering to API requirements.
    - Handles mixed data types (multiple choice IDs and string-based essay answers).
    - Submits data via `application/x-www-form-urlencoded` format.
    - Displays a success modal upon completion.

## 📂 Project Structure

```
src/
├── components/         # Reusable UI components (Stepper, Modal, etc.)
├── features/          # Feature-specific components
│   ├── question/      # Question lists, cards, essay form, payload
│   ├── student/       # student registration
│   ├── Navigation     # logic for navigation buttons
│   └── Timer.tsx      # Stopwatch component
├── hooks/             # Custom hooks (useGetQuestions, useSubmitTest)
├── lib/               # Utility functions and constants
├── pages/             # Page layouts (Index, StudentProfile,  QuestionLayout)
├── services/          # API service definitions (Axios setup)
├── store/             # Zustand stores (SessionStore, AnswerStore)
└── App.tsx            # Main application entry with Routing
```

## 🛠️ Setup & Running

1.  **Install Dependencies**:

    ```bash
    npm install
    ```

2.  **Run Development Server**:

    ```bash
    npm run dev
    ```

3.  **Build for Production**:
    ```bash
    npm run build
    ```

## 📝 Notes on Implementation

- **Strict Payload Formatting**: Special attention was paid to the submission service (`submit.services.ts`) to ensure compatibility with the backend API, specifically handling the `student_answers` key and `FormData` serialization.
- **Responsive Design**: The application works seamlessly on both desktop and mobile devices, with responsive navigation steps.
