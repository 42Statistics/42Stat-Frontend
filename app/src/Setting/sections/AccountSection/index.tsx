import { DeleteAccountButton } from '@/Setting/sections/AccountSection/DeleteAccountButton';
import { DeleteAccountDialog } from '@/Setting/sections/AccountSection/DeleteAccountDialog';
import { LogoutButton } from '@/Setting/sections/AccountSection/LogoutButton';
import { useDisclosure } from '@shared/hooks/useDisclosure';
import { Divider, H2BoldText, HStack, Spacer, VStack } from '@shared/ui-kit';
import { CustomSection } from '@shared/ui-kit-styled';
import { Mobile, TabletAndAbove } from '@shared/utils/react-responsive/Device';

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
