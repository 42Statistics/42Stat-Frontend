import { Avatar } from '@components/common';
import { UserPreview } from '@shared/__generated__/graphql';
import { ROUTES } from '@shared/constants/ROUTES';
import { SpotlightListItem } from './SpotlightListItem';

type SpotlightUserListItemProps = {
  item: UserPreview;
  index: number;
};

export const SpotlightUserListItem = ({
  item: { login, imgUrl },
  index,
}: SpotlightUserListItemProps) => {
  return (
    <SpotlightListItem
      left={<Avatar size="xs" src={imgUrl} />}
      name={login}
      link={`${ROUTES.PROFILE_ROOT}/${login}`}
      index={index}
    />
  );
};
