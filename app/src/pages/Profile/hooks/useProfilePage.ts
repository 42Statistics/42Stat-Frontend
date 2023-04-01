import { ProfileMenuOption } from '@/utils/types/ProfileMenu';

export const useProfilePage = () => {
  const options: ProfileMenuOption[] = [
    { menu: 'General', text: '일반' },
    { menu: 'Evaluation', text: '평가' },
  ];

  return { options };
};
