import { TabletAndAbove, Mobile } from '@utils/responsive/Device';
import { TabletAndAboveFooter } from './TabletAndAboveFooter';
import { MobileFooter } from './MobileFooter';

export const Footer = () => {
  return (
    <>
      <TabletAndAbove>
        <TabletAndAboveFooter />
      </TabletAndAbove>
      <Mobile>
        <MobileFooter />
      </Mobile>
    </>
  );
};
