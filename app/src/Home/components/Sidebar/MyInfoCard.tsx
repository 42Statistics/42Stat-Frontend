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
  VStack,
} from '@shared/ui-kit';
import { ALT, ARIA_LABEL } from '@shared/constants/accessibility';
import { ROUTES } from '@shared/constants/routes';
import { titleCase } from '@shared/utils/formatters/titleCase';

export const MyInfoCard = () => {
  const user = useAtomValue(userAtom);
  const theme = useTheme();
  const { login, displayname, imgUrl } = user;

  return (
    <Link
      to={ROUTES.PROFILE_OF(user.login)}
      style={{ width: '100%' }}
      aria-label={ARIA_LABEL.LINK.PROFILE_OF(user.login)}
    >
      <Layout>
        <HStack w="100%" spacing="2rem">
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
      </Layout>
    </Link>
  );
};

const Layout = styled.div`
  width: 100%;
  padding: 1.2rem 1rem;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  border-radius: ${({ theme }) => theme.radius.md};
`;
