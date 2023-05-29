import { gql } from '@/__generated__';
import { EvalLog } from '@/__generated__/graphql';
import { VStack } from '@/components/common';
import { Seo } from '@/components/elements/Seo';
import { withHead } from '@/components/hoc/withHead';
import { isDefined } from '@/utils/isDefined';
import { useInfiniteScroll } from '@/utils/useInfiniteScroll';
import { useLazyQuery } from '@apollo/client';
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

const EvalLogSearchPage = () => {
  const RESULT_PER_PAGE = 10;
  const [end, setEnd] = useState<boolean>(false);
  const [search, { loading, error }] = useLazyQuery(GET_EVAL_LOGS, {
    onCompleted: (data) => {
      if (data.getEvalLogs.nodes.length === 0) {
        setEnd(true);
      }
      const { nodes } = data.getEvalLogs;
      setEvalLogs((cur) => [...cur, ...nodes.filter(isDefined)]);
    },
  });
  const [page, setPage] = useState<number>(1);
  const [searchParams] = useSearchParams();
  const [form, setForm] = useState<EvalLogSearchForm>({
    projectName: searchParams.get('projectName') ?? '',
    outstandingOnly: searchParams.get('outstandingOnly') === 'true',
    corrector: searchParams.get('corrector') ?? '',
    corrected: searchParams.get('corrected') ?? '',
  });

  const [evalLogs, setEvalLogs] = useState<EvalLog[]>([]);
  const { ref, isVisible } = useInfiniteScroll();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toggleModal = useCallback(() => setIsModalOpen((cur) => !cur), []);

  const onSubmit: SubmitHandler<EvalLogSearchForm> = (newForm) => {
    setEvalLogs([]);
    setForm(newForm);
    setPage(1);
    setEnd(false);
    toggleModal();
  };

  useEffect(() => {
    if (!isVisible || loading) {
      return;
    }
    search({
      variables: {
        pageSize: RESULT_PER_PAGE,
        pageNumber: page,
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
          evalLogs={evalLogs}
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
