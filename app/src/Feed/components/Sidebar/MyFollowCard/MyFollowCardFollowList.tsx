import { Link } from 'react-router-dom';

import { useTheme } from '@emotion/react';

import { Avatar, Body1MediumText, CaptionText, HStack } from '@shared/ui-kit';
import { numberFormatter } from '@shared/utils/formatters/numberFormatter';
import { MyFollow } from '@shared/__generated__/graphql';
import { ALT } from '@shared/constants/accessibility';

type MyFollowCardFollowListProps = {
  title: string;
  followList: MyFollow[];
  totalCount: number;
  route: string;
};

export const MyFollowCardFollowList = ({
  title,
  followList,
  totalCount,
  route,
}: MyFollowCardFollowListProps) => {
  const theme = useTheme();

  return (
    <>
      <HStack w="100%" h="100%" spacing="1rem" justify="start">
        <Body1MediumText>
          {title} {numberFormatter(totalCount)}
        </Body1MediumText>
        <Link to={route}>
          <CaptionText>모두 보기</CaptionText>
        </Link>
      </HStack>
      <HStack w="100%" h="100%" justify="start" spacing="0.6rem">
        {followList.map(({ userPreview: { login, imgUrl } }) => {
          return (
            <Avatar
              key={login}
              name={login}
              src={imgUrl}
              alt={ALT.AVATAR_OF(login)}
              radius={theme.radius.md}
            />
          );
        })}
      </HStack>
    </>
  );
};
