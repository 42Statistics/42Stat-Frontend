import {
  EvalLogHeader,
  TeamEvalLogHeader,
} from '@shared/__generated__/graphql';
import { ROUTES } from '@shared/constants/ROUTES';
import { BoldText, HStack, PrimaryBoldText, Text } from '@shared/ui-kit';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { FlagLabel } from '../FlagLabel';

type EvalLogListItemTitleProps = {
  header: EvalLogHeader | TeamEvalLogHeader;
};

export const EvalLogListItemTitle = ({ header }: EvalLogListItemTitleProps) => {
  const { corrector, beginAt, flag } = header;
  const { teamPreview, projectPreview } =
    'teamPreview' in header
      ? header
      : { teamPreview: null, projectPreview: null };

  return (
    <HStack justify="space-between" wrap="wrap" spacing="0.6rem">
      <span style={{ wordBreak: 'break-all' }}>
        <Link to={ROUTES.PROFILE_OF(corrector.login)}>
          <PrimaryBoldText>{corrector.login}</PrimaryBoldText>
        </Link>
        <Text>님이&nbsp;</Text>
        {teamPreview !== null ? (
          <>
            <Link to={ROUTES.TEAM_OF(teamPreview.id)}>
              <PrimaryBoldText style={{ wordBreak: 'break-all' }}>
                {teamPreview.name}
              </PrimaryBoldText>
            </Link>
            <Text>을&nbsp;</Text>
          </>
        ) : null}
        <BoldText>{dayjs(beginAt).format('YYYY-MM-DD HH:mm')}</BoldText>
        <Text>에 평가하였습니다</Text>
      </span>
      <HStack justify="start" wrap="wrap" spacing="0.6rem">
        {projectPreview !== null ? (
          <Link to={ROUTES.PROJECT_DETAIL_OF(projectPreview.name)}>
            <BoldText>{projectPreview.name}</BoldText>
          </Link>
        ) : null}
        <FlagLabel name={flag.name} isPositive={flag.isPositive} />
      </HStack>
    </HStack>
  );
};
