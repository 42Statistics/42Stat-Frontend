import { useTheme } from '@emotion/react';
import { Dashboard } from '@shared/components/Dashboard';
import { calculatorPageDashboardContents } from '@/Calculator/dashboard-frames/calculatorPageDashboardContents';
import { calculatorPageDashboardRows } from '@/Calculator/dashboard-frames/calculatorPageDashboardRows';
import CalculatorInput from '@/Calculator/CalculatorInput';
import { Seo } from '@shared/components/Seo';
import { Text, H3BoldText, VStack } from '@shared/ui-kit';
import { Footer } from '@core/components/Footer';
import styled from '@emotion/styled';

const CalculatorLayout = () => {
	const theme = useTheme();

	return (
		<VStack w="100%" spacing="2rem">
			<Seo title="블랙홀 계산기" />
			<VStack w="100%" align="start" spacing="2rem">
      	<Text fontSize="4rem" fontWeight={600}>블랙홀 계산기</Text>
				<H3BoldText>현재 레벨 </H3BoldText>
				<VStack w="100%" align="start" spacing="0.7rem">
					<H3BoldText>본 과정 시작한지 </H3BoldText>
					<Text color={theme.colors.mono.gray500}>휴학일이 포함된 경우, 휴학 기간을 뺄 수 있어요</Text>
				</VStack>
			</VStack>
			<Dashboard
              contents={calculatorPageDashboardContents}
              rows={calculatorPageDashboardRows}
            />
			<InputLayout>	
				<CalculatorInput />
			</InputLayout>
			<Footer />
	</VStack>
	);
}

export default CalculatorLayout;

const InputLayout = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 1rem 0;
`;
