import { useMutation } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { gql } from '@shared/__generated__';
import { ReactComponent as MdSyncAlt } from '@shared/assets/icon/md-sync-alt.svg';
import { ARIA_LABEL } from '@shared/constants/accessibility';
import { URL } from '@shared/constants/url';
import { useDisclosure } from '@shared/hooks/useDisclosure';
import { AlertDialog, Clickable, Spinner } from '@shared/ui-kit';
import {
  FakeGoogleWrapperType,
  createFakeGoogleWrapper,
} from '@shared/utils/createFakeGoogleWrapper';
import { useEffect, useState } from 'react';
import { useScript } from 'usehooks-ts';

const LINK_GOOGLE = gql(/* GraphQL */ `
  mutation LinkGoogle($google: GoogleLoginInput!) {
    linkGoogle(google: $google) {
      userId
      linkedAccounts {
        platform
        id
        email
        linkedAt
      }
    }
  }
`);

type LinkGoogleButtonProps = {
  onSuccess: () => void;
};

export const LinkGoogleButton = ({ onSuccess }: LinkGoogleButtonProps) => {
  const theme = useTheme();
  const status = useScript(URL.GAPI, { removeOnUnmount: true });
  const [linkGoogle, { data, loading, error }] = useMutation(LINK_GOOGLE);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [googleButtonWrapper, setGoogleButtonWrapper] =
    useState<FakeGoogleWrapperType>();

  useEffect(() => {
    const handleClick = (
      credentialResponse: google.accounts.id.CredentialResponse,
    ) => {
      const clientId = import.meta.env.VITE_GAPI_CLIENT_ID;
      const { credential } = credentialResponse;
      linkGoogle({
        variables: {
          google: {
            clientId,
            credential,
          },
        },
      });
    };
    if (status !== 'ready') {
      return;
    }
    const fakeGoogleWrapper = createFakeGoogleWrapper(handleClick);
    setGoogleButtonWrapper(fakeGoogleWrapper);
    return () => {
      fakeGoogleWrapper.remove();
    };
  }, [status, linkGoogle]);

  useEffect(() => {
    if (loading) {
      return;
    }
    if (error) {
      const isConflict = error.graphQLErrors.some(
        (error) => error.extensions?.status === 409,
      );
      if (isConflict) {
        onOpen();
      }
      return;
    }
    if (!data) {
      return;
    }
    onSuccess();
  }, [data, loading, error, onOpen, onSuccess]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Clickable
        onClick={() => googleButtonWrapper?.click()}
        aria-label={ARIA_LABEL.BUTTON.LINK_WITH('구글')}
      >
        <MdSyncAlt width={20} height={20} fill={theme.colors.mono.black} />
      </Clickable>
      <AlertDialog
        isOpen={isOpen}
        onClose={onClose}
        title="계정 연동 실패"
        description="해당 구글 계정은 이미 다른 42 계정과 연동되어있습니다."
        confirmText="확인"
        onConfirm={onClose}
      />
    </>
  );
};
