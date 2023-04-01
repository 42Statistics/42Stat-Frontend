import { HStack, Input } from '@/components/common';
import styled from '@emotion/styled';
import { BiSearch } from 'react-icons/bi';

type ProjectSearchBarProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const ProjectSearchBar = (props: ProjectSearchBarProps) => {
  return (
    <ProjectSearchBarLayout>
      <HStack>
        <Input {...props} />
        <BiSearch />
      </HStack>
    </ProjectSearchBarLayout>
  );
};

const ProjectSearchBarLayout = styled.div`
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
`;
