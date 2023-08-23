import { BREAKPOINT } from '@shared/constants/responsive';
import facepaint from 'facepaint';

const breakpoints = [BREAKPOINT.MOBILE, BREAKPOINT.TABLET];

export const mq = facepaint(
  breakpoints.map((bp) => `@media(min-width: ${bp}px)`),
);
