import { MAX_BLACKHOLE_NAME_LENGTH } from '@/Calculator/constants/blackhole';

export const blackholeNameFormatter = (name: string): string => {
  if (name.length > MAX_BLACKHOLE_NAME_LENGTH) {
    return `${name.slice(0, MAX_BLACKHOLE_NAME_LENGTH - 3)}...`;
  }
  return name;
};

export const blackholeValueFormatter = (value: number): string => {
  return `${value.toLocaleString()}일`;
};
