import { DateTemplate } from '@shared/__generated__/graphql';

export const parseDateTemplate = (
  str: string | null,
  defaultValue: DateTemplate,
) => {
  switch (str) {
    case 'weekly':
      return DateTemplate.CurrWeek;
    case 'monthly':
      return DateTemplate.CurrMonth;
    case 'total':
      return DateTemplate.Total;
    default:
      return defaultValue;
  }
};

export const stringifyDateTemplate = (dateTemplate: DateTemplate) => {
  switch (dateTemplate) {
    case DateTemplate.CurrWeek:
      return 'weekly';
    case DateTemplate.CurrMonth:
      return 'monthly';
    case DateTemplate.Total:
    default:
      return 'total';
  }
};
