import { HStack, StyledInfoTable } from '@/components/common';
import { Label } from '@/components/common/Label';
import { numberWithUnitFormatter } from '@/utils/formatters';

type ProjectInfoTableProps = {
  skills: (string | null)[];
  averagePassFinalmark: number;
  averageDurationTime: number;
  totalCloseCnt: number;
  currRegisteredCnt: number;
};

export const ProjectInfoTable = ({
  skills,
  averagePassFinalmark,
  averageDurationTime,
  totalCloseCnt,
  currRegisteredCnt,
}: ProjectInfoTableProps) => {
  return (
    <StyledInfoTable>
      <tbody>
        <tr>
          <td>사용 기술</td>
          <td>
            <HStack spacing="1rem">
              {skills.map((skill, idx) => {
                return skill ? <Label key={idx} text={skill} /> : null;
              })}
            </HStack>
          </td>
        </tr>
        <tr>
          <td>통과 시 평균 점수</td>
          <td>{averagePassFinalmark}</td>
        </tr>
        <tr>
          <td>평균 소요 기간</td>
          <td>{numberWithUnitFormatter(averageDurationTime, '일')}</td>
        </tr>
        <tr>
          <td>총 제출 횟수</td>
          <td>{numberWithUnitFormatter(totalCloseCnt, '개')}</td>
        </tr>
        <tr>
          <td>현재 등록 인원</td>
          <td>{numberWithUnitFormatter(currRegisteredCnt, '명')}</td>
        </tr>
      </tbody>
    </StyledInfoTable>
  );
};
