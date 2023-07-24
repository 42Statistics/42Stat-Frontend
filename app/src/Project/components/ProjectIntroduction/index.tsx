import { ProjectIntroductionSkeleton } from '@/Project/components/ProjectIntroductionSkeleton';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { BoldText, Divider, HStack, Text, VStack } from '@shared/ui-kit';
import { Mobile, TabletAndAbove } from '@shared/utils/responsive/Device';
import { useParams } from 'react-router-dom';
import { GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME } from '../../queries/GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME';

export const ProjectIntroduction = () => {
  const { projectName } = useParams() as { projectName: string };
  const { loading, error, data } = useQuery(
    GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME,
    {
      variables: { projectName },
    },
  );

  if (loading) {
    return <ProjectIntroductionSkeleton />;
  }
  if (error) {
    return <></>;
  }
  if (!data) {
    return <></>;
  }

  const { name, description } = data.getProjectInfo;
  const circle = 3;

  return (
    <Layout>
      <HStack w="100%" spacing="4rem">
        <Divider
          orientation="vertical"
          thickness="3px"
          style={{ height: '200px' }}
        />
        <VStack align="start" w="100%" spacing="2rem">
          <VStack align="start">
            <Text>{circle}서클</Text>
            <TabletAndAbove>
              <BoldText fontSize="4rem">{name}</BoldText>
            </TabletAndAbove>
            <Mobile>
              <BoldText fontSize="3rem">{name}</BoldText>
            </Mobile>
          </VStack>
          {description !== '' ? (
            <div style={{ maxWidth: '600px' }}>
              <Text>{description}</Text>
            </div>
          ) : null}
        </VStack>
      </HStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  margin-top: 5rem;
`;
