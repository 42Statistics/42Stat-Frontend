import { TeamStatus } from '@shared/__generated__/graphql';

export const getTeamStatusString = (status: TeamStatus) => {
  switch (status) {
    case TeamStatus.Registered:
      return '팀 빌딩 중';
    case TeamStatus.InProgress:
      return '진행 중';
    case TeamStatus.WaitingForCorrection:
      return '평가 중';
    case TeamStatus.Finished:
    default:
      return '완료';
  }
};
