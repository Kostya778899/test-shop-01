import React, {useState} from "react";

export default function SideNavigation(props: {
  //style?: React.CSSProperties,
  categories: string[],
}) {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  return (
    <div className={"side-navigation"}>
      {props.categories.map((category, index) =>
        <p
          key={index}
          className={`item dis-selectable ${index === selectedCategoryIndex ? "selected" : ""}`}
          onClick={() => setSelectedCategoryIndex(index)}
        >{category}</p>
      )}
    </div>
  );
}