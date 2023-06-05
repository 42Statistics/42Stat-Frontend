import { NumberDefault } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/DashboardContent';
import dayjs from 'dayjs';

export const CurrWeekAverageEvalCount = () => {
  const title = '주간 1인당 평가 횟수';
  const test = 1.71;

  const description = `${dayjs().format('YYYY년 M월 w주')}`;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={test} unit={unit} />
    </DashboardContent>
  );
};
