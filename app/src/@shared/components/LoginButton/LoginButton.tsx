import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

import { Center, Clickable, HStack, MediumText } from '@shared/ui-kit';

type LoginButtonProps = {
  logo: React.ReactNode;
  text: string;
  ariaLabel?: string;
  onClick: () => void;
  disabled?: boolean;
};

// TODO: disabled 상태일 때 디자인
export const LoginButton = ({
  logo,
  text,
  ariaLabel = '',
  onClick,
  disabled = false,
}: LoginButtonProps) => {
  const theme = useTheme();

  return (
    <Clickable onClick={onClick} disabled={disabled} aria-label={ariaLabel}>
      <Layout>
        <Center w="40px">{logo}</Center>
        <HStack w="100%">
          <MediumText color={rgba(theme.colors.mono.absolute.black, 0.75)}>
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
  background-color: ${({ theme }) => theme.colors.mono.absolute.white};
  padding: 8px 20px 8px 8px;
  border-radius: ${({ theme }) => theme.radius.xs};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) =>
      rgba(theme.colors.mono.absolute.white, 0.9)};
  }
`;
