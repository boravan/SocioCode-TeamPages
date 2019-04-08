import React from "react";

const TeamCard = props => {
  return (
    <div>
      <h2>{props.team.title}</h2>
      <h2>{props.team.description}</h2>
    </div>
  );
};

export default TeamCard;
