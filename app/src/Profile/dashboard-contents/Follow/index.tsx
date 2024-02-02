import styled from '@emotion/styled';

import { FollowList } from '@shared/__generated__/graphql';
import { DashboardRow } from '@shared/components/Dashboard/DashboardRow';
import { DashboardRowItem } from '@shared/components/Dashboard/DashboardRowItem';
import { ResponsivePagination } from '@shared/components/Pagination/ResponsivePagination';

import { FOLLOW_SIZE_PER_PAGE } from '@/Profile/constants/followSizePerPage';

import FollowItem from './FollowItem';

type FollowPageProps = {
  followList: FollowList[];
  totalCount: number;
  currentPage: number;
  setSearchParams: (newURLSearchParams: URLSearchParams) => void;
};

const Follow = ({
  followList,
  totalCount,
  currentPage,
  setSearchParams,
}: FollowPageProps) => {
  const followRowList = sliceRowList(followList, 6);

  const handlePageNumberChange = (newPageNumber: number) => {
    const newURLSearchParams = new URLSearchParams();

    newURLSearchParams.set('page', newPageNumber.toString());
    setSearchParams(newURLSearchParams);
  };

  return (
    <Layout>
      {followRowList.map((chunk, col) => (
        <DashboardRow key={col}>
          {chunk.map((user) => (
            <DashboardRowItem
              key={user.userPreview.id}
              rowSpan={1}
              colSpan={1}
              content={() => <FollowItem user={user} />}
            ></DashboardRowItem>
          ))}
        </DashboardRow>
      ))}
      <ResponsivePagination
        currPageNumber={currentPage}
        onPageNumberChange={handlePageNumberChange}
        totalPageNumber={Math.ceil(totalCount / FOLLOW_SIZE_PER_PAGE)}
      />
    </Layout>
  );
};

const sliceRowList = (array: FollowList[], chunkSize: number) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, chunkSize + i));
  }
  return chunks;
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 100%;
`;

export default Follow;
