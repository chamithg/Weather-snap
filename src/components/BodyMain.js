import React from "react";
import { useGlobalContext } from "../context";
import Body from "./Body";

function BodyMain() {
  const { currentVideo } = useGlobalContext();
  if (currentVideo !== "") {
    return <Body />;
  }
}

export default BodyMain;
