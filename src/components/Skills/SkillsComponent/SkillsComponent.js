import React from "react";
import "./SkillsComponent.scss";
import SkillCards from "../Skill/SkillCards";

function SkillsComponent() {
  return (
    <div className="skills-container d-flex align-items-center justify-content-center">
      <SkillCards />
    </div>
  );
}

export default SkillsComponent;
