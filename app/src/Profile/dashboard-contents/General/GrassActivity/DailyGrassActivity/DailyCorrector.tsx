import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useContext } from 'react';

import { ReactComponent as MdCorrector } from '@/Profile/assets/activity/corrector.svg';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { BoldText, CaptionText, HStack, Text, VStack } from '@shared/ui-kit';
import { useNavigate } from 'react-router-dom';

export const DailyCorrector = (data: any) => {
  const { coalition, login } = useContext(UserProfileContext);
  const theme = useTheme();
  const navigate = useNavigate();

  const color = coalition?.color ?? theme.colors.accent.default;
  const start = new Date(data.data.beginAt);
  const end = new Date(data.data.filledAt);

  const handleClick = () => {
    navigate(`/team/${data.data.teamId}`);
  };

  return (
    <>
      <HStack align="start" spacing="1.5rem">
        <IconWhiteLayout>
          <IconLayout bgColor={color}>
            <MdCorrector width={15} height={15} />
          </IconLayout>
        </IconWhiteLayout>
        <VStack spacing="0.2rem" align="start" style={{ marginTop: '0.5rem' }}>
          <BoldText
            color={theme.colors.chart.primary.default}
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          >{`[평가] ${login} -> ${data.data.leaderLogin}`}</BoldText>
          <Text>{data.data.projectName}</Text>
          <CaptionText>{`${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()}`}</CaptionText>
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
