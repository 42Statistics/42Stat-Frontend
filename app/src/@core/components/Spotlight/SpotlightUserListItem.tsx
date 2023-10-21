import { SpotlightListItem } from '@core/components/Spotlight/SpotlightListItem';
import type { UserPreview } from '@shared/__generated__/graphql';
import { ALT } from '@shared/constants/accessibility';
import { ROUTES } from '@shared/constants/routes';
import { Avatar } from '@shared/ui-kit';

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
      left={<Avatar size="xs" src={imgUrl} alt={ALT.AVATAR_OF(login)} />}
      name={login}
      link={ROUTES.PROFILE_OF(login)}
      index={index}
    />
  );
};
