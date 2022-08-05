import "./PortfolioPic.scss";
import alaaPic from "../../../images/alaa-pic-pur.jpeg";

function PortfolioPic() {
  return (
    <div className="d-flex align-items-center img-conteiner">
      <img className="portfolio-img" src={alaaPic} />
      <div className="img-border"></div>
    </div>
  );
}

export default PortfolioPic;
