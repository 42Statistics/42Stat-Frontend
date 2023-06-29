import { VStack } from '@components/common';
import styled from '@emotion/styled';
import type { RankingUserItemType } from '@/types/Ranking';
import { LeaderBoardItem } from './LeaderBoardItem';

type LeaderBoardProps = {
  list: RankingUserItemType[];
  me: RankingUserItemType | null;
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
    <VStack w="100%" h="100%">
      <LeaderBoardList>
        {list.map((item) => (
          <LeaderBoardItem
            key={item.id}
            item={item}
            unit={unit}
            fixedNumber={fixedNumber}
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

  & li:nth-of-type(even) {
    background-color: ${({ theme }) => theme.colors.mono.white};
  }

  & li:nth-of-type(odd) {
    background-color: #f0f0f0;
  }
`;
