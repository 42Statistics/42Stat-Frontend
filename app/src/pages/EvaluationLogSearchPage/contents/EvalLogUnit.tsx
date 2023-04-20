import { GetEvalLogsQuery } from '@/__generated__/graphql';

type EvalLogUnitProps = {
  data: GetEvalLogsQuery['getEvalLogs'][0];
};

export const EvalLogUnit = ({ data }: EvalLogUnitProps) => {
  const { header, correctorReview, correctedsReview } = data;
  return (
    <>
      <div>{header.teamPreview.name}</div>
      <div>{header.corrector.login}</div>
      <div>{header.beginAt}</div>
      <div>{header.flag.name}</div>
      <div>{header.flag.isPositive}</div>
      <div>{correctorReview.mark}</div>
      <div>{correctorReview.review}</div>
      <div>{correctedsReview.mark}</div>
      <div>{correctedsReview.review}</div>
    </>
  );
};
