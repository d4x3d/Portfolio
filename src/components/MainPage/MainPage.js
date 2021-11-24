import "./MainPage.scss";

import SocialMediaContainer from "./SocialMediaContainer/SocialMediaContainer";
import MainBody from "./MainBody/MainBody";
import PortfolioPic from "./PortfolioPic/PortfolioPic";

function MainPage() {
  return (
    <div className="main-page d-flex justify-content-center">
      <div className="introduction">
        <SocialMediaContainer />
        <MainBody />
      </div>
      <div>
        <PortfolioPic />
      </div>
    </div>
  );
}

export default MainPage;
