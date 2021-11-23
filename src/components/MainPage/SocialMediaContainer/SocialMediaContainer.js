import "./SocialMediaContainer.scss";
import GithubLogo from "../../../images/github.svg";
import Linkedin from "../../../images/linkedin.svg";
import Dark from "../../../images/dark.svg";

function SocialMediaContainer() {
  return (
    <div className="d-flex align-items-center">
      <div className="socail-medias d-flex align-items-center">
        <div>
          <img className="github-icon" src={GithubLogo} alt="github logo" />
        </div>
        <div>
          <img className="linkedin-icon" src={Linkedin} alt="linkedin logo" />
        </div>
        <div>
          <img className="dark-mode" src={Dark} alt="linkedin logo" />
        </div>
      </div>
    </div>
  );
}

export default SocialMediaContainer;
