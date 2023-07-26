import { useQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { H3MediumText, HStack, Image, Label, VStack } from '@shared/ui-kit';
import { useParams } from 'react-router-dom';

const GET_CHARACTER_BY_LOGIN = gql(/* GraphQL */ `
  query GetCharacterByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      character {
        name
        imgUrl
        types {
          name
          description
          color
        }
      }
    }
  }
`);

export const Character = () => {
  const { username } = useParams() as { username: string };

  const title = '이 유저를 캐릭터로 표현한다면?';
  const description = '과제 점수, 레벨 증가, 접속 시간, 평가 횟수 기준';

  const { loading, error, data } = useQuery(GET_CHARACTER_BY_LOGIN, {
    variables: { login: username },
  });

  if (loading) {
    return <DashboardContentLoading title={title} description={description} />;
  }
  if (error) {
    return (
      <DashboardContentBadRequest
        title={title}
        description={description}
        message={error.message}
      />
    );
  }
  if (!data) {
    return <DashboardContentNotFound title={title} description={description} />;
  }

  const { name, types, imgUrl } = data.getPersonalGeneral.character ?? {};

  return (
    <DashboardContent title={title} description={description}>
      <VStack>
        <Image width="200px" src={imgUrl} />
        <VStack spacing="2rem">
          <HStack spacing="1rem">
            {types?.map((type, idx) => (
              <Label backgroundColor={type.color} key={idx}>
                {type.name}
              </Label>
            ))}
          </HStack>
          <H3MediumText>{name ?? ''}</H3MediumText>
        </VStack>
      </VStack>
    </DashboardContent>
  );
};
