import { parsePageNumber } from '@shared/utils/parsePaginationArgs';

import { FOLLOW_SIZE_PER_PAGE } from '@/Profile/constants/followSizePerPage';

type FollowPageArgsProps = {
  pageNumber: number;
  pageSize: number;
};

export const followPageArgs = (
  searchParams: URLSearchParams,
): FollowPageArgsProps => {
  const pageNumber = parsePageNumber(searchParams.get('page'));
  const pageSize = FOLLOW_SIZE_PER_PAGE;

  return {
    pageNumber,
    pageSize,
  };
};
