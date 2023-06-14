import { VStack } from '@components/common';
import styled from '@emotion/styled';
import type { RankUserItemType } from '@utils/types/Rank';
import { LeaderBoardItem } from './LeaderBoardItem';

type LeaderBoardProps = {
  rankList: RankUserItemType[];
  myRank: RankUserItemType | null;
  unit: string;
};

export const LeaderBoard = ({ rankList, myRank, unit }: LeaderBoardProps) => {
  return (
    <VStack w="100%" h="100%">
      <LeaderBoardList>
        {rankList.map((rankItem) => (
          <LeaderBoardItem
            key={rankItem.id}
            item={rankItem}
            unit={unit}
            isMe={myRank !== null && rankItem.id === myRank.id}
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
