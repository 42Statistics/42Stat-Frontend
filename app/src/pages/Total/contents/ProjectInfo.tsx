import { gql } from '@/__generated__';
import {
  Button,
  Divider,
  HStack,
  Input,
  Spacer,
  Spinner,
  StyledInfoTable,
  Text,
  VStack,
} from '@/components/common';
import { PieChart } from '@/components/elements/charts/presets/PieChart';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useRef, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { Label } from '@/components/common/Label';

const GET_PROJECT_INFO = gql(/* GraphQL */ `
  query GetProjectInfo($projectName: String!) {
    getTotalPage {
      projectInfo(projectName: $projectName) {
        id
        name
        skills
        averageDurationTime
        averagePassFinalmark
        totalCloseCnt
        currRegisteredCnt
        passPercentage
        totalEvalCnt
      }
    }
  }
`);

// TODO: input에 debouncer적용예정
// TODO: 서클과 과제설명을 프론트에서 처리해주는거 만들어야됨
export const ProjectInfo = () => {
  const [projectName, setProjectName] = useState<string>('');
  const projectNameRef = useRef<HTMLInputElement>(null);
  const theme = useTheme();
  const { loading, error, data } = useQuery(GET_PROJECT_INFO, {
    variables: { projectName },
  });

  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }

  if (!data) {
    return <h1>project not found</h1>;
  }
  const {
    name,
    skills,
    averagePassFinalmark,
    averageDurationTime,
    totalCloseCnt,
    currRegisteredCnt,
    passPercentage,
  } = data.getTotalPage.projectInfo;

  const handleClick = () => {
    if (projectNameRef.current !== null) {
      setProjectName(projectNameRef.current.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (projectNameRef.current !== null) {
        setProjectName(projectNameRef.current.value);
      }
    }
  };

  return (
    <VStack w="100%" h="100%">
      <HStack w="100%">
        <SubjectSearchBarLayout>
          <HStack>
            <Input
              ref={projectNameRef}
              onKeyDown={handleKeyDown}
              css={{ textIndent: '1rem' }}
            />
            <Button element={<BiSearch />} onClick={handleClick} />
          </HStack>
        </SubjectSearchBarLayout>
        <Spacer />
      </HStack>
      <HStack w="100%" h="100%" spacing="5rem">
        <VStack spacing="4rem" align="start">
          <VStack align="start">
            <StyledText>1서클</StyledText>
            <Text fontSize="4rem" fontWeight={theme.fonts.weight.bold}>
              {name}
            </Text>
          </VStack>
          <VStack align="start" spacing="0.5rem">
            <Text>나만의 라이브러리 만들기</Text>
            <Text
              fontSize={theme.fonts.size.caption}
              color={theme.colors.secondary.default}
            >
              서브젝트 보기
            </Text>
          </VStack>
        </VStack>
        <Divider orientation="vertical" />

        <StyledInfoTable>
          <tbody>
            <tr>
              <td>사용 기술</td>
              <td>
                <HStack spacing="1rem">
                  {skills.map((skill, idx) => {
                    return skill ? <Label key={idx} text={skill} /> : null;
                  })}
                </HStack>
              </td>
            </tr>
            <tr>
              <td>통과 시 평균 점수</td>
              <td>{averagePassFinalmark}</td>
            </tr>
            <tr>
              <td>평균 소요 기간</td>
              <td>{averageDurationTime}일</td>
            </tr>
            <tr>
              <td>총 제출 횟수</td>
              <td>{totalCloseCnt.toLocaleString()}개</td>
            </tr>
            <tr>
              <td>현재 등록 인원</td>
              <td>{currRegisteredCnt.toLocaleString()}명</td>
            </tr>
          </tbody>
        </StyledInfoTable>
        <Divider orientation="vertical" />
        <PieChart
          data={[passPercentage, 100 - passPercentage]}
          labels={['pass', 'fail']}
          size="sm"
        />
      </HStack>
    </VStack>
  );
};

const SubjectSearchBarLayout = styled.div`
  padding: 0.8rem 2rem;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.primary.light};
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary.default};
`;
