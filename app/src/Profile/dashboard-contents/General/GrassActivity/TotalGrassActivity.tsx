import styled from '@emotion/styled';
import { Divider } from '@shared/ui-kit';

export const TotalGrassActivity = () => {
  return (
    <Layout>
      누적 활동 내역 <Divider />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
