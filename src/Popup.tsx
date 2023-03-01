import React, {useEffect} from 'react';

export default function Popup(props: {v: boolean, children?: React.ReactNode}) {
  function show() {

  }

  return (
    <div>
      <p>{props.v}</p>
      {props.children}
    </div>
  );
}