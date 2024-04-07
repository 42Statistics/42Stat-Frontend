import {
  Pagination,
  type PaginationProps,
} from '@shared/components/Pagination';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';

type ResponsivePaginationProps = Omit<PaginationProps, 'pagePerRow'>;

export const ResponsivePagination = (props: ResponsivePaginationProps) => {
  const device = useDeviceType();
  const pagePerRow = device === 'mobile' ? 5 : 10;

  return <Pagination {...props} pagePerRow={pagePerRow} />;
};
