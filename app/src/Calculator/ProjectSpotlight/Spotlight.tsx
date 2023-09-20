import styled from '@emotion/styled';
import { QueryResult } from '@apollo/client';
import { Exact, GetProjectsQuery } from '@shared/__generated__/graphql';
import { ApolloErrorView } from '@shared/components/ApolloError/ApolloErrorView';
import { calculateSubjectList } from '@/Calculator/utils/calculateSubjectList';
import { Center, H3Text } from '@shared/ui-kit';
import { useAtom } from 'jotai';
import { SubjectListAtom } from '@/Calculator/atoms/SubjectListAtom';
import { calculatorPropsAtom } from '../atoms/CalculatorPropsAtom';
import { useRoveFocus } from '@shared/hooks/useRoveFocus';

export const Spotlight = ({
  result: { loading, error, data },
  index,
}: SpotlightProps) => {
  const [subjectList, setSubjectList] = useAtom(SubjectListAtom);
  const [calculatorProps] = useAtom(calculatorPropsAtom);
  const size = data?.getSpotlight.projectPreviews.length ?? 0;
  const { currentFocus, setCurrentFocus } = useRoveFocus(size);

  if (loading) {
    return null;
  }
  if (error) {
    return (
      <Layout>
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
    const calculatedSubjectList = calculateSubjectList({
      subjectList: updatedSubjectList,
      currentLevel: calculatorProps.currentLevel,
    });
    setSubjectList(calculatedSubjectList);
    return;
  };

  if (data.getSpotlight.projectPreviews.length === 0) {
    return (
      <Layout>
        <Center>
          <H3Text>검색 결과가 없습니다.</H3Text>
        </Center>
      </Layout>
    );
  }

  return (
    <Layout>
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

const Layout = styled.div`
  position: absolute;
  z-index: 100;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  border-radius: ${({ theme }) => theme.radius.sm};
`;
