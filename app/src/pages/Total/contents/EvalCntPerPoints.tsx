import { Spinner } from '@/components/common';
import { BarChart } from '@/components/elements/charts/presets/BarChart';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_EVAL_CNT_PER_POINTS = gql(/* GraphQL */ `
  query getEvalCntPerPoints {
    getTotalPage {
      evalCntPerPoints {
        evalCnt
        point
      }
    }
  }
`);

export const EvalCntPerPoints = () => {
  const { loading, error, data } = useQuery(GET_EVAL_CNT_PER_POINTS);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  const { evalCntPerPoints } = data.getTotalPage;

  const showDatas: string[] = [];
  const barDatas: number[] = [];
  const labels: string[] = [];

  let totalNum = 0;
  evalCntPerPoints.forEach(({ evalCnt, point }, idx) => {
    labels.push(point.toString() + '점');
    showDatas.push(evalCnt.toString());
    totalNum += evalCnt;
  });
  evalCntPerPoints.forEach(({ evalCnt }) => {
    barDatas.push(Math.round((evalCnt / totalNum) * 1000) / 10);
  });

  return (
    <BarChart
      data={barDatas}
      yUnit="%"
      showData={showDatas}
      labels={labels}
      size="lg"
      seriesName="인원수"
    />
  );
};

/*
  %% 비율 퍼센트와 실제 인원수를 동시에 보여주는 방식이 좋아서 일단 이대로함
  아래 코드 이용시 피그마와 동일하게 비율없이 수만 확인할 볼 수있음

  result.forEach(({ evalCnt, point }, idx) => {
    labels.push(point.toString() + '점');
    showDatas.push(evalCnt.toString());
    barDatas.push(evalCnt);
  });

  return (
    <>
      <BarChart
        data={barDatas}
        yUnit=""
        showData={showDatas}
        labels={labels}
        size="lg"
        seriesName="인원수"
      />
    </>
  );
*/
