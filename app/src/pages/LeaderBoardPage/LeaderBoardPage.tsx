import { Text, center } from '@/components/common';
import { Tab, TabList, TabPanel, Tabs } from '@/components/common/Tab';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';
import {
  CoalitionScoreRankTab,
  ExpIncrementRankTab,
  LevelRankTab,
} from './tabs';

export const LeaderBoardPage = () => {
  return (
    <>
      <Helmet>
        <title>랭킹 | 42Stat</title>
      </Helmet>
      <Tabs>
        <TabList>
          <Tab>
            <Text>레벨 랭킹</Text>
          </Tab>
          <Tab>
            <Text>경험치 증가량</Text>
          </Tab>
          <Tab>
            <Text>코알리숑 스코어</Text>
          </Tab>
          <Tab>
            <Text>평가 횟수</Text>
          </Tab>
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
