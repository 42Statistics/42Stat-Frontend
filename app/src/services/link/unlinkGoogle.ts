import { gql } from '@/__generated__';
import { client } from '@providers/ApolloProvider';

const UNLINK_GOOGLE = gql(/* GraphQL */ `
  mutation UnlinkGoogle {
    unlinkGoogle {
      googleId
      googleEmail
      linkedAt
      userId
    }
  }
`);

export const unlinkGoogle = async () => {
  const result = await client.mutate({
    mutation: UNLINK_GOOGLE,
  });
  return result;
};
