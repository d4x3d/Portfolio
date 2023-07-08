import "./assets/Main.scss";

import MainPage from "./components/MainPage/MainPage";
import SkillsComponent from "./components/Skills/SkillsComponent/SkillsComponent";
import ProjectCard from "./components/Projects/ProjectCard";

function App() {
  return (
    <div className="App">
      <MainPage />
      <div className="h-100 w-100 d-flex align-items-center">
        <SkillsComponent />
      </div>
      <div className="w-100 d-flex align-items-center justify-content-center">
        <ProjectCard />
      </div>
    </div>
  );
}

export default App;
