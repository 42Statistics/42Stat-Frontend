import { DateTemplate } from '@shared/__generated__/graphql';

export function parseDateTemplate(
  str: string | null,
  defaultValue: DateTemplate,
) {
  if (
    str === DateTemplate.CurrWeek ||
    str === DateTemplate.CurrMonth ||
    str === DateTemplate.Total
  ) {
    return str;
  }
  return defaultValue;
}

export function parsePageNumber(str: string | null) {
  if (str === null) {
    return 1;
  }
  const number = Number(str);
  return number;
}

export function parsePromo(str: string | null) {
  if (str === null) {
    return null;
  }
  const number = Number(str);
  return number;
}
