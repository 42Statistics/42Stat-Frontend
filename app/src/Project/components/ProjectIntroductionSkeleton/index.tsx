import styled from '@emotion/styled';
import { Divider, HStack, Skeleton, VStack } from '@shared/ui-kit';

export const ProjectIntroductionSkeleton = () => {
  return (
    <Layout>
      <HStack w="100%" spacing="4rem">
        <Divider
          orientation="vertical"
          thickness="3px"
          style={{ height: '200px' }}
        />
        <VStack w="100%" align="start" spacing="2rem">
          <Skeleton w="20rem" h="5rem" />
          <Skeleton w="60rem" h="5rem" />
        </VStack>
      </HStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  margin-top: 5rem;
`;
