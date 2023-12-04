export const getFromAndToByYear = (year: number | null) => {
  switch (year) {
    case null:
      return getFromAndToByRecentYear();
    default:
      return getFromAndToByYearNumber(year);
  }
};

const getFromAndToByRecentYear = () => {
  const now = new Date();
  const from = new Date(
    now.getFullYear() - 1,
    now.getMonth(),
    now.getDate() + 1,
  );
  const to = new Date();

  return [from, to];
};

const getFromAndToByYearNumber = (year: number) => {
  const from = new Date(year, 0, 1);
  const to = new Date(year, 11, 31);

  return [from, to];
};
