import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import type { UserRank } from '@shared/__generated__/graphql';
import { ALT } from '@shared/constants/accessibility';
import { ROUTES } from '@shared/constants/routes';
import {
  Avatar,
  Body1MediumText,
  CaptionText,
  H3MediumText,
  HStack,
  MediumText,
  Spacer,
  Text,
} from '@shared/ui-kit';
import { mq } from '@shared/utils/facepaint/mq';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';
import { Mobile, TabletAndAbove } from '@shared/utils/react-responsive/Device';

type LeaderboardListItemProps = {
  item: UserRank;
  unit?: string;
  isMe?: boolean;
  fixedNumber?: number;
};

// TODO: Link와 Layout을 합쳐서 StyledLink를 만들고 싶지만, styled(Link)에 isMe라는 custom prop을 전달할 수 없음.
export const LeaderboardListItem = ({
  item,
  unit,
  isMe = false,
  fixedNumber,
}: LeaderboardListItemProps) => {
  const theme = useTheme();
  const {
    userPreview: { login, imgUrl },
    rank,
    value,
  } = item;
  const color = isMe ? theme.colors.mono.white : theme.colors.mono.black;

  return (
    <li style={{ width: '100%' }}>
      <Link to={ROUTES.PROFILE_OF(login)} style={{ display: 'block' }}>
        <Layout isMe={isMe}>
          <TabletAndAbove>
            <HStack w="100%" spacing="4rem">
              <HStack w="5rem">
                <Body1MediumText color={color}>
                  {rank === 0 ? '–' : rank}
                </Body1MediumText>
              </HStack>
              <Avatar src={imgUrl} name={login} alt={ALT.AVATAR_OF(login)} />
              <MediumText color={color}>{login}</MediumText>
              <Spacer />
              <HStack align="baseline" spacing="0.2rem">
                <H3MediumText color={color}>
                  {fixedNumber === undefined
                    ? numberWithUnitFormatter(value)
                    : `${value.toFixed(2)}`}
                </H3MediumText>
                <Text color={color}>{unit}</Text>
              </HStack>
            </HStack>
          </TabletAndAbove>
          <Mobile>
            <HStack w="100%" spacing="2.4rem">
              <HStack w="2rem">
                <MediumText color={color}>{rank === 0 ? '–' : rank}</MediumText>
              </HStack>
              <Avatar size="sm" src={imgUrl} alt={ALT.AVATAR_OF(login)} />
              <MediumText color={color}>{login}</MediumText>
              <Spacer />
              <HStack align="baseline" spacing="0.2rem">
                <H3MediumText color={color}>
                  {fixedNumber === undefined
                    ? numberWithUnitFormatter(value)
                    : `${value.toFixed(2)}`}
                </H3MediumText>
                {unit ? <CaptionText color={color}>{unit}</CaptionText> : null}
              </HStack>
            </HStack>
          </Mobile>
        </Layout>
      </Link>
    </li>
  );
};

type LayoutProps = {
  isMe: boolean;
};

const Layout = styled.div<LayoutProps>`
  width: 100%;
  ${mq({
    padding: ['0.5rem 2rem', '0.5rem 3rem'],
  })}
  border-radius: ${({ theme }) => theme.radius.xs};
  background-color: ${({ isMe, theme }) =>
    isMe ? theme.colors.primary.default : theme.colors.background.box.default};
  user-select: ${({ isMe }) => isMe && 'none'};
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme, isMe }) =>
      !isMe && theme.colors.element.hover};
  }

  &:active {
    background-color: ${({ theme, isMe }) =>
      !isMe && theme.colors.element.active};
  }
`;
