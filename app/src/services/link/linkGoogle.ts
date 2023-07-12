import { gql } from '@/__generated__';
import { GoogleLoginInput } from '@/__generated__/graphql';
import { client } from '@providers/ApolloProvider';

const LINK_GOOGLE = gql(/* GraphQL */ `
  mutation LinkGoogle($google: GoogleLoginInput!) {
    linkGoogle(google: $google)
  }
`);

export const linkGoogle = async (google: GoogleLoginInput) => {
  const result = await client.mutate({
    mutation: LINK_GOOGLE,
    variables: { google },
  });
  return result;
};
