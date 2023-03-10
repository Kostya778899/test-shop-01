import React from "react";
import {Product as Model} from "../models";
import NikeIcon from "../icons/logos/nike-01.svg";
import FavoriteIcon from "../icons/favorite.svg";
import Rating from "./Rating";
import Price from "./Price";

export default function Product(props: {model: Model}) {
  return (
    <div className={"product"}>
      <img src={NikeIcon} style={{gridArea: "brand-logo"}}/>
      <img src={FavoriteIcon} style={{gridArea: "favorite-button", justifySelf: "end"}}/>
      <div style={{
        //height: "90%",
        gridArea: "image",
        alignSelf: "stretch",
        transform: "translateY(-10px)",
        //backgroundImage: "url(https://static.nike.com/a/images/t_default/2b345096-95b3-4964-a7d7-ebffcd5b2992/air-max-90-se-mens-shoes-2C5LfX.png)",
        //backgroundImage: "url(https://images.footlocker.com/is/image/EBFL2/H6789001_a1?wid=520&hei=520&fmt=png-alpha)",
        backgroundImage: `url(${props.model.image})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        //backgroundColor: "red",
      }}/>
      <p style={{
        gridArea: "name",
        marginLeft: 2,
        fontWeight: 600,
        fontSize: 15,
        color: "#8A8A9D",
      }}>{props.model.title}</p>
      <Rating value={props.model.rating.rate / 5}/>
      <Price value={props.model.price}/>
    </div>
  );
}