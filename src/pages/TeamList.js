import React from "react";
import TeamCard from "./TeamCard";

const TeamList = props => {
  return (
    <div>
      {props.teams.map(team => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
};

export default TeamList;
