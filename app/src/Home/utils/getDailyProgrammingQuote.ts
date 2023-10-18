import { QUOTES } from '../constants/quotes';

export const getDailyProgrammingQuote = (): string => {
  const today = new Date();
  const date = today.getDate();
  const quoteIndex = date % QUOTES.length;

  return QUOTES[quoteIndex];
};
