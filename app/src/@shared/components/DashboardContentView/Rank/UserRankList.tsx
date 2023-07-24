import { UserRank } from '@shared/__generated__/graphql';
import { VStack } from '@shared/ui-kit';
import { UserRankListItem } from './UserRankListItem';

type UserRankListProps = {
  list: UserRank[];
  cnt: number;
  unit: string;
};

export const UserRankList = ({ list, cnt, unit }: UserRankListProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2rem">
      {list.slice(0, cnt).map((item) => (
        <UserRankListItem key={item.userPreview.id} item={item} unit={unit} />
      ))}
    </VStack>
  );
};
