import { Button, Center, HStack, Input, Text } from '@/components/common';
import { useTheme } from '@emotion/react';
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
      <Center>
        <form onSubmit={handleSubmit(onSubmit)}>
          <HStack as="ul" w="100%" spacing="2rem" wrap="wrap">
            <HStack as="li" spacing="1rem">
              <Text>과제명</Text>
              <EvalLogSearchInput {...register('projectName')} />
            </HStack>
            <HStack as="li" spacing="1rem">
              <Text>FROM</Text>
              <EvalLogSearchInput {...register('corrector')} />
            </HStack>
            <HStack as="li" spacing="1rem">
              <Text>TO</Text>
              <EvalLogSearchInput {...register('corrected')} />
            </HStack>
            <HStack as="li" spacing="1rem">
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
          </HStack>
        </form>
      </Center>
    </EvalLogSearchHeaderLayout>
  );
};

const EvalLogSearchHeaderLayout = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  box-shadow: ${({ theme }) =>
    `0 0.1rem 0.5rem 0 ${theme.colors.mono.gray100}}`};
`;

const EvalLogSearchInput = styled(Input)`
  all: unset;
  padding: 0.7rem 2rem;
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
