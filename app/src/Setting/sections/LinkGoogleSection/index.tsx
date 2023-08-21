import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { gql } from '@shared/__generated__';
import { LinkableAccount } from '@shared/__generated__/graphql';
import { ReactComponent as FtLogo } from '@shared/assets/logo/ft-logo.svg';
import { ReactComponent as GoogleLogo } from '@shared/assets/logo/google-logo.svg';
import { userAtom } from '@shared/atoms/userAtom';
import {
  Divider,
  H2BoldText,
  H3MediumText,
  Text,
  VStack,
} from '@shared/ui-kit';
import { CustomSection } from '@shared/ui-kit-styled';
import { mq } from '@shared/utils/facepaint/mq';
import { useAtomValue } from 'jotai';
import { LinkGoogleButton } from './LinkGoogleButton';
import { LinkLabel } from './LinkLabel';
import { UnlinkGoogleButton } from './UnlinkGoogleButton';

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

  const linkedGoogleAccount = linkedAccounts?.find(
    (account) => account.platform === 'google',
  );

  return (
    <CustomSection>
      <VStack align="start" spacing="4rem">
        <VStack align="start" spacing="0.5rem">
          <H2BoldText>계정 연동</H2BoldText>
          <Text color={theme.colors.mono.gray500}>
            42 인증을 거치지 않고 로그인할 수 있어요.
          </Text>
        </VStack>
        <Divider />
        <VStack w="100%" align="start" spacing="4rem">
          <LinkRow>
            <H3MediumText>42 계정</H3MediumText>
            <LinkLabel
              left={<FtLogo width={20} height={20} />}
              text={user.login}
            />
          </LinkRow>
          <LinkRow>
            <H3MediumText>구글 계정</H3MediumText>
            <LinkLabel
              left={<GoogleLogo width={20} height={20} />}
              text={computeLinkLabelText(linkedGoogleAccount)}
              right={
                linkedGoogleAccount === undefined ? (
                  <LinkGoogleButton onSuccess={refetch} />
                ) : (
                  <UnlinkGoogleButton onSuccess={refetch} />
                )
              }
            />
          </LinkRow>
        </VStack>
      </VStack>
    </CustomSection>
  );
};

const computeLinkLabelText = (linkedAccount: LinkableAccount | undefined) => {
  if (linkedAccount === undefined) {
    return '연동된 계정 없음';
  }
  return linkedAccount.email ?? linkedAccount.id;
};

const LinkRow = styled.div`
  display: flex;
  width: 100%;
  ${mq({
    flexDirection: ['column', 'row'],
    justifyContent: ['center', 'space-between'],
    alignItems: ['flex-start', 'center'],
    gap: ['2rem', 0],
  })}
`;
