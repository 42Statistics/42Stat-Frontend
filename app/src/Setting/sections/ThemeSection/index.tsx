import { useSegmentedControl } from '@shared/hooks/useSegmentedControl';
import {
  Divider,
  H2BoldText,
  HStack,
  SegmentedControl,
  Spacer,
  VStack,
} from '@shared/ui-kit';
import { CustomSection } from '@shared/ui-kit-styled';
import { Mobile, TabletAndAbove } from '@shared/utils/react-responsive/Device';
import { useState } from 'react';

type Palette = 'light' | 'dark' | 'system';

export const ThemeSection = () => {
  const [palette, setPalette] = useState<Palette>('light');

  const options: {
    label: string;
    value: Palette;
  }[] = [
    {
      label: '라이트',
      value: 'light',
    },
    {
      label: '다크',
      value: 'dark',
    },
    {
      label: '시스템',
      value: 'system',
    },
  ];
  const segmentedControlIndex = options.findIndex(
    (option) => option.value === palette,
  );
  const handleSegmentedControlIndexChange = (index: number) => {
    setPalette(options[index].value);
  };

  return (
    <CustomSection>
      <TabletAndAbove>
        <HStack spacing="2rem">
          <H2BoldText>테마</H2BoldText>
          <Spacer />
          <SegmentedControl
            index={segmentedControlIndex}
            onIndexChange={handleSegmentedControlIndexChange}
            {...useSegmentedControl(options)}
          />
        </HStack>
      </TabletAndAbove>
      <Mobile>
        <VStack align="start" spacing="4rem">
          <H2BoldText>테마</H2BoldText>
          <Divider />
        </VStack>
      </Mobile>
    </CustomSection>
  );
};
