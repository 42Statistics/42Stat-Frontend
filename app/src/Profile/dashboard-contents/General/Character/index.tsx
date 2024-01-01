import { useContext, useRef } from 'react';

import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { useSetAtom } from 'jotai';

import { tooltipAtom } from '@core/atoms/tooltipAtom';

import { gql } from '@shared/__generated__';
import { DashboardContent } from '@shared/components/DashboardContent';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@shared/components/DashboardContentView/Error';
import { ALT } from '@shared/constants/accessibility';
import { H3MediumText, HStack, Image, Label, VStack } from '@shared/ui-kit';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';

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
  const theme = useTheme();
  const { login } = useContext(UserProfileContext);
  const currentRef = useRef<HTMLDivElement>(null);
  const setTooltip = useSetAtom(tooltipAtom);

  const title = '이 유저를 캐릭터로 표현한다면?';
  const description = '과제 점수, 레벨 증가, 접속 시간, 평가 횟수 기준';

  const { loading, error, data } = useQuery(GET_CHARACTER_BY_LOGIN, {
    variables: { login },
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

  const handleMouseEnter = (
    e: React.MouseEvent<HTMLDivElement>,
    description: string,
  ) => {
    setTooltip({
      ref: e.currentTarget,
      position: 'top',
      text: description,
    });
  };
  const handleMouseLeave = () => {
    setTooltip({
      ref: null,
      position: 'top',
      text: '',
    });
  };

  return (
    <DashboardContent title={title} description={description}>
      <VStack>
        <Image
          width={200}
          height={200}
          src={imgUrl}
          alt={
            name !== undefined ? ALT.POKEMON_OF(name) : ALT.POKEMON_NOT_FOUND
          }
        />
        <VStack spacing="2rem">
          <HStack spacing="1rem">
            {types?.map((type, idx) => (
              <div
                ref={currentRef}
                onMouseEnter={(e) => handleMouseEnter(e, type.description)}
                onMouseLeave={handleMouseLeave}
                key={idx}
              >
                <Label
                  color={theme.colors.mono.absolute.white}
                  backgroundColor={type.color}
                  key={idx}
                >
                  {type.name}
                </Label>
              </div>
            ))}
          </HStack>
          <H3MediumText>{name ?? ''}</H3MediumText>
        </VStack>
      </VStack>
    </DashboardContent>
  );
};
