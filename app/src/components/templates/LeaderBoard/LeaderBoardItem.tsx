import {
  Avatar,
  H2BoldText,
  H3BoldText,
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
};

export const LeaderBoardItem = ({
  item,
  unit,
  isMe = false,
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
            <H2BoldText color={color}>{rank}</H2BoldText>
            <Avatar src={imgUrl} />
            <Link to={`/profile/${name}`}>
              <H3MediumText color={color}>{name}</H3MediumText>
            </Link>
            <Spacer />
            <H3MediumText color={color}>
              {numberWithUnitFormatter(value, unit)}
            </H3MediumText>
          </HStack>
        </TabletAndAboveLeaderBoardItemLayout>
      </TabletAndAbove>
      <Mobile>
        <MobileLeaderBoardItemLayout isMe={isMe}>
          <HStack w="100%" spacing="3rem">
            <H3BoldText color={color}>{rank}</H3BoldText>
            <Avatar src={imgUrl} />
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
  padding: 1rem 5rem;
  border-radius: 1rem;
  background-color: ${({ isMe, theme }) =>
    isMe && theme.colors.primary.default} !important; // FIXME: !important
`;

export const MobileLeaderBoardItemLayout = styled.li<{ isMe: boolean }>`
  width: 100%;
  padding: 0.7rem 2rem;
  border-radius: 1rem;
  background-color: ${({ isMe, theme }) =>
    isMe && theme.colors.primary.default} !important; // FIXME: !important
`;
