import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';
import { EvalLogList } from '@shared/components/EvalLogList/EvalLogList';
import { Seo } from '@shared/components/Seo';
import { ROUTES } from '@shared/constants/ROUTES';
import { withFooter } from '@shared/hoc/withFooter';
import { withHead } from '@shared/hoc/withHead';
import { Text, VStack } from '@shared/ui-kit';
import { CustomLink } from '@shared/ui-kit-styled/CustomLink';
import { Link, useParams } from 'react-router-dom';

const GET_TEAM_INFO = gql(/* GraphQL */ `
  query GetTeamInfo($id: Int!) {
    getTeamInfo(id: $id) {
      id
      name
      url
      users {
        ...userPreviewFields
      }
      moulinette {
        id
        finalMark
        comment
        createdAt
      }
      status
      lockedAt
      closedAt
      projectPreview {
        ...projectPreviewFields
      }
      evalLogs {
        id
        correctorReview {
          mark
          review
        }
        correctedsReview {
          mark
          review
        }
        header {
          corrector {
            ...userPreviewFields
          }
          beginAt
          flag {
            id
            name
            isPositive
          }
        }
      }
    }
  }
`);

const TeamPage = () => {
  const { id } = useParams() as { id: string };

  const { loading, error, data } = useQuery(GET_TEAM_INFO, {
    variables: {
      id: Number(id),
    },
  });

  if (loading) {
    return null; // TODO: Skeleton
  }
  if (error) {
    return <FullPageApolloErrorView message={error.message} />;
  }
  if (!data) {
    return <FullPageApolloNotFoundView />;
  }

  const {
    name,
    url,
    users,
    moulinette,
    status,
    lockedAt,
    closedAt,
    projectPreview,
    evalLogs,
  } = data.getTeamInfo;

  return (
    <VStack align="start">
      <Text>{name}</Text>
      <CustomLink to={url} target="_blank" rel="noreferrer">
        Intra 팀 페이지 바로가기
      </CustomLink>
      <Text>{users.map((user) => user.login).join(', ')}</Text>
      <Text>{moulinette?.finalMark}</Text>
      <Text>{moulinette?.comment}</Text>
      <Text>{status}</Text>
      <Text>lockedAt: {lockedAt}</Text>
      <Text>closedAt: {closedAt}</Text>
      <Link to={ROUTES.PROJECT_DETAIL_OF(projectPreview.name)}>
        <Text>{projectPreview.name}</Text>
      </Link>
      <EvalLogList list={evalLogs} />
    </VStack>
  );
};

const Head = () => {
  return <Seo title="팀명" />;
};

export default withHead(withFooter(TeamPage), Head);
