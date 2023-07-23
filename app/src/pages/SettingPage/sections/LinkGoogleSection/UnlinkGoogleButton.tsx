import { gql } from '@shared/__generated__';
import { useMutation } from '@apollo/client';
import { ReactComponent as MdDelete } from '@assets/icon/md-delete.svg';
import { Clickable } from '@components/common';
import { Spinner } from '@components/common/Loader';
import { useEffect } from 'react';

const UNLINK_ACCOUNT = gql(/* GraphQL */ `
  mutation UnlinkAccount($targetPlatform: String!) {
    unlinkAccount(targetPlatform: $targetPlatform) {
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

type UnlinkGoogleButtonProps = {
  onSuccess: () => void;
};

export const UnlinkGoogleButton = ({ onSuccess }: UnlinkGoogleButtonProps) => {
  const [unlinkGoogle, { loading, error, data }] = useMutation(UNLINK_ACCOUNT, {
    variables: {
      targetPlatform: 'google',
    },
  });

  const handleClick = () => {
    unlinkGoogle();
  };

  useEffect(() => {
    if (loading || error || !data) {
      return;
    }
    onSuccess();
  }, [loading, error, data, onSuccess]);

  if (loading) return <Spinner />;

  return (
    <Clickable onClick={handleClick}>
      <MdDelete width={20} height={20} />
    </Clickable>
  );
};
