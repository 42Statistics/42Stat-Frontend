import { gql } from '@/__generated__';
import { GAPI_URL } from '@/constants/GAPI';
import { useScript } from '@/hooks/useScript';
import { useMutation } from '@apollo/client';
import { Clickable } from '@components/common';
import { BsArrowLeftRight } from '@react-icons/all-files/bs/BsArrowLeftRight';
import { createFakeGoogleWrapper } from '@utils/createFakeGoogleWrapper';
import { useEffect } from 'react';

const LINK_GOOGLE = gql(/* GraphQL */ `
  mutation LinkGoogle($google: GoogleLoginInput!) {
    linkGoogle(google: $google)
  }
`);

export const LinkGoogleButton = () => {
  const [linkGoogle, { loading, error, data }] = useMutation(LINK_GOOGLE);
  const status = useScript(GAPI_URL);

  useEffect(() => {
    console.log(loading, error, data);
  }, [loading, error, data]);

  if (status !== 'ready') return null;

  const handleClick = (
    credentialResponse: google.accounts.id.CredentialResponse,
  ) => {
    const { credential } = credentialResponse;
    const clientId = import.meta.env.VITE_GAPI_CLIENT_ID;
    linkGoogle({
      variables: {
        google: {
          clientId,
          credential,
        },
      },
    });
  };

  const googleButtonWrapper = createFakeGoogleWrapper(handleClick);

  return (
    <Clickable onClick={() => googleButtonWrapper.click()}>
      <BsArrowLeftRight />
    </Clickable>
  );
};
