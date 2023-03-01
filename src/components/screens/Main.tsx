import React from "react";
import Top from "../Top";
import Search from "../Search";
import Brand from "../Brand";
import NikeIcon from "../../icons/logos/nike.svg";
import SideNavigation from "../SideNavigation";
import Products from "../Products";
import useProducts from "../../hooks/products";
import MoreButton from "../../MoreButton";

export default function Main() {
  const {products, loading, error, fetchProducts} = useProducts();

  return (
    <div className={"main-screen"}>
      <div style={{gridArea: "header", padding: "35px 20px 0px 20px"}}>
        <Top/>
        <br style={{lineHeight: 27}}/>
        <Search/>
        <br style={{lineHeight: 30}}/>
        <Brand
          icons={[NikeIcon, NikeIcon, NikeIcon, NikeIcon]}
          onChangeSelectedBrand={(newSelectedBrandIndex) => {}}
        />
      </div>
      <SideNavigation categories={["Sale", "New arrivals", "Popular"]}/>

      {/*{loading && <p style={{
        placeSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
        color: "#aaaac0",
        zIndex: 0,
      }}>
        Loading...
      </p>}
      {error && <p style={{color: "red", fontWeight: "bold"}}>Error: {error}</p>}*/}
      <Products products={products} onLoadMoreProducts={() => {fetchProducts()}}/>
    </div>
  );
}