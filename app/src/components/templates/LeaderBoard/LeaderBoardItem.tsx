import type { RankingUserItemType } from '@/types/Ranking';
import {
  Avatar,
  BoldText,
  H3MediumText,
  HStack,
  MediumText,
  Spacer,
} from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ROUTES } from '@routes/ROUTES';
import { numberWithUnitFormatter } from '@utils/formatters';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';
import { mq } from '@utils/responsive/mq';
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

  const color = isMe ? theme.colors.mono.white : theme.colors.mono.black;

  return (
    <Layout isMe={isMe}>
      <TabletAndAbove>
        <HStack w="100%" spacing="4rem">
          <HStack w="5rem">
            <H3MediumText color={color}>{rank}</H3MediumText>
          </HStack>
          <Avatar src={imgUrl} />
          <Link to={`${ROUTES.PROFILE_ROOT}/${name}`}>
            <H3MediumText color={color}>{name}</H3MediumText>
          </Link>
          <Spacer />
          <MediumText color={color}>
            {fixedNumber === undefined
              ? numberWithUnitFormatter(value, unit)
              : `${value.toFixed(2)}${unit}`}
          </MediumText>
        </HStack>
      </TabletAndAbove>
      <Mobile>
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
      </Mobile>
    </Layout>
  );
};

type LayoutProps = {
  isMe: boolean;
};

const Layout = styled.li<LayoutProps>`
  width: 100%;
  ${mq({
    padding: ['0.5rem 2rem', '0.5rem 5rem'],
  })}
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ isMe, theme }) =>
    isMe && theme.colors.primary.default} !important; // FIXME: !important
  user-select: ${({ isMe }) => isMe && 'none'};
  transition: all 0.3s;

  ${mq({
    '&:hover': {
      transform: ['none', 'scale(1.01)'],
      boxShadow: ['none', '10px 10px 10px #dddddd, -10px -10px 10px #ffffff'],
    },
  })}
`;
