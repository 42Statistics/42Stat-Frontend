import { gql } from '@/__generated__';
import google_logo from '@/assets/google-logo.svg';
import { useQuery } from '@apollo/client';
import ft_logo from '@assets/42-logo.svg';
import { userAtom } from '@atoms/userAtom';
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
import { useAtomValue } from 'jotai';
import { LinkLabel } from './LinkLabel';
import { LinkRow } from './LinkRow';

export const ACCOUNT_FIELDS = gql(/* GraphQL */ `
  fragment AccountFields on Account {
    userId
    linkedAccount {
      linkedPlatform
      id
      email
      linkedAt
    }
  }
`);

export const GET_SETTING = gql(/* GraphQL */ `
  query GetSetting {
    getSetting {
      account {
        ...AccountFields
      }
    }
  }
`);

export const LinkGoogleSection = () => {
  const theme = useTheme();
  const { data, refetch } = useQuery(GET_SETTING);
  const user = useAtomValue(userAtom);

  const { linkedAccount } = data?.getSetting?.account ?? {};

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
              text={user.login}
            />
          </HStack>
          <LinkRow
            title="구글 계정"
            logo={google_logo}
            linkedAccount={linkedAccount?.find(
              (account) => account.linkedPlatform === 'google',
            )}
            refetch={refetch}
          />
        </VStack>
      </VStack>
    </NeumorphismSection>
  );
};
