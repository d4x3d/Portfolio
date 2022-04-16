import React from "react";
import "./SkillsComponent.scss";
import SkillCard from "../Skill/SkillCard";

function SkillsComponent() {
  return (
    <div className="skills-container d-flex align-items-center justify-content-center">
      <SkillCard />
    </div>
  );
}

export default SkillsComponent;
