import React from "react";
import {AiOutlineArrowDown} from 'react-icons/ai';

export default function MoreButton(props: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
}) {
  return (
    <button className={"more-button"} onClick={props.onClick}>
      <p style={{fontWeight: 600, fontSize: 19, color: "#FFF"}}>
        more <AiOutlineArrowDown style={{verticalAlign: "middle"}}/>
      </p>
    </button>
  );
}