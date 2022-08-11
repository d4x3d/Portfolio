import "./ProjectCard.scss";
import arrow from "../../images/right-arrow.png";
import projectsObj from "../../data/projects.json";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ProjectCard() {
  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        // infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true,
      },
    },
    {
      breakpoint: 300,
      // settings: "unslick", // destroys slick

      settings: {
        slidesToShow: 1,
        dots: true,
      },
    },
  ];

  const sliderSettings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    dots: true,
    responsive: responsive,
  };
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
            <span className="proj-btn-container__text">
              <a href={card.demo} target="_blank">
                Learn more
              </a>
            </span>
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
    // <div className="row w-100 d-flex align-items-center justify-content-center">
    //   {generateProjCard()}
    // </div>

    <div className="container proj-con">
      <Slider
        {...sliderSettings}
        className="row w-100 d-flex align-items-center justify-content-center"
      >
        {generateProjCard()}
      </Slider>
    </div>
  );
}

export default ProjectCard;
