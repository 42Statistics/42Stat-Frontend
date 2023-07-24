import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { gql } from '@shared/__generated__';
import { ReactComponent as FtLogo } from '@shared/assets/logo/ft-logo.svg';
import google_logo from '@shared/assets/logo/google-logo.svg';
import {
  Divider,
  H2BoldText,
  H3MediumText,
  HStack,
  Spacer,
  Text,
  VStack,
} from '@shared/ui-kit';
import { CustomSection } from '@shared/ui-kit-styled';
import { userAtom } from '@shared/utils/jotai/atoms/userAtom';
import { useAtomValue } from 'jotai';
import { LinkLabel } from './LinkLabel';
import { LinkRow } from './LinkRow';

export const ACCOUNT_FIELDS = gql(/* GraphQL */ `
  fragment AccountFields on Account {
    userId
    linkedAccounts {
      platform
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

  const { linkedAccounts } = data?.getSetting?.account ?? {};

  return (
    <CustomSection>
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
              left={<FtLogo width={24} height={24} />}
              text={user.login}
            />
          </HStack>
          <LinkRow
            title="구글 계정"
            logo={google_logo}
            linkedAccount={linkedAccounts?.find(
              (account) => account.platform === 'google',
            )}
            refetch={refetch}
          />
        </VStack>
      </VStack>
    </CustomSection>
  );
};
