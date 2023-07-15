import { gql } from '@/__generated__';
import { useMutation } from '@apollo/client';
import { Clickable } from '@components/common';
import { Spinner } from '@components/common/Loader';
import { IoTrashOutline } from '@react-icons/all-files/io5/IoTrashOutline';
import { useEffect } from 'react';

const UNLINK_GOOGLE = gql(/* GraphQL */ `
  mutation UnlinkGoogle {
    unlinkGoogle {
      googleId
      googleEmail
      linkedAt
      userId
    }
  }
`);

type UnlinkGoogleButtonProps = {
  onSuccess: () => void;
};

export const UnlinkGoogleButton = ({ onSuccess }: UnlinkGoogleButtonProps) => {
  const [unlinkGoogle, { loading, error, data }] = useMutation(UNLINK_GOOGLE);

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
      <IoTrashOutline size="20px" />
    </Clickable>
  );
};
