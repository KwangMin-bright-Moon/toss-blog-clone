export const getYearMonthDate = (dates: Date): string => {
  const targetDate = new Date(dates);
  const year = targetDate.getFullYear();
  const month = targetDate.getMonth() + 1;
  const date = targetDate.getDate();
  const formattedMonth = month < 10 ? `0${month}` : `${month}`;

  return `${year}-${formattedMonth}-${date}`;
};
