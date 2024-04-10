import styled from '@emotion/styled';

import { VStack } from '@shared/ui-kit';

import { FeedFollowCard } from './FeedCard/FeedFollowCard';

export const FeedPageBody = () => {
  return (
    <Layout>
      <FeedFollowCard />
      {/* <FeedList /> */}
    </Layout>
  );
};

const Layout = styled(VStack)`
  width: 100%;
  gap: 4rem;
  min-height: 100vh;
  justify-content: start;
`;
