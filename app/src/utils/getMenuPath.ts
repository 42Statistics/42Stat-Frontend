import { Menu } from '@/types/Menu';

export const getMenuPath = (type: Menu) => {
  switch (type) {
    case 'Home':
      return '/home';
    case 'Total':
      return '/total';
    case 'About':
      return '/about';
    case 'Settings':
      return '/settings';
    default:
      throw new Error('💥 Wrong Menu');
  }
};
