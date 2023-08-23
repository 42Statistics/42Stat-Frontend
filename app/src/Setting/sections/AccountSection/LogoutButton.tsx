import { useMutation } from '@apollo/client';
import { gql } from '@shared/__generated__';
import { themePreferenceAtom } from '@shared/atoms/themePreferenceAtom';
import { ROUTES } from '@shared/constants/(tmp)routes';
import { Button } from '@shared/ui-kit';
import { clearStorage } from '@shared/utils/storage/clearStorage';
import { useSetAtom } from 'jotai';
import { RESET } from 'jotai/utils';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LOGOUT = gql(/* GraphQL */ `
  mutation Logout {
    logout
  }
`);

export const LogoutButton = () => {
  const [logout, { called, loading }] = useMutation(LOGOUT);
  const setThemePreference = useSetAtom(themePreferenceAtom);
  const navigate = useNavigate();

  useEffect(() => {
    if (!called) {
      return;
    }
    if (loading) {
      return;
    }

    // 실패해도 ROOT로 이동
    clearStorage();
    setThemePreference(RESET);
    navigate(ROUTES.ROOT);
  }, [called, loading, navigate, setThemePreference]);

  return <Button onClick={() => logout()}>로그아웃</Button>;
};
