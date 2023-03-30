import { Avatar, HStack, Spacer, Text } from '@/components/common';
import { RankItemType } from '@/utils/types/Rank';
import { useTheme } from '@emotion/react';

type RankItemProps = {
  rank: number;
  item: RankItemType;
  unit: string;
};

export const RankItem = ({ rank, item, unit }: RankItemProps) => {
  const theme = useTheme();
  const { name, value, imgUrl } = item;
  const color =
    rank === 1 ? theme.colors.secondary.default : theme.colors.mono.black;

  return (
    <HStack spacing="2rem">
      <HStack align="baseline">
        <Text
          color={color}
          fontWeight={theme.fonts.weight.bold}
          fontSize={theme.fonts.size.h2}
        >
          {rank}
        </Text>
        <Text
          color={color}
          fontWeight={theme.fonts.weight.medium}
          fontSize={theme.fonts.size.body}
        >
          위
        </Text>
      </HStack>
      <HStack
        w="100%"
        spacing="1rem"
        style={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}
      >
        <Text
          color={color}
          fontSize={theme.fonts.size.h3}
          fontWeight={theme.fonts.weight.medium}
        >
          {name}
        </Text>
        <Text
          color={color}
          fontSize={theme.fonts.size.h3}
          fontWeight={theme.fonts.weight.medium}
        >
          {`(${value}${unit})`}
        </Text>
      </HStack>
      {imgUrl ? (
        <>
          <Spacer />
          <Avatar size="4rem" src={imgUrl} />
        </>
      ) : null}
    </HStack>
  );
};
