import React from "react";
import { TIME_LIMIT } from "./constants";

export default function Timer({ timeLeft }) {
  const classes = ["timer"];
  if (timeLeft / TIME_LIMIT <= 0.33) {
    classes.push("red");
  } else if (timeLeft / TIME_LIMIT <= 0.5) {
    classes.push("yellow");
  }
  return <div className={classes.join(" ")}>{timeLeft}</div>;
}
