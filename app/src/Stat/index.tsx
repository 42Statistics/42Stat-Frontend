import { Footer } from '@core/components/Footer';

import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { H2BoldText, VStack } from '@shared/ui-kit';

import { statCircleDashboardRows } from '@/Stat/dashboard-frames/statCircleDashboardRows';
import { statCoalitionDashboardRows } from '@/Stat/dashboard-frames/statCoalitionDashboardRows';
import { statPageDashboardContents } from '@/Stat/dashboard-frames/statPageDashboardContents';
import { statRecordDashboardRows } from '@/Stat/dashboard-frames/statRecordDashboardRows';
import { statStatusDashboardRows } from '@/Stat/dashboard-frames/statStatusDashboardRows';

const StatPage = () => {
  return (
    <>
      <Seo title="통계" />
      <VStack w="100%" align="start" spacing="4rem">
        <VStack w="100%" align="start" spacing="6rem">
          <VStack w="100%" align="start" spacing="2rem">
            <H2BoldText>✨ 현재 여행 현황</H2BoldText>
            <Dashboard
              contents={statPageDashboardContents}
              defaultRows={statStatusDashboardRows}
            />
          </VStack>
          <VStack w="100%" align="start" spacing="2rem">
            <H2BoldText>🚀 이너서클 · 멤버 관련 통계</H2BoldText>
            <Dashboard
              contents={statPageDashboardContents}
              defaultRows={statCircleDashboardRows}
            />
          </VStack>
          <VStack w="100%" align="start" spacing="2rem">
            <H2BoldText>🏅 역대 기록</H2BoldText>
            <Dashboard
              contents={statPageDashboardContents}
              defaultRows={statRecordDashboardRows}
            />
          </VStack>
          <VStack w="100%" align="start" spacing="2rem">
            <H2BoldText>🥊 코알리숑 비교</H2BoldText>
            <Dashboard
              contents={statPageDashboardContents}
              defaultRows={statCoalitionDashboardRows}
            />
          </VStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};

export default StatPage;
