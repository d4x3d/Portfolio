import "./SocialMediaContainer.scss";
import GithubLogo from "../../images/github.svg";
import Linkedin from "../../images/linkedin.svg";
import Dark from "../../images/dark.svg";

function SocialMediaContainer() {
  return (
    <div className="d-flex align-items-center">
      <div className="socail-medias d-flex align-items-center">
        <div>
          <img src={GithubLogo} alt="github logo" />
        </div>
        <div>
          <img src={Linkedin} alt="linkedin logo" />
        </div>
      </div>
      <div>
        <img src={Dark} alt="linkedin logo" />
      </div>
    </div>
  );
}

export default SocialMediaContainer;
