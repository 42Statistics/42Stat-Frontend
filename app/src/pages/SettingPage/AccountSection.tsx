import {
  Divider,
  H2BoldText,
  HStack,
  Spacer,
  VStack,
} from '@components/common';
import styled from '@emotion/styled';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';
import { DeleteAccountButton } from './DeleteAccountButton';
import { LogoutButton } from './LogoutButton';

export const AccountSection = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  padding: 3rem;
  border-radius: ${({ theme }) => theme.radius.md};
  box-shadow: 10px 10px 10px #e8e8e8, -10px -10px 10px #ffffff;

  transition: all 0.3s;
  &:hover {
    transform: scale(100.5%);
    box-shadow: 10px 10px 10px #d2d2d2, -10px -10px 10px #ffffff;
  }
`;
