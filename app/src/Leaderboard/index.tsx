import { Seo } from '@shared/components/Seo';
import { ROUTES } from '@shared/constants/ROUTES';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { Tab, TabPanel, Tabs, VStack } from '@shared/ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import LeaderboardCoalitionScoreTab from './tabs/CoalitionScore';
import LeaderboardEvalCountTab from './tabs/EvalCount';
import LeaderboardExpIncrementTab from './tabs/ExpIncrement';
import LeaderboardLevelTab from './tabs/Level';

type LeaderboardTabNames =
  | 'Level'
  | 'ExpIncrement'
  | 'CoalitionScore'
  | 'EvalCount';

// waterfall 방지를 위해 Tab은 lazy loading 하지 않겠습니다.
const LeaderboardPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const getSelectedTab = (tab?: string | null): LeaderboardTabNames => {
    switch (tab) {
      case 'level':
        return 'Level';
      case 'exp_increment':
        return 'ExpIncrement';
      case 'coalition_score':
        return 'CoalitionScore';
      case 'eval_count':
        return 'EvalCount';
      default:
        return 'Level';
    }
  };

  const tab = getSelectedTab(params.tab);

  return (
    <VStack w="100%" spacing="5rem">
      <Tabs>
        <Tab
          selected={tab === 'Level'}
          onClick={() => navigate(`${ROUTES.LEADERBOARD_ROOT}/level`)}
        >
          레벨
        </Tab>
        <Tab
          selected={tab === 'ExpIncrement'}
          onClick={() => navigate(`${ROUTES.LEADERBOARD_ROOT}/exp_increment`)}
        >
          경험치 증가량
        </Tab>
        <Tab
          selected={tab === 'CoalitionScore'}
          onClick={() => navigate(`${ROUTES.LEADERBOARD_ROOT}/coalition_score`)}
        >
          코알리숑 스코어
        </Tab>
        <Tab
          selected={tab === 'EvalCount'}
          onClick={() => navigate(`${ROUTES.LEADERBOARD_ROOT}/eval_count`)}
        >
          평가 횟수
        </Tab>
      </Tabs>
      <TabPanel show={tab === 'Level'}>
        <LeaderboardLevelTab />
      </TabPanel>
      <TabPanel show={tab === 'ExpIncrement'}>
        <LeaderboardExpIncrementTab />
      </TabPanel>
      <TabPanel show={tab === 'CoalitionScore'}>
        <LeaderboardCoalitionScoreTab />
      </TabPanel>
      <TabPanel show={tab === 'EvalCount'}>
        <LeaderboardEvalCountTab />
      </TabPanel>
    </VStack>
  );
};

const Head = () => {
  return <Seo title="랭킹" />;
};

export default withHead(withFooter(LeaderboardPage), Head);