import { Clickable, HStack } from '@components/common';
import { AiOutlineLeft } from '@react-icons/all-files/ai/AiOutlineLeft';
import { AiOutlineRight } from '@react-icons/all-files/ai/AiOutlineRight';
import { AiOutlineVerticalLeft } from '@react-icons/all-files/ai/AiOutlineVerticalLeft';
import { AiOutlineVerticalRight } from '@react-icons/all-files/ai/AiOutlineVerticalRight';
import { PageButton } from './PageButton';

type PaginationProps = {
  currPageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  totalPageNumber: number;
  pagePerRow?: number;
};

export const Pagination = ({
  currPageNumber,
  setPageNumber,
  totalPageNumber,
  pagePerRow = 5,
}: PaginationProps) => {
  const start = Math.floor((currPageNumber - 1) / pagePerRow) * pagePerRow + 1;
  const end = Math.min(start + pagePerRow - 1, totalPageNumber);
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
    setPageNumber(start - pagePerRow);
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
    <HStack spacing="3rem">
      {isStartButtonDisabled ? null : (
        <Clickable onClick={handleClickStartButton}>
          <AiOutlineVerticalRight size={20} />
        </Clickable>
      )}
      {isBackButtonDisabled ? null : (
        <Clickable onClick={handleClickBackButton}>
          <AiOutlineLeft size={20} />
        </Clickable>
      )}
      {pageNumberList.map((pageNumber) => (
        <PageButton
          key={pageNumber}
          currPageNumber={currPageNumber}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      ))}
      {isForwardButtonDisabled ? null : (
        <Clickable onClick={handleClickForwardButton}>
          <AiOutlineRight size={20} />
        </Clickable>
      )}
      {isEndButtonDisabled ? null : (
        <Clickable onClick={handleClickEndButton}>
          <AiOutlineVerticalLeft size={20} />
        </Clickable>
      )}
    </HStack>
  );
};
