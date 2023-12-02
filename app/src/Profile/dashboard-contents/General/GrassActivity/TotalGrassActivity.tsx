import styled from '@emotion/styled';
import { CaptionText, HStack, Text, VStack } from '@shared/ui-kit';
import { ReactComponent as MdLogTime } from '@/Profile/assets/activity/log-time.svg';
import { ReactComponent as MdCorrector } from '@/Profile/assets/activity/corrector.svg';
import { ReactComponent as MdCorrected } from '@/Profile/assets/activity/corrected.svg';
import { ReactComponent as MdEvent } from '@/Profile/assets/activity/event.svg';
import { useTheme } from '@emotion/react';
import { useContext } from 'react';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { activitySumAtom } from '../atoms/activitySumAtom';
import { useAtomValue } from 'jotai';
import { MINUTES } from '@shared/constants/date';

export const TotalGrassActivity = () => {
  const theme = useTheme();
  const { coalition } = useContext(UserProfileContext);
  const activitySum = useAtomValue(activitySumAtom);

  const color = coalition?.color ?? theme.colors.accent.default;
  const iconSize = '30';
  const icons = [
    {
      icon: <MdLogTime width={iconSize} height={iconSize} />,
      label: '아이맥',
      value: `${Math.floor(activitySum.logTime / MINUTES.HOUR)} 시간`,
    },
    {
      icon: <MdEvent width={iconSize} height={iconSize} />,
      label: '아젠다',
      value: activitySum.event,
    },
    {
      icon: <MdCorrected width={iconSize} height={iconSize} />,
      label: '피평가',
      value: activitySum.corrected,
    },
    {
      icon: <MdCorrector width={iconSize} height={iconSize} />,
      label: '평가',
      value: activitySum.corrector,
    },
  ];

  return (
    <VStack w="100%" h="100%" spacing="2rem" align="start">
      <HStack
        w="100%"
        spacing="1rem"
        align="start"
        style={{ marginLeft: '1rem' }}
      >
        <Text>누적 활동 내역</Text>
        <Divider />
      </HStack>
      <GridLayout>
        {icons.map((item, index) => (
          <GridArea key={index}>
            <HStack
              w="100%"
              justify="start"
              style={{ padding: '1rem 0.5rem 1rem 1.5rem' }}
            >
              <VStack w="40%" spacing="0.5rem">
                <IconLayout bgColor={color}>{item.icon}</IconLayout>
                <CaptionText>{item.label}</CaptionText>
              </VStack>
              <HStack w="60%">
                <CaptionText style={{ position: 'relative', top: '-1rem' }}>
                  {item.label === '아이맥' ? item.value : `${item.value} 번`}
                </CaptionText>
              </HStack>
            </HStack>
          </GridArea>
        ))}
      </GridLayout>
    </VStack>
  );
};

const IconLayout = styled.div<{ bgColor: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background-color: ${({ bgColor }) => bgColor};
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px; // Add the desired gap between grid areas
  width: 100%;
  height: 100%;
`;

const GridArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc; // Add a border or styling as needed
  border-radius: 10px;
`;

const Divider = styled.div`
  flex: 1; // Divide the remaining space
  height: 1px;
  margin-top: 1rem;
  margin-right: 1rem;
  background-color: #ccc; // Divider의 색상을 설정하세요
`;
