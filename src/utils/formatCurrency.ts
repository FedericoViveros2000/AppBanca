const options = {
  style: "currency",
  currency: "PYG",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
};

const formatCurrency = (currency: number): string =>
  currency.toLocaleString("es-PY", options);

export { formatCurrency };
