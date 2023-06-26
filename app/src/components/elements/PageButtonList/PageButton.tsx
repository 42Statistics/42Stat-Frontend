import { Center, Clickable, Text } from '@components/common';
import { useTheme } from '@emotion/react';

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
      <Center w="1.4rem">
        <Text
          color={
            pageNumber !== currPageNumber
              ? theme.colors.mono.gray300
              : theme.colors.mono.black
          }
          fontWeight={pageNumber === currPageNumber ? 700 : 400}
        >
          {pageNumber}
        </Text>
      </Center>
    </Clickable>
  );
};
