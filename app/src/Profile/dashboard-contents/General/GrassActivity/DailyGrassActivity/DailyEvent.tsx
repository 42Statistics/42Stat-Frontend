import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useContext } from 'react';

import { ReactComponent as MdEvent } from '@/Profile/assets/activity/event.svg';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { BoldText, CaptionText, HStack, Text, VStack } from '@shared/ui-kit';

export const DailyEvent = (data: any) => {
  const { coalition } = useContext(UserProfileContext);
  const theme = useTheme();
  const color = coalition?.color ?? theme.colors.accent.default;

  return (
    <>
      <HStack align="start" spacing="1.5rem">
        <IconWhiteLayout>
          <IconLayout bgColor={color}>
            <MdEvent width={15} height={15} />
          </IconLayout>
        </IconWhiteLayout>
        <VStack spacing="0.2rem" align="start" style={{ marginTop: '0.5rem' }}>
          <BoldText>{data.data.name}</BoldText>
          <Text>{data.data.location}</Text>
          <CaptionText>16:30 - 17:00</CaptionText>
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
  background-color: white;
`;
