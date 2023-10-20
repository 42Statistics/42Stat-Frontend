import facepaint from 'facepaint';

import { BREAKPOINT } from '@shared/constants/responsive';

const breakpoints = [BREAKPOINT.MOBILE, BREAKPOINT.TABLET];

export const mq = facepaint(
  breakpoints.map((bp) => `@media(min-width: ${bp}px)`),
);
