import { ROUTES } from '@/constants/ROUTES';
import { ProjectRank } from '@shared/__generated__/graphql';
import { RankListItem } from './RankListItem';

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
      link={`${ROUTES.PROJECT_ROOT}/${name}`}
      value={value}
      unit={unit}
    />
  );
};
