import {
  Button,
  HStack,
  Input,
  Modal,
  Select,
  Text,
  VStack,
} from '@components/common';
import styled from '@emotion/styled';
import type { ModalType } from '@utils/types/Modal';
import { SubmitHandler, useForm } from 'react-hook-form';
import { EvalLogSearchFormData } from '.';

type EvalLogSearchModalProps = ModalType & {
  form: EvalLogSearchFormData;
  onSubmit: SubmitHandler<EvalLogSearchFormData>;
};

export const EvalLogSearchModal = ({
  isOpen,
  toggle,
  form,
  onSubmit,
}: EvalLogSearchModalProps) => {
  const { register, handleSubmit } = useForm<EvalLogSearchFormData>({
    defaultValues: form,
  });

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="6rem">
          <VStack as="ul" w="100%" spacing="3rem">
            <HStack as="li" spacing="3rem">
              <Text>과제명</Text>
              <EvalLogSearchInput {...register('projectName')} />
            </HStack>
            <HStack as="li" spacing="3rem">
              <Text>From</Text>
              <EvalLogSearchInput {...register('corrector')} />
            </HStack>
            <HStack as="li" spacing="3rem">
              <Text>To</Text>
              <EvalLogSearchInput {...register('corrected')} />
            </HStack>
            <HStack as="li" spacing="3rem">
              <Text>플래그</Text>
              <Select {...register('flag')} style={{ width: '150px' }}>
                <option value="all">전체</option>
                <option value="outstandingOnly">Outstanding만</option>
              </Select>
            </HStack>
            <HStack as="li" spacing="3rem">
              <Text>정렬</Text>
              <Select {...register('sortOrder')} style={{ width: '150px' }}>
                <option value="desc">최신순</option>
                <option value="asc">오래된순</option>
              </Select>
            </HStack>
          </VStack>
          <Button type="submit" text="검색하기" />
        </VStack>
      </form>
    </Modal>
  );
};

const EvalLogSearchInput = styled(Input)`
  all: unset;
  width: 150px;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  background: #f9f9f9;
  box-shadow: 6px 6px 13px #d2d2d2, -6px -6px 13px #ffffff;
`;
