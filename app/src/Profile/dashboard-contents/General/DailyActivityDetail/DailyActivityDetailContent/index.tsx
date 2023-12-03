import { DailyGrassActivityDetail } from '@/Profile/dashboard-contents/General/DailyActivityDetail/DailyActivityDetailContent/DailyGrassActivityDetail';
import styled from '@emotion/styled';
import type { GetDailyActivityDetailRecordsQuery } from '@shared/__generated__/graphql';
import { VStack } from '@shared/ui-kit';

type DailyActivityDetailContentProps = {
  data?: GetDailyActivityDetailRecordsQuery;
  time: {
    timeRecord: number;
    date: string;
  };
};

export const DailyActivityDetailContent = ({
  data,
  time,
}: DailyActivityDetailContentProps) => {
  const { date, timeRecord } = time;

  return (
    <VStack w="100%" h="100%" spacing="2rem" align="start">
      <Layout>
        <VerticalDivider />
        {data ? (
          <DailyGrassActivityDetail time={timeRecord} data={data} />
        ) : null}
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

const VerticalDivider = styled.div`
  flex: 1;
  width: 2.5px;
  margin-left: 4rem;
  border-radius: 10px;
  background-color: #ccc; // Divider의 색상을 설정하세요
`;
