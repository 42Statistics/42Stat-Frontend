import { unlinkGoogle } from '@/services/link';
import ft_logo from '@assets/42-logo.svg';
import google_logo from '@assets/google-logo.svg';
import {
  Clickable,
  Divider,
  H2BoldText,
  HStack,
  Image,
  MediumText,
  Spacer,
  Text,
  VStack,
} from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { BsArrowLeftRight } from '@react-icons/all-files/bs/BsArrowLeftRight';
import { IoTrashOutline } from '@react-icons/all-files/io5/IoTrashOutline';
import { Desktop, TabletAndBelow } from '@utils/responsive/Device';
import { mq } from '@utils/responsive/mq';

export const GoogleLinkSection = () => {
  const theme = useTheme();
  const isLinkedGoogle = localStorage.getItem('isGoogleLinked') === 'true';

  return (
    <Layout>
      <VStack align="start" spacing="4rem">
        <GoogleLinkTitle>
          <VStack align="start" spacing="0.5rem">
            <H2BoldText>구글 계정 연동</H2BoldText>
            <Text color={theme.colors.mono.gray300}>
              1회 연동하면 42 인증 대신 구글 로그인을 사용할 수 있습니다.
            </Text>
          </VStack>
          <Spacer />
        </GoogleLinkTitle>
        <Divider />
        <Desktop>
          <HStack w="100%" justify="center" spacing="3rem">
            <HStack spacing="2rem">
              <Image src={ft_logo} style={{ width: '24px' }} />
              <MediumText>yopark</MediumText>
            </HStack>
            <BsArrowLeftRight />
            <HStack spacing="2rem">
              <Image src={google_logo} style={{ width: '24px' }} />
              <MediumText>yopark.dev@gmail.com</MediumText>
            </HStack>
            <Text color={theme.colors.mono.gray300}>
              2023. 07. 06. 01:49 연동됨
            </Text>
            <Clickable onClick={unlinkGoogle}>
              <IoTrashOutline size="20px" />
            </Clickable>
          </HStack>
        </Desktop>
        <TabletAndBelow>
          <VStack align="start" spacing="3rem">
            <HStack spacing="2rem">
              <Image src={ft_logo} style={{ width: '24px' }} />
              <MediumText>yopark</MediumText>
            </HStack>
            <HStack spacing="2rem">
              <HStack spacing="2rem">
                <Image src={google_logo} style={{ width: '24px' }} />
                <MediumText>yopark.dev@gmail.com</MediumText>
              </HStack>
              <Clickable onClick={unlinkGoogle}>
                <IoTrashOutline size="20px" />
              </Clickable>
            </HStack>
            <Text color={theme.colors.mono.gray300}>
              2023. 07. 06. 01:49 연동됨
            </Text>
          </VStack>
        </TabletAndBelow>
      </VStack>
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

const GoogleLinkTitle = styled.div`
  width: 100%;
  display: flex;
  ${mq({
    flexDirection: ['column', 'row'],
    gap: ['1rem', 0],
  })}
`;
