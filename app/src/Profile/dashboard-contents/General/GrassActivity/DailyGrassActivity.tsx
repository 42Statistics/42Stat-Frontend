import styled from '@emotion/styled';
import type { DailyActivityDetailRecordIdWithType } from '@shared/__generated__/graphql';

type DailyGrassActivityProps = {
  data?: DailyActivityDetailRecordIdWithType[];
};

export const DailyGrassActivity = ({ data }: DailyGrassActivityProps) => {
  return <Layout>awef</Layout>;
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
