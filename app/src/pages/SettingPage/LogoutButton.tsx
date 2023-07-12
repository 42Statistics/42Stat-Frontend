import { logout } from '@/services/auth/logout';
import { Button } from '@components/common';

export const LogoutButton = () => {
  return <Button onClick={logout}>로그아웃</Button>;
};
