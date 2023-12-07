import { Link } from 'react-router-dom';

import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { userAtom } from '@shared/atoms/userAtom';
import { ALT, ARIA_LABEL } from '@shared/constants/accessibility';
import { ROUTES } from '@shared/constants/routes';
import {
  Avatar,
  CaptionText,
  HStack,
  MediumText,
  VStack,
} from '@shared/ui-kit';
import { titleCase } from '@shared/utils/formatters/titleCase';

type DesktopNavProfileProps = {
  imgUrl: string | null | undefined;
  name: string;
  login: string;
};

export const DesktopNavProfile = ({
  imgUrl,
  name,
  login,
}: DesktopNavProfileProps) => {
  const theme = useTheme();
  const user = useAtomValue(userAtom);

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
              {titleCase(name)}
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
`;
