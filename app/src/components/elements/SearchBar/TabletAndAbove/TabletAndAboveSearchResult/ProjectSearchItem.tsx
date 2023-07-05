import { ProjectPreview } from '@/__generated__/graphql';
import ft_logo from '@assets/42-logo.svg';
import { Clickable, HStack, Image, Text } from '@components/common';
import styled from '@emotion/styled';

type ProjectSearchItemProps = {
  project: ProjectPreview;
  onSubmit: (name: string) => void;
};

export const ProjectSearchItem = ({
  project,
  onSubmit,
}: ProjectSearchItemProps) => {
  return (
    <Clickable onClick={() => onSubmit(project.name)} style={{ width: '100%' }}>
      <Layout>
        <Image src={ft_logo} alt="42 로고" width="18px" />
        <Text>{project.name}</Text>
      </Layout>
    </Clickable>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: #e8e8e8;
  }
`;
