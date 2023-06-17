import {
  Avatar,
  CaptionText,
  H3BoldText,
  HStack,
  VStack,
} from '@components/common';
import { useTheme } from '@emotion/react';
import { titleCase } from '@utils/titleCase';

type NavProfileProps = {
  imgUrl: string;
  name: string;
  login: string;
};

export const NavProfile = ({ imgUrl, name, login }: NavProfileProps) => {
  const theme = useTheme();

  return (
    <HStack spacing="2rem">
      <Avatar size="lg" src={imgUrl} />
      <VStack align="start" spacing="0.3rem">
        <H3BoldText>{login}</H3BoldText>
        <CaptionText color={theme.colors.mono.gray300}>
          {titleCase(name)}
        </CaptionText>
      </VStack>
    </HStack>
  );
};
