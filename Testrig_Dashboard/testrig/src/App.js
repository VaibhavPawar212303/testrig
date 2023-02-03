import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Projects from "./components/Dashboard/Projects";

function App() {
  return (
    <>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </>
  );
}

export default App;
