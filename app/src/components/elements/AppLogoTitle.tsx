import { HStack } from '@/components/common';
import { AppLogoSize } from '@/utils/types/AppLogoSize';
import { AppLogoSvg } from '@/assets/AppLogoSvg';
import { AppTitleSvg } from '@/assets/AppTitleSvg';

type AppLogoTitleProps = {
  size: AppLogoSize;
};

export const AppLogoTitle = ({ size }: AppLogoTitleProps) => {
  return (
    <HStack spacing={size === 'sm' ? '0.6rem' : '1.2rem'}>
      <AppLogoSvg width={size === 'sm' ? '2.8rem' : '3.2rem'} />
      <AppTitleSvg width={size === 'sm' ? '10rem' : '13.5rem'} />
    </HStack>
  );
};
