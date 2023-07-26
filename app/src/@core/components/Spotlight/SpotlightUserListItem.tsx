import { UserPreview } from '@shared/__generated__/graphql';
import { ROUTES } from '@shared/constants/ROUTES';
import { Avatar } from '@shared/ui-kit';
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
      left={<Avatar size="xs" src={imgUrl} alt={`${login}의 프로필 사진`} />}
      name={login}
      link={`${ROUTES.PROFILE_ROOT}/${login}`}
      index={index}
    />
  );
};
