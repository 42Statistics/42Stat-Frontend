import type { RankingItemType } from '@/types/Ranking';
import { Divider } from '@components/common';
import styled from '@emotion/styled';
import { Fragment } from 'react';
import { LeaderboardListItem } from './LeaderboardListItem';

type LeaderboardProps = {
  list: RankingItemType[];
  me: RankingItemType | null;
  unit: string;
  fixedNumber?: number;
};

export const LeaderboardList = ({
  list,
  me,
  unit,
  fixedNumber,
}: LeaderboardProps) => {
  return (
    <Layout>
      {list.map((item, idx) => (
        <Fragment key={item.id}>
          <LeaderboardListItem
            item={item}
            unit={unit}
            fixedNumber={fixedNumber}
            isMe={me !== null && item.id === me.id}
          />
          {idx !== list.length - 1 && <Divider />}
        </Fragment>
      ))}
    </Layout>
  );
};

const Layout = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  width: 100%;
  height: 100%;
`;
