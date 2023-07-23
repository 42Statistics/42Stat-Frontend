import { ProjectPreview } from '@/__generated__/graphql';
import { ROUTES } from '@/constants/ROUTES';
import { ReactComponent as FtLogo } from '@assets/logo/ft-logo.svg';
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
