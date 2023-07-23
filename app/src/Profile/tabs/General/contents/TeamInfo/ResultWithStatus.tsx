import { TeamStatus } from '@shared/__generated__/graphql';
import { Text } from '@components/common';
import { MarkLabel } from './MarkLabel';

type ResultWithStatusProps = {
  isValidated?: boolean | null;
  finalMark?: number | null;
  status: TeamStatus;
};

export const ResultWithStatus = ({
  isValidated,
  finalMark,
  status,
}: ResultWithStatusProps) => {
  if (status === TeamStatus.Registered) {
    return <Text>팀 빌딩 중</Text>;
  }
  if (status === TeamStatus.InProgress) {
    return <Text>진행 중</Text>;
  }
  if (status === TeamStatus.WaitingForCorrection) {
    return <Text>평가 중</Text>;
  }
  if (status === TeamStatus.Finished) {
    return <MarkLabel isValidate={isValidated!} finalMark={finalMark!} />; // 논의된 사항이기에 Assertion 가능
  }
  return <></>;
};
