import { TeamStatus } from '@shared/__generated__/graphql';
import { timeDiffStringFormatter } from '@shared/utils/formatters/timeDiffStringFormatter';

export const getDateDiffStringWithTeamStatus = (
  date: Date,
  status: TeamStatus,
) => {
  const timeDiffString = timeDiffStringFormatter(date);

  if (status === TeamStatus.Registered) {
    return `${timeDiffString} 등록`;
  }
  if (status === TeamStatus.InProgress) {
    return `${timeDiffString} 팀 빌딩`;
  }
  if (status === TeamStatus.WaitingForCorrection) {
    return `${timeDiffString} 제출`;
  }
  return `${timeDiffString} 완료`;
};
