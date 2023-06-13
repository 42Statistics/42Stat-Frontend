import { TeamStatus } from '@/__generated__/graphql';
import { Text } from '@components/common';
import { getDayDiff } from '@utils/getDayDiff';

type DateDiffWithStatusProps = {
  date: Date;
  status: TeamStatus;
};

export const DateDiffWithStatus = ({
  date,
  status,
}: DateDiffWithStatusProps) => {
  const now = new Date();
  const diff = getDayDiff(now, date);

  if (status === TeamStatus.Registered) {
    return <Text>{`${diff}일 전 등록`}</Text>;
  }
  if (status === TeamStatus.InProgress) {
    return <Text>{`${diff}일 전 팀 빌딩`}</Text>;
  }
  if (status === TeamStatus.WaitingForCorrection) {
    return <Text>{`${diff}일 전 제출`}</Text>;
  }
  if (status === TeamStatus.Finished) {
    return <Text>{`${diff}일 전 완료`}</Text>;
  }
  return <></>;
};
