import { gql } from '@/__generated__';
import { Clickable, VStack } from '@/components/common';
import { useLazyQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SubmitHandler } from 'react-hook-form';
import { EvalLogSearchBoard } from './EvalLogSearchBoard';
import { EvalLogSearchHeader } from './EvalLogSearchHeader';

export type FormValue = {
  projectName: string;
  outstandingOnly: 'all' | 'outstanding';
  corrector: string;
  corrected: string;
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
      nodes {
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
      totalCount
      pageSize
      pageNumber
    }
  }
`);

export const EvalLogSearchPage = () => {
  const RESULT_PER_PAGE = 10;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [search, { loading, error, data }] = useLazyQuery(GET_EVAL_LOGS);
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [formValue, setFormValue] = useState<FormValue>({
    projectName: '',
    outstandingOnly: 'all',
    corrector: '',
    corrected: '',
  });

  const onSubmit: SubmitHandler<FormValue> = (data) => {
    if (data === formValue) return;
    setPageNumber(1);
    setFormValue({ ...data });
    search({
      variables: {
        pageSize: RESULT_PER_PAGE,
        pageNumber,
        ...data,
        outstandingOnly: data.outstandingOnly === 'outstanding',
      },
    });
    setIsOpen(false);
  };

  useEffect(() => {
    search({
      variables: {
        pageSize: RESULT_PER_PAGE,
        pageNumber,
        ...formValue,
        outstandingOnly: formValue.outstandingOnly === 'outstanding',
      },
    });
  }, [pageNumber]);

  return (
    <>
      <Helmet>
        <title>평가로그 검색기 | 42Stat</title>
      </Helmet>

      {/* TODO: Headless Modal 제작하기 */}
      <Clickable
        onClick={() => setIsOpen((cur) => !cur)}
        element={
          <SearchIconLayout>
            <MdSearch color={theme.colors.mono.white} size="20px" />
          </SearchIconLayout>
        }
      />
      {isOpen && (
        <EvalLogSearchHeader formValue={formValue} onSubmit={onSubmit} />
      )}
      <EvalLogSearchPageLayout>
        <VStack h="100%" spacing="2rem">
          <EvalLogSearchBoard
            loading={loading}
            error={error}
            data={data}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        </VStack>
      </EvalLogSearchPageLayout>
    </>
  );
};

const SearchIconLayout = styled.div`
  position: fixed;
  bottom: 8rem;
  right: 5rem;
  border-radius: 999px;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 100;
  cursor: pointer;
`;

const EvalLogSearchPageLayout = styled.div`
  padding: 4rem;
`;
