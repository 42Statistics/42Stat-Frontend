import { gql } from '@/__generated__';
import { HStack, Image, Loader } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import {
  NumberDefault,
  TextDefault,
} from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';
import { userAtom } from '@/utils/atoms/userAtom';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

const GET_CURRENT_COALITION_SCORE = gql(/* GraphQL */ `
  query getCurrentCoalitionScore($uid: Int!) {
    getPersonGeneralPage(uid: $uid) {
      userProfile {
        coalition {
          score
          imageUrl
          color
        }
        scoreInfo {
          rankInCoalition
        }
      }
    }
  }
`);

export const CurrentCoalitionScore = () => {
  const user = useAtomValue(userAtom);

  const title = '코알리숑 스코어';
  const { loading, error, data } = useQuery(GET_CURRENT_COALITION_SCORE, {
    variables: {
      uid: user.id,
    },
  });
  if (loading)
    return (
      <DashboardContent title={title}>
        <Loader />
      </DashboardContent>
    );
  if (error)
    return (
      <DashboardContent title={title}>
        <ApolloBadRequest msg={error.message} />
      </DashboardContent>
    );
  if (!data)
    return (
      <DashboardContent title={title}>
        <ApolloNotFound />
      </DashboardContent>
    );

  const { coalition, scoreInfo } = data.getPersonGeneralPage.userProfile;

  return (
    <DashboardContent title={title}>
      <HStack spacing="1rem" style={{ marginTop: '1rem' }}>
        {coalition == null ? (
          <TextDefault text="-" />
        ) : (
          <NumberDefault number={coalition.score} />
        )}
        <HStack spacing="0.5rem">
          {coalition != null &&
          coalition.imageUrl != null &&
          coalition.color != null ? (
            <StyledMark
              size="1.8rem"
              src={coalition?.imageUrl}
              style={{ backgroundColor: coalition.color }}
            />
          ) : null}
          {scoreInfo != null && scoreInfo.rankInCoalition != null ? (
            <HStack spacing="0.1rem">
              <NumberDefault number={scoreInfo.rankInCoalition} />
              <TextDefault text="위" />
            </HStack>
          ) : null}
        </HStack>
      </HStack>
    </DashboardContent>
  );
};

const StyledMark = styled(Image)<{ size?: string }>`
  width: ${({ size = '2.2rem' }) => size};
  height: ${({ size = '2.4rem' }) => size};
  object-fit: cover;
  border-radius: 50%;
  user-select: none;
  -webkit-user-drag: none; // 이미지 드래그 제한
`;
