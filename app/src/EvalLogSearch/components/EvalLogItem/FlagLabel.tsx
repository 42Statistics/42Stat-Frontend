import { EvalLogLabel, EvalLogLabelType } from '@components/common/Label';
import { useTheme } from '@emotion/react';
import { snakeCaseFormatter } from '@shared/utils/formatters';

type FlagLabelProps = {
  name: string;
  isPositive: boolean;
};

export const FlagLabel = ({ name, isPositive }: FlagLabelProps) => {
  const theme = useTheme();
  const type: EvalLogLabelType = isPositive ? 'positive' : 'negative';

  return (
    <EvalLogLabel type={type} fontWeight={theme.fonts.weight.bold}>
      {snakeCaseFormatter(name)}
    </EvalLogLabel>
  );
};
