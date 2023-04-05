export const getDateTime = (
  dateString: string = new Date().toISOString(),
): DateTime => {
  const now = new Date(dateString);

  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 0부터 시작하므로 1을 더함
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  return { year, month, day, hour, minute, second };
};
