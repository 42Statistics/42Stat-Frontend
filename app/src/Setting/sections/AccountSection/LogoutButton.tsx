import { useMutation } from '@apollo/client';
import { useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { isDialogOpenAtom } from '@core/atoms/isDialogOpenAtom';
import { gql } from '@shared/__generated__';
import { themePreferenceAtom } from '@shared/atoms/themePreferenceAtom';
import { Button } from '@shared/ui-kit';
import { clearStorage } from '@shared/utils/storage/clearStorage';

const LOGOUT = gql(/* GraphQL */ `
  mutation Logout {
    logout
  }
`);

export const LogoutButton = () => {
  const navigate = useNavigate();
  const [logout, { called, loading, error }] = useMutation(LOGOUT);
  const setThemePreference = useSetAtom(themePreferenceAtom);
  const setLogoutError = useSetAtom(isDialogOpenAtom);

  useEffect(() => {
    if (!called) {
      return;
    }
    if (loading) {
      return;
    }
    if (error) {
      setLogoutError({
        isOpen: true,
        title: '로그아웃 오류',
        description: '다시 시도해주세요.',
        confirmText: '확인',
      });
      return;
    }

    clearStorage();
    setThemePreference(RESET);
    window.location.reload(); // atom 초기화를 위해 새로고침
  }, [called, loading, error, navigate, setThemePreference]);

  return <Button onClick={() => logout()}>로그아웃</Button>;
};
