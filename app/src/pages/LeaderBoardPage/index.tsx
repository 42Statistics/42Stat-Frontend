import { VStack } from '@components/common';
import { Tab, TabPanel, Tabs } from '@components/common/Tab';
import { Seo } from '@components/elements/Seo';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import { ROUTES } from '@routes/ROUTES';
import { history } from '@utils/history';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  LeaderboardCoalitionScoreTab,
  LeaderboardEvalCountTab,
  LeaderboardExpIncrementTab,
  LeaderboardLevelTab,
} from './tabs';

type LeaderboardTabNames =
  | 'Level'
  | 'ExpIncrement'
  | 'CoalitionScore'
  | 'EvalCount';

// waterfall 방지를 위해 Tab은 lazy loading 하지 않겠습니다.
const LeaderboardPage = () => {
  const getSelectedTab = (tab: string | null): LeaderboardTabNames => {
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

  const [searchParams] = useSearchParams();
  const [selectedTab, setSelectedTab] = useState<LeaderboardTabNames>(
    getSelectedTab(searchParams.get('tab')),
  );
  const navigate = useNavigate();

  useEffect(() => {
    // 탭 간 앞으로 가기, 뒤로 가기
    history.listen((location) => {
      if (location.action === 'POP') {
        const searchParams = new URLSearchParams(location.location.search);
        setSelectedTab(getSelectedTab(searchParams.get('tab')));
      }
    });
  }, []);

  return (
    <VStack w="100%" spacing="5rem">
      <Tabs>
        <Tab
          selected={selectedTab === 'Level'}
          onClick={() => {
            setSelectedTab('Level');
            navigate(ROUTES.LEADERBOARD + '?tab=level');
          }}
        >
          레벨
        </Tab>
        <Tab
          selected={selectedTab === 'ExpIncrement'}
          onClick={() => {
            setSelectedTab('ExpIncrement');
            navigate(ROUTES.LEADERBOARD + '?tab=exp_increment');
          }}
        >
          경험치 증가량
        </Tab>
        <Tab
          selected={selectedTab === 'CoalitionScore'}
          onClick={() => {
            setSelectedTab('CoalitionScore');
            navigate(ROUTES.LEADERBOARD + '?tab=coalition_score');
          }}
        >
          코알리숑 스코어
        </Tab>
        <Tab
          selected={selectedTab === 'EvalCount'}
          onClick={() => {
            setSelectedTab('EvalCount');
            navigate(ROUTES.LEADERBOARD + '?tab=eval_count');
          }}
        >
          평가 횟수
        </Tab>
      </Tabs>
      <TabPanel show={selectedTab === 'Level'}>
        <LeaderboardLevelTab />
      </TabPanel>
      <TabPanel show={selectedTab === 'ExpIncrement'}>
        <LeaderboardExpIncrementTab />
      </TabPanel>
      <TabPanel show={selectedTab === 'CoalitionScore'}>
        <LeaderboardCoalitionScoreTab />
      </TabPanel>
      <TabPanel show={selectedTab === 'EvalCount'}>
        <LeaderboardEvalCountTab />
      </TabPanel>
    </VStack>
  );
};

const Head = () => {
  return <Seo title="랭킹" />;
};

export default withHead(withFooter(LeaderboardPage), Head);
