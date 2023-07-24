import { gql } from '@shared/__generated__';

export const USER_PREVIEW_FIELDS = gql(/* GraphQL */ `
  fragment userPreviewFields on UserPreview {
    id
    login
    imgUrl
  }
`);
