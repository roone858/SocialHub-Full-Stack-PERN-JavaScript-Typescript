import React from "react";
import AlignItemsList from "./AlignItemsList";
const arr = [
  {
    alt: "test",
    src: "test",
    primary: "test",
    typography: "test",
    text: "test",
  },
  {
    alt: "test",
    src: "test",
    primary: "test",
    typography: "test",
    text: "test",
  },
  {
    alt: "test",
    src: "test",
    primary: "test",
    typography: "test",
    text: "test",
  },
  {
    alt: "test",
    src: "test",
    primary: "test",
    typography: "test",
    text: "test",
  },
];
export default function MostPopular() {
  return (
    <div style={{width:"auto"}} className="most-popular d-flex flex-column align-items-center align-content-center">
      <p className="m-0" style={{ color: "gray" }}>
        MOST POPULAR
      </p>
      <AlignItemsList items={arr} />
    </div>
  );
}
