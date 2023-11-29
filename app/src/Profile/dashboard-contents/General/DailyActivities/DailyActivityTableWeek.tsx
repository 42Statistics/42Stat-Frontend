import { Fragment } from 'react';

import { BlankTableData } from './DailyActivityTable';
import { DailyActivityTableData } from './DailyActivityTableData';
import { DailyActivity } from '@shared/__generated__/graphql';

type DailyActivityTableRowProps = {
  dateGroupWithScores: {
    score: number;
    date: Date;
    records: DailyActivity['records'];
  }[];
  color: string;
};

export const DailyActivityTableRow = ({
  dateGroupWithScores,
  color,
}: DailyActivityTableRowProps) => {
  return (
    <>
      {dateGroupWithScores.map(({ score, date, records }, index) => (
        <Fragment key={index}>
          {score === -1 ? (
            <BlankTableData />
          ) : (
            <DailyActivityTableData
              date={date}
              score={score}
              records={records}
              color={color}
            />
          )}
        </Fragment>
      ))}
    </>
  );
};
