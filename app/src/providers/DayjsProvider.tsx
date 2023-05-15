import weekOfMonth from '@/utils/plugin/weekOfMonth';
import dayjs from 'dayjs';

const Provider = ({ children }: React.PropsWithChildren) => {
  dayjs.extend(weekOfMonth);
  return <>{children}</>;
};

export default Provider;
