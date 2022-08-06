import "./ProjectCard.scss";
import arrow from "../../images/right-arrow.png";
import projectsObj from "../../data/projects.json";

function ProjectCard() {
  const generateProjCard = () => {
    const card = projectsObj.map((card, index) => {
      return (
        <div className="proj-card col-md-6" key={index}>
          <div className="projImg-container">
            <img className="projImg-container__img" src={card.url} />
          </div>
          <div className="proj-card-body">
            <span className="proj-card-body__title">{card.title}</span>
            <p className="proj-card-body__description">{card.description}</p>
            <p className="proj-card-body__tec">{card.tecs}</p>
          </div>
          <div className="proj-btn-container">
            <span className="proj-btn-container__text">Learn more</span>
            <div className="arrow-container">
              <img className="arrow-container__arrow" src={arrow} />
            </div>
          </div>
        </div>
      );
    });

    return card;
  };

  return (
    <div className="row w-100 d-flex align-items-center justify-content-center">
      {generateProjCard()}
    </div>
  );
}

export default ProjectCard;
