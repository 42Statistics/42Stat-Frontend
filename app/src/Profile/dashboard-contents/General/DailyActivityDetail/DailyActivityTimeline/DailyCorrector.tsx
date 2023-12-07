import { useContext } from 'react';

import dayjs from 'dayjs';

import { ROUTES } from '@shared/constants/routes';
import { CaptionText, Text, VStack } from '@shared/ui-kit';
import { CustomLink } from '@shared/ui-kit-styled/CustomLink';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { ReactComponent as MdCorrector } from '@/Profile/assets/activity/corrector.svg';

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

  return (
    <TimelineItem icon={<MdCorrector width={15} height={15} />} color={color}>
      <VStack spacing="0.2rem" align="start" style={{ marginTop: '0.5rem' }}>
        <CustomLink to={ROUTES.TEAM_OF(teamId)}>
          {`[평가] ${login} → ${leaderLogin}`}
        </CustomLink>
        <Text>{projectName}</Text>
        <CaptionText>{`${dayjs(beginAt).format('HH:mm')} ~ ${dayjs(
          filledAt,
        ).format('HH:mm')}`}</CaptionText>
      </VStack>
    </TimelineItem>
  );
};
