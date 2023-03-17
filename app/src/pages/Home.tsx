import { DashboardItem } from '@/components/elements/DashboardRow/DashboardItem';
import { DashboardRow } from '@/components/elements/DashboardRow';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';

const GET_USER = gql(`
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      login
    }
  }
`);

export const HomePage = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: 99947,
    },
  });
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }

  console.log(data);

  return (
    <HomePageLayout>
      <DashboardContainer>
        <DashboardRow itemByRow={4}>
          <DashboardItem size="1/8" col={1} row={1}>
            1/8
          </DashboardItem>
          <DashboardItem size="1/8" col={1} row={2}>
            1/8
          </DashboardItem>
          <DashboardItem size="1/4" col={2}>
            1/4
          </DashboardItem>
          <DashboardItem size="1/4" col={3}>
            1/4
          </DashboardItem>
          <DashboardItem size="1/4" col={4}>
            1/4
          </DashboardItem>
        </DashboardRow>
        <DashboardRow itemByRow={3}>
          <DashboardItem size="2/3" col={1}>
            2/3
          </DashboardItem>
          <DashboardItem size="1/3" col={3}>
            1/3
          </DashboardItem>
        </DashboardRow>
        <DashboardRow itemByRow={3}>
          <DashboardItem size="3/3" col={1}>
            3/3
          </DashboardItem>
        </DashboardRow>
      </DashboardContainer>
    </HomePageLayout>
  );
};

const HomePageLayout = styled.div``;

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
`;
