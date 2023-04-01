export const isEnterKeyReleased = (
  e: React.KeyboardEvent<HTMLInputElement>,
) => {
  return e.key === 'Enter';
};
