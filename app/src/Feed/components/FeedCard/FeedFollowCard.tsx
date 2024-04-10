import styled from '@emotion/styled';

import { HStack } from '@shared/ui-kit';

import { FeedCardHeader } from './FeedCardHeader';

export const FeedFollowCard = () => {
  return (
    <Layout>
      <FeedCardHeader
        login="sungwook"
        imgUrl="https://cdn.intra.42.fr/users/f5dcad7f9fa2efb8e6f9ddf8b57c1341/sungwook.jpg"
        message="sungwook님이 팔로우했습니다."
        createdAt={new Date().toISOString()}
      />
    </Layout>
  );
};

const Layout = styled(HStack)`
  width: 100%;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  border-radius: ${({ theme }) => theme.radius.md};
`;
