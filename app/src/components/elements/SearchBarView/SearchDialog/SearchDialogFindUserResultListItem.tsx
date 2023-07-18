import { UserPreview } from '@/__generated__/graphql';
import { Avatar } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { SearchDialogResultListItem } from './SearchDialogResultListItem';

type SearchDialogFindUserResultListItemProps = {
  item: UserPreview;
  index: number;
};

export const SearchDialogFindUserResultListItem = ({
  item: { login, imgUrl },
  index,
}: SearchDialogFindUserResultListItemProps) => {
  return (
    <SearchDialogResultListItem
      left={<Avatar size="xs" src={imgUrl} />}
      name={login}
      link={`${ROUTES.PROFILE_ROOT}/${login}`}
      index={index}
    />
  );
};
