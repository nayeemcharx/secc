import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";

export const ParallaxBackground = ({ offset, factor, backgroundColor }) => (
  <ParallaxLayer offset={offset} factor={factor} style={{ backgroundColor }} />
);
