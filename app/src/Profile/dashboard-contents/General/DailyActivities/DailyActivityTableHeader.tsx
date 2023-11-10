import { useTheme } from '@emotion/react';

import { BlankTableData } from '@/Profile/dashboard-contents/General/DailyActivities/DailyActivityTable';
import { CaptionText, HStack } from '@shared/ui-kit';

type DailyActivityTableHeaderProps = {
  dateGroupsWithScores: { date: Date; score: number }[][];
};

export const DailyActivityTableHeader = ({
  dateGroupsWithScores,
}: DailyActivityTableHeaderProps) => {
  const theme = useTheme();

  return (
    <HStack h="4rem" spacing="0.2rem">
      {dateGroupsWithScores[dateGroupsWithScores.length - 1].map(
        ({ date }, index) => (
          <BlankTableData key={index}>
            {date.getDate() <= 7 && (
              <div style={{ position: 'absolute' }}>
                <CaptionText
                  color={theme.colors.mono.gray400}
                  style={{ wordBreak: 'keep-all' }}
                >
                  {date.getMonth() + 1}월
                </CaptionText>
              </div>
            )}
          </BlankTableData>
        ),
      )}
    </HStack>
  );
};
