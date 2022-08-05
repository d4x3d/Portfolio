import "./MainPage.scss";

import SocialMediaContainer from "./SocialMediaContainer/SocialMediaContainer";
import MainBody from "./MainBody/MainBody";
import PortfolioPic from "./PortfolioPic/PortfolioPic";

function MainPage() {
  return (
    <div className="d-flex align-items-center main-page row">
      <div className="p-5 col-md-8 col-sm-8">
        <SocialMediaContainer />
        <MainBody />
      </div>
      <div className="d-flex align-items-center col-md-4 col-sm-4 justify-content-center">
        <PortfolioPic />
      </div>
    </div>
  );
}

export default MainPage;
