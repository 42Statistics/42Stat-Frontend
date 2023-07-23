import { ReactComponent as MdChevronLeft } from '@assets/icon/md-chevron-left.svg';
import { ReactComponent as MdChevronRight } from '@assets/icon/md-chevron-right.svg';
import { ReactComponent as MdFirstPage } from '@assets/icon/md-first-page.svg';
import { ReactComponent as MdLastPage } from '@assets/icon/md-last-page.svg';
import { Clickable, HStack } from '@components/common';
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
    <HStack spacing="1rem">
      {isStartButtonDisabled ? null : (
        <Clickable onClick={handleClickStartButton}>
          <MdFirstPage width={20} height={20} />
        </Clickable>
      )}
      {isBackButtonDisabled ? null : (
        <Clickable onClick={handleClickBackButton}>
          <MdChevronLeft width={20} height={20} />
        </Clickable>
      )}
      <HStack spacing="2rem">
        {pageNumberList.map((pageNumber) => (
          <PageButton
            key={pageNumber}
            currPageNumber={currPageNumber}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        ))}
      </HStack>
      {isForwardButtonDisabled ? null : (
        <Clickable onClick={handleClickForwardButton}>
          <MdChevronRight width={20} height={20} />
        </Clickable>
      )}
      {isEndButtonDisabled ? null : (
        <Clickable onClick={handleClickEndButton}>
          <MdLastPage width={20} height={20} />
        </Clickable>
      )}
    </HStack>
  );
};
