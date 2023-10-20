import { useAtom } from 'jotai';

import {
  themePreferenceAtom,
  type ThemePreference,
} from '@shared/atoms/themePreferenceAtom';
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

export const ThemeSection = () => {
  const [themePreference, setThemePreference] = useAtom(themePreferenceAtom);

  const options: {
    label: string;
    value: ThemePreference;
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
    (option) => option.value === themePreference,
  );
  const handleSegmentedControlIndexChange = (index: number) => {
    setThemePreference(options[index].value);
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
          <SegmentedControl
            index={segmentedControlIndex}
            onIndexChange={handleSegmentedControlIndexChange}
            {...useSegmentedControl(options)}
          />
        </VStack>
      </Mobile>
    </CustomSection>
  );
};
