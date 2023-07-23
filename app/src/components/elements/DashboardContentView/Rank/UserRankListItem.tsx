import { UserRank } from '@/__generated__/graphql';
import { ROUTES } from '@/constants/ROUTES';
import { Avatar } from '@components/common';
import { RankListItem } from './RankListItem';

type UserRankListItemProps = {
  item: UserRank;
  unit: string;
};

export const UserRankListItem = ({ item, unit }: UserRankListItemProps) => {
  const {
    rank,
    userPreview: { login, imgUrl },
    value,
  } = item;
  return (
    <RankListItem
      rank={rank}
      center={<Avatar src={imgUrl} />}
      name={login}
      link={`${ROUTES.PROFILE_ROOT}/${login}`}
      value={value}
      unit={unit}
    />
  );
};
