import { gql } from '@/__generated__';
import { useMutation } from '@apollo/client';
import { Clickable } from '@components/common';
import { IoTrashOutline } from '@react-icons/all-files/io5/IoTrashOutline';
import { useEffect } from 'react';

const UNLINK_GOOGLE = gql(/* GraphQL */ `
  mutation UnlinkGoogle {
    unlinkGoogle
  }
`);

export const UnlinkGoogleButton = () => {
  const [unlinkGoogle, { loading, error, data }] = useMutation(UNLINK_GOOGLE);

  useEffect(() => {
    console.log(loading, error, data);
  }, [loading, error, data]);

  const handleClick = () => {
    unlinkGoogle();
  };
  return (
    <Clickable onClick={handleClick}>
      <IoTrashOutline size="20px" />
    </Clickable>
  );
};
