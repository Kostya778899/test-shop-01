import React from "react";
import {Product as ProductModel} from "../models";
import Product from "./Product";

export default function Products(props: {products: ProductModel[]}) {
  return (
    <div className={"products"}>
      {props.products.map((product, index) =>
        <Product key={product.id} model={product}/>
      )}
    </div>
  );
}

