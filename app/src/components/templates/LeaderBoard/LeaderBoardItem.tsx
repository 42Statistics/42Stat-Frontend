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
import type { RankUserItemType } from '@utils/types/Rank';
import { Link } from 'react-router-dom';

type LeaderBoardItemProps = {
  item: RankUserItemType;
  unit: string;
};

export const LeaderBoardItem = ({ item, unit }: LeaderBoardItemProps) => {
  const theme = useTheme();
  const { name, imgUrl, rank, value } = item;
  const color =
    rank <= 3 ? theme.colors.accent.default : theme.colors.mono.black;

  return (
    <>
      <TabletAndAbove>
        <TabletAndAboveLeaderBoardItemLayout>
          <HStack w="100%" spacing="4rem">
            <H2BoldText color={color}>{rank}</H2BoldText>
            <Avatar size="3.5rem" imgUrl={imgUrl} />
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

export const TabletAndAboveLeaderBoardItemLayout = styled.li`
  width: 100%;
  padding: 1rem 5rem;
  border-radius: 1rem;
`;

export const MobileLeaderBoardItemLayout = styled.li`
  width: 100%;
  padding: 0.7rem 2rem;
  border-radius: 1rem;
`;
