import { unlinkGoogle } from '@/services/link/unlinkGoogle';
import { Clickable } from '@components/common';
import { IoTrashOutline } from '@react-icons/all-files/io5/IoTrashOutline';

export const UnlinkGoogleButton = () => {
  const handleClick = async () => {
    const result = await unlinkGoogle();
    console.log(result);
  };

  return (
    <Clickable onClick={handleClick}>
      <IoTrashOutline size="20px" />
    </Clickable>
  );
};
