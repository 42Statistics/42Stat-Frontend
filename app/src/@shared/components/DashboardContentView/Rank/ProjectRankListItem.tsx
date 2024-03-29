import type { ProjectRank } from '@shared/__generated__/graphql';
import { RankListItem } from '@shared/components/DashboardContentView/Rank/RankListItem';
import { ROUTES } from '@shared/constants/routes';

type ProjectRankListItemProps = {
  item: ProjectRank;
  unit: string;
};

export const ProjectRankListItem = ({
  item,
  unit,
}: ProjectRankListItemProps) => {
  const {
    rank,
    projectPreview: { name },
    value,
  } = item;

  return (
    <RankListItem
      rank={rank}
      name={name}
      link={ROUTES.PROJECT_DETAIL_OF(name)}
      value={value}
      unit={unit}
    />
  );
};
