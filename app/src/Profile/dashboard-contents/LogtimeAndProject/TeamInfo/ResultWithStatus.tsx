import { MarkLabel } from '@/Profile/dashboard-contents/LogtimeAndProject/TeamInfo/MarkLabel';
import { TeamStatus } from '@shared/__generated__/graphql';
import { Text } from '@shared/ui-kit';
import { getTeamStatusString } from '@shared/utils/getTeamStatusString';

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
  if (status !== TeamStatus.Finished) {
    return <Text>{getTeamStatusString(status)}</Text>;
  }
  return (
    <MarkLabel
      isValidate={isValidated as boolean}
      finalMark={finalMark as number}
    />
  ); // 논의된 사항이기에 Assertion 가능
};
