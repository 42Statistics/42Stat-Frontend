import { gql } from '@shared/__generated__';

export const TEAM_USER_PREVIEW_FIELDS = gql(/* GraphQL */ `
  fragment teamUserPreviewFields on TeamUserPreview {
    id
    login
    imgUrl
    occurrence
    isLeader
  }
`);
