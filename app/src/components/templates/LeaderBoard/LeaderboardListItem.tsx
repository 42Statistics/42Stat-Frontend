import type { RankingUserItemType } from '@/types/Ranking';
import {
  Avatar,
  CaptionText,
  H2BoldText,
  H3BoldText,
  H3Text,
  HStack,
  MediumText,
  Spacer,
  Text,
} from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ROUTES } from '@routes/ROUTES';
import { numberWithUnitFormatter } from '@utils/formatters';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';
import { mq } from '@utils/responsive/mq';
import { useNavigate } from 'react-router-dom';

type LeaderboardListItemProps = {
  item: RankingUserItemType;
  unit: string;
  isMe?: boolean;
  fixedNumber?: number;
};

export const LeaderboardListItem = ({
  item,
  unit,
  isMe = false,
  fixedNumber,
}: LeaderboardListItemProps) => {
  const theme = useTheme();
  const { name, imgUrl, rank, value } = item;
  const navigate = useNavigate();

  const color = isMe ? theme.colors.mono.white : theme.colors.mono.black;

  const goToProfile = (login: string) => {
    navigate(`${ROUTES.PROFILE_ROOT}/${login}`);
  };

  return (
    <Layout isMe={isMe} onClick={() => goToProfile(name)}>
      <TabletAndAbove>
        <HStack w="100%" spacing="4rem">
          <HStack w="5rem">
            <H3BoldText color={color}>{rank}</H3BoldText>
          </HStack>
          <Avatar src={imgUrl} />
          <H3Text color={color}>{name}</H3Text>
          <Spacer />
          <HStack align="baseline" spacing="0.2rem">
            <H2BoldText color={color}>
              {fixedNumber === undefined
                ? numberWithUnitFormatter(value)
                : `${value.toFixed(2)}`}
            </H2BoldText>
            <Text color={color}>{unit}</Text>
          </HStack>
        </HStack>
      </TabletAndAbove>
      <Mobile>
        <HStack w="100%" spacing="2.4rem">
          <HStack w="2rem">
            <MediumText color={color}>{rank}</MediumText>
          </HStack>
          <Avatar size="sm" src={imgUrl} />
          <Text color={color}>{name}</Text>
          <Spacer />
          <HStack align="baseline" spacing="0.2rem">
            <H3BoldText color={color}>
              {fixedNumber === undefined
                ? numberWithUnitFormatter(value)
                : `${value.toFixed(2)}`}
            </H3BoldText>
            <CaptionText color={color}>{unit}</CaptionText>
          </HStack>
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
    padding: ['0.5rem 2rem', '0.5rem 3rem'],
  })}
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ isMe, theme }) =>
    isMe && theme.colors.primary.default} !important; // FIXME: !important
  user-select: ${({ isMe }) => isMe && 'none'};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme, isMe }) =>
      !isMe && theme.colors.element.hover};
  }

  &:active {
    background-color: ${({ theme, isMe }) =>
      !isMe && theme.colors.element.active};
  }
`;
