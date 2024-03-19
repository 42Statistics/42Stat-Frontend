import { VStack } from '@shared/ui-kit';

import { MyInfoCard } from '@/Home/components/Sidebar/MyInfoCard';
import { MyBlackholeCard } from '@/Home/components/Sidebar/MyBlackholeCard';
import { MyFollowCard } from '@/Home/components/Sidebar/MyFollowCard';
import { MonthlyCoalitionCard } from '@/Home/components/Sidebar/MonthlyCoalitionCard';

export const Sidebar = () => {
  return (
    <VStack w="40rem" align="start" spacing="4rem">
      <MyInfoCard />
      <MyBlackholeCard />
      <MyFollowCard />
      <MonthlyCoalitionCard />
    </VStack>
  );
};
