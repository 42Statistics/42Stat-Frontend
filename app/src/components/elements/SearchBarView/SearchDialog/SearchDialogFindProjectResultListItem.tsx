import { ProjectPreview } from '@/__generated__/graphql';
import ft_logo from '@assets/42-logo.svg';
import { Image } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
import { SearchDialogResultListItem } from './SearchDialogResultListItem';

type SearchDialogFindProjectResultListItemProps = {
  item: ProjectPreview;
  index: number;
};

export const SearchDialogFindProjectResultListItem = ({
  item: { name },
  index,
}: SearchDialogFindProjectResultListItemProps) => {
  return (
    <SearchDialogResultListItem
      left={<Image src={ft_logo} width={20} />}
      name={name}
      link={`${ROUTES.PROJECT_ROOT}/${name}`}
      index={index}
    />
  );
};
