import { NavMenu } from '@/utils/types/NavMenu';
import { useTheme } from '@emotion/react';
import { FiAward } from '@react-icons/all-files/fi/FiAward';
import { MdAssignment } from '@react-icons/all-files/md/MdAssignment';
import { MdEqualizer } from '@react-icons/all-files/md/MdEqualizer';
import { MdPerson } from '@react-icons/all-files/md/MdPerson';
import { MdSettings } from '@react-icons/all-files/md/MdSettings';

type NavMenuIconProps = {
  menu: NavMenu;
  size?: string;
  isFocused: boolean;
};

export const NavMenuIcon = ({
  menu,
  size = '16px',
  isFocused,
}: NavMenuIconProps) => {
  const theme = useTheme();
  const color = isFocused
    ? theme.colors.primary.light
    : theme.colors.mono.white;

  switch (menu) {
    case 'Stat':
      return <MdEqualizer size={size} fill={color} />;
    case 'LeaderBoard':
      return <FiAward size={size} fill={color} />;
    case 'MyProfile':
      return <MdPerson size={size} fill={color} />;
    case 'EvalLogSearch':
      return <MdAssignment size={size} fill={color} />;
    case 'Settings':
      return <MdSettings size={size} fill={color} />;
    default:
      throw new Error('💥 Wrong Menu');
  }
};
