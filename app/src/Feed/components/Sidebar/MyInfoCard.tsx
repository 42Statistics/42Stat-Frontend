import { Link } from 'react-router-dom';

import { useAtomValue } from 'jotai';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { userAtom } from '@shared/atoms/userAtom';
import {
  Avatar,
  CaptionText,
  HStack,
  MediumText,
  Text,
  VStack,
} from '@shared/ui-kit';
import { ALT, ARIA_LABEL } from '@shared/constants/accessibility';
import { ROUTES } from '@shared/constants/routes';
import { titleCase } from '@shared/utils/formatters/titleCase';

export const MyInfoCard = () => {
  const user = useAtomValue(userAtom);
  const theme = useTheme();
  const { login, displayname, imgUrl } = user;

  //todo: api로 변경
  const message = `Don’t go down the rabbit hole 🐇`;

  return (
    <Link
      to={ROUTES.PROFILE_OF(user.login)}
      style={{ width: '100%' }}
      aria-label={ARIA_LABEL.LINK.PROFILE_OF(user.login)}
    >
      <Layout>
        <HStack justify="start" w="100%" spacing="2rem">
          <Avatar
            size="lg"
            src={imgUrl}
            name={login}
            alt={ALT.AVATAR_OF(login)}
          />
          <VStack align="start" spacing="0.5rem">
            <MediumText>{login}</MediumText>
            <CaptionText color={theme.colors.mono.gray500}>
              {titleCase(displayname)}
            </CaptionText>
          </VStack>
        </HStack>
        <Text>{message}</Text>
      </Layout>
    </Link>
  );
};

const Layout = styled(VStack)`
  width: 100%;
  gap: 3rem;
  padding: 3rem 5rem 4rem;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  border-radius: ${({ theme }) => theme.radius.md};
`;
