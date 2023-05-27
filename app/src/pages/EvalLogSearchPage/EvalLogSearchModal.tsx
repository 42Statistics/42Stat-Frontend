import { Button, HStack, Input, Text, VStack } from '@/components/common';
import { Modal } from '@/components/common/Modal';
import type { ModalType } from '@/utils/types/Modal';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EvalLogSearchForm } from './EvalLogSearchPage';

type EvalLogSearchModalProps = ModalType & {
  form: EvalLogSearchForm;
  onSubmit: SubmitHandler<EvalLogSearchForm>;
};

export const EvalLogSearchModal = ({
  isOpen,
  toggle,
  form,
  onSubmit,
}: EvalLogSearchModalProps) => {
  const { register, handleSubmit } = useForm<EvalLogSearchForm>({
    defaultValues: form,
  });

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack as="ul" w="100%" spacing="2rem">
          <HStack w="100%" as="li" justify="space-between" spacing="3rem">
            <Text>과제명</Text>
            <EvalLogSearchInput {...register('projectName')} />
          </HStack>
          <HStack w="100%" as="li" justify="space-between">
            <Text>From</Text>
            <EvalLogSearchInput {...register('corrector')} />
          </HStack>
          <HStack w="100%" as="li" justify="space-between">
            <Text>To</Text>
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
                  defaultChecked={form.outstandingOnly === 'all'}
                />
                <Text>전체</Text>
              </HStack>
              <HStack spacing="1rem">
                <input
                  type="radio"
                  {...register('outstandingOnly')}
                  value="outstanding"
                  defaultChecked={form.outstandingOnly === 'outstanding'}
                />
                <Text>Outstanding</Text>
              </HStack>
            </HStack>
          </HStack>
          <Button type="submit" text="검색하기" />
        </VStack>
      </form>
    </Modal>
  );
};

const EvalLogSearchInput = styled(Input)`
  all: unset;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;

  box-shadow: ${({ theme }) =>
    `0 0.4rem 0.4rem ${rgba(theme.colors.mono.black, 0.1)}`};

  :hover {
    box-shadow: ${({ theme }) =>
      `0 0.4rem 0.4rem ${rgba(theme.colors.mono.black, 0.25)}`};
  }

  transition: all 0.2s;
  :hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.mono.white};
    color: ${({ theme }) => theme.colors.mono.black};
  }
`;
