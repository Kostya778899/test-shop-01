import React, {useEffect, useState} from "react";

export default function Brand(props: {
  icons: string[],
  onChangeSelectedBrand?: (newSelectedBrandIndex: number) => void,
}) {
  const [selectedBrandIndex, setSelectedBrandIndex] = useState(0);

  useEffect(() => props.onChangeSelectedBrand?.(selectedBrandIndex), [selectedBrandIndex]);

  return (
    <div className={"brand"}>
      {props.icons.map((icon, index) =>
        <img
          key={index}
          className={`item dis-selectable ${index === selectedBrandIndex ? "selected" : ""}`}
          src={icon}
          onClick={() => setSelectedBrandIndex(index)}
        />
      )}
    </div>
  );
}