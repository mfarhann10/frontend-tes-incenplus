import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { Index } from "./pages/Index"
import { StudentProfile } from "./pages/student/StudentProfile"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Index />}>
          <Route index element={<Navigate to="/students-profile"/>}/>
          <Route path="students-profile" element={<StudentProfile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
