import { gql } from '@shared/__generated__';
import { useLazyQuery } from '@apollo/client';
import { useDebounce } from 'usehooks-ts';
import { useRoveFocus } from '@shared/hooks/useRoveFocus';
import { isProjectSpotlightOpenAtom } from '@/Calculator/atoms/isProjectSpotlightOpenAtom';
import { SubjectListAtom } from '@/Calculator/atoms/SubjectListAtom';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import styled from '@emotion/styled';

export const GET_PROJECTS = gql(/* GraphQL */ `
  query GetProjects($input: String!, $limit: Int!) {
    getSpotlight(input: $input, limit: $limit) {
      projectPreviews {
        ...projectPreviewFields
      }
    }
  }
`);

export const ProjectSpotlightResult = ({
  index,
  keyword,
}: ProjectSpotlightResultProps) => {
  const debouncedInput = useDebounce(keyword, 250);
  const [search, searchResult] = useLazyQuery(GET_PROJECTS);
  const size = searchResult.data?.getSpotlight.projectPreviews.length ?? 0;
  const { currentFocus, setCurrentFocus } = useRoveFocus(size);
  const LIMIT = 4;
  const [isSpotlightOpen, setIsSpotlightOpen] = useAtom(
    isProjectSpotlightOpenAtom,
  );
  const [subjectList, setSubjectList] = useAtom(SubjectListAtom);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const id = parseInt(e.currentTarget.id);
    const project = searchResult.data?.getSpotlight.projectPreviews[id];

    const updatedSubjectList = subjectList.map((subject, idx) => {
      if (idx === index) {
        return {
          ...subject,
          name: project?.name ?? '',
          exp: 10021,
          score: 100,
          blackhole: 103,
          bonus: true,
          level: 6.1,
        };
      }
      return subject;
    });
    setSubjectList(updatedSubjectList);
    setIsSpotlightOpen(-1);

    return;
  };

  useEffect(() => {
    setCurrentFocus(0);
    if (debouncedInput.length >= 2) {
      return;
    }
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

  if (index !== isSpotlightOpen) return <></>;
  if (!searchResult.data) return <Layout>검색 결과가 없습니다.</Layout>;

  return (
    <Layout>
      {searchResult.data && (
        <div>
          {searchResult.data.getSpotlight.projectPreviews.map((project, i) => (
            <div id={i.toString()} onClick={handleClick} key={project.id}>
              {currentFocus === i ? (
                <b>{project.name}</b>
              ) : (
                <span>{project.name}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

type ProjectSpotlightResultProps = {
  index: number;
  keyword: string;
};

const Layout = styled.div`
  position: absolute;
  width: 15rem;
  padding: 0.5rem 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.mono.white};
  border-radius: ${({ theme }) => theme.radius.sm};
`;
