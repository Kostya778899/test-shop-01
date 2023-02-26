import React, {useEffect} from 'react';
import './App.css';
import Top from "./components/Top";
import Search from "./components/Search";
import Brand from "./components/Brand";
import NikeIcon from "./icons/logos/nike.svg";
import Products from "./components/Products";
import SideNavigation from "./components/SideNavigation";
import useWindowDimensions from "./useWindowDimensions";
import axios from "axios";
import {Product} from "./models";

export default function App() {
  const windowDimensions = useWindowDimensions();

  async function fetchProducts() {
    const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
    console.log(response);
  }

  useEffect(() => {

  });

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "53px auto",
      gridTemplateRows: "min-content",
      justifyItems: "stretch",
      gridTemplateAreas: `
        'header header'
        'side-navigation products'
      `,
      backgroundColor: "#FFFFFF",
    }}>
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
      <Products products={[
        {id: 0, name: "Kostya", price: 15, rating: 0.5},
        {id: 1, name: "Apep Pro Max III", price: 10, rating: 0.75},
        /*{id: 0, name: "Apep Pro Max III", price: 10, rating: 0.7},
        {id: 0, name: "Apep Pro Max III", price: 10, rating: 0.8},
        {id: 0, name: "Apep Pro Max III", price: 10, rating: 0.9},
        {id: 0, name: "Apep Pro Max III", price: 10, rating: 1},
        {id: 0, name: "Apep Pro Max III", price: 10, rating: 1},
        {id: 0, name: "Apep Pro Max III", price: 10, rating: 1},
        {id: 0, name: "Apep Pro Max III", price: 10, rating: 1},
        {id: 0, name: "Apep Pro Max III", price: 10, rating: 1},
        {id: 0, name: "Apep Pro Max III", price: 10, rating: 1},*/
      ]}/>
    </div>
  );
}