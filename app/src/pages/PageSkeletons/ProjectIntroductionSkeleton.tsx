import { Divider, HStack, Skeleton, VStack } from '@components/common';
import styled from '@emotion/styled';

export const ProjectIntroductionSkeleton = () => {
  return (
    <Layout>
      <HStack w="100%" spacing="4rem">
        <Divider
          orientation="vertical"
          thickness="3px"
          style={{ height: '150px' }}
        />
        <VStack w="100%" align="start" spacing="2rem">
          <Skeleton style={{ width: '200px', height: '50px' }} />
          <Skeleton style={{ width: '600px', height: '50px' }} />
        </VStack>
      </HStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  margin-top: 5rem;
`;
