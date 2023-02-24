import React from "react";
import NikeIcon from "../icons/logos/nike-01.svg";
import FavoriteIcon from "../icons/favorite.svg";
import Price from "./Price";

export default function Products(props: {products: Product[]}) {
  return (
    <div className={"products"}>
      {props.products.map((product, index) =>
        <div className={"product"}>
          {/*<div style={{
            padding: "7px 20px 0 20px",
            display: "flex",
            justifyContent: "space-between",
          }}>
            <img src={NikeIcon}/>
            <img src={FavoriteIcon}/>
          </div>*/}
          {/*<img src={NikeIcon} style={{left: 20, top: 7}}/>
          <img src={FavoriteIcon} style={{right: 20, top: 19}}/>
          <img src={""} style={{top: 10, right: 0, bottom: 10, left: 0, backgroundColor: "red"}}/>
          <div style={{left: 22, bottom: 33}}>
            <p>{product.name}</p>
            <p>${product.price}</p>
          </div>
          <p style={{right: 22, bottom: 44}}>${product.rating}</p>*/}

          <img src={NikeIcon} style={{gridArea: "brand-logo"}}/>
          <img src={FavoriteIcon} style={{gridArea: "favorite-button"}}/>
          <div style={{
            gridArea: "image",
            alignSelf: "stretch",
            //backgroundImage: "url(https://static.nike.com/a/images/t_default/2b345096-95b3-4964-a7d7-ebffcd5b2992/air-max-90-se-mens-shoes-2C5LfX.png)",
            backgroundImage: "url(https://images.footlocker.com/is/image/EBFL2/H6789001_a1?wid=520&hei=520&fmt=png-alpha)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}/>
          <p style={{
            gridArea: "name",
            marginLeft: 2,
            fontWeight: 600,
            fontSize: 15,
            color: "#8A8A9D",
          }}>{product.name}</p>
          <p style={{gridArea: "rating"}}>{product.rating}</p>
          <Price value={product.price}/>
        </div>
      )}
    </div>
  );
}

interface Product {
  name: string,
  price: number,
  brand?: any,
  images?: string[],
  rating: number,
}