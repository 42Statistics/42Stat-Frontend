import styled from '@emotion/styled';
import { QueryResult } from '@apollo/client';
import { Exact, GetProjectsQuery } from '@shared/__generated__/graphql';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import { Center, Body1Text } from '@shared/ui-kit';
import { useSetAtom } from 'jotai';
import { useRoveFocus } from '@shared/hooks/useRoveFocus';
import { checkDuplicateSubject } from '../utils/checkDuplicateSubject';
import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';

export const Spotlight = ({
  result: { loading, error, data },
  index,
	width,
}: SpotlightProps) => {
  const { subjectList, updateSubjectList } = useSubjectList();
  const setCalculatorDialogAtom = useSetAtom(calculatorDialogAtom);
  const size = data?.getSpotlight.projectPreviews.length ?? 0;
  const { currentFocus, setCurrentFocus } = useRoveFocus(size);

  if (loading) {
    return null;
  }
  if (error) {
    return (
      <Layout width={width}>
        <Center>
          <ApolloErrorView message={error.message} />
        </Center>
      </Layout>
    );
  }
  if (!data) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!data) return;
    const id = parseInt(e.currentTarget.id);
    const project = data.getSpotlight.projectPreviews[id];
    if (checkDuplicateSubject(subjectList, project.name)) {
      setCalculatorDialogAtom({
        isOpen: true,
        description: '이미 추가된 프로젝트입니다.',
      });
      return;
    }
    const updatedSubjectList = subjectList.map((subject, idx) => {
      if (idx === index) {
        return {
          ...subject,
          name: project.name,
          exp: project.difficulty ?? 0,
        };
      }
      return subject;
    });
    updateSubjectList(updatedSubjectList);
    return;
  };

  if (data.getSpotlight.projectPreviews.length === 0) {
    return (
      <Layout width={width}>
        <Center>
          <Body1Text>검색 결과가 없습니다.</Body1Text>
        </Center>
      </Layout>
    );
  }

  return (
    <Layout width={width}>
      {data.getSpotlight.projectPreviews.map((project, i) => (
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
  );
};

type SpotlightProps = {
  result: QueryResult<
    GetProjectsQuery,
    Exact<{
      input: string;
      limit: number;
    }>
  >;
  index: number;
	width: string;
};

type ItemProps = {
  isFocused: boolean;
};

const Item = styled.div<ItemProps>`
  padding: 1rem;
  background-color: ${({ theme, isFocused }) =>
    isFocused && theme.colors.element.active};
  &:focus-visible {
    outline: 2px solid blue;
  }
`;

const Layout = styled.div<LayoutProps>`
  position: absolute;
	width: ${({ width }) => width};
	top: 4.2rem;
	left: 0rem;
  padding: 1rem 0;
  z-index: 100;
  min-width: 20rem;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  border-radius: ${({ theme }) => theme.radius.xs};
`;

type LayoutProps = {
	width: string;
};