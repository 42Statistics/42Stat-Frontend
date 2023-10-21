import { EvalLogLabel } from '@shared/components/EvalLogLabel';

type CorrectorReviewLabelProps = {
  number: number;
};

export const CorrectorReviewLabel = ({ number }: CorrectorReviewLabelProps) => {
  const type = getType(number);

  return <EvalLogLabel type={type}>{`${number.toString()}%`}</EvalLogLabel>;
};

const getType = (number: number) => {
  if (number >= 100) return 'positive';
  if (number >= 80) return 'neutral';
  return 'negative';
};
