import {
  Avatar,
  H2BoldText,
  H3BoldText,
  H3MediumText,
  HStack,
  MediumText,
  Spacer,
} from '@/components/common';
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
            <H2BoldText color={color}>{rank}</H2BoldText>
            <Avatar size="3.5rem" imgUrl={imgUrl} />
            <H3MediumText color={color}>{name}</H3MediumText>
            <Spacer />
            <H3MediumText color={color}>
              {numberWithUnitFormatter(value, unit)}
            </H3MediumText>
          </HStack>
        </AboveTabletLeaderBoardItemLayout>
      </AboveTablet>
      <Mobile>
        <MobileLeaderBoardItemLayout>
          <HStack w="100%" spacing="3rem">
            <H3BoldText color={color}>{rank}</H3BoldText>
            <Avatar size="3.5rem" imgUrl={imgUrl} />
            <MediumText color={color}>{name}</MediumText>
            <Spacer />
            <MediumText color={color}>
              {numberWithUnitFormatter(value, unit)}
            </MediumText>
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
