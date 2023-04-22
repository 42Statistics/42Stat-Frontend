import { gql } from '@/__generated__';
import {
  Button,
  Divider,
  HStack,
  Scroll,
  Spacer,
  Spinner,
  Text,
  VStack,
} from '@/components/common';
import { isDefined } from '@/utils/isDefined';
import { useLazyQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsTriangleFill } from 'react-icons/bs';
import { EvalLogBox } from './EvalLogBox';

type FormValues = {
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

export const EvalSearchBoard = () => {
  const [formValue, setFormValue] = useState<FormValues>({
    projectName: '',
    outstandingOnly: 'all',
    corrector: '',
    corrected: '',
  });
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: formValue,
  });

  const pageSize = 20;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [search, { loading, error, data }] = useLazyQuery(GET_EVAL_LOGS);
  const theme = useTheme();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setPageNumber(1);
    setFormValue({ ...data });
    search({
      variables: {
        pageSize,
        pageNumber,
        ...data,
        outstandingOnly: data.outstandingOnly === 'outstanding',
      },
    });
  };

  useEffect(() => {
    search({
      variables: {
        pageSize,
        pageNumber,
        ...formValue,
        outstandingOnly: formValue.outstandingOnly === 'outstanding',
      },
    });
  }, [pageNumber]);

  return (
    <Scroll>
      <Layout>
        <form css={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
          <VStack w="100%" h="100%" spacing="2rem" align="start">
            <HStack
              w="100%"
              spacing="2rem"
              css={{ justifyContent: 'flex-start', flexWrap: 'wrap' }}
            >
              <HStack spacing="1rem">
                <StyledText>과제명</StyledText>
                <StyledInput {...register('projectName')} />
              </HStack>
              <HStack spacing="1rem">
                <StyledText>FROM</StyledText>
                <StyledInput {...register('corrector')} />
              </HStack>
              <HStack spacing="1rem">
                <StyledText>TO</StyledText>
                <StyledInput {...register('corrected')} />
              </HStack>
              <HStack spacing="1rem">
                <StyledText>플래그</StyledText>
                <HStack spacing="2rem">
                  <HStack spacing="1rem">
                    <input
                      type="radio"
                      {...register('outstandingOnly')}
                      value="all"
                      defaultChecked={formValue.outstandingOnly === 'all'}
                    />
                    전체
                  </HStack>
                  <HStack spacing="1rem">
                    <input
                      type="radio"
                      {...register('outstandingOnly')}
                      value="outstanding"
                      defaultChecked={
                        formValue.outstandingOnly === 'outstanding'
                      }
                    />
                    Outstanding
                  </HStack>
                </HStack>
              </HStack>
            </HStack>
            <HStack w="100%">
              <Spacer />
              <SubmitBtn type="submit" value="검색하기" />
            </HStack>
          </VStack>
        </form>
        <Divider style={{ width: '100%' }} />
        {loading && <Spinner />}
        {error && <h1>{error.message}</h1>}
        <VStack
          w="100%"
          spacing="2rem"
          style={{
            justifyContent: 'flex-start',
            paddingRight: '4rem',
          }}
        >
          {data?.getEvalLogs.filter(isDefined).map((data, idx) => (
            <EvalLogBox key={idx} data={data} />
          ))}
          <HStack spacing="1rem">
            <Button
              element={
                <BsTriangleFill
                  size="14px"
                  css={{ transform: 'rotate(-90deg)' }}
                  color={theme.colors.primary.default}
                />
              }
              onClick={() => {
                setPageNumber((prev) => Math.max(prev - 1, 1));
              }}
            />
            {data && (
              <Text color={theme.colors.primary.default}>
                {pageNumber} / {42}
              </Text>
            )}
            <Button
              element={
                <BsTriangleFill
                  size="14px"
                  css={{ transform: 'rotate(90deg)' }}
                  color={theme.colors.primary.default}
                />
              }
              onClick={() => {
                setPageNumber((prev) => Math.min(prev + 1, 42));
                // TODO: maxpagenum 못넘게 설정 필요
              }}
            />
          </HStack>
        </VStack>
      </Layout>
    </Scroll>
  );
};

const Layout = styled(VStack)`
  gap: 3rem;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 5rem;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary.default};
`;

const StyledInput = styled.input`
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
  border: none;
  outline-color: ${({ theme }) => theme.colors.primary.default};
`;

const SubmitBtn = styled.input`
  all: unset;
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.mono.white};
  cursor: pointer;
  margin-right: 4rem;
`;
