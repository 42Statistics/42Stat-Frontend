export const getDailyProgrammingQuote = (): string => {
  const quotes = [
    '머리로 프로그래밍하고 손으로 디버깅하라.',
    '실패에 대해 걱정하지 마라. 한번만 제대로 하면 된다.',
  ];

  const today = new Date();
  const day = today.getDate();
  const quoteIndex = day % quotes.length;

  return quotes[quoteIndex];
};
