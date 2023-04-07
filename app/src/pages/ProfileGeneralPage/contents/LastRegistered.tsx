import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { TextDefault } from '@/components/elements/DashboardContentView/Text';
import { useQuery } from '@apollo/client';

const GET_LAST_REGISTERED = gql(/* GraphQL */ `
  query getLastRegistered {
    getPersonGeneralPage {
      teamInfo {
        lastRegistered
      }
    }
  }
`);

export const LastRegistered = () => {
  const { loading, error, data } = useQuery(GET_LAST_REGISTERED);

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  // const theme = useTheme();
  const { lastRegistered } = data.getPersonGeneralPage.teamInfo;

  // return (
  //   <Text fontSize={theme.fonts.size.h3} fontWeight={theme.fonts.weight.medium}>
  //     {lastRegistered}
  //   </Text>
  // );
  return <TextDefault text={`${lastRegistered}`} />;
};
