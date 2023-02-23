import React from 'react';
import './App.css';
import Top from "./components/Top";
import Search from "./components/Search";
import Brand from "./components/Brand";
import NikeIcon from "./icons/logos/nike.svg";
import Products from "./components/Products";
import SideNavigation from "./components/SideNavigation";
import useWindowDimensions from "./useWindowDimensions";

export default function App() {
  const windowDimensions = useWindowDimensions();

  return (
    <div style={{
      height: windowDimensions.height,
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
      <Products/>

      <p>lol)))</p>
    </div>
  );
}