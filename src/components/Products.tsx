import React from "react";
import NikeIcon from "../icons/logos/nike-01.svg";
import FavoriteIcon from "../icons/favorite.svg";
import Price from "./Price";
import Rating from "./Rating";

export default function Products(props: {products: Product[]}) {
  return (
    <div className={"products"}>
      {props.products.map((product, index) =>
        <div className={"product"}>
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
            //backgroundColor: "red",
          }}/>
          <p style={{
            gridArea: "name",
            marginLeft: 2,
            fontWeight: 600,
            fontSize: 15,
            color: "#8A8A9D",
          }}>{product.name}</p>
          {/*<p style={{gridArea: "rating"}}>{product.rating}</p>*/}
          <Rating value={product.rating}/>
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