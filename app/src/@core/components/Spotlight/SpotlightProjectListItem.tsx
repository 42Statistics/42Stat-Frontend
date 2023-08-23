import { useTheme } from '@emotion/react';
import { ProjectPreview } from '@shared/__generated__/graphql';
import { ReactComponent as FtLogo } from '@shared/assets/logo/ft-logo.svg';
import { ROUTES } from '@shared/constants/(tmp)routes';
import { SpotlightListItem } from './SpotlightListItem';

type SpotlightProjectListItemProps = {
  item: ProjectPreview;
  index: number;
};

export const SpotlightProjectListItem = ({
  item: { name },
  index,
}: SpotlightProjectListItemProps) => {
  const theme = useTheme();

  return (
    <SpotlightListItem
      left={<FtLogo width={20} height={20} fill={theme.colors.mono.black} />}
      name={name}
      link={ROUTES.PROJECT_DETAIL_OF(name)}
      index={index}
    />
  );
};
