import { useDisclosure } from '@/hooks/useDisclosure';
import {
  Divider,
  H2BoldText,
  HStack,
  Spacer,
  VStack,
} from '@components/common';
import { CustomSection } from '@styles/custom/CustomSection';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';
import { DeleteAccountButton } from './DeleteAccountButton';
import { DeleteAccountDialog } from './DeleteAccountDialog';
import { LogoutButton } from './LogoutButton';

export const AccountSection = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <CustomSection>
      <TabletAndAbove>
        <HStack>
          <H2BoldText>계정 관리</H2BoldText>
          <Spacer />
          <HStack spacing="2rem">
            <LogoutButton />
            <DeleteAccountButton
              onClick={onOpen}
              dialog={<DeleteAccountDialog isOpen={isOpen} onClose={onClose} />}
            />
          </HStack>
        </HStack>
      </TabletAndAbove>
      <Mobile>
        <VStack align="start" spacing="4rem">
          <H2BoldText>계정 관리</H2BoldText>
          <Divider />
          <HStack spacing="2rem">
            <LogoutButton />
            <DeleteAccountButton
              onClick={onOpen}
              dialog={<DeleteAccountDialog isOpen={isOpen} onClose={onClose} />}
            />
          </HStack>
        </VStack>
      </Mobile>
    </CustomSection>
  );
};
