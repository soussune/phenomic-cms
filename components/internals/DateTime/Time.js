import React from "react";
import { compose, setDisplayName, withProps } from "recompose";
import { format as formatDate, parse } from "date-fns";

const TimeComponent = ({ value = new Date(), format, children }) => {
  const date = parse(value);

  if (typeof format === "function") {
    format = format(value);
  }

  return (
    <time dateTime={formatDate(date)}>
      {children || formatDate(date, format)}
    </time>
  );
};

export const createTime = (displaName, defaultFormat) =>
  compose(
    setDisplayName(displaName),
    withProps(({ format }) => ({ format: format || defaultFormat }))
  )(TimeComponent);
