import { useQuery } from '@apollo/client';
import ft_logo from '@assets/42-logo.svg';
import google_logo from '@assets/google-logo.svg';
import {
  Divider,
  H2BoldText,
  HStack,
  Image,
  MediumText,
  Text,
  VStack,
} from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { GET_SETTING } from './GET_SETTING';
import { LinkGoogleButton } from './LinkGoogleButton';
import { UnlinkGoogleButton } from './UnlinkGoogleButton';

export const LinkGoogleSection = () => {
  const theme = useTheme();
  const { data } = useQuery(GET_SETTING);

  const { userLogin, googleEmail, linkedAt } = data?.getSetting ?? {};
  const isLinked = googleEmail != null && linkedAt != null;

  return (
    <Layout>
      <VStack align="start" spacing="4rem">
        <VStack align="start" spacing="0.5rem">
          <H2BoldText>구글 계정 연동</H2BoldText>
          <Text color={theme.colors.mono.gray300}>
            1회 연동하면 42 인증 대신 구글 로그인을 사용할 수 있습니다.
          </Text>
        </VStack>
        <Divider />
        <VStack align="start" spacing="3rem">
          <HStack spacing="2rem">
            <Image src={ft_logo} style={{ width: '24px' }} />
            {data && userLogin && <MediumText>{userLogin}</MediumText>}
          </HStack>
          <HStack justify="start" spacing="2rem" wrap="wrap">
            <Image src={google_logo} style={{ width: '24px' }} />
            {data && !isLinked && (
              <>
                <MediumText>연동된 계정 없음</MediumText>
                <LinkGoogleButton />
              </>
            )}
            {data && isLinked && (
              <>
                <MediumText>{googleEmail}</MediumText>
                <UnlinkGoogleButton />
                <Text color={theme.colors.mono.gray300}>
                  {dayjs(new Date(linkedAt)).format('YYYY-MM-DD HH:mm:ss')}{' '}
                  연동됨
                </Text>
              </>
            )}
          </HStack>
        </VStack>
      </VStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  padding: 3rem;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 10px 10px 10px #e8e8e8, -10px -10px 10px #ffffff;

  transition: all 0.3s;
  &:hover {
    transform: scale(100.5%);
    box-shadow: 10px 10px 10px #d2d2d2, -10px -10px 10px #ffffff;
  }
`;
