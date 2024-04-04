import { DashboardSkeleton } from '@shared/components/DashboardSkeleton';

import { FollowPageHeader } from '@/Profile/components/Follow/FollowPageHeader';
import { FOLLOW_SIZE_PER_PAGE } from '@/Profile/constants/followSizePerPage';

type ProfileFollowPageSkeleton = {
  title: string;
};

export const ProfileFollowPageSkeleton = ({
  title,
}: ProfileFollowPageSkeleton) => {
  const profileFollowPageDashboardRows = [];
  const items = [];
  const numItems = FOLLOW_SIZE_PER_PAGE;

  for (let i = 0; i < numItems; i++) {
    items.push({
      rowSpan: 1,
      colSpan: 1,
      elementId: i,
    });
  }
  profileFollowPageDashboardRows.push({ items });

  return (
    <>
      <FollowPageHeader title={title} />
      <DashboardSkeleton defaultRows={profileFollowPageDashboardRows} />
    </>
  );
};
