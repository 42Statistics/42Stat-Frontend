import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useContext } from 'react';

import { ReactComponent as MdLogTime } from '@/Profile/assets/activity/log-time.svg';
import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { HStack, Text } from '@shared/ui-kit';

export const DailyLogTime = ({ time }: { time: number }) => {
  const { coalition } = useContext(UserProfileContext);
  const theme = useTheme();
  const color = coalition?.color ?? theme.colors.accent.default;
  const hour = Math.floor(time / 60);
  const minute = time % 60;

  return (
    <>
      <HStack spacing="1.5rem">
        <IconWhiteLayout>
          <IconLayout bgColor={color}>
            <MdLogTime width={15} height={15} />
          </IconLayout>
        </IconWhiteLayout>
        <Text>아이맥 접속시간: {`${hour}시간 ${minute}분`}</Text>
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