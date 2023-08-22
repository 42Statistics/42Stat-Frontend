import { useQuery } from '@apollo/client';
import { Footer } from '@core/components/Footer';
import { useTheme } from '@emotion/react';
import { gql } from '@shared/__generated__';
import { ReactComponent as Star } from '@shared/assets/icon/star.svg';
import { ReactComponent as FtLogo } from '@shared/assets/logo/ft-logo.svg';
import { FullPageApolloErrorView } from '@shared/components/ApolloError/FullPageApolloErrorView';
import { FullPageApolloNotFoundView } from '@shared/components/ApolloError/FullPageApolloNotFoundView';
import { EvalLogList } from '@shared/components/EvalLogList/EvalLogList';
import { CorrectorReviewLabel } from '@shared/components/EvalLogList/EvalLogListItem';
import { Seo } from '@shared/components/Seo';
import { ROUTES } from '@shared/constants/ROUTES';
import {
  Avatar,
  CaptionText,
  Divider,
  H1BoldText,
  H2BoldText,
  H3MediumText,
  HStack,
  Label,
  MediumText,
  Text,
  VStack,
} from '@shared/ui-kit';
import { CustomLink } from '@shared/ui-kit-styled/CustomLink';
import { getDateDiffStringWithTeamStatus } from '@shared/utils/getDateDiffStringWithTeamStatus';
import { getTeamStatusString } from '@shared/utils/getTeamStatusString';
import { Link, useParams } from 'react-router-dom';
import { MoulinetteEvalLogListItem } from './components/MoulinetteEvalLogListItem';

const GET_TEAM_INFO = gql(/* GraphQL */ `
  query GetTeamInfo($id: Int!) {
    getTeamInfo(id: $id) {
      id
      name
      url
      users {
        ...teamUserPreviewFields
      }
      finalMark
      moulinette {
        id
        finalMark
        comment
        createdAt
      }
      status
      lastEventTime
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
  const theme = useTheme();

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
    finalMark,
    moulinette,
    status,
    lastEventTime,
    projectPreview,
    evalLogs,
  } = data.getTeamInfo;

  return (
    <>
      <Seo title={name} />
      <VStack w="100%" align="start" spacing="5rem">
        <VStack align="start" spacing="3rem">
          <HStack spacing="1rem">
            {finalMark == null ? (
              <Label>{getTeamStatusString(status)}</Label>
            ) : (
              <CorrectorReviewLabel number={finalMark} />
            )}
            <Text color={theme.colors.mono.gray500}>
              {getDateDiffStringWithTeamStatus(new Date(lastEventTime), status)}
            </Text>
          </HStack>
          <H1BoldText style={{ wordBreak: 'break-all' }}>{name}</H1BoldText>
          <HStack spacing="1rem">
            <FtLogo width={20} height={20} fill={theme.colors.mono.black} />
            <Link to={ROUTES.PROJECT_DETAIL_OF(projectPreview.name)}>
              <H3MediumText>{projectPreview.name}</H3MediumText>
            </Link>
            <Text>
              {projectPreview.circle != null
                ? `${projectPreview.circle}서클`
                : 'Outer 서클'}
            </Text>
          </HStack>
        </VStack>
        <Divider />
        <VStack align="start" spacing="3rem">
          <H2BoldText>팀원</H2BoldText>
          <HStack spacing="2rem">
            {users.map((user) => (
              <Link key={user.login} to={ROUTES.PROFILE_OF(user.login)}>
                <VStack spacing="0.6rem">
                  {user.isLeader ? (
                    <Avatar
                      size="lg"
                      src={user.imgUrl}
                      alt={user.login}
                      badge={<Star width={18} height={18} fill="#ffd700" />}
                    />
                  ) : (
                    <Avatar size="lg" src={user.imgUrl} alt={user.login} />
                  )}
                  <MediumText>{user.login}</MediumText>
                  <CaptionText>#{user.occurrence + 1}</CaptionText>
                </VStack>
              </Link>
            ))}
          </HStack>
          <CustomLink to={url} target="_blank" rel="noreferrer">
            Intra 팀 페이지 바로가기
          </CustomLink>
        </VStack>
        <Divider />
        <VStack align="start" spacing="3rem">
          <H2BoldText>평가 기록</H2BoldText>
          {moulinette == null && evalLogs.length === 0 ? (
            <Text>평가 기록이 없습니다.</Text>
          ) : null}
          <VStack align="start" spacing="1.5rem">
            <EvalLogList list={evalLogs} />
            {moulinette != null ? (
              <MoulinetteEvalLogListItem item={moulinette} />
            ) : null}
          </VStack>
        </VStack>
      </VStack>
      <Footer />
    </>
  );
};

export default TeamPage;
