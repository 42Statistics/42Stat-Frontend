import ft_logo from '@assets/42-logo.svg';
import google_logo from '@assets/google-logo.svg';
import {
  Divider,
  H2BoldText,
  HStack,
  Image,
  MediumText,
  Spacer,
  Switch,
  Text,
  VStack,
} from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { BsArrowLeftRight } from '@react-icons/all-files/bs/BsArrowLeftRight';
import { Mobile, TabletAndAbove } from '@utils/responsive/Device';
import { mq } from '@utils/responsive/mq';
import { useState } from 'react';

export const GoogleLinkSection = () => {
  const theme = useTheme();
  const [isLinked, setIsLinked] = useState<boolean>(true);

  const toggleIsLinked = () => {
    setIsLinked((isLinked) => !isLinked);
  };

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
          <Switch checked={isLinked} onChange={toggleIsLinked} />
        </GoogleLinkTitle>
        <Divider />
        <TabletAndAbove>
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
          </HStack>
        </TabletAndAbove>
        <Mobile>
          <VStack align="start" spacing="3rem">
            <HStack spacing="2rem">
              <Image src={ft_logo} style={{ width: '24px' }} />
              <MediumText>yopark</MediumText>
            </HStack>
            <HStack spacing="2rem">
              <Image src={google_logo} style={{ width: '24px' }} />
              <MediumText>yopark.dev@gmail.com</MediumText>
            </HStack>
            <Text color={theme.colors.mono.gray300}>
              2023. 07. 06. 01:49 연동됨
            </Text>
          </VStack>
        </Mobile>
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
