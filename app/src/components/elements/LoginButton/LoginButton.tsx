import { Center, Clickable, HStack, MediumText } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

type LoginButtonProps = {
  logo: React.ReactNode;
  text: string;
  onClick: () => void;
};

export const LoginButton = ({ logo, text, onClick }: LoginButtonProps) => {
  const theme = useTheme();

  return (
    <Clickable onClick={onClick}>
      <Layout>
        <Center w="40px">{logo}</Center>
        <HStack w="100%">
          <MediumText color={rgba(theme.colors.mono.black, 0.75)}>
            {text}
          </MediumText>
        </HStack>
      </Layout>
    </Clickable>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 8px 20px 8px 8px;
  border-radius: ${({ theme }) => theme.radius.xs};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => rgba(theme.colors.mono.white, 0.8)};
  }
`;