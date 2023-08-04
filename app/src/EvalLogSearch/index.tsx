import { useLazyQuery } from '@apollo/client';
import { gql } from '@shared/__generated__';
import {
  EvalLogEdge,
  EvalLogSortOrder,
  GetEvalLogsQuery,
} from '@shared/__generated__/graphql';
import { Seo } from '@shared/components/Seo';
import { withHead } from '@shared/hoc/withHead';
import { useDisclosure } from '@shared/hooks/useDisclosure';
import { useInfiniteScroll } from '@shared/hooks/useInfiniteScroll';
import type { EvalLogSearchModel } from '@shared/types/EvalLogSearchModel';
import { VStack } from '@shared/ui-kit';
import { isSlashKeyDown } from '@shared/utils/keyboard';
import { isEqual } from 'lodash-es';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EvalLogSearchAbsoluteButton } from './components/EvalLogSearchAbsoluteButton';
import { EvalLogSearchDialog } from './components/EvalLogSearchDialog';
import { EvalLogSearchResult } from './components/EvalLogSearchResult';
import { EvalLogSearchTitle } from './components/EvalLogSearchTitle';

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
  const { ref, isVisible } = useInfiniteScroll(0.1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (form: EvalLogSearchModel) => {
    if (isEqual(form, evalLogSearchForm)) {
      onClose();
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
    onClose();
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
    setEvalLogEdges((cur) => [...cur, ...edges]);
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

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSlashKeyDown(e) && !isOpen) {
        e.preventDefault();
        onOpen();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onOpen]);

  return (
    <>
      <VStack w="100%" align="start" spacing="2rem">
        <EvalLogSearchTitle
          form={evalLogSearchForm}
          totalCount={calculateTotalCount({ data, error, loading })}
        />
        <EvalLogSearchResult
          evalLogEdges={evalLogEdges}
          end={end}
          loading={loading}
          error={error}
          infiniteScrollRef={ref}
        />
      </VStack>
      <EvalLogSearchAbsoluteButton
        onClick={onOpen}
        dialog={
          <EvalLogSearchDialog
            form={evalLogSearchForm}
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
          />
        }
      />
    </>
  );
};

const Head = () => {
  return <Seo title="평가로그 검색기" />;
};

const calculateTotalCount = ({
  data,
  error,
  loading,
}: Pick<
  ReturnType<typeof useLazyQuery<GetEvalLogsQuery>>[1],
  'data' | 'error' | 'loading'
>): number | undefined => {
  if (loading) {
    return undefined;
  }

  if (error) {
    return 0;
  }

  return data?.getEvalLogs.pageInfo.totalCount ?? 0;
};

export default withHead(EvalLogSearchPage, Head);
