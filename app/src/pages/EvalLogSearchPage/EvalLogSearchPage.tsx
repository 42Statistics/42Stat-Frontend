import { gql } from '@/__generated__';
import { EvalLogEdge, EvalLogSortOrder } from '@/__generated__/graphql';
import { useLazyQuery } from '@apollo/client';
import { VStack } from '@components/common';
import { Seo } from '@components/elements/Seo';
import { withHead } from '@hoc/withHead';
import { isDefined } from '@utils/isDefined';
import { useInfiniteScroll } from '@utils/useInfiniteScroll';
import { useCallback, useEffect, useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { EvalLogSearchAbsoluteBtn } from './EvalLogSearchAbsoluteBtn';
import { EvalLogSearchDetail } from './EvalLogSearchDetail';
import { EvalLogSearchModal } from './EvalLogSearchModal';
import { EvalLogSearchTitle } from './EvalLogSearchTitle';

export type EvalLogSearchForm = {
  projectName: string;
  outstandingOnly: boolean;
  corrector: string;
  corrected: string;
};

//TODO: 실제로는 안쓰는 필드들은 받아오지 않게 나중에 완성하고 수정필요
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
  const RESULT_PER_PAGE = 10;
  const [end, setEnd] = useState<boolean>(false);
  const [search, { data, loading, error }] = useLazyQuery(GET_EVAL_LOGS);
  const [page, setPage] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<EvalLogSearchForm>({
    projectName: searchParams.get('projectName') ?? '',
    outstandingOnly: searchParams.get('outstandingOnly') === 'true',
    corrector: searchParams.get('corrector') ?? '',
    corrected: searchParams.get('corrected') ?? '',
  });
  const [evalLogEdges, setEvalLogEdges] = useState<EvalLogEdge[]>([]);
  const [endCursor, setEndCursor] = useState<string>('');

  const onSubmit: SubmitHandler<EvalLogSearchForm> = (newForm) => {
    setEvalLogEdges([]);
    setForm(newForm);
    setPage(1);
    setEnd(false);
    toggleModal();
  };

  const { ref, isVisible } = useInfiniteScroll();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = useCallback(() => setIsModalOpen((cur) => !cur), []);

  useEffect(() => {
    if (!data) {
      return;
    }

    const { edges, pageInfo } = data.getEvalLogs;
    if (pageInfo != null && !pageInfo.hasNextPage) {
      setEnd(true);
    }
    setEvalLogEdges((cur) => [...cur, ...edges.filter(isDefined)]);
    setEndCursor(pageInfo?.endCursor ?? '');
  }, [data]);

  useEffect(() => {
    if (!isVisible || loading) {
      return;
    }
    search({
      variables: {
        after: endCursor,
        first: RESULT_PER_PAGE,
        sortOrder: EvalLogSortOrder.BeginAtDesc, // TODO: 최신순/오래된순 버튼 만들면 수정
        ...form,
      },
    });
    setPage((cur) => cur + 1);
  }, [isVisible, loading, form, page, search]);

  // TODO: Headless Modal
  return (
    <>
      <EvalLogSearchAbsoluteBtn toggleModal={toggleModal} />
      <EvalLogSearchModal
        isOpen={isModalOpen}
        toggle={toggleModal}
        form={form}
        onSubmit={onSubmit}
      />
      <VStack w="100%" spacing="2rem">
        <EvalLogSearchTitle form={form} />
        <EvalLogSearchDetail
          evalLogEdges={evalLogEdges}
          end={end}
          loading={loading}
          error={error}
          infiniteScrollRef={ref}
        />
      </VStack>
    </>
  );
};

const Head = () => {
  return <Seo title="평가로그 검색기" />;
};

export default withHead(EvalLogSearchPage, Head);
