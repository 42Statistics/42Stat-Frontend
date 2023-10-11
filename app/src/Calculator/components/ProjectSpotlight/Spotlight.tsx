import { QueryResult } from '@apollo/client';
import styled from '@emotion/styled';
import { useAtom, useSetAtom } from 'jotai';
import { useEffect } from 'react';

import { isProjectSpotlightOpenAtom } from '@/Calculator/atoms/isProjectSpotlightOpenAtom';
import { useSubjectList } from '@/Calculator/hooks/useSubjectList';
import { checkDuplicateSubject } from '@/Calculator/utils/checkDuplicateSubject';
import { calculatorDialogAtom } from '@core/atoms/calculatorDialogAtom';
import { Exact, GetProjectsQuery } from '@shared/__generated__/graphql';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { useRoveFocus } from '@shared/hooks/useRoveFocus';
import { Body1Text, Center } from '@shared/ui-kit';
import { isEnterKeyDown } from '@shared/utils/keyboard';

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
  left?: string;
};

export const Spotlight = ({
  result: { loading, error, data },
  index,
  width,
  left = '0',
}: SpotlightProps) => {
  const { subjectList, updateSubjectList } = useSubjectList();
  const [calculatorDialog, setCalculatorDialog] = useAtom(calculatorDialogAtom);
  const setIsProjectSpotlightOpen = useSetAtom(isProjectSpotlightOpenAtom);
  const size = data?.getSpotlight.projectPreviews.length ?? 0;
  const { currentFocus, setCurrentFocus } = useRoveFocus(size);

  const handleSelectSubject = (name: string, difficulty: number) => {
    if (checkDuplicateSubject(subjectList, name, index)) {
      setCalculatorDialog({
        isOpen: true,
        description: '이미 추가된 프로젝트입니다.',
      });
      return;
    }
    const updatedSubjectList = subjectList.map((subject, idx) => {
      if (idx === index) {
        return {
          ...subject,
          name: name,
          exp: difficulty ?? 0,
        };
      }
      return subject;
    });
    updateSubjectList(updatedSubjectList);
    setIsProjectSpotlightOpen(index + 1);
  };

  useEffect(() => {
    const handleEnterKeyDown = (e: KeyboardEvent) => {
      if (isEnterKeyDown(e) && data) {
        e.preventDefault();
        const project = data.getSpotlight.projectPreviews[currentFocus];
        handleSelectSubject(project.name, project.difficulty ?? 0);
      }
    };
    document.addEventListener('keydown', handleEnterKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEnterKeyDown);
    };
  });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!data) return;
    const id = parseInt(e.currentTarget.id);
    const project = data.getSpotlight.projectPreviews[id];
    handleSelectSubject(project.name, project.difficulty ?? 0);
  };

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

  if (data.getSpotlight.projectPreviews.length === 0) {
    return (
      <Layout width={width} left={left}>
        <Center>
          <Body1Text>검색 결과가 없습니다.</Body1Text>
        </Center>
      </Layout>
    );
  }

  return (
    <Layout width={width} left={left}>
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

type LayoutProps = {
  width: string;
  left?: string;
};

const Layout = styled.div<LayoutProps>`
  position: absolute;
  width: ${({ width }) => width};
  min-width: 100%;
  top: 4.2rem;
  left: ${({ left }) => left};
  padding: 1rem 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  border-radius: ${({ theme }) => theme.radius.xs};
`;
