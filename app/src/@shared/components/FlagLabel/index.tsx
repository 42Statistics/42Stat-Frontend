import { useTheme } from '@emotion/react';

import { EvalLogLabel } from '@shared/components/EvalLogLabel';
import { snakeCaseFormatter } from '@shared/utils/formatters/snakeCaseFormatter';

type FlagLabelProps = {
  name: string;
  isPositive: boolean;
};

export const FlagLabel = ({ name, isPositive }: FlagLabelProps) => {
  const theme = useTheme();
  const type = isPositive ? 'positive' : 'negative';

  return (
    <EvalLogLabel type={type} fontWeight={theme.fonts.weight.bold}>
      {snakeCaseFormatter(name)}
    </EvalLogLabel>
  );
};
