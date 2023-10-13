import { gql } from '@shared/__generated__';
import { useLazyQuery } from '@apollo/client';
import { useDebounce } from 'usehooks-ts';
import { useRoveFocus } from '@shared/hooks/useRoveFocus';
import { SubjectListAtom } from '@/Calculator/atoms/SubjectListAtom';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import { VStack, Writable } from '@shared/ui-kit';
import { calculateSubjectList } from '@/Calculator/utils/calculateSubjectList';

export const GET_PROJECTS = gql(/* GraphQL */ `
  query GetProjects($input: String!, $limit: Int!) {
    getSpotlight(input: $input, limit: $limit) {
      projectPreviews {
        ...projectPreviewFields
      }
    }
  }
`);

export const ProjectSpotlight = ({ index, keyword }: ProjectSpotlightProps) => {
  const debouncedInput = useDebounce(keyword, 250);
  const [search, searchResult] = useLazyQuery(GET_PROJECTS);
  const { currentFocus, setCurrentFocus } = useRoveFocus(5); //TODO: Spotlight result 나눠서 사이즈 받을 것
  const LIMIT = 4;
  const [subjectList, setSubjectList] = useAtom(SubjectListAtom);

  const handleClickOutside = () => {
    setCurrentFocus(-1);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!searchResult.data) return;
    const id = parseInt(e.currentTarget.id);
    const project = searchResult.data.getSpotlight.projectPreviews[id];

    const updatedSubjectList = subjectList.map((subject, idx) => {
      if (idx === index) {
        return {
          ...subject,
          name: project.name,
          exp: 10021,
          score: 100,
          blackhole: 103,
          bonus: true,
          level: 6.1,
        };
      }
      return subject;
    });
		const calculatedSubjectList = calculateSubjectList({subjectList: updatedSubjectList});
    setSubjectList(calculatedSubjectList);
    return;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const name = e.target.name as keyof typeof subjectList;
    const id = parseInt(e.target.id);
    const updatedSubjectList = subjectList.map((subject) => {
      if (subject.id === id) {
        return {
          ...subject,
          [name]: value,
        };
      }
      return subject;
    });
    setSubjectList(updatedSubjectList);
  };

  useEffect(() => {
    if (debouncedInput.length >= 2) {
      return;
    }
    setCurrentFocus(0);
    if (searchResult.data) {
      searchResult.data = undefined;
    }
  }, [debouncedInput, setCurrentFocus, searchResult]);

  useEffect(() => {
    if (debouncedInput.length < 2) {
      return;
    }
    if (debouncedInput.length <= 100) {
      search({ variables: { input: debouncedInput, limit: LIMIT } });
    }
  }, [debouncedInput, search]);

  return (
    <VStack onBlur={handleClickOutside}>
      <Writable
        name="name"
        id={index.toString()}
        value={subjectList[index].name}
        onChange={handleInputChange}
        onFocus={() => setCurrentFocus(0)}
      />
      {currentFocus !== -1 && searchResult.data && (
        <Layout>
          {searchResult.data.getSpotlight.projectPreviews.map((project, i) => (
            <Item
              id={i.toString()}
              onMouseDown={handleClick}
              isFocused={currentFocus === i}
              onMouseOver={() => setCurrentFocus(i)}
              key={project.id}
            >
              {project.name}
            </Item>
          ))}
        </Layout>
      )}
    </VStack>
  );
};

type ProjectSpotlightProps = {
  index: number;
  keyword: string;
};

const Layout = styled.div`
  position: relative;
  background-color: white;
`;

type ItemProps = {
  isFocused: boolean;
};

const Item = styled.div<ItemProps>`
  background-color: ${({ theme, isFocused }) =>
    isFocused && theme.colors.element.active};
  &:focus-visible {
    outline: 2px solid blue;
  }
`;
