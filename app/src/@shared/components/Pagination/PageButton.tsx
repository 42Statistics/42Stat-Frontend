import { useTheme } from '@emotion/react';
import { Clickable, H3Text } from '@shared/ui-kit';

type PageButtonProps = {
  currPageNumber: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const PageButton = ({
  currPageNumber,
  pageNumber,
  setPageNumber,
}: PageButtonProps) => {
  const theme = useTheme();

  const handleClick = () => {
    if (pageNumber === currPageNumber) {
      return;
    }
    setPageNumber(pageNumber);
  };
  return (
    <Clickable onClick={handleClick}>
      <H3Text
        color={
          pageNumber !== currPageNumber
            ? theme.colors.mono.gray200
            : theme.colors.mono.black
        }
      >
        {pageNumber}
      </H3Text>
    </Clickable>
  );
};
