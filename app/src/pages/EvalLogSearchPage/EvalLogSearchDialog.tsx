import type { EvalLogSearchModel } from '@/types/EvalLogSearchModel';
import { Button, Input, Select } from '@components/common';
import { Dialog } from '@components/common/Dialog';
import styled from '@emotion/styled';
import { useForm } from 'react-hook-form';

type EvalLogSearchDialogProps = {
  form: EvalLogSearchModel;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: EvalLogSearchModel) => void;
};

export const EvalLogSearchDialog = ({
  form,
  isOpen,
  onClose,
  onSubmit,
}: EvalLogSearchDialogProps) => {
  const { register, handleSubmit } = useForm<EvalLogSearchModel>({
    defaultValues: form,
  });

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Layout>
        <EvalLogSearchForm onSubmit={handleSubmit(onSubmit)}>
          <ul>
            <li>
              <label htmlFor="projectName">과제명</label>
              <Input {...register('projectName')} autoFocus />
            </li>
            <li>
              <label htmlFor="corrector">From</label>
              <Input {...register('corrector')} />
            </li>
            <li>
              <label htmlFor="corrected">To</label>
              <Input {...register('corrected')} />
            </li>
            <li>
              <label htmlFor="flag">플래그</label>
              <Select {...register('flag')} style={{ width: '150px' }}>
                <option value="all">전체</option>
                <option value="outstanding">Outstanding만</option>
              </Select>
            </li>
            <li>
              <label htmlFor="sortOrder">정렬</label>
              <Select {...register('sortOrder')} style={{ width: '150px' }}>
                <option value="desc">최신순</option>
                <option value="asc">오래된순</option>
              </Select>
            </li>
          </ul>
          <Button type="submit">검색하기</Button>
        </EvalLogSearchForm>
      </Layout>
    </Dialog>
  );
};

const Layout = styled.div`
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-radius: ${({ theme }) => theme.radius.sm};
  box-shadow: ${({ theme }) => theme.shadow.md};
`;

const EvalLogSearchForm = styled.form`
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;

  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  ul li label {
    width: 5rem;
  }
`;
