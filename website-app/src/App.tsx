import SideBar from "./components/Sidebar";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contacts from "./pages/Contacts";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL + "/"}>
      <div className="App">
        <SideBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
