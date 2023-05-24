import { gql } from '@/__generated__';
import { EvalLog } from '@/__generated__/graphql';
import {
  Center,
  Clickable,
  Loader,
  PrimaryBoldText,
  Text,
  VStack,
} from '@/components/common';
import { isDefined } from '@/utils/isDefined';
import { useIntersectionObserver } from '@/utils/useIntersectionObserver';
import { useLazyQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { SubmitHandler } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { EvalLogItem } from './EvalLogItem';
import { EvalLogSearchHeader } from './EvalLogSearchHeader';

export type EvalLogSearchForm = {
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
  const [page, setPage] = useState<number>(1);
  const [search, { loading, error, data }] = useLazyQuery(GET_EVAL_LOGS);
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState<EvalLogSearchForm>({
    projectName: searchParams.get('projectName') ?? '',
    outstandingOnly:
      searchParams.get('outstandingOnly') === 'outstanding'
        ? 'outstanding'
        : 'all',
    corrector: searchParams.get('corrector') ?? '',
    corrected: searchParams.get('corrected') ?? '',
  });

  const [evalLogs, setEvalLogs] = useState<EvalLog[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, { threshold: 0.5 });
  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (!data) {
      return;
    }
    const { nodes } = data.getEvalLogs;
    setEvalLogs((cur) => [...cur, ...nodes.filter(isDefined)]);
  }, [data]);

  const onSubmit: SubmitHandler<EvalLogSearchForm> = (data) => {
    if (data === form) {
      return;
    }
    setEvalLogs([]);
    setForm(data);
    setPage(1);
    setIsOpen(false);
  };

  useEffect(() => {
    const fetch = () => {
      search({
        variables: {
          pageSize: RESULT_PER_PAGE,
          pageNumber: page,
          ...form,
          outstandingOnly: form.outstandingOnly === 'outstanding',
        },
      });
      setPage((cur) => cur + 1);
    };

    if (!isVisible) {
      return;
    }
    if (loading) {
      return;
    }
    fetch();
  }, [isVisible, loading, form, page, search]);

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
      {isOpen && <EvalLogSearchHeader form={form} onSubmit={onSubmit} />}
      <VStack w="100%" spacing="2rem">
        <VStack w="100%" align="start">
          <PrimaryBoldText selectable>{`${
            form.corrector === '' ? 'Anyone' : form.corrector
          } → ${form.corrected === '' ? 'Anyone' : form.corrected} / ${
            form.projectName === '' ? '모든 서브젝트' : form.projectName
          } / ${
            form.outstandingOnly === 'outstanding'
              ? 'Outstanding만'
              : '모든 평가'
          } / 최신순`}</PrimaryBoldText>
          <Text color={theme.colors.mono.gray300} selectable>
            검색결과 32,801건
          </Text>
        </VStack>
        <VStack as="ul" w="100%" spacing="1rem">
          {evalLogs.map((evalLog, idx) => (
            <EvalLogItem key={idx} element={evalLog} />
          ))}
          <Center w="100%" h="10rem" ref={ref}>
            {loading && <Loader />}
          </Center>
        </VStack>
      </VStack>
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
