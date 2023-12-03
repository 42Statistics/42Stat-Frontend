import styled from '@emotion/styled';
import { GetDailyActivityDetailRecordsQuery } from '@shared/__generated__/graphql';
import { DailyCorrected } from './DailyCorrected';
import { DailyCorrector } from './DailyCorrector';
import { DailyEvent } from './DailyEvent';
import { DailyLogTime } from './DailyLogTime';

export const DailyGrassActivityDetail = ({
  data,
  time,
}: {
  data: GetDailyActivityDetailRecordsQuery;
  time: number;
}) => {
  return (
    <Layout>
      <DailyLogTime time={time} />
      {data.getPersonalGeneral.dailyActivityDetailRecords.map((item, index) => {
        if ('teamId' in item) {
          if (item.type === 'CORRECTED')
            return <DailyCorrected key={index} data={item} />;
          else return <DailyCorrector key={index} data={item} />;
        } else {
          return <DailyEvent key={index} data={item} />;
        }
      })}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  margin-left: 2.4rem;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;
