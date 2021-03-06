import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

function ColorBox() {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "65px",
          height: "64px",
          background: state.color,
        }}
      />
      <div
        style={{
          width: "32px",
          height: "32px",
          background: state.subcolor,
        }}
      />
    </>
  );
}

export default ColorBox;
