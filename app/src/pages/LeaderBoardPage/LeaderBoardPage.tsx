import { Text, center } from '@components/common';
import { Tab, TabList, TabPanel, Tabs } from '@components/common/Tab';
import { Seo } from '@components/elements/Seo';
import styled from '@emotion/styled';
import { withFooter } from '@hoc/withFooter';
import { withHead } from '@hoc/withHead';
import {
  CoalitionScoreRankTab,
  EvalCountRankTab,
  ExpIncrementRankTab,
  LevelRankTab,
} from './tabs';

// waterfall 방지를 위해 Tab은 lazy loading 하지 않겠습니다.
const LeaderBoardPage = () => {
  return (
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
      <TabPanel>
        <LeaderBoardDetailLayout>
          <EvalCountRankTab />
        </LeaderBoardDetailLayout>
      </TabPanel>
    </Tabs>
  );
};

const LeaderBoardDetailLayout = styled.div`
  ${center}
  padding: 2rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;

const Head = () => {
  return <Seo title="랭킹" />;
};

export default withHead(withFooter(LeaderBoardPage), Head);
