import React from "react";
import Info from "./Info";
import Card from "./Card";

function Cards() {
  return (

    <div className="cardInfo">
        {Info.map((info) => (
          <Card key={info.id} info={info} />
        ))}
    </div>
  );
}

export default Cards;
