import React from "react";

export default function Rating(props: {value: number}) {
  return (
    <div className={"rating"}>
      <div className={"stars"}>
        {[...Array(5)].map(() => <ColoredStar color={"#EBF0FF"}/>)}
      </div>
      <div className={"stars"} style={{
        width: `${props.value * 100}%`,
        overflow: "clip",
      }}>
        {[...Array(5)].map(() => <ColoredStar color={"#FFC833"}/>)}
      </div>
    </div>
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