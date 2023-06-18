import { ProjectPreview } from '@/__generated__/graphql';
import ft_logo from '@assets/42-logo.svg';
import { Clickable, HStack, Image, Text } from '@components/common';

type ProjectSearchItemProps = {
  project: ProjectPreview;
  onSubmit: (name: string) => void;
};

export const ProjectSearchItem = ({
  project,
  onSubmit,
}: ProjectSearchItemProps) => {
  return (
    <Clickable onClick={() => onSubmit(project.name)}>
      <HStack w="100%" spacing="1.2rem">
        <Image
          src={ft_logo}
          alt="42 로고"
          width="18px"
        />
        <Text>{project.name}</Text>
      </HStack>
    </Clickable>
  );
};
