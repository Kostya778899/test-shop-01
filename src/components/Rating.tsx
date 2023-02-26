import React from "react";

export default function Rating(props: {value: number}) {
  return (
    <div className={"rating"}>
      <div className={"stars"}>
        <ColoredStars color={"#EBF0FF"} count={5}/>
      </div>
      <div className={"stars"} style={{
        width: `${props.value * 100}%`,
        overflow: "clip",
      }}>
        <ColoredStars color={"#FFC833"} count={5}/>
      </div>
    </div>
  );
}

function ColoredStars(props: {color: string, count: number}) {
  return (
    <>
      {[...Array(props.count)].map((ass, index) =>
        <ColoredStar key={index} color={props.color}/>
      )}
    </>
  );
}

function ColoredStar(props: {color: string}) {
  return (
    <div className={"colored-star"}>
      <div style={{
        width: "15px",
        height: "15px",
        backgroundColor: props.color,
      }}/>
    </div>
  );
}