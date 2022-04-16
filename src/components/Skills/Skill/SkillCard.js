import React from "react";
import "./SkillCard.scss";
import { developSkills, styleSkills } from "../../../assets/helpers/variables";

function SkillCard() {
  function handleSkillsCards(skills) {
    let card = skills.map((skill, index) => {
      return (
        <div key={index} className="d-flex align-items-center">
          <div className="skill-card">
            <img
              src={skill.logo}
              className={"skill-card__logo " + skill.title.toLowerCase()}
            />
            <p className={"skill-card__title " + skill.title.toLowerCase()}>
              {skill.title}
            </p>
          </div>
        </div>
      );
    });

    return card;
  }

  return (
    <div className="w-100">
      <div className="developer-skills-container">
        {handleSkillsCards(developSkills)}
      </div>
      <div className="style-skills-container">
        {handleSkillsCards(styleSkills)}
      </div>
    </div>
  );
}

export default SkillCard;
