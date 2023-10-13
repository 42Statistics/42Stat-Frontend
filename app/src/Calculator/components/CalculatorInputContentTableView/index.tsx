import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { OrderItemButtonGroup } from '@/Calculator/components/OrderItemButtonGroup';
import { ProjectSpotlight } from '@/Calculator/components/ProjectSpotlight';
import { PROJECT_LIST_TITLES } from '@/Calculator/constants/projectListTitles';
import type { Subject } from '@/Calculator/types/Subject';
import { MediumText, PrimaryMediumText, Writable } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

type CalculatorInputContentTableViewProps = {
  onSubjectListChange: (subjectList: Subject[]) => void;
  onInputChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
  onCheckboxChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => void;
};

export const CalculatorInputContentTableView = ({
  onSubjectListChange,
  onInputChange,
  onCheckboxChange,
}: CalculatorInputContentTableViewProps) => {
  const subjectList = useAtomValue(subjectListAtom);

  const { PROJECT_NAME, SCORE, COALITION_BONUS, EXP, FINISH_LEVEL, BLACKHOLE } =
    PROJECT_LIST_TITLES;

  const heads = [
    PROJECT_NAME,
    SCORE,
    COALITION_BONUS,
    EXP,
    BLACKHOLE,
    FINISH_LEVEL,
    '',
  ];

  return (
    <Table>
      <thead>
        <tr>
          {heads.map((head, index) => (
            <th key={index}>
              <PrimaryMediumText>{head}</PrimaryMediumText>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {subjectList.map(
          (
            { name, expEdited, score, bonus, blackhole, finishLevel },
            index,
          ) => (
            <tr key={index}>
              <td>
                <ProjectSpotlight
                  index={index}
                  keyword={name}
                  spotlightLeft="1.2rem"
                  spotlightWidth="auto"
                  height="3rem"
                />
              </td>
              <td>
                <InputLayout>
                  <Writable
                    type="number"
                    min="0"
                    max="125"
                    name="score"
                    onChange={(event) => onInputChange(event, index)}
                    value={score.toString()}
                    style={{ width: '4rem' }}
                  />
                </InputLayout>
              </td>
              <td>
                <input
                  type="checkbox"
                  name="bonus"
                  onChange={(event) => onCheckboxChange(event, index)}
                  checked={bonus}
                />
              </td>
              <td>{expEdited?.toLocaleString() ?? '-'}</td>

              <td>
                <MediumText>
                  +{numberWithUnitFormatter(blackhole, '일')}
                </MediumText>
              </td>
              <td>
                <MediumText>{finishLevel}</MediumText>
              </td>
              <td>
                <OrderItemButtonGroup
                  tableRowList={subjectList}
                  index={index}
                  onListChange={onSubjectListChange}
                />
              </td>
            </tr>
          ),
        )}
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  margin-top: 1rem;
  width: 100%;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.mono.black};

  th,
  td {
    position: relative;
    text-align: center;
    padding: 0.6rem 1rem;
    vertical-align: middle;
    border-bottom: solid 1px ${({ theme }) => theme.colors.mono.gray200};
  }

  th {
    max-width: 300px;
    padding: 0.8rem 1rem;
  }

  td:first-of-type {
    width: 15rem;
  }

  td:nth-of-type(2),
  td:nth-of-type(3),
  td:nth-of-type(4),
  td:nth-of-type(5),
  td:nth-of-type(6),
  td:last-of-type {
    width: 8rem;
    max-width: 8rem;
  }
`;

const InputLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin: 0.2rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.xs};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray300};
  }
  background: ${({ theme }) => theme.colors.background.box.default};
`;
