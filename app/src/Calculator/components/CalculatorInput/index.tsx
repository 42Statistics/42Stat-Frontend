import { useTheme } from '@emotion/react';

import { Divider, VStack } from '@shared/ui-kit';

import { CalculatorInputContent } from '@/Calculator/components/CalculatorInput/CalculatorInputContent';
import { CalculatorInputHeader } from '@/Calculator/components/CalculatorInput/CalculatorInputHeader';

export const CalculatorInput = () => {
  const theme = useTheme();

  return (
    <VStack w="100%" spacing="1rem">
      <CalculatorInputHeader />
      <Divider color={theme.colors.mono.black} />
      <CalculatorInputContent />
    </VStack>
  );
};
