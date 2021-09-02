import React from "react";

function Card(props) {
  return (
        <div className ="card">
      <div className ="title"><h3>{props.info.title}</h3></div>
      <div className ="desc">{props.info.desc}</div>
      </div>
  );
}


export default Card;
