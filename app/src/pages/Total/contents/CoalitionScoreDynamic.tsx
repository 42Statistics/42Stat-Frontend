import { Spinner } from '@/components/common';
import { CoalitionDynamicChart } from '@/components/elements/charts/presets/CoalitionDynamicChart';
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

export const CoalitionScoreDynamic = () => {
  const { loading, error, data } = useQuery(GET_COALITION_SCORE_RECORD);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const result = data.getTotalPage.scoreRecords;
  const Datas: number[] = [];
  const labels: string[] = [];

  // 기간 label 작성부
  result[0].records.forEach(({ at }) => {
    labels.push(at.substr(2, 5).replace('-', '.'));
  });

  // 모든 value 하나의 배열에 담기
  result.forEach(({ coalition, records }, idx) => {
    records.forEach(({ value }) => {
      Datas.push(value);
    });
  });

  return (
    <CoalitionDynamicChart
      data={Datas}
      yUnit=""
      labels={labels}
      size="long"
      seriesName="코알리숑 점수"
    />
  );
};
