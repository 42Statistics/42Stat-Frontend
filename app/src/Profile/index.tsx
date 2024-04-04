import { Outlet } from 'react-router-dom';

import { VStack } from '@shared/ui-kit';

import { BeginAtProvider } from '@/Profile/components/BeginAtProvider';
import { UserProfile } from '@/Profile/components/UserProfile';
import { UserProfileProvider } from '@/Profile/components/UserProfileProvider';

import { ProfileTabList } from './ProfileTabList';

const ProfileLayout = () => {
  return (
    <UserProfileProvider>
      <BeginAtProvider>
        <VStack w="100%" spacing="3rem">
          <UserProfile />
          <ProfileTabList />
          <Outlet />
        </VStack>
      </BeginAtProvider>
    </UserProfileProvider>
  );
};

export default ProfileLayout;
