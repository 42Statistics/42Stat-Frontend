import { Dashboard } from '@shared/components/Dashboard';
import { Seo } from '@shared/components/Seo';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { H2BoldText, VStack } from '@shared/ui-kit';
import { useHomeCircleDashboard } from './dashboard-hooks/useHomeCircleDashboard';
import { useHomeCoalitionDashboard } from './dashboard-hooks/useHomeCoalitionDashboard';
import { useHomeHeroDashboard } from './dashboard-hooks/useHomeHeroDashboard';
import { useHomeRecordDashboard } from './dashboard-hooks/useHomeRecordDashboard';
import { useHomeStatusDashboard } from './dashboard-hooks/useHomeStatusDashboard';

const HomePage = () => {
  return (
    <VStack w="100%" align="start" spacing="6rem">
      <Dashboard {...useHomeHeroDashboard()} />
      <VStack w="100%" align="start" spacing="2rem">
        <H2BoldText>👋 실시간 여행 현황</H2BoldText>
        <Dashboard {...useHomeStatusDashboard()} />
      </VStack>
      <VStack w="100%" align="start" spacing="2rem">
        <H2BoldText>🚀 이너서클 · 멤버 관련 통계</H2BoldText>
        <Dashboard {...useHomeCircleDashboard()} />
      </VStack>
      <VStack w="100%" align="start" spacing="2rem">
        <H2BoldText>🏅 역대 기록</H2BoldText>
        <Dashboard {...useHomeRecordDashboard()} />
      </VStack>
      <VStack w="100%" align="start" spacing="2rem">
        <H2BoldText>🥊 코알리숑 비교</H2BoldText>
        <Dashboard {...useHomeCoalitionDashboard()} />
      </VStack>
    </VStack>
  );
};

const Head = () => {
  return <Seo title="홈" />;
};

export default withHead(withFooter(HomePage), Head);
