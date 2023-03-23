import { HStack } from '@/styles/components';
import { AppLogoSize } from '@/utils/types/AppLogoSize';
import { AppLogoSvg } from './AppLogoSvg';
import { AppTitleSvg } from './AppTitleSvg';

type AppLogoTitleProps = {
  size: AppLogoSize;
};

export const AppLogoTitle = ({ size }: AppLogoTitleProps) => {
  return (
    <HStack spacing={size === 'sm' ? '0.6rem' : '1.2rem'}>
      <AppLogoSvg size={size} />
      <AppTitleSvg size={size} />
    </HStack>
  );
};
