import { DateTemplate } from '@shared/__generated__/graphql';

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
