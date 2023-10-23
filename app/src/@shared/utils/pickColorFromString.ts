export const pickColorFromString = (
  str: string,
  brightness: number,
  range: number,
) => {
  let hash = 0;
  let color = '#';

  str.split('').forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });

  for (let i = 0; i < 3; i++) {
    const value = (((hash >> (i * 8)) & 0xff) % range) + brightness;
    color += value.toString(16).padStart(2, '0');
  }
  return color;
};
