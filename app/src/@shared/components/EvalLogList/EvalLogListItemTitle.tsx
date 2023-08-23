import {
  EvalLogHeader,
  TeamEvalLogHeader,
} from '@shared/__generated__/graphql';
import { ROUTES } from '@shared/constants/(tmp)routes';
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
      <div style={{ wordBreak: 'break-all' }}>
        <Link to={ROUTES.PROFILE_OF(corrector.login)}>
          <PrimaryBoldText inline>{corrector.login}</PrimaryBoldText>
        </Link>
        <Text inline>님이&nbsp;</Text>
        {teamPreview !== null ? (
          <>
            <Link to={ROUTES.TEAM_OF(teamPreview.id)}>
              <PrimaryBoldText inline style={{ wordBreak: 'break-all' }}>
                {teamPreview.name}
              </PrimaryBoldText>
            </Link>
            <Text inline>을&nbsp;</Text>
          </>
        ) : null}
        <BoldText inline>{dayjs(beginAt).format('YYYY-MM-DD HH:mm')}</BoldText>
        <Text inline>에 평가하였습니다</Text>
      </div>
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
