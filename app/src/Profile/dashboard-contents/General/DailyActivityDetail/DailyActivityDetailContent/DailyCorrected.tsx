import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useContext } from 'react';

import { ReactComponent as MdCorrected } from '@/Profile/assets/activity/corrected.svg';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { BoldText, CaptionText, HStack, Text, VStack } from '@shared/ui-kit';
import { useNavigate } from 'react-router-dom';

type DailyCorrectedProps = {
  data: {
    beginAt: string;
    filledAt: string;
    correctorLogin: string;
    projectName: string;
    teamId: number;
  };
};

export const DailyCorrected = ({ data }: DailyCorrectedProps) => {
  const { beginAt, filledAt, correctorLogin, projectName, teamId } = data;
  const { coalition, login } = useContext(UserProfileContext);
  const theme = useTheme();
  const navigate = useNavigate();

  const color = coalition?.color ?? theme.colors.accent.default;
  const start = new Date(beginAt);
  const end = new Date(filledAt);

  const handleClick = () => {
    navigate(`/team/${teamId}`);
  };

  const getTimeFormat = (time: Date) => {
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <>
      <HStack align="start" spacing="1.5rem">
        <IconWhiteLayout>
          <IconLayout bgColor={color}>
            <MdCorrected width={15} height={15} />
          </IconLayout>
        </IconWhiteLayout>
        <VStack spacing="0.2rem" align="start" style={{ marginTop: '0.5rem' }}>
          <BoldText
            color={theme.colors.chart.primary.default}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          >{`[피평가] ${correctorLogin} -> ${login}`}</BoldText>
          <Text>{projectName}</Text>
          <CaptionText>{`${getTimeFormat(start)} - ${getTimeFormat(
            end,
          )}`}</CaptionText>
        </VStack>
      </HStack>
    </>
  );
};

const IconLayout = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
`;

const IconWhiteLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.background.box.default};
`;
