import { style } from "@vanilla-extract/css";

export const button = style({
  background: "aquamarine",
  color: "pink",
  padding: "8px 16px",
  border: "none",
  ":hover": {
    background: "darkred",
  },
});
