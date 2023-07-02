import { PageButtonList } from '@components/elements/PageButtonList';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';

type LeaderboardPageButtonListProps = {
  currPageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  totalPageNumber: number;
};

export const LeaderboardPageButtonList = (
  props: LeaderboardPageButtonListProps,
) => {
  return (
    <>
      <TabletAndAbove>
        <PageButtonList {...props} />
      </TabletAndAbove>
      <Mobile>
        <PageButtonList {...props} pagePerRow={5} />
      </Mobile>
    </>
  );
};
