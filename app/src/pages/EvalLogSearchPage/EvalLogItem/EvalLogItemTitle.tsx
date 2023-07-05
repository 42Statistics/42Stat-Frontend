import { EvalLogHeader } from '@/__generated__/graphql';
import {
  BoldText,
  HStack,
  PrimaryBoldText,
  Spacer,
  Text,
} from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { FlagLabel } from './FlagLabel';

type EvalLogItemTitleProps = {
  header: EvalLogHeader;
};

export const EvalLogItemTitle = ({ header }: EvalLogItemTitleProps) => {
  const { corrector, teamPreview, beginAt, projectPreview, flag } = header;
  return (
    <HStack w="100%" justify="start" wrap="wrap">
      <Link to={`${ROUTES.PROFILE_ROOT}/${corrector.login}`}>
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
        <BoldText>{projectPreview.name}</BoldText>
        <FlagLabel name={flag.name} isPositive={flag.isPositive} />
      </HStack>
    </HStack>
  );
};
