import { gql } from '@shared/__generated__';

export const TEAM_PREVIEW_FIELDS = gql(/* GraphQL */ `
  fragment teamPreviewFields on TeamPreview {
    id
    name
    url
  }
`);
