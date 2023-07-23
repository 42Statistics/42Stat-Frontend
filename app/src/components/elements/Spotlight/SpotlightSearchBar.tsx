import { HStack, Writable } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { SpotlightFocusContext } from '@utils/contexts/SpotlightFocusContext';
import { useContext, useEffect, useRef } from 'react';

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
  const ref = useRef<HTMLInputElement>(null);
  const { currentFocus, setCurrentFocus } = useContext(SpotlightFocusContext);
  const index = 0;
  const isFocused = currentFocus === index;

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (isFocused) {
      ref.current.focus();
    } else {
      ref.current.blur();
    }
  }, [isFocused, ref]);

  return (
    <Layout isFocused={isFocused}>
      <HStack w="100%" h="100%" spacing="2rem">
        {left}
        <Writable
          value={input}
          onChange={onChange}
          placeholder="유저명 또는 프로젝트명 입력"
          style={{ fontSize: theme.fonts.size.h2 }}
          onFocus={() => setCurrentFocus(index)}
          ref={ref}
        />
      </HStack>
    </Layout>
  );
};

type LayoutProps = {
  isFocused: boolean;
};

const Layout = styled.div<LayoutProps>`
  width: 100%;
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 1rem 3rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  border: 2px solid ${({ theme }) => theme.colors.mono.gray50};
  outline-offset: -5px;

  outline: ${({ theme, isFocused }) =>
    isFocused && `2px solid ${theme.colors.primary.default}`};
`;
