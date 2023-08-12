const options = {
  style: 'currency',
  currency: 'PYG',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
}

const formatCurrency = (currency: number | undefined): string => {
  if (currency !== undefined) {
    return currency.toLocaleString('es-PY', options)
  }
  return ''
}

export { formatCurrency }
