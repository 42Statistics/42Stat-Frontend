import { Button } from '@components/common';
import { logout } from '@shared/services/auth/logout';

export const LogoutButton = () => {
  return <Button onClick={logout}>로그아웃</Button>;
};
