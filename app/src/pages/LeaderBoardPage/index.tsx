import { center } from '@components/common';
import { Tab, TabPanel, Tabs } from '@components/common/Tab';
import { Seo } from '@components/elements/Seo';
import styled from '@emotion/styled';
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

type LeaderBoardTabNames =
  | 'Level'
  | 'ExpIncrement'
  | 'CoalitionScore'
  | 'EvalCount';

// waterfall 방지를 위해 Tab은 lazy loading 하지 않겠습니다.
const LeaderBoardPage = () => {
  const getSelectedTab = (tab: string | null): LeaderBoardTabNames => {
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
  const [selectedTab, setSelectedTab] = useState<LeaderBoardTabNames>(
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
    <>
      <Tabs>
        <Tab
          selected={selectedTab === 'Level'}
          onClick={() => {
            setSelectedTab('Level');
            navigate(ROUTES.LEADERBOARD + '?tab=level');
          }}
        >
          레벨 랭킹
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
        <LeaderBoardDetailLayout>
          <LeaderboardLevelTab />
        </LeaderBoardDetailLayout>
      </TabPanel>
      <TabPanel show={selectedTab === 'ExpIncrement'}>
        <LeaderBoardDetailLayout>
          <LeaderboardExpIncrementTab />
        </LeaderBoardDetailLayout>
      </TabPanel>
      <TabPanel show={selectedTab === 'CoalitionScore'}>
        <LeaderBoardDetailLayout>
          <LeaderboardCoalitionScoreTab />
        </LeaderBoardDetailLayout>
      </TabPanel>
      <TabPanel show={selectedTab === 'EvalCount'}>
        <LeaderBoardDetailLayout>
          <LeaderboardEvalCountTab />
        </LeaderBoardDetailLayout>
      </TabPanel>
    </>
  );
};

const LeaderBoardDetailLayout = styled.div`
  ${center}
  padding: 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background-color: ${({ theme }) => theme.colors.mono.white};
`;

const Head = () => {
  return <Seo title="랭킹" />;
};

export default withHead(withFooter(LeaderBoardPage), Head);
