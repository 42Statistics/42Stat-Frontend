import { Button } from '@components/common';

type DeleteAccountButtonProps = {
  onClick: () => void;
  dialog: React.ReactNode;
};

export const DeleteAccountButton = ({
  onClick,
  dialog,
}: DeleteAccountButtonProps) => {
  return (
    <>
      <Button onClick={onClick}>계정 삭제</Button>
      {dialog}
    </>
  );
};
