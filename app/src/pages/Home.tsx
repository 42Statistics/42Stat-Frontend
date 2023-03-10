import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';

const GET_USER = gql(`
  query GetUser($id: Int!) {
    user(id: $id) {
      id
      login
    }
  }
`);

export const HomePage = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: {
      id: 99947,
    },
  });
  if (loading) {
    return <h1>loading...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>user not found</h1>;
  }

  console.log(data);

  return <>HomePage</>;
};
