import { parsePageNumber } from '@shared/utils/parsePaginationArgs';

import { FOLLOW_SIZE_PER_PAGE } from '@/Profile/constants/followSizePerPage';
import type { FollowPageArgsProps } from '@/Profile/types/Follow';

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
