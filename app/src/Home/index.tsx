import { Footer } from '@core/components/Footer';

import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { H2BoldText, VStack } from '@shared/ui-kit';
import { Hero } from '@shared/components/Hero';

import { homeCircleDashboardRows } from '@/Home/dashboard-frames/homeCircleDashboardRows';
import { homeCoalitionDashboardRows } from '@/Home/dashboard-frames/homeCoalitionDashboardRows';
import { homePageDashboardContents } from '@/Home/dashboard-frames/homePageDashboardContents';
import { homeRecordDashboardRows } from '@/Home/dashboard-frames/homeRecordDashboardRows';
import { homeStatusDashboardRows } from '@/Home/dashboard-frames/homeStatusDashboardRows';

const HomePage = () => {
  return (
    <>
      <Seo title="홈" />
      <VStack w="100%" align="start" spacing="4rem">
        <Hero />
        <VStack w="100%" align="start" spacing="6rem">
          <VStack w="100%" align="start" spacing="2rem">
            <H2BoldText>✨ 현재 여행 현황</H2BoldText>
            <Dashboard
              contents={homePageDashboardContents}
              defaultRows={homeStatusDashboardRows}
            />
          </VStack>
          <VStack w="100%" align="start" spacing="2rem">
            <H2BoldText>🚀 이너서클 · 멤버 관련 통계</H2BoldText>
            <Dashboard
              contents={homePageDashboardContents}
              defaultRows={homeCircleDashboardRows}
            />
          </VStack>
          <VStack w="100%" align="start" spacing="2rem">
            <H2BoldText>🏅 역대 기록</H2BoldText>
            <Dashboard
              contents={homePageDashboardContents}
              defaultRows={homeRecordDashboardRows}
            />
          </VStack>
          <VStack w="100%" align="start" spacing="2rem">
            <H2BoldText>🥊 코알리숑 비교</H2BoldText>
            <Dashboard
              contents={homePageDashboardContents}
              defaultRows={homeCoalitionDashboardRows}
            />
          </VStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};

export default HomePage;
