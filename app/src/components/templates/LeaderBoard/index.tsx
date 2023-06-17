import { VStack } from '@components/common';
import styled from '@emotion/styled';
import type { RankingUserItemType } from '@utils/types/Ranking';
import { LeaderBoardItem } from './LeaderBoardItem';

type LeaderBoardProps = {
  list: RankingUserItemType[];
  me: RankingUserItemType | null;
  unit: string;
};

export const LeaderBoard = ({ list, me, unit }: LeaderBoardProps) => {
  return (
    <VStack w="100%" h="100%">
      <LeaderBoardList>
        {list.map((item) => (
          <LeaderBoardItem
            key={item.id}
            item={item}
            unit={unit}
            isMe={me !== null && item.id === me.id}
          />
        ))}
      </LeaderBoardList>
    </VStack>
  );
};

const LeaderBoardList = styled.ul`
  width: 100%;
  height: 100%;

  & li:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.mono.white};
  }

  & li:nth-of-type(even) {
    background-color: #eeeeee;
  }
`;
