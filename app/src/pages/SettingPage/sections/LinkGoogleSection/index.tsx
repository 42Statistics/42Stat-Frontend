import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import ft_logo from '@assets/42-logo.svg';
import google_logo from '@assets/google-logo.svg';
import {
  Divider,
  H2BoldText,
  H3MediumText,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from '@components/common';
import { useTheme } from '@emotion/react';
import { NeumorphismSection } from '@styles/custom/NeumorphismSection';
import dayjs from 'dayjs';
import { LinkGoogleButton } from './LinkGoogleButton';
import { LinkLabel } from './LinkLabel';
import { UnlinkGoogleButton } from './UnlinkGoogleButton';

export const GET_SETTING = gql(/* GraphQL */ `
  query GetSetting {
    getSetting {
      userLogin
      googleEmail
      linkedAt
    }
  }
`);

export const LinkGoogleSection = () => {
  const theme = useTheme();
  const { data, refetch } = useQuery(GET_SETTING);

  const { userLogin, googleEmail, linkedAt } = data?.getSetting ?? {};
  const isLinked = googleEmail != null && linkedAt != null;

  return (
    <NeumorphismSection>
      <VStack align="start" spacing="4rem">
        <VStack align="start" spacing="0.5rem">
          <H2BoldText>계정 연동</H2BoldText>
          <Text color={theme.colors.mono.gray300}>
            42 인증을 거치지 않고 로그인할 수 있어요.
          </Text>
        </VStack>
        <Divider />
        <VStack w="100%" align="start" spacing="3rem">
          <HStack w="100%" spacing="2rem" wrap="wrap">
            <H3MediumText>42 계정</H3MediumText>
            <Spacer />
            <LinkLabel
              left={<Image src={ft_logo} style={{ width: '24px' }} />}
              text={userLogin ?? ''}
            />
          </HStack>
          <HStack w="100%" spacing="2rem" wrap="wrap">
            <H3MediumText>구글 계정</H3MediumText>
            <Spacer />
            <VStack align="end" spacing="1rem">
              <LinkLabel
                left={<Image src={google_logo} style={{ width: '24px' }} />}
                text={isLinked ? googleEmail : '연동된 계정 없음'}
                right={
                  isLinked ? (
                    <UnlinkGoogleButton onSuccess={refetch} />
                  ) : (
                    <LinkGoogleButton onSuccess={refetch} />
                  )
                }
              />
              {isLinked && (
                <Text
                  color={theme.colors.mono.gray300}
                  style={{ marginRight: '2rem' }}
                >
                  {dayjs(new Date(linkedAt)).format('YYYY-MM-DD HH:mm:ss')}{' '}
                  연동됨
                </Text>
              )}
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </NeumorphismSection>
  );
};
