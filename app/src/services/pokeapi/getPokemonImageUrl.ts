import axios from 'axios';
import { POKEAPI_BASE_URL } from './POKEAPI_BASE_URL';

type GetPokemonImageUrlResponse = {
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
};

export const getPokemonImageUrl = async (
  name: string,
): Promise<string> | never => {
  const res = await axios.get<GetPokemonImageUrlResponse>(
    `${POKEAPI_BASE_URL}/${name}`,
  );
  return res.data.sprites.other['official-artwork'].front_default;
};
