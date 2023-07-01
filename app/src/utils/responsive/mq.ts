import facepaint from 'facepaint';

const breakpoints = [768, 1280];

export const mq = facepaint(
  breakpoints.map((bp) => `@media(min-width: ${bp}px)`),
);
