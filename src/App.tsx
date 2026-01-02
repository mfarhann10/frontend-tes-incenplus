import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Index } from "./pages/Index"
import { StudentProfile } from "./pages/student/StudentProfile"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { QuestionLayout } from "./pages/question/QuestionLayout"

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
        refetchOnReconnect: true,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false}/>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Index />}>
            <Route index element={<Navigate to="/students-profile"/>}/>
          <Route path="students-profile" element={<StudentProfile/>}/>
          <Route path="questions" element={<QuestionLayout />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
