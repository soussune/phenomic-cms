export const bodyFont = new Set([
  "-apple-system",
  "BlinkMacSystemFont",
  "'Segoe UI'",
  "Helvetica",
  "Arial",
  "sans-serif",
  "'Apple Color Emoji'",
  "'Segoe UI Emoji'",
  "'Segoe UI Symbol'"
]);

export const headerFont = new Set(["'Avenir Next'", ...[...bodyFont]]);

export const monospace = new Set([
  "'Operator Mono SSm A'",
  "'Operator Mono SSm B'",
  "monospace"
]);
