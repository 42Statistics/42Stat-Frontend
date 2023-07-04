import { ProjectPreview } from '@/__generated__/graphql';
import ft_logo from '@assets/42-logo.svg';
import { Clickable, H3Text, HStack, Image } from '@components/common';

type MobileProjectSearchItemProps = {
  project: ProjectPreview;
  onSubmit: (name: string) => void;
};

export const MobileProjectSearchItem = ({
  project,
  onSubmit,
}: MobileProjectSearchItemProps) => {
  return (
    <Clickable onClick={() => onSubmit(project.name)}>
      <HStack w="100%" spacing="1.2rem">
        <Image src={ft_logo} alt="42 로고" width="22px" />
        <H3Text>{project.name}</H3Text>
      </HStack>
    </Clickable>
  );
};
