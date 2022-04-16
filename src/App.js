import "./assets/Main.scss";

import MainPage from "./components/MainPage/MainPage";
import SkillsComponent from "./components/Skills/SkillsComponent/SkillsComponent";
import ReactPageScroller from "react-page-scroller";

function App() {
  return (
    <div className="App">
      <ReactPageScroller>
        <MainPage />
        <SkillsComponent />
      </ReactPageScroller>
    </div>
  );
}

export default App;
