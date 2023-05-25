import { AppLogoSvg } from '@/assets/AppLogoSvg';
import { AppTitleSvg } from '@/assets/AppTitleSvg';
import { HStack } from '@/components/common';
import type { AppLogoSize } from '@/utils/types/AppLogoSize';

type AppLogoTitleProps = {
  size: AppLogoSize;
  color?: string;
};

// Safari에서는 svg의 width로 rem을 넣으면 에러가 발생한다.
export const AppLogoTitle = ({ size, color }: AppLogoTitleProps) => {
  return (
    <HStack spacing={size === 'sm' ? '0.6rem' : '1.2rem'}>
      <AppLogoSvg width={size === 'sm' ? '28px' : '32px'} fill={color} />
      <AppTitleSvg width={size === 'sm' ? '100px' : '135px'} fill={color} />
    </HStack>
  );
};

export const AppLogoTitleButton = () => {
  // AppLogo를 눌렀을 때는 반드시 뭔가 반응이 있어야 할 것 같아서, Link -> a
  return (
    <a href="/">
      <AppLogoTitle size="sm" />
    </a>
  );
};
