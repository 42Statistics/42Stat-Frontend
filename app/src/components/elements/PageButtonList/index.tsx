import { Clickable, HStack, Text } from '@components/common';
import { useTheme } from '@emotion/react';
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';
import { PageButton } from './PageButton';

type PageButtonListProps = {
  currPageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  totalPageNumber: number;
};

export const PageButtonList = ({
  currPageNumber,
  setPageNumber,
  totalPageNumber,
}: PageButtonListProps) => {
  const theme = useTheme();
  const start = Math.floor((currPageNumber - 1) / 10) * 10 + 1;
  const end = Math.min(start + 9, totalPageNumber);
  const pageNumberList = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i,
  );

  const isBackButtonDisabled = start === 1;
  const isForwardButtonDisabled = pageNumberList.includes(totalPageNumber);
  const isStartButtonDisabled = currPageNumber === 1;
  const isEndButtonDisabled = currPageNumber === totalPageNumber;

  const handleClickBackButton = () => {
    if (currPageNumber === 1) {
      return;
    }
    setPageNumber(start - 10);
  };

  const handleClickForwardButton = () => {
    setPageNumber(end + 1);
  };

  const handleClickStartButton = () => {
    setPageNumber(1);
  };

  const handleClickEndButton = () => {
    setPageNumber(totalPageNumber);
  };

  return (
    <HStack h="8rem" spacing="4rem">
      <Clickable
        onClick={handleClickStartButton}
        disabled={isStartButtonDisabled}
      >
        <Text
          color={
            isStartButtonDisabled
              ? theme.colors.mono.gray300
              : theme.colors.mono.black
          }
        >
          처음으로
        </Text>
      </Clickable>
      <HStack spacing="1.4rem">
        <Clickable
          onClick={handleClickBackButton}
          disabled={isBackButtonDisabled}
        >
          <IoIosArrowBack
            fill={
              isBackButtonDisabled
                ? theme.colors.mono.gray300
                : theme.colors.mono.black
            }
          />
        </Clickable>
        {pageNumberList.map((pageNumber) => (
          <PageButton
            key={pageNumber}
            currPageNumber={currPageNumber}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        ))}
        <Clickable
          onClick={handleClickForwardButton}
          disabled={isForwardButtonDisabled}
        >
          <IoIosArrowForward
            fill={
              isForwardButtonDisabled
                ? theme.colors.mono.gray300
                : theme.colors.mono.black
            }
          />
        </Clickable>
      </HStack>
      <Clickable onClick={handleClickEndButton} disabled={isEndButtonDisabled}>
        <Text
          color={
            isEndButtonDisabled
              ? theme.colors.mono.gray300
              : theme.colors.mono.black
          }
        >
          끝으로
        </Text>
      </Clickable>
    </HStack>
  );
};
