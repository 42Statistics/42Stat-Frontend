import { AppLogoSvg } from '@shared/assets/AppLogoSvg';
import { AppTitleSvg } from '@shared/assets/AppTitleSvg';
import { HStack } from '@components/common';

type AppLogoSize = 'sm' | 'md';

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
