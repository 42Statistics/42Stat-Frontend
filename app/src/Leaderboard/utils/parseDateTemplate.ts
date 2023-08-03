import { DateTemplate } from '@shared/__generated__/graphql';

export const parseDateTemplate = (
  str: string | null,
  defaultValue: DateTemplate,
) => {
  switch (str) {
    case DateTemplate.CurrWeek:
    case DateTemplate.CurrMonth:
    case DateTemplate.Total:
      return str;
    default:
      return defaultValue;
  }
};
