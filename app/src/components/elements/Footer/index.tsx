import { TabletAndAbove, Mobile } from '@utils/responsive/Device';
import { TabletAndAboveFooter } from './TabletAndAbove';
import { MobileFooter } from './Mobile';

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
