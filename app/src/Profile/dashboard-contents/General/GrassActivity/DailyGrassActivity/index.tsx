import styled from '@emotion/styled';
import type { GetPersonalActivityLogQuery } from '@shared/__generated__/graphql';
import { HStack, Text, VStack } from '@shared/ui-kit';
import { DailyGrassActivityDetail } from '@/Profile/dashboard-contents/General/GrassActivity/DailyGrassActivity/DailyGrassActivityDetail';

type DailyGrassActivityProps = {
  data?: GetPersonalActivityLogQuery;
  time: {
    timeRecord: number;
    date: string;
  };
};

export const DailyGrassActivity = ({ data, time }: DailyGrassActivityProps) => {
  const date = new Date(time.date).toLocaleDateString();

  if (!data) return null;

  return (
    <VStack w="100%" h="100%" spacing="2rem" align="start">
      <HStack
        w="100%"
        spacing="1rem"
        align="start"
        style={{ marginLeft: '1rem' }}
      >
        <Text>{date}</Text>
        <Divider />
      </HStack>
      <Layout>
        <VerticalDivider />
        <DailyGrassActivityDetail time={time.timeRecord} data={data} />
      </Layout>
    </VStack>
  );
};

const Layout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;

const Divider = styled.div`
  flex: 1; // Divide the remaining space
  height: 1px;
  margin-top: 1rem;
  margin-right: 1rem;
  background-color: #ccc; // Divider의 색상을 설정하세요
`;

const VerticalDivider = styled.div`
  flex: 1;
  width: 2.5px;
  margin-left: 4rem;
  border-radius: 10px;
  background-color: #ccc; // Divider의 색상을 설정하세요
`;
