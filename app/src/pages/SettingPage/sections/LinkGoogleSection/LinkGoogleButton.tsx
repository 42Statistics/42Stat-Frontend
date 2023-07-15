import { gql } from '@/__generated__';
import { GAPI_URL } from '@/constants/GAPI';
import { useScript } from '@/hooks/useScript';
import { useMutation } from '@apollo/client';
import { Clickable } from '@components/common';
import { Spinner } from '@components/common/Loader';
import { BsArrowLeftRight } from '@react-icons/all-files/bs/BsArrowLeftRight';
import { createFakeGoogleWrapper } from '@utils/createFakeGoogleWrapper';
import { useEffect } from 'react';

const LINK_GOOGLE = gql(/* GraphQL */ `
  mutation LinkGoogle($google: GoogleLoginInput!) {
    linkGoogle(google: $google) {
      googleId
      googleEmail
      linkedAt
      userId
    }
  }
`);

type LinkGoogleButtonProps = {
  onSuccess: () => void;
};

export const LinkGoogleButton = ({ onSuccess }: LinkGoogleButtonProps) => {
  const status = useScript(GAPI_URL);
  const [linkGoogle, { data, loading, error }] = useMutation(LINK_GOOGLE);

  useEffect(() => {
    if (loading || error || !data) {
      return;
    }
    onSuccess();
  }, [data, loading, error, onSuccess]);

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

  if (status !== 'ready') return null;
  const googleButtonWrapper = createFakeGoogleWrapper(handleClick);

  if (loading) return <Spinner />;

  return (
    <Clickable onClick={() => googleButtonWrapper.click()}>
      <BsArrowLeftRight />
    </Clickable>
  );
};
