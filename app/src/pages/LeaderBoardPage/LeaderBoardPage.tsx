import { center } from '@/components/common';
import { Tab, TabList, TabPanel, Tabs } from '@/components/common/Tab';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import {
  CoalitionScoreRankTab,
  CorrectionPointRankTab,
  EvalCntRankTab,
  ExpIncrementRankTab,
  LevelRankTab,
  WalletRankTab,
} from './tabs';

export const LeaderBoardPage = () => {
  return (
    <>
      <Helmet>
        <title>랭킹 | 42Stat</title>
      </Helmet>
      <Tabs>
        <TabList>
          <Tab>레벨 랭킹</Tab>
          <Tab>경험치 증가량</Tab>
          <Tab>코알리숑 스코어</Tab>
          <Tab>평가 횟수</Tab>
          <Tab>보유 평가 포인트</Tab>
          <Tab>보유 월렛</Tab>
        </TabList>
        <TabPanel>
          <LeaderBoardDetailLayout>
            <LevelRankTab />
          </LeaderBoardDetailLayout>
        </TabPanel>
        <TabPanel>
          <LeaderBoardDetailLayout>
            <ExpIncrementRankTab />
          </LeaderBoardDetailLayout>
        </TabPanel>
        <TabPanel>
          <LeaderBoardDetailLayout>
            <CoalitionScoreRankTab />
          </LeaderBoardDetailLayout>
        </TabPanel>
        <TabPanel>
          <LeaderBoardDetailLayout>
            <EvalCntRankTab />
          </LeaderBoardDetailLayout>
        </TabPanel>
        <TabPanel>
          <LeaderBoardDetailLayout>
            <CorrectionPointRankTab />
          </LeaderBoardDetailLayout>
        </TabPanel>
        <TabPanel>
          <LeaderBoardDetailLayout>
            <WalletRankTab />
          </LeaderBoardDetailLayout>
        </TabPanel>
      </Tabs>
    </>
  );
};

const LeaderBoardDetailLayout = styled.div`
  ${center}
  padding: 2rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;
