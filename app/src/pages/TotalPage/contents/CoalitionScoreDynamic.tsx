import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { CoalitionDynamicChart } from '@/components/elements/Chart';
import { dateFormatter } from '@/utils/dateFormatter';
import { useQuery } from '@apollo/client';

const GET_COALITION_SCORE_RECORD = gql(/* GraphQL */ `
  query getCoalitionScoreRecord {
    getTotalPage {
      scoreRecords {
        coalition {
          id
          name
        }
        records {
          at
          value
        }
      }
    }
  }
`);

export const CoalitionScoreDynamic = () => {
  const { loading, error, data } = useQuery(GET_COALITION_SCORE_RECORD);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { scoreRecords } = data.getTotalPage;
  const Datas: number[] = [];
  const labels: string[] = [];

  // 기간 label 작성부
  scoreRecords[0].records.forEach(({ at }) => {
    labels.push(dateFormatter(at, 'sm'));
  });

  // 모든 value 하나의 배열에 담기
  scoreRecords.forEach(({ coalition, records }, idx) => {
    records.forEach(({ value }) => {
      Datas.push(value);
    });
  });

  return (
    <CoalitionDynamicChart
      data={Datas}
      yUnit=""
      labels={labels}
      seriesName="코알리숑 점수"
    />
  );
};
