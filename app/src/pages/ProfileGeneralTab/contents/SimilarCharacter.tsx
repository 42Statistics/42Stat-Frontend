import { gql } from '@/__generated__';
import { H3Text, Image, Loader, VStack } from '@/components/common';
import {
  ApolloBadRequest,
  ApolloNotFound,
} from '@/components/elements/DashboardContentView';
import { DashboardContent } from '@/components/templates/DashboardContent';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/**
 * 포켓몬 배열
 * @description
 * 현재 7x7
 * Y x X 형태의 배열
 * 인덱스 값에 변경이 생길경우 getX getY값의 출력범위를 조정해야함
 */
const pokemonArray = [
  ['starting', 'Togepi', 'abra', 'Espeon', 'Lugia', 'Mew', 'Mewtwo'],
  ['Geodude', 'Eevee', 'Marill', 'Raichu', 'Jolteon', 'Ampharos', 'Zapdos'],
  ['Onix', 'Dratini', 'Lapras', 'Haunter', 'Gengar', 'Mimikyu', 'Darkrai'],
  [
    'Steelix',
    'Lucario',
    'Happiny',
    'Lapras',
    'Dragonair',
    'Gyarados',
    'Kyogre',
  ],
  [
    'Golem',
    'Snorlax',
    'Arcanine',
    'Leafeon',
    'Togekiss',
    'Greninja',
    'Articuno',
  ],
  [
    'Tyranitar',
    'Lucario',
    'Charizard',
    'Sylveon',
    'Dragonite',
    'Salamence',
    'Solgaleo',
  ],
  [
    'Regigigas',
    'Zacian',
    'Moltres',
    'Shaymin',
    'Jirachi',
    'Rayquaza',
    'Arceus',
  ],
];

const GET_COALITION = gql(/* GraphQL */ `
  query getCoalition($login: String!) {
    getPersonGeneralPage(login: $login) {
      userProfile {
        coalition {
          name
        }
      }
    }
  }
`);

export const SimilarCharacter = () => {
  const { username } = useParams() as { username: string };

  const title = '이 유저를 캐릭터로 표현한다면?';
  const description = '과제 점수, 레벨 증가, 접속 시간, 평가 횟수 기준';

  const [pokeImg, setPokeImg] = useState(
    'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/006601.png',
  );
  const [pokeName, setPokeName] = useState('unown');

  const { loading, error, data } = useQuery(GET_COALITION, {
    variables: { login: username },
  });

  /**
   *재능값을 구하는 구하는 로직
   * @returns 0~6 사이의 재능 값
   */
  const getX = () => {
    return 1;
  };

  /**
   *노력값을 구하는 로직
   * @returns 0~6 사이의 노력 값
   */
  const getY = () => {
    return 2;
  };

  useEffect(() => {
    // 인덱싱을 위해 반올림 처리
    const y = Math.round(getY());
    const x = Math.round(getX());
    let queryName = pokemonArray[y][x].toLowerCase();

    // 스타팅 일 경우 건곤감리에 따라 다른 포켓몬 설정
    if (data) {
      const { name: coalition } =
        data.getPersonGeneralPage.userProfile.coalition;
      if (queryName === 'starting') {
        switch (coalition) {
          case 'Gun':
            queryName = 'Pikachu';
            break;
          case 'Gon':
            queryName = 'Bulbasaur';
            break;
          case 'Gam':
            queryName = 'Squirtle';
            break;
          case 'Lee':
            queryName = 'Charmander';
            break;
          default:
            queryName = 'unown';
        }
      }
    }

    const fetchURL = 'https://pokeapi.co/api/v2/pokemon/' + queryName;

    fetch(fetchURL)
      .then((response) => response.json())
      .then((data) => {
        const tmp = data.sprites.other['official-artwork'];
        const name = data.name;
        const { front_default, front_shiny } = tmp;
        /**
         * username 첫글자가 포켓몬 이름에 포함되어있으면 이로치
         */
        if (pokeName.includes(username[0])) {
          setPokeImg(front_shiny);
          setPokeName('✨' + name + '✨');
        } else {
          setPokeImg(front_default);
          setPokeName(name);
        }
      })
      .catch((error) => {
        console.log('데이터를 가져오는 중에 오류가 발생했습니다:', error);
      });
  }, [pokeName, username, data]);

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
        <Image width="200px" src={pokeImg} />
        <H3Text>{pokeName}</H3Text>
      </VStack>
    </DashboardContent>
  );
};
