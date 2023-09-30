import {
  Text,
  VStack,
  HStack,
  H3BoldText,
  Input,
  H1BoldText,
} from '@shared/ui-kit';
import { Seo } from '@shared/components/Seo';
import { Footer } from '@core/components/Footer';
import { DashboardTemp } from '@shared/components/Dashboard/DashboardTemp';
import { calculatorPageDashboardContents } from '@/Calculator/dashboard-frames/calculatorPageDashboardContents';
import {
  calculatorPageDashboardDesktop,
  calculatorPageDashboardTablet,
} from '@/Calculator/dashboard-frames/calculatorPageDashboardCols';
import CalculatorInput from '@/Calculator/CalculatorInput';
import { useAtom } from 'jotai';
import { calculatorPropsAtom } from '@/Calculator/atoms/calculatorPropsAtom';
import { subjectListAtom } from './atoms/subjectListAtom';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useDeviceType } from '@shared/utils/react-responsive/useDeviceType';
import { gql } from '@shared/__generated__';
import { useQuery } from '@apollo/client';
import { getTimeDiffFromNow } from '@shared/utils/getTimeDiffFromNow';
import { getBlackholeDaysLeft } from '@shared/utils/getBlackholeDaysLeft';
import { InfoTooltip } from '@shared/components/InfoTooltip';
import { calculateSubjectList } from './utils/calculateSubjectList';
import CalculatorInputMobile from './CalculatorInputMobile';

export const GET_BLACKHOLE_INFO = gql(/* GraphQL */ `
  query GetBlackholeInfo {
    getPersonalGeneral {
      userProfile {
        level
      }
      beginAt
      blackholedAt
    }
  }
`);

const CalculatorLayout = () => {
  const theme = useTheme();
  const [calculatorProps, setCalculatorProps] = useAtom(calculatorPropsAtom);
  const [subjectList, setSubjectList] = useAtom(subjectListAtom);
  const { currentLevel, daysFromStart } = calculatorProps;
  const device = useDeviceType();
  const { loading, error, data } = useQuery(GET_BLACKHOLE_INFO);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const name = e.target.name as keyof typeof calculatorProps;
    setCalculatorProps((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === 'currentLevel') {
      const calculatedSubjectList = calculateSubjectList({
        subjectList: subjectList,
        currentLevel: value,
      });
      setSubjectList(calculatedSubjectList);
    }
  };
  useEffect(() => {
    if (!data) {
      return;
    }
    const {
      beginAt,
      blackholedAt,
      userProfile: { level },
    } = data.getPersonalGeneral;

    setCalculatorProps({
      currentLevel: level,
      currentBlackhole:
        blackholedAt != null ? getBlackholeDaysLeft(new Date(blackholedAt)) : 0,
      daysFromStart: -getTimeDiffFromNow(new Date(beginAt), 'day'),
    });
    setSubjectList([
      {
        id: 0,
        name: '',
        exp: 0,
        score: 100,
        blackhole: 0,
        bonus: false,
        startLevel: level,
        finishLevel: level,
      },
    ]);
  }, [setCalculatorProps, setSubjectList, data]);

  if (loading || error || !data) {
    return <></>;
  }

  return (
    <VStack w="100%" spacing="2rem">
      <Seo title="블랙홀 계산기" />
      <VStack w="100%" align="start" spacing="1rem">
        <H1BoldText>블랙홀 계산기</H1BoldText>
        <InputLayout>
          <HStack spacing="1rem">
            <H3BoldText>현재 레벨</H3BoldText>
            <InfoTooltip text="레벨이 8.41을 넘으면, 블랙홀 기간이 늘지 않아요." />
          </HStack>
          <HStack w="3rem">
            <Input
              name="currentLevel"
              type="number"
              min="0"
              max="30"
              value={currentLevel}
              onChange={handleChange}
              style={{ width: '5rem' }}
            />
          </HStack>
        </InputLayout>
        <VStack w="100%" align="start" spacing="0.7rem">
          <InputLayout>
            <HStack spacing="1rem">
              <H3BoldText>본 과정 시작한지</H3BoldText>
              <InfoTooltip text="670일이 넘으면, 블랙홀 기간이 늘지 않아요." />
            </HStack>
            <HStack w="3rem">
              <Input
                name="daysFromStart"
                type="number"
                value={daysFromStart}
                onChange={handleChange}
                style={{ width: '5rem' }}
              />
            </HStack>
          </InputLayout>
          <Text color={theme.colors.mono.gray500}>
            휴학일이 포함된 경우, 휴학 기간을 뺄 수 있어요.
          </Text>
        </VStack>
      </VStack>
      <DashboardTemp
        contents={calculatorPageDashboardContents}
        rows={
          device === 'desktop'
            ? calculatorPageDashboardDesktop
            : calculatorPageDashboardTablet
        }
      />
      <CalculatorInputLayout>
        {device === 'mobile' ? <CalculatorInputMobile /> : <CalculatorInput />}
      </CalculatorInputLayout>
      <Footer />
    </VStack>
  );
};

export default CalculatorLayout;

const InputLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 25rem;
  color: ${({ theme }) => theme.colors.mono.black};
`;

const CalculatorInputLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
`;
