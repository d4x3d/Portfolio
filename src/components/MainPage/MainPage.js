import "./MainPage.scss";

import SocialMediaContainer from "./SocialMediaContainer/SocialMediaContainer";
import MainBody from "./MainBody/MainBody";
import PortfolioPic from "./PortfolioPic/PortfolioPic";

function MainPage() {
  return (
    <div className="d-flex align-items-center main-page">
      <div>
        <div className="ml-4">
          <SocialMediaContainer />
          <MainBody />
        </div>
      </div>
      <div className="d-flex align-items-center mr-4">
        <PortfolioPic />
      </div>
    </div>
  );
}

export default MainPage;
