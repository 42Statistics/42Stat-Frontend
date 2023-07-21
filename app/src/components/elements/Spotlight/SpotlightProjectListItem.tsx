import { ProjectPreview } from '@/__generated__/graphql';
import ft_logo from '@assets/42-logo.svg';
import { Image } from '@components/common';
import { ROUTES } from '@routes/ROUTES';
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
      left={<Image src={ft_logo} width={20} />}
      name={name}
      link={`${ROUTES.PROJECT_ROOT}/${name}`}
      index={index}
    />
  );
};
