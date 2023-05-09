import { Avatar, HStack, Spacer, Text } from '@/components/common';
import { numberWithUnitFormatter } from '@/utils/formatters';
import { AboveTablet, Mobile } from '@/utils/responsive/Device';
import type { RankItemType } from '@/utils/types/Rank';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type LeaderBoardItemProps = {
  rank: number;
  item: RankItemType;
  unit: string;
};

export const LeaderBoardItem = ({ rank, item, unit }: LeaderBoardItemProps) => {
  const theme = useTheme();
  const { name, imgUrl, value } = item;
  const color =
    rank === 1 ? theme.colors.accent.default : theme.colors.mono.black;

  return (
    <>
      <AboveTablet>
        <AboveTabletLeaderBoardItemLayout>
          <HStack w="100%" spacing="4rem">
            <Text
              color={color}
              fontWeight={theme.fonts.weight.bold}
              fontSize={theme.fonts.size.h2}
            >
              {rank}
            </Text>
            <Avatar size="3.5rem" imgUrl={imgUrl} />
            <Text
              color={color}
              fontSize={theme.fonts.size.h3}
              fontWeight={theme.fonts.weight.medium}
            >
              {name}
            </Text>
            <Spacer />
            <Text
              color={color}
              fontSize={theme.fonts.size.h3}
              fontWeight={theme.fonts.weight.medium}
            >
              {numberWithUnitFormatter(value, unit)}
            </Text>
          </HStack>
        </AboveTabletLeaderBoardItemLayout>
      </AboveTablet>
      <Mobile>
        <MobileLeaderBoardItemLayout>
          <HStack w="100%" spacing="3rem">
            <Text
              color={color}
              fontWeight={theme.fonts.weight.bold}
              fontSize={theme.fonts.size.h3}
            >
              {rank}
            </Text>
            <Avatar size="3.5rem" imgUrl={imgUrl} />
            <Text color={color} fontWeight={theme.fonts.weight.medium}>
              {name}
            </Text>
            <Spacer />
            <Text color={color} fontWeight={theme.fonts.weight.medium}>
              {numberWithUnitFormatter(value, unit)}
            </Text>
          </HStack>
        </MobileLeaderBoardItemLayout>
      </Mobile>
    </>
  );
};

export const AboveTabletLeaderBoardItemLayout = styled.li`
  width: 100%;
  padding: 1rem 5rem;
  border-radius: 1rem;
`;

export const MobileLeaderBoardItemLayout = styled.li`
  width: 100%;
  padding: 0.7rem 2rem;
  border-radius: 1rem;
`;
