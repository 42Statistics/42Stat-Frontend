import { Clickable, H3MediumText, HStack, Spacer } from '@components/common';
import styled from '@emotion/styled';
import { SearchDialogFocusContext } from '@utils/contexts/SearchDialogFocusContext';
import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

type SearchDialogResultListItemProps = {
  left: React.ReactElement;
  name: string;
  link: string;
  index: number;
};

export const SearchDialogResultListItem = ({
  left,
  name,
  link,
  index,
}: SearchDialogResultListItemProps) => {
  const navigate = useNavigate();
  const ref = useRef<HTMLButtonElement>(null);
  const { currentFocus, setCurrentFocus } = useContext(
    SearchDialogFocusContext,
  );
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
    <Layout
      onClick={() => navigate(link)}
      forwardRef={ref}
      onFocus={() => setCurrentFocus(index)}
    >
      <HStack w="100%" align="start" spacing="2rem">
        {left}
        <H3MediumText>{name}</H3MediumText>
        <Spacer />
      </HStack>
    </Layout>
  );
};

const Layout = styled(Clickable)`
  width: 100%;
  padding: 0.8rem 2rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.element.hover};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.element.active};
  }

  &:focus {
    outline: none;
    background-color: ${({ theme }) => theme.colors.element.active};
  }
`;
