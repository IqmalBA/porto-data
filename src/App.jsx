import {Routes, Route} from "react-router"
import Home from "./page/Home";
import Project from "./page/Project";
import Skill from "./page/Skill";
import Experience from "./page/Experience";
import Organization from "./page/Organization";

function App() {
    return (
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Project />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/organization" element={<Organization />} />
        </Routes>
    );
}

export default App;
