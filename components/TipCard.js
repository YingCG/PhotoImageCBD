import React from "react";

function TipCard(props){
    return (
      <div className="card">
        <div className="image">{props.info.img}</div>
        <div className="title"><h3>{props.info.title}</h3></div>
        <div className="desc">{props.info.desc}</div>
        <div className="link">{props.info.url}</div>
      </div>
    );
  }

export default TipCard;