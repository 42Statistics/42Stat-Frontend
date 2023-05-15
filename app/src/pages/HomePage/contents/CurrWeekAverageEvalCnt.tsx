import { NumberDefault } from '@/components/elements/DashboardContentView/Text';
import { DashboardContent } from '@/components/templates/Dashboard';

export const CurrWeekAverageEvalCnt = () => {
  const test = 1.71;

  const title = '주간 1인당 평가 횟수';
  const description = `(2000.00.00 ~ 2000.00.00 / 1주)`;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <NumberDefault number={test} unit={unit} />
    </DashboardContent>
  );
};
