import { ReactComponent as SmileyCheekySvg } from '@/Profile/assets/blackhole/smiley-cheeky.svg';
import { ReactComponent as SmileySadSvg } from '@/Profile/assets/blackhole/smiley-sad.svg';
import { ReactComponent as SmileyScaredSvg } from '@/Profile/assets/blackhole/smiley-scared.svg';
import { ReactComponent as SmileySleepySvg } from '@/Profile/assets/blackhole/smiley-sleepy.svg';
import { ReactComponent as SmileySmile1Svg } from '@/Profile/assets/blackhole/smiley-smile-1.svg';

import type { Theme } from '@emotion/react';

export const getBlackholeColorAndText = (
  theme: Theme,
  daysLeft: number | null,
) => {
  if (daysLeft === null)
    return {
      color: theme.colors.mono.black,
      Svg: SmileyCheekySvg,
      text: 'Never',
    };
  if (daysLeft >= 365)
    return {
      color: '#3db618',
      Svg: SmileySleepySvg,
      text: `${daysLeft.toLocaleString()} days left`,
    };
  if (daysLeft >= 42)
    return {
      color: '#3db618',
      Svg: SmileySmile1Svg,
      text: `${daysLeft.toLocaleString()} days left`,
    };
  if (daysLeft >= 19)
    return {
      color: '#d7a900',
      Svg: SmileyScaredSvg,
      text: `${daysLeft.toLocaleString()} days left`,
    };
  if (daysLeft > 0)
    return {
      color: '#ff0303',
      Svg: SmileySadSvg,
      text: `${daysLeft.toLocaleString()} days left`,
    };
  if (daysLeft === 0)
    return { color: '#ff0303', Svg: SmileySadSvg, text: 'a few hours left' };
  return {
    color: '#ff0303',
    Svg: null,
    text: 'Absorbed by Black Hole',
  };
};
