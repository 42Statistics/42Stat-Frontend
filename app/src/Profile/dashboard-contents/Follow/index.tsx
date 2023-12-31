import styled from '@emotion/styled';

import { UserPreview } from '@shared/__generated__/graphql';
import { DashboardRow } from '@shared/components/Dashboard/DashboardRow';
import { DashboardRowItem } from '@shared/components/Dashboard/DashboardRowItem';

import FollowItem from './FollowItem';

const sliceRowList = (array: UserPreview[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, chunkSize + i));
  }
  return chunks;
};

const Follow = ({ followList }: { followList: UserPreview[] }) => {
  const followRowList = sliceRowList(followList, 6);

  return (
    <Layout>
      {followRowList.map((chunk, col) => (
        <DashboardRow key={col}>
          {chunk.map((user) => (
            <DashboardRowItem
              key={user.id}
              rowSpan={1}
              colSpan={1}
              content={() => <FollowItem user={user} />}
            ></DashboardRowItem>
          ))}
        </DashboardRow>
      ))}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
`;

export default Follow;
