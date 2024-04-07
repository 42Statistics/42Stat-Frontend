import styled from '@emotion/styled';

import { MyFollow } from '@shared/__generated__/graphql';
import { ResponsivePagination } from '@shared/components/Pagination/ResponsivePagination';

import { FOLLOW_SIZE_PER_PAGE } from '@/Profile/constants/followSizePerPage';
import { FollowTabBodyDashboard } from '@/Profile/components/Follow/FollowTabBodyDashboard';

type FollowTabBodyProps = {
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
}: FollowTabBodyProps) => {
  const handlePageNumberChange = (newPageNumber: number) => {
    const newURLSearchParams = new URLSearchParams();

    newURLSearchParams.set('page', newPageNumber.toString());
    setSearchParams(newURLSearchParams);
  };

  return (
    <Layout>
      <FollowTabBodyDashboard followList={myFollow} />
      <ResponsivePagination
        currPageNumber={currentPage}
        onPageNumberChange={handlePageNumberChange}
        totalPageNumber={Math.ceil(totalCount / FOLLOW_SIZE_PER_PAGE)}
      />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
`;
