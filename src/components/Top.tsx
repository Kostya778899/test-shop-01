import React from "react";
import HamburgerIcon from "../icons/hamburger.svg";
import CartIcon from "../icons/cart.svg";

export default function Top() {
  return (
    <div style={{
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
    }}>
      <img src={HamburgerIcon}/>
      <p style={{
        fontWeight: 700,
        fontSize: 21,
        color: "#313B5D",
      }}>Explore</p>
      <img src={CartIcon}/>
    </div>
  );
}