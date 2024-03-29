import type { ProjectRank } from '@shared/__generated__/graphql';
import { ProjectRankListItem } from '@shared/components/DashboardContentView/Rank/ProjectRankListItem';
import { VStack } from '@shared/ui-kit';

type ProjectRankListProps = {
  list: ProjectRank[];
  cnt: number;
  unit: string;
};

export const ProjectRankList = ({ list, cnt, unit }: ProjectRankListProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2.4rem">
      {list.slice(0, cnt).map((item) => (
        <ProjectRankListItem
          key={item.projectPreview.id}
          item={item}
          unit={unit}
        />
      ))}
    </VStack>
  );
};
