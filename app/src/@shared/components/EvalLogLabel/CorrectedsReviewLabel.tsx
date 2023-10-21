import { EvalLogLabel } from '@shared/components/EvalLogLabel';

type CorrectedsReviewLabelProps = {
  number?: number; // isNone일 때만 undefined 가능
  isNone?: boolean;
};

export const CorrectedsReviewLabel = ({
  number = 0,
  isNone = false,
}: CorrectedsReviewLabelProps) => {
  const type = computeType(number, isNone);

  return (
    <EvalLogLabel type={type}>
      {!isNone ? `${number.toString()} / 5` : '- / 5'}
    </EvalLogLabel>
  );
};

const computeType = (number: number, isNone: boolean) => {
  if (isNone) return 'none';
  if (number >= 5) return 'positive';
  if (number >= 3) return 'neutral';
  return 'negative';
};
