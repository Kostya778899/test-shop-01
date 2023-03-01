import React from "react";
import {Product as ProductModel} from "../models";
import Product from "./Product";
import MoreButton from "../MoreButton";

export default function Products(props: {
  products: ProductModel[];
  onLoadMoreProducts?: () => void;
}) {
  return (
    <div className={"products"}>
      {props.products.map((product, index) =>
        <Product key={product.id} model={product}/>
      )}
      {/*<MoreButton onClick={props.onLoadMoreProducts}/>*/}
    </div>
  );
}

