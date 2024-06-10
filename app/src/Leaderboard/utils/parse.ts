import { DateTemplate } from '@shared/__generated__/graphql';

export const parseDateTemplate = (
  str: string | null,
  defaultValue: DateTemplate,
) => {
  if (
    str === DateTemplate.CurrWeek ||
    str === DateTemplate.CurrMonth ||
    str === DateTemplate.Total
  ) {
    return str;
  }
  return defaultValue;
};

export const parsePageNumber = (str: string | null) => {
  if (str === null) {
    return 1;
  }
  const number = Number(str);
  return number;
};

export const parsePromo = (str: string | null) => {
  if (str === null) {
    return null;
  }
  const number = Number(str);
  return number;
};
