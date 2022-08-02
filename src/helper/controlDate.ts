export const ControlDate = (date: Date) => {
  const controledYear = date.getFullYear();
  const controledMonth =
    date.getMonth().toString().padStart(2, "0") !== "00"
      ? date.getMonth().toString().padStart(2, "0")
      : "10";
  const controledDay =
    date.getDay().toString().padStart(2, "0") !== "00"
      ? date.getDay().toString().padStart(2, "0")
      : "10";

  return { controledDay, controledMonth, controledYear };
};
