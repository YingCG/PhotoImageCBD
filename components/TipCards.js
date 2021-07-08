import React from "react";
import TipsInfo from "./TipsInfo";
import TipCard from "./TipCard";

function createTipCard(info)
{
  return (<TipCard info={info} key={info.id} />);
}

function TipCards() {
  return (
    <div className="cardInfo">
      {
        TipsInfo.map(createTipCard)
      }
    </div>
  );
}

export default TipCards;