import { LinkedAccount } from '@/__generated__/graphql';
import {
  H3MediumText,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from '@components/common';
import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { LinkGoogleButton } from './LinkGoogleButton';
import { LinkLabel } from './LinkLabel';
import { UnlinkGoogleButton } from './UnlinkGoogleButton';

type LinkRowProps = {
  title: string;
  logo: string;
  linkedAccount?: LinkedAccount;
  refetch: () => void;
};

export const LinkRow = ({
  title,
  logo,
  linkedAccount,
  refetch,
}: LinkRowProps) => {
  const theme = useTheme();
  const isLinked = linkedAccount !== undefined;

  const getLinkLabelText = (linkedAccount?: LinkedAccount) => {
    if (linkedAccount === undefined) {
      return '연동된 계정 없음';
    }
    return linkedAccount.email ?? linkedAccount.id;
  };

  const text = getLinkLabelText(linkedAccount);

  return (
    <HStack w="100%" spacing="2rem" wrap="wrap">
      <H3MediumText>{title}</H3MediumText>
      <Spacer />
      <VStack align="end" spacing="1rem">
        <LinkLabel
          left={<Image src={logo} style={{ width: '24px' }} />}
          text={text}
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
            {dayjs(new Date(linkedAccount.linkedAt)).format(
              'YYYY-MM-DD HH:mm:ss',
            )}{' '}
            연동됨
          </Text>
        )}
      </VStack>
    </HStack>
  );
};