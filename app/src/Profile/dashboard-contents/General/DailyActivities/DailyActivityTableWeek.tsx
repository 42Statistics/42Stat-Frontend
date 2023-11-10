import { Fragment } from 'react';

import { BlankTableData } from './DailyActivityTable';
import { DailyActivityTableData } from './DailyActivityTableData';

type DailyActivityTableRowProps = {
  dateGroupWithScores: { score: number; date: Date }[];
  color: string;
};

export const DailyActivityTableRow = ({
  dateGroupWithScores,
  color,
}: DailyActivityTableRowProps) => {
  return (
    <>
      {dateGroupWithScores.map(({ score, date }, index) => (
        <Fragment key={index}>
          {score === -1 ? (
            <BlankTableData />
          ) : (
            <DailyActivityTableData date={date} score={score} color={color} />
          )}
        </Fragment>
      ))}
    </>
  );
};
