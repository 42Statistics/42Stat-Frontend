import { useMutation } from '@apollo/client';
import { useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { isLogoutErrorDialogOpenAtom } from '@core/atoms/isLogoutErrorDialogOpenAtom';
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
  const setIsLogoutErrorDialogOpenAtom = useSetAtom(
    isLogoutErrorDialogOpenAtom,
  );

  useEffect(() => {
    if (!called) {
      return;
    }
    if (loading) {
      return;
    }
    if (error) {
      setIsLogoutErrorDialogOpenAtom(true);
      return;
    }

    clearStorage();
    setThemePreference(RESET);
    window.location.reload(); // atom 초기화를 위해 새로고침
  }, [
    called,
    loading,
    error,
    navigate,
    setIsLogoutErrorDialogOpenAtom,
    setThemePreference,
  ]);

  return <Button onClick={() => logout()}>로그아웃</Button>;
};
