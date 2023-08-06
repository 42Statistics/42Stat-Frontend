import { TeamStatus } from '@shared/__generated__/graphql';
import { Text } from '@shared/ui-kit';
import { getTeamStatusString } from '@shared/utils/getTeamStatusString';
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
  if (status !== TeamStatus.Finished) {
    return <Text>{getTeamStatusString(status)}</Text>;
  }
  return <MarkLabel isValidate={isValidated!} finalMark={finalMark!} />; // 논의된 사항이기에 Assertion 가능
};
