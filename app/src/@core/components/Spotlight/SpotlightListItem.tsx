import { SpotlightFocusContext } from '@core/contexts/SpotlightFocusContext';
import styled from '@emotion/styled';
import { Body1Text, HStack, Spacer } from '@shared/ui-kit';
import { isEnterKeyDown } from '@shared/utils/keyboard';
import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

type SpotlightListItemProps = {
  left: React.ReactElement;
  name: string;
  link: string;
  index: number;
};

export const SpotlightListItem = ({
  left,
  name,
  link,
  index,
}: SpotlightListItemProps) => {
  const navigate = useNavigate();
  const { currentFocus, setCurrentFocus } = useContext(SpotlightFocusContext);
  const isFocused = currentFocus === index;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isEnterKeyDown(e)) {
        e.preventDefault();
        if (!isFocused) {
          return;
        }
        navigate(link);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentFocus, isFocused, navigate, link]);

  return (
    <Link to={link} style={{ width: '100%' }}>
      <Layout isFocused={isFocused} onMouseOver={() => setCurrentFocus(index)}>
        <HStack w="100%" align="start" spacing="2rem">
          {left}
          <Body1Text>{name}</Body1Text>
          <Spacer />
        </HStack>
      </Layout>
    </Link>
  );
};

type LayoutProps = {
  isFocused: boolean;
};

const Layout = styled.div<LayoutProps>`
  width: 100%;
  padding: 0.8rem 2rem;

  background-color: ${({ theme, isFocused }) =>
    isFocused && theme.colors.element.active};

  &:focus-visible {
    outline: 2px solid blue;
  }
`;
