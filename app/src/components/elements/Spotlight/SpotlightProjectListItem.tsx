import { ProjectPreview } from '@shared/__generated__/graphql';
import { ReactComponent as FtLogo } from '@shared/assets/logo/ft-logo.svg';
import { ROUTES } from '@shared/constants/ROUTES';
import { SpotlightListItem } from './SpotlightListItem';

type SpotlightProjectListItemProps = {
  item: ProjectPreview;
  index: number;
};

export const SpotlightProjectListItem = ({
  item: { name },
  index,
}: SpotlightProjectListItemProps) => {
  return (
    <SpotlightListItem
      left={<FtLogo width={20} height={20} />}
      name={name}
      link={`${ROUTES.PROJECT_ROOT}/${name}`}
      index={index}
    />
  );
};
