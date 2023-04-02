import { Spinner } from '@/components/common';
import { CoalitionStackChart } from '@/components/elements/charts/presets/CoalitionStackChart';
import { gql } from '@/__generated__';
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

export const CoalitionScoreRecord = () => {
  const { loading, error, data } = useQuery(GET_COALITION_SCORE_RECORD);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { scoreRecords } = data.getTotalPage;
  const showDatas: string[] = [];
  const Datas: number[] = [];
  const labels: string[] = ['건', '곤', '감', '리'];

  scoreRecords.forEach(({ coalition, records }, idx) => {
    let total = 0;
    records.forEach(({ value }) => {
      total += value;
    });
    Datas.push(total);
    showDatas.push(total.toString());
  });

  return (
    <CoalitionStackChart
      data={Datas}
      yUnit=""
      showData={showDatas}
      labels={labels}
      size="lg"
      seriesName="합산점수"
    />
  );
};
