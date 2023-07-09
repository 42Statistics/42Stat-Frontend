import type { RankingItemType } from '@/types/Ranking';
import { Divider } from '@components/common';
import styled from '@emotion/styled';
import { Fragment } from 'react';
import { LeaderBoardItem } from './LeaderBoardItem';

type LeaderBoardProps = {
  list: RankingItemType[];
  me: RankingItemType | null;
  unit: string;
  fixedNumber?: number;
};

export const LeaderBoard = ({
  list,
  me,
  unit,
  fixedNumber,
}: LeaderBoardProps) => {
  return (
    <LeaderBoardList>
      {list.map((item, idx) => (
        <Fragment key={item.id}>
          <LeaderBoardItem
            item={item}
            unit={unit}
            fixedNumber={fixedNumber}
            isMe={me !== null && item.id === me.id}
          />
          {idx !== list.length - 1 && <Divider />}
        </Fragment>
      ))}
    </LeaderBoardList>
  );
};

const LeaderBoardList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  width: 100%;
  height: 100%;
`;
