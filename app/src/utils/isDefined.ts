export const isDefined = <T>(argument: T | undefined | null): argument is T => {
  return argument != null;
};
