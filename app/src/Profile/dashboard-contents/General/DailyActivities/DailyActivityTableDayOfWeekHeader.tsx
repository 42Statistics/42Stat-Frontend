import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

import { CaptionText } from '@shared/ui-kit';

import { DAY_OF_WEEK } from '@/Profile/dashboard-contents/General/DailyActivities/constants/dayOfWeek';

export const DailyActivityTableDayOfWeekHeader = () => {
  const theme = useTheme();

  return (
    <Layout>
      <div style={{ height: '4rem' }} />
      {DAY_OF_WEEK.map((day, index) => (
        <CaptionText
          key={index}
          color={theme.colors.mono.gray400}
          style={{ height: '1.8rem' }}
        >
          {day}
        </CaptionText>
      ))}
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 5rem;
  gap: 0.2rem;
  position: sticky;
  left: 0;
  z-index: 1;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.background.box.default} 60%,
    ${({ theme }) => rgba(theme.colors.background.box.default, 0)} 100%
  );
`;
