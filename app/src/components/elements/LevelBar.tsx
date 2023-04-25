import styled from '@emotion/styled';

type LevelBarProps = {
  rate: number;
};

export const LevelBar = (props: LevelBarProps) => {
  return (
    <LevelBarLayout>
      <LevelBarBox {...props} />
    </LevelBarLayout>
  );
};

const LevelBarLayout = styled.div`
  width: 15rem;
  height: 1.2rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
  border-radius: 2rem;
`;

const LevelBarBox = styled.div<LevelBarProps>`
  width: ${({ rate }) => rate * 100}%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary.default};
  border-radius: 2rem 0 0 2rem;
`;
