import { gql } from '@/__generated__';
import { Divider, HStack, VStack } from '@/components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

type GetEvalLogsQueryVariables = {
  pageSize: number;
  pageNumber: number;
  projectName: string;
  outstandingOnly: boolean;
  corrector?: string;
  corrected?: string;
};

const GET_EVAL_LOGS = gql(/* GraphQL */ `
  query GetEvalLogs(
    $pageSize: Int!
    $pageNumber: Int!
    $projectName: String!
    $outstandingOnly: Boolean!
    $corrector: String
    $corrected: String
  ) {
    getEvalLogs(
      pageSize: $pageSize
      pageNumber: $pageNumber
      projectName: $projectName
      outstandingOnly: $outstandingOnly
      corrector: $corrector
      corrected: $corrected
    ) {
      header {
        corrector {
          id
          login
          imgUrl
        }
        teamPreview {
          id
          name
          url
        }
        beginAt
        projectPreview {
          id
          name
          url
        }
        flag {
          id
          name
          isPositive
        }
      }
      correctorReview {
        mark
        review
      }
      correctedsReview {
        mark
        review
      }
    }
  }
`);

export const EvalSearchBoard = () => {
  const theme = useTheme();
  // const [first, setFirst] = useState<number>(0);
  // const [after, setAfter] = useState<string>('');
  // const [evalUserType, setEvalUserType] = useState<number>(0);
  // const [subjectName, setSubjectName] = useState<string>('');
  // const [targetUserName, setTargetUserName] = useState<string>('');
  // const [outstandingOnly, setOutstandingOnly] = useState<boolean>(false);
  // const { loading, error, data } = useQuery<
  //   GetScaleTeamsQuery,
  //   GetEvalLogsQueryVariables
  // >(GET_EVAL_LOGS, {
  //   variables: {
  //     pageSize,
  //     pageNumber,
  //     projectName,
  //     outstandingOnly,
  //     corrector,
  //     corrected,
  //     cx,
  //   },
  // });

  // if (loading) return <Spinner />;
  // if (error) {
  //   return <h1>{error.message}</h1>;
  // }
  // if (!data) {
  //   return <h1>user not found</h1>;
  // }

  return (
    <EvalSearchBoardLayout>
      <form>
        <VStack align="start">
          <HStack>
            <label htmlFor="subject">SUBJECT</label>
            <input id="subject" />
          </HStack>
          <HStack>
            <label htmlFor="from">FROM</label>
            <input id="from" />
          </HStack>
          <HStack>
            <label htmlFor="to">TO</label>
            <input id="to" />
          </HStack>
          <HStack>
            <label htmlFor="flag">FLAG</label>
            <input id="flag" />
          </HStack>
        </VStack>
      </form>
      <Divider style={{ width: '100%' }} />
    </EvalSearchBoardLayout>
  );
};

const EvalSearchBoardLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.mono.white};
  width: 100%;
  height: 100%;
  border-radius: 2rem;
  padding: 2rem 2rem 2rem 2rem;
  transition: box-shadow 200ms ease-in-out, transform 200ms ease-in-out;
`;
