export const dateFormatter = (
  date: String | Date,
  size: 'sm' | 'lg' | 'xl',
): string => {
  if (size === 'sm') return String(date).substr(2, 5).replaceAll('-', '.');
  if (size === 'xl') {
    const dtmp = new Date(date.toString());
    return (
      String(date).substr(0, 10).replaceAll('-', '.') +
      ' ' +
      dtmp.getHours().toString().padStart(2, '0') +
      ':' +
      dtmp.getMinutes().toString().padStart(2, '0')
    );
  }
  return String(date).substr(0, 10).replaceAll('-', '.');
};
