import styled from '@emotion/styled';
import { DailyLogTime } from './DailyLogTime';

export const DailyGrassActivityDetail = () => {
  return (
    <Layout>
      <DailyLogTime />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  margin-left: 2.4rem;
  margin-top: 1rem;
`;
