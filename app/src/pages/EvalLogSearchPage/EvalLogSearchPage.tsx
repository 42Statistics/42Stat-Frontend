import { gql } from '@/__generated__';
import { Divider, Scroll, Spinner, Text, VStack } from '@/components/common';
import { AboveTablet, Mobile } from '@/utils/responsive/Device';
import { useLazyQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SubmitHandler } from 'react-hook-form';
import { EvalLogList } from './EvalLogList';
import { EvalLogSearchHeader } from './EvalLogSearchHeader';
import { PageMoveArrow } from './PageMoveArrow';

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

export const EvalLogSearchPage = () => {
  const RESULT_PER_PAGE = 10;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [search, { loading, error, data }] = useLazyQuery(GET_EVAL_LOGS);

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
      <AboveTablet>
        <Scroll>
          <EvalLogSearchPageLayout>
            <VStack spacing="3rem" justify="start">
              <EvalLogSearchHeader formValue={formValue} onSubmit={onSubmit} />
              <Divider style={{ width: '100%' }} />
              {loading && <Spinner />}
              {error && <h1>{error.message}</h1>}
              {!loading && data && data.getEvalLogs.length !== 0 && (
                <>
                  <EvalLogList list={data.getEvalLogs} />
                  <PageMoveArrow
                    handleDecrease={() => {
                      setPageNumber((cur) => Math.max(cur - 1, 1));
                    }}
                    handleIncrease={() => {
                      setPageNumber((cur) => Math.min(cur + 1, 42));
                    }}
                    pageNumber={pageNumber}
                    maxPageNumber={42}
                  />
                </>
              )}
              {!loading && data?.getEvalLogs.length === 0 && (
                <Text>검색 결과가 없습니다.</Text>
              )}
            </VStack>
          </EvalLogSearchPageLayout>
        </Scroll>
      </AboveTablet>
      <Mobile></Mobile>
    </>
  );
};

const EvalLogSearchPageLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 5rem;
`;
