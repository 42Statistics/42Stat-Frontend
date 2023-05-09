import type { NavMenu } from '@/utils/types/NavMenu';
import { MdAssignment } from '@react-icons/all-files/md/MdAssignment';
import { MdEqualizer } from '@react-icons/all-files/md/MdEqualizer';
import { MdHome } from '@react-icons/all-files/md/MdHome';
import { MdPerson } from '@react-icons/all-files/md/MdPerson';

type NavMenuIconProps = {
  menu: NavMenu;
  size?: string;
  color?: string;
};

export const NavMenuIcon = ({
  menu,
  size = '16px',
  color = 'inherit',
}: NavMenuIconProps) => {
  switch (menu) {
    case 'Home':
      return <MdHome size={size} fill={color} />;
    case 'LeaderBoard':
      return <MdEqualizer size={size} fill={color} />;
    case 'MyProfile':
      return <MdPerson size={size} fill={color} />;
    case 'EvalLogSearch':
      return <MdAssignment size={size} fill={color} />;
    default:
      throw new Error('💥 Wrong Menu');
  }
};
