import Projects from "./components/Dashboard/Projects";
import { Route, Routes } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

function App() {
  return (
    <>
     
      <Routes>
        <Route path="/projectDetails" element={<ProjectDetails/>}/>
        <Route path="/project" element={<Projects/>}/>
      </Routes>
    </>
  );
}

export default App;
