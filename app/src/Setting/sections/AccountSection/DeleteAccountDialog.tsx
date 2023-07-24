import { useMutation } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { ROUTES } from '@shared/constants/ROUTES';
import { ConfirmDialog } from '@shared/ui-kit';
import { removeAccessToken } from '@shared/utils/storage/accessToken';
import { removeGoogleCredential } from '@shared/utils/storage/googleCredential';
import { removeRefreshToken } from '@shared/utils/storage/refreshToken';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const DELETE_ACCOUNT = gql(/* GraphQL */ `
  mutation DeleteAccount {
    deleteAccount
  }
`);

type DeleteAccountDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const DeleteAccountDialog = ({
  isOpen,
  onClose,
}: DeleteAccountDialogProps) => {
  const [deleteAccount, { data }] = useMutation(DELETE_ACCOUNT);
  const navigate = useNavigate();

  const handleConfirm = () => {
    deleteAccount();
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    if (data.deleteAccount) {
      removeAccessToken();
      removeRefreshToken();
      removeGoogleCredential();
      navigate(ROUTES.ROOT);
    } else {
      onClose();
    }
  }, [data, navigate, onClose]);

  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={onClose}
      title="정말 계정을 삭제하시겠어요?"
      description="계정을 삭제하면 모든 데이터가 삭제되며, 복구할 수 없습니다."
      confirmText="삭제"
      onConfirm={handleConfirm}
      cancelText="취소"
      onCancel={onClose}
    />
  );
};
