const rub = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
});

export const toRub = (number: Number | string) => rub.format(Number(number));
