import { ProjectRank } from '@shared/__generated__/graphql';
import { VStack } from '@components/common';
import { ProjectRankListItem } from './ProjectRankListItem';

type ProjectRankListProps = {
  list: ProjectRank[];
  cnt: number;
  unit: string;
};

export const ProjectRankList = ({ list, cnt, unit }: ProjectRankListProps) => {
  return (
    <VStack w="100%" h="100%" spacing="2rem">
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
