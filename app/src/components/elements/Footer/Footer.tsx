import { AboveTablet, Mobile } from '@/utils/responsive/Device';
import { AboveTabletFooter } from './AboveTabletFooter';
import { MobileFooter } from './MobileFooter';

export const Footer = () => {
  return (
    <>
      <AboveTablet>
        <AboveTabletFooter />
      </AboveTablet>
      <Mobile>
        <MobileFooter />
      </Mobile>
    </>
  );
};
