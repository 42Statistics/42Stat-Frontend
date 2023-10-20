import { gql } from '@shared/__generated__';
import type { TeamUserPreview } from '@shared/__generated__/graphql';

// id를 추가하지 마세요. normalized 되어 TeamUserPreview가 자기 멋대로 캐싱합니다.
export const TEAM_USER_PREVIEW_FIELDS = gql(/* GraphQL */ `
  fragment teamUserPreviewFields on TeamUserPreview {
    login
    imgUrl
    occurrence
    isLeader
  }
`);

export type TeamUserPreviewExcludeId = Omit<TeamUserPreview, 'id'>;
