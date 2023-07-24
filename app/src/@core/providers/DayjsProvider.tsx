import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import weekOfMonth from '@core/utils/dayjs/weekOfMonth';
import dayjs from 'dayjs';

const Provider = ({ children }: PropsWithReactElementChildren) => {
  dayjs.extend(weekOfMonth);
  return <>{children}</>;
};

export default Provider;
