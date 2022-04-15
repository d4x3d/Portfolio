import "./PortfolioPic.scss";
import Portfolio from "../../../images/portfolio.svg";

function PortfolioPic() {
  return (
    <div className="pic-container">
      <div className="rectangle purple"></div>
      <div className="rectangle purple"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle"></div>
      <div className="rectangle purple"></div>
      <div className="rectangle purple"></div>
      <div className="portfolio-img d-flex align-items-center">
        <img className="portolio-img" src={Portfolio} />
      </div>
    </div>
  );
}

export default PortfolioPic;
