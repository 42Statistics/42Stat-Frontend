import {
  Divider,
  H2BoldText,
  HStack,
  Spacer,
  VStack,
} from '@components/common';
import { NeumorphismSection } from '@styles/custom/NeumorphismSection';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';
import { DeleteAccountButton } from './DeleteAccountButton';
import { LogoutButton } from './LogoutButton';

export const AccountSection = () => {
  return (
    <NeumorphismSection>
      <TabletAndAbove>
        <HStack>
          <H2BoldText>계정 관리</H2BoldText>
          <Spacer />
          <HStack spacing="2rem">
            <LogoutButton />
            <DeleteAccountButton />
          </HStack>
        </HStack>
      </TabletAndAbove>
      <Mobile>
        <VStack align="start" spacing="4rem">
          <H2BoldText>계정 관리</H2BoldText>
          <Divider />
          <HStack spacing="2rem">
            <LogoutButton />
            <DeleteAccountButton />
          </HStack>
        </VStack>
      </Mobile>
    </NeumorphismSection>
  );
};
