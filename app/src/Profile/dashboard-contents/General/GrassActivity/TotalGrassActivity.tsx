import styled from '@emotion/styled';
import { Divider } from '@shared/ui-kit';

export const TotalGrassActivity = () => {
  return (
    <Layout>
      <p>누적 활동 내역</p>
      <Divider />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
