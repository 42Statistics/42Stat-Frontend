import { VStack } from '@/components/common';
import type { RankItemType } from '@/utils/types/Rank';
import styled from '@emotion/styled';
import { LeaderBoardItem } from './LeaderBoardItem';

type LeaderBoardProps = {
  rankList: RankItemType[];
  unit: string;
};

export const LeaderBoard = ({ rankList, unit }: LeaderBoardProps) => {
  return (
    <VStack w="100%" h="100%">
      <LeaderBoardList>
        {rankList.map((rankItem, idx) => {
          const rank = idx + 1;
          return (
            <LeaderBoardItem
              key={idx}
              rank={rank}
              item={rankItem}
              unit={unit}
            />
          );
        })}
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
