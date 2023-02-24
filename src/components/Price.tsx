import React from "react";

export default function Price(props: {value: number}) {
  return (
    <div className={"price"}>
      <p className={"currency dis-selectable"}>$</p>
      <p className={"value"}>{props.value}</p>
    </div>
  );
}