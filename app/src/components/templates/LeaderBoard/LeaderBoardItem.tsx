import {
  Avatar,
  BoldText,
  H2MediumText,
  H3MediumText,
  HStack,
  MediumText,
  Spacer,
} from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { numberWithUnitFormatter } from '@utils/formatters';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';
import type { RankingUserItemType } from '@utils/types/Ranking';
import { Link } from 'react-router-dom';

type LeaderBoardItemProps = {
  item: RankingUserItemType;
  unit: string;
  isMe?: boolean;
  fixedNumber?: number;
};

export const LeaderBoardItem = ({
  item,
  unit,
  isMe = false,
  fixedNumber,
}: LeaderBoardItemProps) => {
  const theme = useTheme();
  const { name, imgUrl, rank, value } = item;

  const getColor = (rank: number, isMe: boolean) => {
    if (isMe) return theme.colors.mono.white;
    if (rank <= 3) return theme.colors.accent.default;
    return theme.colors.mono.black;
  };

  const color = getColor(rank, isMe);

  return (
    <>
      <TabletAndAbove>
        <TabletAndAboveLeaderBoardItemLayout isMe={isMe}>
          <HStack w="100%" spacing="4rem">
            <HStack w="5rem">
              <H2MediumText color={color}>{rank}</H2MediumText>
            </HStack>
            <Avatar src={imgUrl} />
            <Link to={`/profile/${name}`}>
              <H3MediumText color={color}>{name}</H3MediumText>
            </Link>
            <Spacer />
            <H3MediumText color={color}>
              {fixedNumber === undefined
                ? numberWithUnitFormatter(value, unit)
                : `${value.toFixed(2)}${unit}`}
            </H3MediumText>
          </HStack>
        </TabletAndAboveLeaderBoardItemLayout>
      </TabletAndAbove>
      <Mobile>
        <MobileLeaderBoardItemLayout isMe={isMe}>
          <HStack w="100%" spacing="3rem">
            <HStack w="2rem">
              <BoldText color={color}>{rank}</BoldText>
            </HStack>
            <Avatar size="sm" src={imgUrl} />
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

export const TabletAndAboveLeaderBoardItemLayout = styled.li<{ isMe: boolean }>`
  width: 100%;
  padding: 0.8rem 5rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ isMe, theme }) =>
    isMe && theme.colors.primary.default} !important; // FIXME: !important
`;

export const MobileLeaderBoardItemLayout = styled.li<{ isMe: boolean }>`
  width: 100%;
  padding: 0.5rem 2rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ isMe, theme }) =>
    isMe && theme.colors.primary.default} !important; // FIXME: !important
`;
