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
    <Layout>
      <ProgressionBarInner rate={newRate} />
    </Layout>
  );
};

const Layout = styled.div`
  width: 80px;
  height: 0.75rem;
  background-color: #e9e9e9;
  border-radius: ${({ theme }) => theme.radius.sm};
`;

type ProgressionBarInnerProps = {
  rate: number;
};

const ProgressionBarInner = styled.div<ProgressionBarInnerProps>`
  width: ${({ rate }) => `${rate * 100}%`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.accent.default};
  border-radius: ${({ theme }) => theme.radius.sm};
`;
