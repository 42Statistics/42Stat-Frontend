import { gql } from '@/__generated__';
import {
  Button,
  Divider,
  HStack,
  Spinner,
  Text,
  VStack,
} from '@/components/common';
import { useLazyQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BsTriangleFill } from 'react-icons/bs';
import { EvalLogUnit } from './EvalLogUnit';

type FormValues = {
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
    outstandingOnly: false,
    corrector: '',
    corrected: '',
  });
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: formValue,
  });

  const pageSize = 5;
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [search, { loading, error, data }] = useLazyQuery(GET_EVAL_LOGS);
  const theme = useTheme();

  const onSubmit: SubmitHandler<FormValues> = ({
    projectName,
    outstandingOnly,
    corrector,
    corrected,
  }) => {
    setPageNumber(1);
    setFormValue({
      projectName,
      outstandingOnly,
      corrector,
      corrected,
    });
    search({
      variables: {
        pageSize,
        pageNumber,
        projectName,
        outstandingOnly,
        corrector,
        corrected,
      },
    });
  };

  useEffect(() => {
    search({
      variables: {
        pageSize,
        pageNumber,
        projectName: formValue.projectName,
        outstandingOnly: formValue.outstandingOnly,
        corrector: formValue.corrector,
        corrected: formValue.corrected,
      },
    });
  }, [pageNumber]);

  return (
    <Layout>
      <form css={{ width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <HStack w="100%" h="100%">
          <VStack spacing="1rem" align="start">
            <HStack>
              <StyledLabel>과제명</StyledLabel>
              <StyledInput {...register('projectName')} />
            </HStack>
            <HStack>
              <StyledLabel>FROM</StyledLabel>
              <StyledInput {...register('corrector')} />
            </HStack>
            <HStack>
              <StyledLabel>TO</StyledLabel>
              <StyledInput {...register('corrected')} />
            </HStack>
            <HStack>
              <StyledLabel>플래그</StyledLabel>
              <HStack spacing="2rem">
                <HStack spacing="1rem">
                  <input
                    type="radio"
                    {...register('outstandingOnly')}
                    value="false"
                  />
                  전체
                </HStack>
                <HStack spacing="1rem">
                  <input
                    type="radio"
                    {...register('outstandingOnly')}
                    value="true"
                  />
                  Outstanding
                </HStack>
              </HStack>
            </HStack>
          </VStack>
          <div css={{ position: 'relative', width: '100%', height: '100%' }}>
            <SubmitBtn type="submit" value="검색하기" />
          </div>
        </HStack>
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
        {data?.getEvalLogs.map((v, idx) => (
          <EvalLogUnit key={idx} data={v} />
        ))}
        <HStack spacing="1rem">
          <Button
            element={
              <BsTriangleFill
                size="12px"
                css={{ transform: 'rotate(-90deg)' }}
                color={theme.colors.primary.default}
              />
            }
            onClick={() => {
              setPageNumber((prev) => Math.max(prev - 1, 1));
            }}
          />
          {data && (
            <Text fontSize={theme.fonts.size.h3}>
              {pageNumber} / {42}
            </Text>
          )}
          <Button
            element={
              <BsTriangleFill
                size="12px"
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
  );
};
const Layout = styled(VStack)`
  gap: 3rem;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 5rem;
  overflow-y: auto;
`;

const StyledLabel = styled.label`
  width: 10rem;
  color: ${({ theme }) => theme.colors.primary.default};
  text-align: center;
`;

const StyledInput = styled.input`
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
  border: none;
  outline-color: ${({ theme }) => theme.colors.primary.default};
`;

const SubmitBtn = styled.input`
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.default};
  color: ${({ theme }) => theme.colors.mono.white};
  border: none;
  outline: none;
  margin-top: 1rem;
  position: absolute;
  bottom: 0;
  left: 2rem;
`;
