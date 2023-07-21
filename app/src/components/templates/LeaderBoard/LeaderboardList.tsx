import { UserRank } from '@/__generated__/graphql';
import { Divider } from '@components/common';
import styled from '@emotion/styled';
import { Fragment } from 'react';
import { LeaderboardListItem } from './LeaderboardListItem';

type LeaderboardListProps = {
  list: UserRank[];
  me?: UserRank | null;
  unit: string;
  fixedNumber?: number;
};

export const LeaderboardList = ({
  list,
  me,
  unit,
  fixedNumber,
}: LeaderboardListProps) => {
  return (
    <Layout>
      {list.map((item, idx) => (
        <Fragment key={item.userPreview.id}>
          <LeaderboardListItem
            item={item}
            unit={unit}
            fixedNumber={fixedNumber}
            isMe={me != null && item.userPreview.id === me.userPreview.id}
          />
          {idx !== list.length - 1 ? <Divider /> : null}
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
