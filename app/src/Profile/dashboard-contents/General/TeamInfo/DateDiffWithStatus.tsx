import { TeamStatus } from '@shared/__generated__/graphql';
import { Text } from '@shared/ui-kit';
import { timeDiffStringFormatter } from '@shared/utils/formatters/timeDiffStringFormatter';

type DateDiffWithStatusProps = {
  date: Date;
  status: TeamStatus;
};

export const DateDiffWithStatus = ({
  date,
  status,
}: DateDiffWithStatusProps) => {
  const timeDiffString = timeDiffStringFormatter(date);

  if (status === TeamStatus.Registered) {
    return <Text>{`${timeDiffString} 등록`}</Text>;
  }
  if (status === TeamStatus.InProgress) {
    return <Text>{`${timeDiffString} 팀 빌딩`}</Text>;
  }
  if (status === TeamStatus.WaitingForCorrection) {
    return <Text>{`${timeDiffString} 제출`}</Text>;
  }
  if (status === TeamStatus.Finished) {
    return <Text>{`${timeDiffString} 완료`}</Text>;
  }
  return <></>;
};
