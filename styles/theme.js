import lighten from "polished/lib/color/lighten";
import darken from "polished/lib/color/darken";
import shade from "polished/lib/color/shade";

import { bodyFont, headerFont, monospace } from "../utilities/fonts";

const colors = {
  primary: "mediumorchid",
  secondary: "orchid",
  dark: "indigo",
  light: "thistle",
  paper: "white",
  dimgray: "dimgray",
  shadow: "rgba(0, 0, 0, 0.1)"
};

const fonts = {
  base: [...bodyFont].join(","),
  header: [...headerFont].join(","),
  monospace: [...monospace].join(",")
};

export default {
  colors,
  fonts
};
