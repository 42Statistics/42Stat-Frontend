import styled from '@emotion/styled';

import { MyFollow } from '@shared/__generated__/graphql';
import { DashboardRow } from '@shared/components/Dashboard/DashboardRow';
import { DashboardRowItem } from '@shared/components/Dashboard/DashboardRowItem';
import { ResponsivePagination } from '@shared/components/Pagination/ResponsivePagination';

import { FOLLOW_SIZE_PER_PAGE } from '@/Profile/constants/followSizePerPage';
import { FollowTabBodyItem } from '@/Profile/components/Follow/FollowTabBodyItem';

type FollowPageProps = {
  myFollow: MyFollow[];
  totalCount: number;
  currentPage: number;
  setSearchParams: (newURLSearchParams: URLSearchParams) => void;
};

export const FollowTabBody = ({
  myFollow,
  totalCount,
  currentPage,
  setSearchParams,
}: FollowPageProps) => {
  const followRowList = sliceRowList(myFollow, 6);

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
              content={() => <FollowTabBodyItem user={user} />}
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

const sliceRowList = (array: MyFollow[], chunkSize: number) => {
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
