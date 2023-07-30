import { EvalLogHeader } from '@shared/__generated__/graphql';
import { ROUTES } from '@shared/constants/ROUTES';
import {
  BoldText,
  HStack,
  PrimaryBoldText,
  Spacer,
  Text,
} from '@shared/ui-kit';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { FlagLabel } from '../FlagLabel';

type EvalLogItemTitleProps = {
  header: EvalLogHeader;
};

export const EvalLogItemTitle = ({ header }: EvalLogItemTitleProps) => {
  const { corrector, teamPreview, beginAt, projectPreview, flag } = header;
  return (
    <HStack w="100%" justify="start" wrap="wrap">
      <Link to={ROUTES.PROFILE_OF(corrector.login)}>
        <PrimaryBoldText>{corrector.login}</PrimaryBoldText>
      </Link>
      <Text>님이&nbsp;</Text>
      <PrimaryBoldText>{teamPreview.name}</PrimaryBoldText>
      <Text>
        을&nbsp;
        <strong>{dayjs(beginAt).format('YYYY-MM-DD HH:mm')}</strong>에
        평가하였습니다
      </Text>
      <Spacer />
      <HStack spacing="1rem">
        <Link to={ROUTES.PROJECT_DETAIL_OF(projectPreview.name)}>
          <BoldText>{projectPreview.name}</BoldText>
        </Link>
        <FlagLabel name={flag.name} isPositive={flag.isPositive} />
      </HStack>
    </HStack>
  );
};
