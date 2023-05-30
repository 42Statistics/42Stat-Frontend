import { TextDefault } from '@components/elements/DashboardContentView/Text';
import { DashboardContent } from '@components/templates/Dashboard';

export const TotalEvalTime = () => {
  const title = '누적 평가 시간';
  const test = 12041; // 분

  return (
    <DashboardContent title={title}>
      <TextDefault
        text={`${Math.floor(test / 60).toLocaleString()}시간 ${test % 60}분`}
      />
    </DashboardContent>
  );
};
