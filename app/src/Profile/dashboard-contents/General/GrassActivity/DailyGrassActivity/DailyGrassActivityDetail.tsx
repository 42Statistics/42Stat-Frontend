import styled from '@emotion/styled';
import { DailyLogTime } from './DailyLogTime';
import { DailyCorrector } from './DailyCorrector';
import { DailyCorrected } from './DailyCorrected';
import { DailyEvent } from './DailyEvent';

export const DailyGrassActivityDetail = () => {
  const data = [
    {
      type: 'CORRECTED',
      teamId: 4560302,
      leaderLogin: 'seseo',
      projectName: 'webserv',
      beginAt: '2023-01-17T18:45:00.000Z',
      filledAt: '2023-01-17T20:09:43.505Z',
    },
    {
      type: 'CORRECTOR',
      teamId: 4631102,
      leaderLogin: 'sanghyeo',
      projectName: 'Libft',
      beginAt: '2023-01-20T12:45:00.000Z',
      filledAt: '2023-01-20T13:15:44.262Z',
    },
    {
      type: 'EVENT',
      name: '학장님과 교육생간의 간담회(3월)',
      location: '지하1층 오픈스튜디오',
      beginAt: '2023-03-10T03:00:00.000Z',
      endAt: '2023-03-10T04:00:00.000Z',
    },
    {
      type: 'EVENT',
      name: '학장님과 교육생간의 간담회(3월)',
      location: '지하1층 오픈스튜디오',
      beginAt: '2023-03-10T03:00:00.000Z',
      endAt: '2023-03-10T04:00:00.000Z',
    },
    {
      type: 'EVENT',
      name: '학장님과 교육생간의 간담회(3월)',
      location: '지하1층 오픈스튜디오',
      beginAt: '2023-03-10T03:00:00.000Z',
      endAt: '2023-03-10T04:00:00.000Z',
    },
  ];

  return (
    <Layout>
      <DailyLogTime />
      {data.map((item, index) => {
        if (item.type === 'CORRECTED') {
          return <DailyCorrected key={index} data={item} />;
        } else if (item.type === 'EVENT') {
          return <DailyEvent key={index} data={item} />;
        } else {
          return <DailyCorrector key={index} data={item} />;
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
