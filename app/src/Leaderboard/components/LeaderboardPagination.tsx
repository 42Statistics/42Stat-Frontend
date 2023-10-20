import {
  Pagination,
  type PaginationProps,
} from '@shared/components/Pagination';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

type LeaderboardPaginationProps = Omit<PaginationProps, 'pagePerRow'>;

export const LeaderboardPagination = (props: LeaderboardPaginationProps) => {
  const device = useDeviceType();
  const pagePerRow = device === 'mobile' ? 5 : 10;

  return <Pagination {...props} pagePerRow={pagePerRow} />;
};
