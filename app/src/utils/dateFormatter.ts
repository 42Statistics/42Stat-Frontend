export const dateFormatter = (
  date: String | Date,
  size: 'sm' | 'lg',
): string => {
  if (size === 'sm') return String(date).substr(2, 5).replaceAll('-', '.');
  return String(date).substr(0, 10).replaceAll('-', '.');
};
