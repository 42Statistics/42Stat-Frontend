import { ProjectNameContext } from '@/Project/contexts/ProjectNameContext';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { BoldText, Divider, HStack, Text, VStack } from '@shared/ui-kit';
import { Mobile, TabletAndAbove } from '@shared/utils/react-responsive/Device';
import { useContext } from 'react';
import { GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME } from '../../dashboard-contents-queries/GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME';

export const ProjectIntroduction = () => {
  const projectName = useContext(ProjectNameContext);
  const { loading, error, data } = useQuery(
    GET_PROJECT_INFO_ZERO_COST_BY_PROJECT_NAME,
    {
      variables: { projectName },
    },
  );

  if (loading) {
    return (
      <Layout>
        <Divider
          orientation="vertical"
          thickness="3px"
          style={{ height: '200px' }}
        />
      </Layout>
    );
  }
  if (error) {
    return null;
  }
  if (!data) {
    return null;
  }

  const { name, circle, description } = data.getProjectInfo;

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
            <Text>{circle == null ? 'Outer 서클' : `${circle}서클`}</Text>
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
