import { useTheme } from '@emotion/react';
import { Dashboard } from '@shared/components/Dashboard';
import { calculatorPageDashboardContents } from '@/Calculator/dashboard-frames/calculatorPageDashboardContents';
import { calculatorPageDashboardRows } from '@/Calculator/dashboard-frames/calculatorPageDashboardRows';
import { Seo } from '@shared/components/Seo';
import { Text, H2BoldText, VStack } from '@shared/ui-kit';
import { Footer } from '@core/components/Footer';
import { useLocation } from 'react-router-dom';

const CalculatorLayout = () => {
	const { pathname } = useLocation();
	const theme = useTheme();

	return (
		<VStack w="100%" spacing="2rem">
			<Seo title="블랙홀 계산기" />
			<VStack w="100%" align="start" spacing="2rem">
      	<Text fontSize="4rem" fontWeight={600}>블랙홀 계산기</Text>
				<H2BoldText>현재 레벨</H2BoldText>
				<VStack w="100%" align="start" spacing="0.7rem">
					<H2BoldText>본 과정 시작한지</H2BoldText>
					<Text color={theme.colors.mono.gray500}>휴학일이 포함된 경우, 휴학 기간을 뺄 수 있어요</Text>
				</VStack>
			</VStack>
			<Dashboard
              contents={calculatorPageDashboardContents}
              rows={calculatorPageDashboardRows}
            />
					
			<Footer />
	</VStack>
	);
}

export default CalculatorLayout;