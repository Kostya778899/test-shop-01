import React from "react";
import SearchIcon from "../icons/search.svg";

export default function Search() {
  return (
    <div style={{
      width: "100%",
      height: 47,
      paddingLeft: 9,
      display: "flex",
      justifyContent: "start",
      alignItems: "center",
      backgroundColor: "#FFF",
      borderRadius: 6,
      boxShadow: "5px 5px 50px rgba(210, 213, 234, 0.45)",
    }}>
      <img src={SearchIcon} style={{
        width: 26,
        height: 26,
        marginRight: 9,
      }}/>
      <p style={{
        fontWeight: 600,
        fontSize: 13,
        color: "#8A8A9D",
      }}>Search...</p>
    </div>
  );
}