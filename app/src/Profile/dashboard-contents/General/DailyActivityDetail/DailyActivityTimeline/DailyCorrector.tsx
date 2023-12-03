import { useTheme } from '@emotion/react';
import dayjs from 'dayjs';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MdCorrector } from '@/Profile/assets/activity/corrector.svg';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { ROUTES } from '@shared/constants/routes';
import { BoldText, CaptionText, Text, VStack } from '@shared/ui-kit';
import { TimelineItem } from '../TimelineItem';

type DailyCorrectorProps = {
  data: {
    beginAt: string;
    filledAt: string;
    leaderLogin: string;
    projectName: string;
    teamId: number;
  };
  color: string;
};

export const DailyCorrector = ({ data, color }: DailyCorrectorProps) => {
  const { beginAt, filledAt, leaderLogin, projectName, teamId } = data;
  const { login } = useContext(UserProfileContext);
  const theme = useTheme();

  return (
    <TimelineItem icon={<MdCorrector width={15} height={15} />} color={color}>
      <VStack spacing="0.2rem" align="start" style={{ marginTop: '0.5rem' }}>
        <Link to={ROUTES.TEAM_OF(teamId)}>
          <BoldText
            color={theme.colors.chart.primary.default}
          >{`[평가] ${login} -> ${leaderLogin}`}</BoldText>
        </Link>
        <Text>{projectName}</Text>
        <CaptionText>{`${dayjs(beginAt).format('HH:mm')} ~ ${dayjs(
          filledAt,
        ).format('HH:mm')}`}</CaptionText>
      </VStack>
    </TimelineItem>
  );
};
