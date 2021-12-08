import React from "react";
import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set3`}
        width="200"
        alt={props.monster.name.firstname}
      ></img>
      <h5>
        {props.monster.name.firstname} {props.monster.name.lastname}
      </h5>
      <p>{props.monster.email}</p>
    </div>
  );
};
