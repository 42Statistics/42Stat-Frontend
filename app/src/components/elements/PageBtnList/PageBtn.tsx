import { Center, Clickable, Text } from '@components/common';
import { useTheme } from '@emotion/react';

type PageBtnProps = {
  currPageNumber: number;
  pageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const PageBtn = ({
  currPageNumber,
  pageNumber,
  setPageNumber,
}: PageBtnProps) => {
  const theme = useTheme();

  const handleClick = () => {
    if (pageNumber === currPageNumber) {
      return;
    }
    setPageNumber(pageNumber);
  };
  return (
    <Clickable onClick={handleClick}>
      <Center w="1.2rem">
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
