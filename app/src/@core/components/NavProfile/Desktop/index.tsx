import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { userAtom } from '@shared/atoms/userAtom';
import { ROUTES } from '@shared/constants/ROUTES';
import {
  Avatar,
  CaptionText,
  HStack,
  MediumText,
  VStack,
} from '@shared/ui-kit';
import { titleCase } from '@shared/utils/formatters/titleCase';
import { useAtomValue } from 'jotai';
import { Link } from 'react-router-dom';

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
  const user = useAtomValue(userAtom);
  const theme = useTheme();

  return (
    <Link to={`${ROUTES.PROFILE_ROOT}/${user.login}`} style={{ width: '100%' }}>
      <Layout>
        <HStack w="100%" spacing="2rem">
          <Avatar size="lg" src={imgUrl} />
          <VStack align="start" spacing="0.5rem">
            <MediumText>{login}</MediumText>
            <CaptionText color={theme.colors.mono.gray300}>
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
