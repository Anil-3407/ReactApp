
import Nav from "./components/nav/Nav"
import Home from "./components/home/Hom"
import Counter from "./components/counter/Counter"
import ResumeUploadForm from "./components/resume/ResumeUplodForm"
import { Route,Routes } from "react-router-dom"
function App() {
  

  return (
    <div>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/counter" element={<Counter/>}></Route>
      <Route path="/resume-upload" element={<ResumeUploadForm/>}></Route>
    </Routes>
    </div>
  )
}

export default App
