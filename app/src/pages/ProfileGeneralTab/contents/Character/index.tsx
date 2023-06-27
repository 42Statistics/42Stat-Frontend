import { gql } from '@/__generated__';
import marvin from '@/assets/marvin-depressed.gif';
import { H3Text, Image, Loader, VStack } from '@/components/common';
import { DashboardContent } from '@/components/templates/DashboardContent';
import { useQuery } from '@apollo/client';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@components/elements/DashboardContentView/Error';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const GET_CHARACTER = gql(/* GraphQL */ `
  query GetCharacter {
    getPersonalGeneral {
      character {
        effort {
          logtimeRank {
            rank
            value
            userPreview {
              id
            }
          }
          evalCountRank {
            rank
            value
          }
          examTryCount
          projectTryCount
        }
        talent {
          levelRank {
            rank
            value
          }
          examOneshotRate {
            total
            fields {
              key
              value
            }
          }
          projectOneshotRate {
            total
            fields {
              key
              value
            }
          }
          outstandingRate {
            total
            fields {
              key
              value
            }
          }
        }
      }
    }
  }
`);

export const Character = () => {
  const { username } = useParams() as { username: string };

  const title = '이 유저를 캐릭터로 표현한다면?';
  const description = '과제 점수, 레벨 증가, 접속 시간, 평가 횟수 기준';
  const [character, setCharacter] = useState<string>('마빈');

  const { loading, error, data } = useQuery(GET_CHARACTER);

  // const [pokeImg, setPokeImg] = useState(
  //   'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006601.png',
  // );
  // const [pokeName, setPokeName] = useState('unown');

  // /**
  //  *재능값을 구하는 구하는 로직
  //  * @returns 0~6 사이의 재능 값
  //  */
  // const getX = () => {
  //   return 1;
  // };

  // /**
  //  *노력값을 구하는 로직
  //  * @returns 0~6 사이의 노력 값
  //  */
  // const getY = () => {
  //   return 2;
  // };

  // useEffect(() => {
  //   // 인덱싱을 위해 반올림 처리
  //   const y = Math.round(getY());
  //   const x = Math.round(getX());
  //   let queryName = pokemonArray[y][x].toLowerCase();

  //   // 스타팅 일 경우 건곤감리에 따라 다른 포켓몬 설정
  //   if (data) {
  //     const { name: coalition } = data.getPersonalGeneral.userProfile.coalition;
  //     if (queryName === 'starting') {
  //       switch (coalition) {
  //         case 'Gun':
  //           queryName = 'Pikachu';
  //           break;
  //         case 'Gon':
  //           queryName = 'Bulbasaur';
  //           break;
  //         case 'Gam':
  //           queryName = 'Squirtle';
  //           break;
  //         case 'Lee':
  //           queryName = 'Charmander';
  //           break;
  //         default:
  //           queryName = 'unown';
  //       }
  //     }
  //   }

  //   const fetchURL = 'https://pokeapi.co/api/v2/pokemon/' + queryName;

  //   fetch(fetchURL)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const tmp = data.sprites.other['official-artwork'];
  //       const name = data.name;
  //       const { front_default, front_shiny } = tmp;
  //       /**
  //        * username 첫글자가 포켓몬 이름에 포함되어있으면 이로치
  //        */
  //       if (pokeName.includes(username[0])) {
  //         setPokeImg(front_shiny);
  //         setPokeName('✨' + name + '✨');
  //       } else {
  //         setPokeImg(front_default);
  //         setPokeName(name);
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('데이터를 가져오는 중에 오류가 발생했습니다:', error);
  //     });
  // }, [pokeName, username, data]);

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

  return (
    <DashboardContent title={title} description={description}>
      <VStack h="100%" spacing="3rem">
        <Image width="200px" src={marvin} />
        <H3Text>{character}</H3Text>
      </VStack>
    </DashboardContent>
  );
};