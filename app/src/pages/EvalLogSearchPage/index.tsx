import { gql } from '@/__generated__';
import { EvalLogEdge, EvalLogSortOrder } from '@/__generated__/graphql';
import type { EvalLogSearchModel } from '@/types/EvalLogSearchModel';
import { useLazyQuery } from '@apollo/client';
import { VStack } from '@components/common';
import { Seo } from '@components/elements/Seo';
import { withHead } from '@hoc/withHead';
import { isDefined } from '@utils/isDefined';
import { useInfiniteScroll } from '@utils/useInfiniteScroll';
import { isEqual } from 'lodash-es';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EvalLogSearchModal } from './EvalLogSearchModal/EvalLogSearchModal';
import { EvalLogSearchResult } from './EvalLogSearchResult';
import { EvalLogSearchTitle } from './EvalLogSearchTitle';

const GET_EVAL_LOGS = gql(/* GraphQL */ `
  query GetEvalLogs(
    $after: String
    $first: Int!
    $corrector: String
    $corrected: String
    $projectName: String
    $outstandingOnly: Boolean
    $sortOrder: EvalLogSortOrder!
  ) {
    getEvalLogs(
      after: $after
      first: $first
      corrector: $corrector
      corrected: $corrected
      projectName: $projectName
      outstandingOnly: $outstandingOnly
      sortOrder: $sortOrder
    ) {
      edges {
        cursor
        node {
          id
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
      pageInfo {
        totalCount
        hasNextPage
        endCursor
      }
    }
  }
`);

const EvalLogSearchPage = () => {
  const [searchParams] = useSearchParams();
  const [evalLogSearchForm, setEvalLogSearchForm] =
    useState<EvalLogSearchModel>({
      projectName: searchParams.get('projectName') ?? '',
      flag: searchParams.get('flag') === 'outstanding' ? 'outstanding' : 'all',
      corrector: searchParams.get('corrector') ?? '',
      corrected: searchParams.get('corrected') ?? '',
      sortOrder: searchParams.get('sortOrder') === 'asc' ? 'asc' : 'desc',
    });

  const RESULT_PER_PAGE = 10;
  const [search, { loading, error, data }] = useLazyQuery(GET_EVAL_LOGS);
  const [evalLogEdges, setEvalLogEdges] = useState<EvalLogEdge[]>([]);
  const [endCursor, setEndCursor] = useState<string>('');
  const [end, setEnd] = useState<boolean>(false);
  const { ref, isVisible } = useInfiniteScroll();

  const onSubmit = (form: EvalLogSearchModel) => {
    if (isEqual(form, evalLogSearchForm)) {
      return;
    }
    setEvalLogEdges([]);
    setEvalLogSearchForm(form);
    search({
      variables: {
        after: '',
        first: RESULT_PER_PAGE,
        projectName: form.projectName,
        outstandingOnly: form.flag === 'outstanding',
        corrector: form.corrector,
        corrected: form.corrected,
        sortOrder:
          form.sortOrder === 'desc'
            ? EvalLogSortOrder.BeginAtDesc
            : EvalLogSortOrder.BeginAtAsc,
      },
    });
    setEndCursor('');
    setEnd(false);
  };

  useEffect(() => {
    if (!data) {
      return;
    }
    const { edges, pageInfo } = data.getEvalLogs;
    if (pageInfo != null && !pageInfo.hasNextPage) {
      setEnd(true);
    }
    if (edges.length > 0 && edges[edges.length - 1]?.cursor === endCursor) {
      return;
    }
    setEvalLogEdges((cur) => [...cur, ...edges.filter(isDefined)]);
    setEndCursor(pageInfo?.endCursor ?? '');
  }, [data, endCursor]);

  useEffect(() => {
    if (!isVisible || loading) {
      return;
    }
    search({
      variables: {
        after: endCursor,
        first: RESULT_PER_PAGE,
        projectName: evalLogSearchForm.projectName,
        outstandingOnly: evalLogSearchForm.flag === 'outstanding',
        corrector: evalLogSearchForm.corrector,
        corrected: evalLogSearchForm.corrected,
        sortOrder:
          evalLogSearchForm.sortOrder === 'desc'
            ? EvalLogSortOrder.BeginAtDesc
            : EvalLogSortOrder.BeginAtAsc,
      },
    });
  }, [isVisible, loading, evalLogSearchForm, search, endCursor]);

  return (
    <>
      <VStack w="100%" align="start" spacing="2rem">
        <EvalLogSearchTitle
          form={evalLogSearchForm}
          totalCount={data?.getEvalLogs.pageInfo?.totalCount ?? 0}
        />
        <EvalLogSearchResult
          evalLogEdges={evalLogEdges}
          end={end}
          loading={loading}
          error={error}
          infiniteScrollRef={ref}
        />
      </VStack>
      <EvalLogSearchModal form={evalLogSearchForm} onSubmit={onSubmit} />
    </>
  );
};

const Head = () => {
  return <Seo title="평가로그 검색기" />;
};

export default withHead(EvalLogSearchPage, Head);
