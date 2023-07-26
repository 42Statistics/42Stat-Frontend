import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { HStack, Writable } from '@shared/ui-kit';

type SpotlightSearchBarProps = {
  left: React.ReactElement;
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SpotlightSearchBar = ({
  left,
  input,
  onChange,
}: SpotlightSearchBarProps) => {
  const theme = useTheme();

  return (
    <Layout>
      <HStack w="100%" h="100%" spacing="2rem">
        {left}
        <Writable
          value={input}
          onChange={onChange}
          placeholder="유저명 또는 프로젝트명 입력"
          style={{ fontSize: theme.fonts.size.h2 }}
          autoFocus
        />
      </HStack>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 1rem 3rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  outline-offset: -5px;

  &:focus-within {
    outline: ${({ theme }) => `2px solid ${theme.colors.primary.default}`};
  }
`;
