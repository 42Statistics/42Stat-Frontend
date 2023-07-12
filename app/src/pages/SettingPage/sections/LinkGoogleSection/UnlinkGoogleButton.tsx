import { unlinkGoogle } from '@/services/link/unlinkGoogle';
import { Clickable } from '@components/common';
import { IoTrashOutline } from '@react-icons/all-files/io5/IoTrashOutline';

type UnlinkGoogleButtonProps = {
  onSuccess: () => void;
};

export const UnlinkGoogleButton = ({ onSuccess }: UnlinkGoogleButtonProps) => {
  const handleClick = async () => {
    const result = await unlinkGoogle();
    const { data } = result;
    if (data) {
      onSuccess();
    }
  };

  return (
    <Clickable onClick={handleClick}>
      <IoTrashOutline size="20px" />
    </Clickable>
  );
};
