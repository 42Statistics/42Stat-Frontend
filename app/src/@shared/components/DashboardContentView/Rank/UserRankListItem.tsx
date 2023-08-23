import { UserRank } from '@shared/__generated__/graphql';
import { ALT } from '@shared/constants/accessibility';
import { ROUTES } from '@shared/constants/routes';
import { Avatar } from '@shared/ui-kit';
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
      center={<Avatar src={imgUrl} alt={ALT.AVATAR_OF(login)} />}
      name={login}
      link={ROUTES.PROFILE_OF(login)}
      value={value}
      unit={unit}
    />
  );
};
