import { H3Text, Image, VStack } from '@/components/common';
import { DashboardContent } from '@/components/templates/DashboardContent';
import { getPokemonImageUrl } from '@/services/pokeapi/getPokemonImageUrl';
import { useQuery } from '@apollo/client';
import {
  DashboardContentBadRequest,
  DashboardContentLoading,
  DashboardContentNotFound,
} from '@components/elements/DashboardContentView/Error';
import { GET_PERSONAL_GENERAL_BY_LOGIN } from '@pages/ProfileGeneralTab/GET_PERSONAL_GENERAL_BY_LOGIN';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { POKEMON, PokemonStoreItem } from './preset/POKEMON';

type CharacterType = {
  name: string; // Korean
  imageUrl: string;
};

export const Character = () => {
  const { username } = useParams() as { username: string };

  const [pokemonStoreItem, setPokemonStoreItem] =
    useState<PokemonStoreItem | null>(null);
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const title = '이 유저를 캐릭터로 표현한다면?';
  const description = '과제 점수, 레벨 증가, 접속 시간, 평가 횟수 기준';

  const { loading, error, data } = useQuery(GET_PERSONAL_GENERAL_BY_LOGIN, {
    variables: { login: username },
  });

  useEffect(() => {
    if (!data || !data.getPersonalGeneral.character) {
      return;
    }
    const {
      effort: { logtimeRank, evalCountRank },
      talent: {
        levelRank,
        examOneshotRate,
        projectOneshotRate,
        outstandingRate,
      },
    } = data.getPersonalGeneral.character;

    const TOTAL = 2350;

    const logtimePercentile = 1 - logtimeRank.rank / TOTAL;
    const evalCountPercentile = 1 - evalCountRank.rank / TOTAL;
    const levelPercentile = 1 - levelRank.rank / TOTAL;
    const examOneshotRateValue =
      (examOneshotRate.fields.find((field) => field.key === 'oneShot')?.value ??
        0) / examOneshotRate.total;
    const projectOneshotRateValue =
      (projectOneshotRate.fields.find((field) => field.key === 'oneShot')
        ?.value ?? 0) / projectOneshotRate.total;
    const outstandingRateValue =
      (outstandingRate.fields.find((field) => field.key === 'outstanding')
        ?.value ?? 0) / outstandingRate.total;

    // TODO: 분명 수치가 부정확할 듯하다
    // Percentile 잴 때 0 수치들은 빼고 재야 한다
    // 재능 지표에 동일 기수 대비 얼마나 빠른지에 대한 수치가 포함되어야 한다
    // 지표를 여러개 가져다 놓고, 지표에 따른 유저 분포를 보면서 튜닝해야 할듯
    const effortPoint =
      levelPercentile * 0.3 +
      logtimePercentile * 0.4 +
      evalCountPercentile * 0.3;
    const talentPoint =
      levelPercentile * 0.3 +
      examOneshotRateValue * 0.2 +
      projectOneshotRateValue * 0.3 +
      outstandingRateValue * 0.2;

    const effortIndex = Math.round(effortPoint * (POKEMON.length - 1));
    const talentIndex = Math.round(talentPoint * (POKEMON[0].length - 1));

    setPokemonStoreItem(POKEMON[effortIndex][talentIndex]);
  }, [data]);

  useEffect(() => {
    const fetchCharacterImageUrl = async () => {
      if (pokemonStoreItem === null) {
        return;
      }
      const pokemonImageUrl = await getPokemonImageUrl(pokemonStoreItem.name);
      setCharacter({
        name: pokemonStoreItem.korean,
        imageUrl: pokemonImageUrl,
      });
    };
    fetchCharacterImageUrl();
  }, [pokemonStoreItem]);

  if (loading) return <DashboardContentLoading />;
  if (error) return <DashboardContentBadRequest message={error.message} />;
  // TODO: character === undefined 가능성 문의
  if (!data || !data.getPersonalGeneral.character)
    return <DashboardContentNotFound />;

  return (
    <DashboardContent title={title} description={description}>
      {character !== null && (
        <VStack spacing="3rem">
          <Image width="50%" src={character.imageUrl} />
          <H3Text>{character.name}</H3Text>
        </VStack>
      )}
    </DashboardContent>
  );
};
