import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { H2BoldText, VStack } from '@shared/ui-kit';
import { Hero } from './components/Hero';
import { homeCircleDashboardRows } from './dashboard-frames/homeCircleDashboardRows';
import { homeCoalitionDashboardRows } from './dashboard-frames/homeCoalitionDashboardRows';
import { homePageDashboardContents } from './dashboard-frames/homePageDashboardContents';
import { homeRecordDashboardRows } from './dashboard-frames/homeRecordDashboardRows';
import { homeStatusDashboardRows } from './dashboard-frames/homeStatusDashboardRows';

const HomePage = () => {
  return (
    <VStack w="100%" align="start" spacing="4rem">
      <Hero />
      <VStack w="100%" align="start" spacing="6rem">
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>✨ 현재 여행 현황</H2BoldText>
          <Dashboard
            contents={homePageDashboardContents}
            rows={homeStatusDashboardRows}
          />
        </VStack>
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>🚀 이너서클 · 멤버 관련 통계</H2BoldText>
          <Dashboard
            contents={homePageDashboardContents}
            rows={homeCircleDashboardRows}
          />
        </VStack>
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>🏅 역대 기록</H2BoldText>
          <Dashboard
            contents={homePageDashboardContents}
            rows={homeRecordDashboardRows}
          />
        </VStack>
        <VStack w="100%" align="start" spacing="2rem">
          <H2BoldText>🥊 코알리숑 비교</H2BoldText>
          <Dashboard
            contents={homePageDashboardContents}
            rows={homeCoalitionDashboardRows}
          />
        </VStack>
      </VStack>
    </VStack>
  );
};

const Head = () => {
  return <Seo title="홈" />;
};

export default withHead(withFooter(HomePage), Head);
