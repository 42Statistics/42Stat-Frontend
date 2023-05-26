import { Dashboard } from '@/components/templates/Dashboard';
import { Helmet } from 'react-helmet-async';
import { useHomePageDashboard } from './hooks';
import { AboveTablet, Mobile } from '@/utils/responsive/Device';
import { AboveTabletFooter } from '@/components/elements/Footer/AboveTabletFooter';
import { MobileFooter } from '@/components/elements/Footer/MobileFooter';

export const HomePage = () => {
  // const user = useAtomValue(userAtom);

  return (
    <>
      <Helmet>
        <title>홈 | 42Stat</title>
      </Helmet>
      {/* <VStack
        w="100%"
        align="start"
        spacing="1rem"
        style={{ marginBottom: '4rem' }}
      >
        <H2BoldText>반가워요, {user.login} 👋</H2BoldText>
        <Text>2일 전에 push_swap을 통과하셨네요! 축하드려요 🎉</Text>
      </VStack> */}
      <Dashboard {...useHomePageDashboard()} />
      <AboveTablet>
        <AboveTabletFooter />
      </AboveTablet>
      <Mobile>
        <MobileFooter />
      </Mobile>
    </>
  );
};
