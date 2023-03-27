import { HStack } from '@/components/common';
import { AppLogoSize } from '@/utils/types/AppLogoSize';
import { AppLogoSvg } from '@/assets/AppLogoSvg';
import { AppTitleSvg } from '@/assets/AppTitleSvg';

type AppLogoTitleProps = {
  size: AppLogoSize;
};

// FIXME: Safari에서는 svg의 width로 rem을 넣으면 에러가 발생한다.
export const AppLogoTitle = ({ size }: AppLogoTitleProps) => {
  return (
    <HStack spacing={size === 'sm' ? '0.6rem' : '1.2rem'}>
      <AppLogoSvg width={size === 'sm' ? '28px' : '32px'} />
      <AppTitleSvg width={size === 'sm' ? '100px' : '135px'} />
    </HStack>
  );
};
