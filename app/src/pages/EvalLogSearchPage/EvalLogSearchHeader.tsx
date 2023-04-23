import {
  Button,
  HStack,
  PrimaryText,
  Spacer,
  VStack,
} from '@/components/common';
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
  const { register, handleSubmit } = useForm<FormValue>({
    defaultValues: formValue,
  });

  return (
    <VStack as="form" w="100%" spacing="2rem" onSubmit={handleSubmit(onSubmit)}>
      <HStack as="ul" w="100%" spacing="2rem" justify="start" wrap="wrap">
        <HStack as="li" spacing="1rem">
          <PrimaryText>과제명</PrimaryText>
          <StyledInput {...register('projectName')} />
        </HStack>
        <HStack as="li" spacing="1rem">
          <PrimaryText>FROM</PrimaryText>
          <StyledInput {...register('corrector')} />
        </HStack>
        <HStack as="li" spacing="1rem">
          <PrimaryText>TO</PrimaryText>
          <StyledInput {...register('corrected')} />
        </HStack>
        <HStack as="li" spacing="1rem">
          <PrimaryText>플래그</PrimaryText>
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
                defaultChecked={formValue.outstandingOnly === 'outstanding'}
              />
              Outstanding
            </HStack>
          </HStack>
        </HStack>
      </HStack>
      <HStack w="100%">
        <Spacer />
        <Button type="submit" text="검색하기" />
      </HStack>
    </VStack>
  );
};

const StyledInput = styled.input`
  all: unset;
  padding: 0.7rem 2rem;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
`;
