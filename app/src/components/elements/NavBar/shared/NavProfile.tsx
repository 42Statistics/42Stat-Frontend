import {
  Avatar,
  CaptionText,
  HStack,
  MediumText,
  Spacer,
  VStack,
} from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';
import { titleCase } from '@utils/titleCase';

type NavProfileProps = {
  imgUrl: string;
  name: string;
  login: string;
};

export const NavProfile = ({ imgUrl, name, login }: NavProfileProps) => {
  const theme = useTheme();

  return (
    <Layout>
      <HStack w="100%" spacing="1rem">
        <Avatar src={imgUrl} />
        <VStack align="start" spacing="0.3rem">
          <MediumText>{login}</MediumText>
          <CaptionText color={theme.colors.mono.gray300}>
            {titleCase(name)}
          </CaptionText>
        </VStack>
        <Spacer />
        <IoIosArrowForward />
      </HStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  padding: 1.2rem 1rem;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: box-shadow 0.4s;

  &:hover {
    box-shadow: 7px 7px 7px #e9e9e9, -7px -7px 7px #ffffff;
  }
`;
