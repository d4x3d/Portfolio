import "./MainPage.scss";

import SocialMediaContainer from "./SocialMediaContainer/SocialMediaContainer";
import MainBody from "./MainBody/MainBody";

function MainPage() {
  return (
    <div className="main-page d-flex justify-content-start">
      <div>
        <SocialMediaContainer />
        <MainBody />
      </div>
    </div>
  );
}

export default MainPage;
