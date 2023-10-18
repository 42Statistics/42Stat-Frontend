import type { TeamUserPreviewExcludeId } from '@shared/types/fragments/TEAM_USER_PREVIEW_FIELDS';

export const teamUserCompareFn = (
  a: TeamUserPreviewExcludeId,
  b: TeamUserPreviewExcludeId,
) => {
  const A_FIRST = -1;
  const B_FIRST = 1;

  // 1. Leader
  if (a.isLeader) {
    return A_FIRST;
  } else if (b.isLeader) {
    return B_FIRST;
  }

  // 2. Occurrence 내림차순
  if (a.occurrence > b.occurrence) {
    return A_FIRST;
  } else if (a.occurrence < b.occurrence) {
    return B_FIRST;
  }

  // 3. Login 오름차순
  if (a.login > b.login) {
    return B_FIRST;
  } else if (a.login < b.login) {
    return A_FIRST;
  }

  return 0;
};
