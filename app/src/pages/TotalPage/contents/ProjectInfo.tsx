import {
  Divider,
  HStack,
  PrimaryText,
  Spacer,
  Spinner,
  StyledInfoTable,
  Text,
  VStack,
} from '@/components/common';
import { Label } from '@/components/common/Label';
import { PieChart } from '@/components/elements/Chart';
import { useSearchBar } from '@/components/elements/SearchBar/hooks/useSearchBar';
import { ProjectSearchBar } from '@/components/elements/SearchBar/ProjectSearchBar';
import { isEnterKeyReleased } from '@/utils/isEnterKeyReleased';
import { gql } from '@/__generated__';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import { useState } from 'react';

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

// TODO: 실제 검색으로 변경
const searchProject = (input: string) => {
  console.log(input);
};

// TODO: 서클과 과제설명을 프론트에서 처리해주는거 만들어야됨
export const ProjectInfo = () => {
  const { input, handleChange } = useSearchBar(searchProject);
  const [projectName, setProjectName] = useState<string>('libft');
  const theme = useTheme();
  const { loading, error, data } = useQuery(GET_PROJECT_INFO, {
    variables: { projectName },
  });

  // FIXME: ProjectSearchBar와 UserSearchBar 폼 통일
  // TODO: Enter가 아니라 리스트 클릭으로 이동하도록 변경
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (isEnterKeyReleased(e)) {
      setProjectName(input);
    }
  };

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

  return (
    <VStack w="100%" h="100%">
      <HStack w="100%">
        <ProjectSearchBar onChange={handleChange} onKeyDown={handleKeyDown} />
        <Spacer />
      </HStack>
      <HStack w="100%" h="100%" spacing="5rem">
        <VStack spacing="4rem" align="start">
          <VStack align="start">
            <PrimaryText>1서클</PrimaryText>
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
        />
      </HStack>
    </VStack>
  );
};
