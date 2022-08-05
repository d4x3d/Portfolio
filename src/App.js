import "./assets/Main.scss";

import MainPage from "./components/MainPage/MainPage";
import SkillsComponent from "./components/Skills/SkillsComponent/SkillsComponent";
import ReactPageScroller from "react-page-scroller";
import BlobsBc from "./components/BlobsAnimation/BlobsAnimation";

function App() {
  return (
    <div className="App">
      {/* <BlobsBc /> */}
      {/* <h1 className="test">test</h1> */}
      <ReactPageScroller>
        <MainPage />
        <div className="h-100 w-100 d-flex align-items-center">
          <SkillsComponent />
        </div>
      </ReactPageScroller>
    </div>
  );
}

export default App;
