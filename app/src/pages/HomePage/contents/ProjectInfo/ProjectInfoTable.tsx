import { HStack, StyledInfoTable, Text } from '@/components/common';
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
          <td>
            <Text>사용 기술</Text>
          </td>
          <td>
            <HStack spacing="1rem">
              {skills.map((skill, idx) => {
                return skill ? <Label key={idx} text={skill} /> : null;
              })}
            </HStack>
          </td>
        </tr>
        <tr>
          <td>
            <Text>통과 시 평균 점수</Text>
          </td>
          <td>
            <Text>{averagePassFinalmark}</Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text>평균 소요 기간</Text>
          </td>
          <td>
            <Text>{numberWithUnitFormatter(averageDurationTime, '일')}</Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text>총 제출 횟수</Text>
          </td>
          <td>
            <Text>{numberWithUnitFormatter(totalCloseCnt, '개')}</Text>
          </td>
        </tr>
        <tr>
          <td>
            <Text>현재 등록 인원</Text>
          </td>
          <td>
            <Text>{numberWithUnitFormatter(currRegisteredCnt, '명')}</Text>
          </td>
        </tr>
      </tbody>
    </StyledInfoTable>
  );
};
