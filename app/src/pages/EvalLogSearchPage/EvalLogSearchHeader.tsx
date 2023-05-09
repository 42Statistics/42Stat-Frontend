import { Button, HStack, Input, Text, VStack } from '@/components/common';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValue } from './EvalLogSearchPage';

type EvalLogSearchHeaderProps = {
  formValue: FormValue;
  onSubmit: SubmitHandler<FormValue>;
};

export const EvalLogSearchHeader = ({
  formValue,
  onSubmit,
}: EvalLogSearchHeaderProps) => {
  const { register, handleSubmit } = useForm<FormValue>({
    defaultValues: formValue,
  });

  return (
    <EvalLogSearchHeaderLayout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack as="ul" w="100%" spacing="2rem">
          <HStack w="100%" as="li" justify="space-between">
            <Text>과제명</Text>
            <EvalLogSearchInput {...register('projectName')} />
          </HStack>
          <HStack w="100%" as="li" justify="space-between">
            <Text>FROM</Text>
            <EvalLogSearchInput {...register('corrector')} />
          </HStack>
          <HStack w="100%" as="li" justify="space-between">
            <Text>TO</Text>
            <EvalLogSearchInput {...register('corrected')} />
          </HStack>
          <HStack w="100%" as="li" justify="space-between">
            <Text>플래그</Text>
            <HStack spacing="2rem">
              <HStack spacing="1rem">
                <input
                  type="radio"
                  {...register('outstandingOnly')}
                  value="all"
                  defaultChecked={formValue.outstandingOnly === 'all'}
                />
                <Text>전체</Text>
              </HStack>
              <HStack spacing="1rem">
                <input
                  type="radio"
                  {...register('outstandingOnly')}
                  value="outstanding"
                  defaultChecked={formValue.outstandingOnly === 'outstanding'}
                />
                <Text>Outstanding</Text>
              </HStack>
            </HStack>
          </HStack>
          <Button type="submit" text="검색하기" />
        </VStack>
      </form>
    </EvalLogSearchHeaderLayout>
  );
};

const EvalLogSearchHeaderLayout = styled.div`
  position: fixed;
  bottom: 7rem;
  right: 12rem;
  padding: 3rem;
  width: 30rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  box-shadow: ${({ theme }) =>
    `0 0.1rem 0.5rem 0 ${theme.colors.mono.gray100}}`};
`;

const EvalLogSearchInput = styled(Input)`
  all: unset;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;

  box-shadow: ${({ theme }) =>
    `0 0.4rem 0.4rem ${rgba(theme.colors.mono.black, 0.1)}`};

  &:hover {
    box-shadow: ${({ theme }) =>
      `0 0.4rem 0.4rem ${rgba(theme.colors.mono.black, 0.25)}`};
  }

  transition: all 0.2s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.mono.white};
    color: ${({ theme }) => theme.colors.mono.black};
  }
`;
