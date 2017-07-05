import React from "react";
import { distanceInWordsToNow } from "date-fns";

const DEFAULT_OPTIONS = {
  addSuffix: true
};

export const Relative = ({
  value = new Date(),
  children,
  options = DEFAULT_OPTIONS
}) =>
  <time dateTime={value.toISOString()}>
    {children || distanceInWordsToNow(value, options)}
  </time>;
