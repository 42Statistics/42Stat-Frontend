import { GAPI_URL } from '@/constants/GAPI';
import { useScript } from '@/hooks/useScript';
import { linkGoogle } from '@/services/link/linkGoogle';
import { Clickable } from '@components/common';
import { BsArrowLeftRight } from '@react-icons/all-files/bs/BsArrowLeftRight';
import { createFakeGoogleWrapper } from '@utils/createFakeGoogleWrapper';

type LinkGoogleButtonProps = {
  onSuccess: () => void;
};

export const LinkGoogleButton = ({ onSuccess }: LinkGoogleButtonProps) => {
  const status = useScript(GAPI_URL);

  if (status !== 'ready') {
    return null;
  }

  const handleClick = async (
    credentialResponse: google.accounts.id.CredentialResponse,
  ) => {
    const clientId = import.meta.env.VITE_GAPI_CLIENT_ID;
    const { credential } = credentialResponse;
    const { data } = await linkGoogle({
      clientId,
      credential,
    });
    if (data) {
      onSuccess(); // TODO: refetch 대신 상태 저장
    }
  };

  const googleButtonWrapper = createFakeGoogleWrapper(handleClick);

  return (
    <Clickable onClick={() => googleButtonWrapper.click()}>
      <BsArrowLeftRight />
    </Clickable>
  );
};
