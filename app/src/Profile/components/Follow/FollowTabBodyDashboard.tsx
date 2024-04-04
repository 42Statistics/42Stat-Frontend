import { DashboardRowItem } from '@shared/components/Dashboard/DashboardRowItem';
import { EmptyDashboardRowItem } from '@shared/components/Dashboard/EmptyDashboardRowItem';
import { DashboardRow } from '@shared/components/Dashboard/DashboardRow';
import type { MyFollow } from '@shared/__generated__/graphql';

import { FollowTabBodyItem } from '@/Profile/components/Follow/FollowTabBodyItem';
import { fillFollowRowListWithEmptyItems } from '@/Profile/utils/fillFollowRowListWithEmptyItems';
import { FOLLOW_SIZE_PER_PAGE } from '@/Profile/constants/followSizePerPage';
import type { FollowItemWithEmptyType } from '@/Profile/types/Follow';

type FollowTabBodayDashboardProps = {
  followList: MyFollow[];
};

export const FollowTabBodyDashboard = ({
  followList,
}: FollowTabBodayDashboardProps) => {
  const followRowList: FollowItemWithEmptyType[][] =
    fillFollowRowListWithEmptyItems(followList, FOLLOW_SIZE_PER_PAGE);

  return (
    <>
      {followRowList.map((chunk, col) => (
        <DashboardRow key={col}>
          {chunk.map((user, idx) =>
            user ? (
              <DashboardRowItem
                key={user.userPreview.id}
                rowSpan={1}
                colSpan={1}
                content={() => <FollowTabBodyItem user={user} />}
              />
            ) : (
              <EmptyDashboardRowItem
                key={`empty-${col}-${idx}`}
                rowSpan={1}
                colSpan={1}
                content={() => <></>}
              />
            ),
          )}
        </DashboardRow>
      ))}
    </>
  );
};
