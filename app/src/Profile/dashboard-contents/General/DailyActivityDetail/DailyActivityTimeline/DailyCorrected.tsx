import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MdCorrected } from '@/Profile/assets/activity/corrected.svg';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { ROUTES } from '@shared/constants/routes';
import { BoldText, CaptionText, Text, VStack } from '@shared/ui-kit';
import { TimelineItem } from '../TimelineItem';

type DailyCorrectedProps = {
  data: {
    beginAt: string;
    filledAt: string;
    correctorLogin: string;
    projectName: string;
    teamId: number;
  };
  color: string;
};

export const DailyCorrected = ({ data, color }: DailyCorrectedProps) => {
  const { beginAt, filledAt, correctorLogin, projectName, teamId } = data;
  const { login } = useContext(UserProfileContext);
  const theme = useTheme();

  return (
    <TimelineItem icon={<MdCorrected width={15} height={15} />} color={color}>
      <VStack spacing="0.2rem" align="start" style={{ marginTop: '0.5rem' }}>
        <Link to={ROUTES.TEAM_OF(teamId)}>
          <BoldText
            color={theme.colors.chart.primary.default}
          >{`[피평가] ${correctorLogin} -> ${login}`}</BoldText>
        </Link>
        <Text>{projectName}</Text>
        <CaptionText>{`${dayjs(beginAt).format('HH:mm')} ~ ${dayjs(
          filledAt,
        ).format('HH:mm')}`}</CaptionText>
      </VStack>
    </TimelineItem>
  );
};
