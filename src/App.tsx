import { Route, Routes } from "react-router-dom"
import TodoPage from "./pages/TodoPage"
import HomePage from "./pages/HomePage"

function App() {


  return (
    <Routes>
      <Route path="/todos" element={<TodoPage />} />

      <Route path="/" element={<HomePage />}/>

    </Routes>
  )
}

export default App
