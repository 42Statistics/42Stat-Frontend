import { logout } from '@shared/services/auth/logout';
import { Button } from '@shared/ui-kit';

export const LogoutButton = () => {
  return <Button onClick={logout}>로그아웃</Button>;
};
