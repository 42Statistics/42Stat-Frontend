import { useTheme } from '@emotion/react';

import { ALT } from '@shared/constants/accessibility';
import {
  Avatar,
  Body1MediumText,
  CaptionText,
  HStack,
  VStack,
} from '@shared/ui-kit';

type FeedCardHeaderProps = {
  login: string;
  imgUrl: string;
  message: string;
  createdAt: string;
};

export const FeedCardHeader = ({
  login,
  imgUrl,
  message,
  createdAt,
}: FeedCardHeaderProps) => {
  const theme = useTheme();

  return (
    <HStack justify="start" w="100%" spacing="1rem">
      <Avatar
        size="lg"
        key={login}
        name={login}
        src={imgUrl}
        alt={ALT.AVATAR_OF(login)}
        radius={theme.radius.md}
      />
      <VStack align="start" w="100%" spacing="0.6rem">
        <Body1MediumText>{message}</Body1MediumText>
        <CaptionText>{createdAt}</CaptionText>
      </VStack>
    </HStack>
  );
};
