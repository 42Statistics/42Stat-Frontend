import styled from '@emotion/styled';

type ProgressionBarProps = {
  rate: number;
};

export const ProgressionBar = ({ rate }: ProgressionBarProps) => {
  const refineRate = (rate: number) => {
    if (rate < 0) return 0;
    if (rate > 1) return 1;
    return rate;
  };

  const newRate = refineRate(rate);

  return (
    <ProgressionBarBackground>
      <ProgressionBarInner rate={newRate} />
    </ProgressionBarBackground>
  );
};

const ProgressionBarBackground = styled.div`
  width: 80px;
  height: 0.75rem;
  background-color: #e9e9e9;
  border-radius: 0.5rem;
`;

type ProgressionBarInnerProps = {
  rate: number;
};

const ProgressionBarInner = styled.div<ProgressionBarInnerProps>`
  width: ${({ rate }) => `${rate * 100}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.accent.default};
  border-radius: 0.5rem;
`;
