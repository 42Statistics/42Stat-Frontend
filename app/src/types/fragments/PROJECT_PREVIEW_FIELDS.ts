import { gql } from '@/__generated__';

export const PROJECT_PREVIEW_FIELDS = gql(/* GraphQL */ `
  fragment projectPreviewFields on ProjectPreview {
    id
    name
    url
  }
`);
