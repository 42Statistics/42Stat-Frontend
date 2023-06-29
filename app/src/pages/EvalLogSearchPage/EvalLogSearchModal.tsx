import {
  Button,
  Center,
  HStack,
  Input,
  Modal,
  Select,
  Text,
  VStack,
} from '@components/common';
import type { ModalType } from '@/types/Modal';
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
              <Center w="5rem">
                <Text>과제명</Text>
              </Center>
              <Input {...register('projectName')} />
            </HStack>
            <HStack as="li" spacing="3rem">
              <Center w="5rem">
                <Text>From</Text>
              </Center>
              <Input {...register('corrector')} />
            </HStack>
            <HStack as="li" spacing="3rem">
              <Center w="5rem">
                <Text>To</Text>
              </Center>
              <Input {...register('corrected')} />
            </HStack>
            <HStack as="li" spacing="3rem">
              <Center w="5rem">
                <Text>플래그</Text>
              </Center>
              <Select {...register('flag')} style={{ width: '150px' }}>
                <option value="all">전체</option>
                <option value="outstanding">Outstanding만</option>
              </Select>
            </HStack>
            <HStack as="li" spacing="3rem">
              <Center w="5rem">
                <Text>정렬</Text>
              </Center>
              <Select {...register('sortOrder')} style={{ width: '150px' }}>
                <option value="desc">최신순</option>
                <option value="asc">오래된순</option>
              </Select>
            </HStack>
          </VStack>
          <Button type="submit">검색하기</Button>
        </VStack>
      </form>
    </Modal>
  );
};
