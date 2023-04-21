import { gql } from '@/__generated__';
import {
  Divider,
  HStack,
  Spacer,
  Spinner,
  Text,
  VStack,
} from '@/components/common';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { SyntheticEvent, useRef, useState } from 'react';
import { RxTriangleLeft, RxTriangleRight } from 'react-icons/rx';
import { EvalLogUnit } from './EvalLogUnit';

type GetEvalLogsQueryVariables = {
  pageSize: number;
  pageNumber: number;
  projectName: string;
  outstandingOnly: boolean;
  corrector?: string;
  corrected?: string;
};

//TODO: 실제로는 안쓰는 필드들은 받아오지 않게 나중에 완성하고 수정필요
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

// export const EvalSearchBoard = () => {
//   const theme = useTheme();
//   const [pageSize, setPageSize] = useState<number>(1);
//   const [pageNumber, setPageNumber] = useState<number>(1);
//   const [projectName, setProjectName] = useState<string>('');
//   const [outstandingOnly, setOutstandingOnly] = useState<boolean>(false);
//   const [corrector, setCorrector] = useState<string>('');
//   const [corrected, setCorrected] = useState<string>('');
//   const { loading, error, data } = useQuery(GET_EVAL_LOGS, {
//     variables: {
//       pageSize,
//       pageNumber,
//       projectName,
//       outstandingOnly,
//       corrector,
//       corrected,
//     },
//   });

//   if (loading) return <Spinner />;
//   if (error) {
//     return <h1>{error.message}</h1>;
//   }
//   if (!data) {
//     return <h1>user not found</h1>;
//   }

//   return (
//     <EvalSearchBoardLayout>
//       <form>
//         <VStack align="start" spacing="1rem">
//           <HStack w="30%">
//             <StyledLabel htmlFor="subject">SUBJECT</StyledLabel>
//             <Spacer />
//             <StyledInput id="subject" />
//           </HStack>
//           <HStack w="30%">
//             <StyledLabel htmlFor="from">FROM</StyledLabel>
//             <Spacer />
//             <StyledInput id="from" />
//           </HStack>
//           <HStack w="30%">
//             <StyledLabel htmlFor="to">TO</StyledLabel>
//             <Spacer />
//             <StyledInput id="to" />
//           </HStack>
//           <HStack w="30%">
//             <StyledLabel htmlFor="flag">FLAG</StyledLabel>
//             <Spacer />
//             <StyledRadioInput
//               id="flag"
//               type="radio"
//               name="outstanding"
//               value="false"
//             />
//             전체
//             <Spacer />
//             <StyledRadioInput
//               id="flag"
//               type="radio"
//               name="outstanding"
//               value="true"
//             />
//             Outatanding
//           </HStack>
//           <HStack w="30%" align="center">
//             <StyledButton>SEARCH</StyledButton>
//           </HStack>
//         </VStack>
//       </form>
//       <Divider style={{ width: '100%' }} />
//       {data.getEvalLogs.map((v, idx) => {
//         console.log('hihi');
//         // return <div key={idx}>hi</div>;
//         return <EvalLogUnit key={idx} data={v} />;
//       })}
//     </EvalSearchBoardLayout>
//   );
// };
export const EvalSearchBoard = () => {
  const theme = useTheme();
  const [pageSize, setPageSize] = useState<number>(1);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [projectName, setProjectName] = useState<string>('');
  const [outstandingOnly, setOutstandingOnly] = useState<boolean>(false);
  const [corrector, setCorrector] = useState<string>('');
  const [corrected, setCorrected] = useState<string>('');

  const projectNameRef = useRef<HTMLInputElement>(null);
  const correctorRef = useRef<HTMLInputElement>(null);
  const correctedRef = useRef<HTMLInputElement>(null);
  //TODO: 라디오박스도 랜더링 최적화 관리하는방법 찾기
  // const outstandingRef = useRef(false);

  const { loading, error, data } = useQuery(GET_EVAL_LOGS, {
    variables: {
      pageSize,
      pageNumber,
      projectName,
      outstandingOnly,
      corrector,
      corrected,
    },
  });

  const handleSearch = () => {
    setProjectName(projectNameRef.current?.value || '');
    setCorrector(correctorRef.current?.value || '');
    setCorrected(correctedRef.current?.value || '');
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch();
    }
  };

  const handleRadioChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setOutstandingOnly(value === 'true');
  };

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }

  return (
    <EvalSearchBoardLayout>
      <form>
        <VStack align="start" spacing="1rem">
          <HStack w="30%">
            <StyledLabel htmlFor="subject">SUBJECT</StyledLabel>
            <Spacer />
            <StyledInput
              id="subject"
              ref={projectNameRef}
              onKeyDown={handleKeyDown}
            />
          </HStack>
          <HStack w="30%">
            <StyledLabel htmlFor="from">FROM</StyledLabel>
            <Spacer />
            <StyledInput
              id="from"
              ref={correctorRef}
              onKeyDown={handleKeyDown}
            />
          </HStack>
          <HStack w="30%">
            <StyledLabel htmlFor="to">TO</StyledLabel>
            <Spacer />
            <StyledInput id="to" ref={correctedRef} onKeyDown={handleKeyDown} />
          </HStack>
          <HStack w="30%">
            <StyledLabel htmlFor="flag">FLAG</StyledLabel>
            <Spacer />
            <StyledRadioInput
              id="flag"
              type="radio"
              name="outstanding"
              value="false"
              checked={outstandingOnly}
              onChange={handleRadioChange}
            />
            전체
            <Spacer />
            <StyledRadioInput
              id="flag"
              type="radio"
              name="outstanding"
              value="true"
              checked={outstandingOnly}
              onChange={handleRadioChange}
            />
            Outatanding
          </HStack>
          <HStack w="30%" align="center">
            <StyledButton onClick={handleSearch}>SEARCH</StyledButton>
          </HStack>
        </VStack>
      </form>
      <Divider style={{ width: '100%' }} />
      <VStack style={{ overflowY: 'auto' }}>
        {data.getEvalLogs.map((v, idx) => (
          <EvalLogUnit key={idx} data={v} />
        ))}
      </VStack>
      <VStack
        h="100%"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <HStack>
          <RxTriangleLeft
            size="30"
            color={theme.colors.primary.default}
            onClick={() => {
              setPageNumber((prev) => (prev > 1 ? prev - 1 : 1));
            }}
          />
          <Text
            style={{ letterSpacing: '0.5rem' }}
            fontSize={theme.fonts.size.h3}
          >
            {pageNumber}/n
          </Text>
          <RxTriangleRight
            size="30"
            color={theme.colors.primary.default}
            onClick={() => {
              setPageNumber((prev) => prev + 1);
              // TODO:maxpagenum 못넘게 설정 필요
            }}
          />
        </HStack>
      </VStack>
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

  & > * + * {
    margin-top: 2rem;
  }
`;

const StyledLabel = styled.label`
  width: 20%;
  color: ${({ theme }) => theme.colors.primary.default};
  text-align: center;
`;

const StyledInput = styled.input`
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
  border: none;
  :hover {
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  }
  outline-color: ${({ theme }) => theme.colors.primary.default};
`;

const StyledButton = styled.button`
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.mono.white};
  border: none;
  :hover {
    box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  }
  outline: none;
  margin-top: 1rem;
`;

const StyledRadioInput = styled.input`
  margin-right: 1rem;
  // :checked {
  //   appearance: none;
  // TODO: appearance를제거하고 다시 그리는 방법 고안 필요
  //   background-color: purple;
  //   border-color: purple;
  // }
  :hover {
    cursor: pointer;
  }
`;
