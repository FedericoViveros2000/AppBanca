export const getDateDayMonth = () => {
  const date = new Date();
  const first_day_month = new Date(date.getFullYear(), date.getMonth(), 1);

  // Obtener el último día del mes actual
  const last_day_month = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const first_date = first_day_month.toISOString().split('T')[0]
  const last_date = last_day_month.toISOString().split('T')[0]

  return {
    first_date,
    last_date
  }
};
