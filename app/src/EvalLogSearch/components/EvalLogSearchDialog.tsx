import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactComponent as MdSwapVert } from '@shared/assets/icon/md-swap-vert.svg';
import { ARIA_LABEL } from '@shared/constants/accessibility';
import { Button, Clickable, Dialog, Input, Select } from '@shared/ui-kit';
import { useAtomValue } from 'jotai';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import type { EvalLogSearchArgs } from '../api/getEvalLogs';
import { evalLogSearchArgsAtom } from '../atoms/evalLogSearchArgsAtom';
import { EVAL_LOG_SEARCH_ARGS_TEXT } from '../constants/evalLogArgsText';
import {
  EVAL_LOG_SEARCH_URL_PARAM_KEYS,
  EVAL_LOG_SEARCH_URL_PARAM_VALUES,
} from '../constants/urlParams';

type EvalLogSearchDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

type EvalLogSearchForm = Omit<
  EvalLogSearchArgs,
  'after' | 'first' | 'outstandingOnly'
> & {
  flag: string;
};

const { CORRECTOR, CORRECTED, PROJECT_NAME, FLAG, SORT_ORDER } =
  EVAL_LOG_SEARCH_URL_PARAM_KEYS;

const { ALL_FLAG, OUTSTANDING_FLAG, BEGIN_AT_ASC, BEGIN_AT_DESC } =
  EVAL_LOG_SEARCH_URL_PARAM_VALUES;

const { ALL_FLAG_INCLUDED, OUTSTANDING_FLAG_ONLY, ASC, DESC } =
  EVAL_LOG_SEARCH_ARGS_TEXT;

export const EvalLogSearchDialog = ({
  isOpen,
  onClose,
}: EvalLogSearchDialogProps) => {
  const theme = useTheme();
  const [, setSearchParams] = useSearchParams();
  const evalLogSearchArgs = useAtomValue(evalLogSearchArgsAtom);

  const { register, handleSubmit, getValues, setValue } =
    useForm<EvalLogSearchForm>({
      defaultValues: evalLogSearchArgs,
    });

  const handleSwapButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const { corrector, corrected } = getValues();
    setValue(CORRECTOR, corrected);
    setValue(CORRECTED, corrector);
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Layout>
        <EvalLogSearchForm
          onSubmit={handleSubmit((evalLogSearchForm) => {
            setSearchParams(toURLSearchParams(evalLogSearchForm));
            onClose();
          })}
        >
          <ul>
            <li>
              <label htmlFor={PROJECT_NAME}>과제명</label>
              <Input
                id={PROJECT_NAME}
                {...register(PROJECT_NAME)}
                autoFocus
                style={{ width: '150px' }}
              />
            </li>
            <li>
              <label htmlFor={CORRECTOR}>From</label>
              <Input
                id={CORRECTOR}
                {...register(CORRECTOR)}
                style={{ width: '150px' }}
              />
              <Clickable
                type="button"
                onClick={handleSwapButtonClick}
                aria-label={ARIA_LABEL.BUTTON.SWAP_CORRECTOR_AND_CORRECTED}
              >
                <MdSwapVert
                  width={20}
                  height={20}
                  fill={theme.colors.mono.black}
                />
              </Clickable>
            </li>
            <li>
              <label htmlFor={CORRECTED}>To</label>
              <Input
                id={CORRECTED}
                {...register(CORRECTED)}
                style={{ width: '150px' }}
              />
            </li>
            <li>
              <label htmlFor={FLAG}>플래그</label>
              <Select id={FLAG} {...register(FLAG)} style={{ width: '150px' }}>
                <option value={ALL_FLAG}>{ALL_FLAG_INCLUDED}</option>
                <option value={OUTSTANDING_FLAG}>
                  {OUTSTANDING_FLAG_ONLY}
                </option>
              </Select>
            </li>
            <li>
              <label htmlFor={SORT_ORDER}>정렬</label>
              <Select
                id={SORT_ORDER}
                {...register(SORT_ORDER)}
                style={{ width: '150px' }}
              >
                <option value={BEGIN_AT_DESC}>{DESC}</option>
                <option value={BEGIN_AT_ASC}>{ASC}</option>
              </Select>
            </li>
          </ul>
          <Button type="submit">검색하기</Button>
        </EvalLogSearchForm>
      </Layout>
    </Dialog>
  );
};

const toURLSearchParams = ({
  corrector,
  corrected,
  projectName,
  flag,
  sortOrder,
}: EvalLogSearchForm): URLSearchParams => {
  const searchParams = new URLSearchParams();

  if (corrector && corrector !== '') {
    searchParams.append(CORRECTOR, corrector);
  }

  if (corrected && corrected !== '') {
    searchParams.append(CORRECTED, corrected);
  }

  if (projectName && projectName !== '') {
    searchParams.append(PROJECT_NAME, projectName);
  }

  if (flag) {
    searchParams.append(FLAG, flag);
  }

  if (sortOrder) {
    searchParams.append(SORT_ORDER, sortOrder);
  }

  return searchParams;
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

  color: ${({ theme }) => theme.colors.mono.black};

  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  li {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  ul li label {
    width: 5rem;
  }
`;
