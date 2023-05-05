import {
  Button,
  HStack,
  Input,
  Spacer,
  Text,
  VStack,
} from '@/components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
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
  const theme = useTheme();
  const { register, handleSubmit } = useForm<FormValue>({
    defaultValues: formValue,
  });

  return (
    <EvalLogSearchHeaderLayout>
      <VStack
        as="form"
        w="100%"
        spacing="2rem"
        onSubmit={handleSubmit(onSubmit)}
      >
        <HStack as="ul" w="100%" spacing="2rem" justify="start" wrap="wrap">
          <HStack as="li" spacing="1rem">
            <Text color={theme.colors.mono.white}>과제명</Text>
            <EvalLogSearchInput {...register('projectName')} />
          </HStack>
          <HStack as="li" spacing="1rem">
            <Text color={theme.colors.mono.white}>FROM</Text>
            <EvalLogSearchInput {...register('corrector')} />
          </HStack>
          <HStack as="li" spacing="1rem">
            <Text color={theme.colors.mono.white}>TO</Text>
            <EvalLogSearchInput {...register('corrected')} />
          </HStack>
          <HStack as="li" spacing="1rem">
            <Text color={theme.colors.mono.white}>플래그</Text>
            <HStack spacing="2rem">
              <HStack spacing="1rem">
                <input
                  type="radio"
                  {...register('outstandingOnly')}
                  value="all"
                  defaultChecked={formValue.outstandingOnly === 'all'}
                />
                <Text color={theme.colors.mono.white}>전체</Text>
              </HStack>
              <HStack spacing="1rem">
                <input
                  type="radio"
                  {...register('outstandingOnly')}
                  value="outstanding"
                  defaultChecked={formValue.outstandingOnly === 'outstanding'}
                />
                <Text color={theme.colors.mono.white}>Outstanding</Text>
              </HStack>
            </HStack>
          </HStack>
          <Spacer />
          <Button type="submit" text="검색하기" />
        </HStack>
      </VStack>
    </EvalLogSearchHeaderLayout>
  );
};

const EvalLogSearchHeaderLayout = styled.div`
  width: 100%;
  padding: 3rem;
  border-radius: 2rem;
`;

const EvalLogSearchInput = styled(Input)`
  all: unset;
  padding: 0.7rem 2rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
`;

// export {};
