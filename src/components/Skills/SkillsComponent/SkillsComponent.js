import React from "react";
import "./SkillsComponent.scss";
import SkillCards from "../Skill/SkillCards";

function SkillsComponent() {
  return (
    <div className="skills-container w-100 d-flex align-items-center justify-content-center">
      <SkillCards />
    </div>
  );
}

export default SkillsComponent;
