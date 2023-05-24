import { Spacer, VStack } from '@/components/common';
import { NAV_ROUTES, NavRoute } from '@/routes/NAV_ROUTES';
import { userAtom } from '@/utils/atoms/userAtom';
import { MdPerson } from '@react-icons/all-files/md/MdPerson';
import { MdPersonOutline } from '@react-icons/all-files/md/MdPersonOutline';
import { useAtomValue } from 'jotai';
import { NavItem } from './NavItem';

// TODO: SidebarMenu와 TabBar의 로직 유사하므로 통합 필요

export const NavMenu = () => {
  const { id } = useAtomValue(userAtom);
  const MY_PROFILE: NavRoute = {
    text: '내 정보',
    abbr: '내 정보',
    path: `/profile/${id}`,
    icon: MdPersonOutline,
    iconFocused: MdPerson,
  };
  return (
    <VStack as="ul" w="100%" h="100%" spacing="2rem">
      <NavItem route={NAV_ROUTES.HOME} />
      <NavItem route={MY_PROFILE} />
      <NavItem route={NAV_ROUTES.LEADERBOARD} />
      <NavItem route={NAV_ROUTES.EVALLOG} />
      <Spacer />
      <NavItem route={NAV_ROUTES.LOGOUT} />
    </VStack>
  );
};
