import { useContext } from 'react';

import dayjs from 'dayjs';

import { ROUTES } from '@shared/constants/routes';
import { CaptionText, Text, VStack } from '@shared/ui-kit';
import { CustomLink } from '@shared/ui-kit-styled/CustomLink';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { ReactComponent as MdCorrected } from '@/Profile/assets/activity/corrected.svg';

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

  return (
    <TimelineItem icon={<MdCorrected width={15} height={15} />} color={color}>
      <VStack spacing="0.2rem" align="start" style={{ marginTop: '0.5rem' }}>
        <CustomLink to={ROUTES.TEAM_OF(teamId)}>
          {`[피평가] ${correctorLogin} → ${login}`}
        </CustomLink>
        <Text>{projectName}</Text>
        <CaptionText>{`${dayjs(beginAt).format('HH:mm')} ~ ${dayjs(
          filledAt,
        ).format('HH:mm')}`}</CaptionText>
      </VStack>
    </TimelineItem>
  );
};
