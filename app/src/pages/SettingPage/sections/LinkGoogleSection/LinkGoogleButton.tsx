import { GAPI_URL } from '@/constants/GAPI';
import { useMutation } from '@apollo/client';
import { Clickable } from '@components/common';
import { Spinner } from '@components/common/Loader';
import { gql } from '@shared/__generated__';
import { ReactComponent as MdSyncAlt } from '@shared/assets/icon/md-sync-alt.svg';
import {
  FakeGoogleWrapperType,
  createFakeGoogleWrapper,
} from '@utils/createFakeGoogleWrapper';
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
  const status = useScript(GAPI_URL, { removeOnUnmount: true });
  const [linkGoogle, { data, loading, error }] = useMutation(LINK_GOOGLE);
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
    if (loading || error || !data) {
      return;
    }
    onSuccess();
  }, [data, loading, error, onSuccess]);

  if (loading) return <Spinner />;

  return (
    <Clickable onClick={() => googleButtonWrapper?.click()}>
      <MdSyncAlt width={20} height={20} />
    </Clickable>
  );
};
