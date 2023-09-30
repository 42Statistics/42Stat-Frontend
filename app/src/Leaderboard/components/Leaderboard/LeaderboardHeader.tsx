import styled from '@emotion/styled';

import { mq } from '@shared/utils/facepaint/mq';

type LeaderboardHeaderProps = {
  left: React.ReactNode;
  right: React.ReactNode;
};

export default function LeaderboardHeader({
  left,
  right,
}: LeaderboardHeaderProps) {
  return (
    <Layout>
      {left}
      {right}
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${mq({
    flexDirection: ['column', 'row'],
    justifyContent: ['center', 'space-between'],
    gap: ['2rem', 0],
  })}
`;
