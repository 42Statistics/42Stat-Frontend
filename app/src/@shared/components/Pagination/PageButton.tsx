import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { ARIA_LABEL } from '@shared/constants/accessibility';
import { Clickable, Text } from '@shared/ui-kit';

type PageButtonProps = {
  currPageNumber: number;
  pageNumber: number;
  onPageNumberChange: (pageNumber: number) => void;
};

export const PageButton = ({
  currPageNumber,
  pageNumber,
  onPageNumberChange,
}: PageButtonProps) => {
  const theme = useTheme();

  const handleClick = () => {
    if (pageNumber === currPageNumber) {
      return;
    }
    onPageNumberChange(pageNumber);
  };

  return (
    <Layout
      isCurrPage={pageNumber === currPageNumber}
      onClick={handleClick}
      aria-label={
        pageNumber !== currPageNumber
          ? ARIA_LABEL.BUTTON.PAGINATION.PAGE_OF(pageNumber)
          : ARIA_LABEL.BUTTON.PAGINATION.CURRENT_PAGE_OF(pageNumber)
      }
    >
      <Text
        color={
          pageNumber !== currPageNumber
            ? theme.colors.mono.black
            : theme.colors.mono.white
        }
      >
        {pageNumber}
      </Text>
    </Layout>
  );
};

type LayoutProps = {
  isCurrPage: boolean;
};

const Layout = styled(Clickable)<LayoutProps>`
  width: 3rem;
  height: 3rem;
  border-radius: ${({ theme }) => theme.radius.circle};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, isCurrPage }) =>
    isCurrPage && theme.colors.primary.default};
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme, isCurrPage }) =>
      !isCurrPage && theme.colors.primary.light};
  }
`;
