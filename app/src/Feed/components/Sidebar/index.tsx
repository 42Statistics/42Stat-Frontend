import { VStack } from '@shared/ui-kit';

import { MyInfoCard } from '@/Feed/components/Sidebar/MyInfoCard';
import { MyBlackholeCard } from '@/Feed/components/Sidebar/MyBlackholeCard';
// import { MyFollowCard } from '@/Feed/components/Sidebar/MyFollowCard';
// import { MonthlyCoalitionCard } from '@/Feed/components/Sidebar/MonthlyCoalitionCard';

export const Sidebar = () => {
  return (
    <VStack w="40rem" align="start" spacing="2rem">
      <MyInfoCard />
      <MyBlackholeCard />
      {/* <MyFollowCard /> */}
      {/* <MonthlyCoalitionCard /> */}
    </VStack>
  );
};
