import { center } from '@components/common';
import { Tab, TabPanel, Tabs } from '@components/common/Tab';
import { Seo } from '@components/elements/Seo';
import styled from '@emotion/styled';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import { useState } from 'react';
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
  const [selectedTab, setSelectedTab] = useState<LeaderBoardTabNames>('Level');

  return (
    <>
      <Tabs>
        <Tab
          selected={selectedTab === 'Level'}
          onClick={() => setSelectedTab('Level')}
        >
          레벨 랭킹
        </Tab>
        <Tab
          selected={selectedTab === 'ExpIncrement'}
          onClick={() => setSelectedTab('ExpIncrement')}
        >
          경험치 증가량
        </Tab>
        <Tab
          selected={selectedTab === 'CoalitionScore'}
          onClick={() => setSelectedTab('CoalitionScore')}
        >
          코알리숑 스코어
        </Tab>
        <Tab
          selected={selectedTab === 'EvalCount'}
          onClick={() => setSelectedTab('EvalCount')}
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
