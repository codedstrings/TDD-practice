export function capitalize(str) {
  if (!str || typeof str !== "string") {
    throw new Error("Invalid input, expected a string");
  }
  return str[0].toUpperCase() + str.slice(1);
}
