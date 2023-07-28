import { ReactComponent as MdChevronLeft } from '@shared/assets/icon/md-chevron-left.svg';
import { ReactComponent as MdChevronRight } from '@shared/assets/icon/md-chevron-right.svg';
import { ReactComponent as MdFirstPage } from '@shared/assets/icon/md-first-page.svg';
import { ReactComponent as MdLastPage } from '@shared/assets/icon/md-last-page.svg';
import { ARIA_LABEL_BUTTON } from '@shared/constants/accessibility/ARIA_LABEL';
import { Clickable, HStack } from '@shared/ui-kit';
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
        <Clickable
          onClick={handleClickStartButton}
          aria-label={ARIA_LABEL_BUTTON.PAGINATION.FIRST_PAGE}
        >
          <MdFirstPage width={16} height={16} />
        </Clickable>
      )}
      {isBackButtonDisabled ? null : (
        <Clickable
          onClick={handleClickBackButton}
          aria-label={ARIA_LABEL_BUTTON.PAGINATION.PREVIOUS_PAGE_GROUP}
        >
          <MdChevronLeft width={16} height={16} />
        </Clickable>
      )}
      <HStack spacing="0.6rem">
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
        <Clickable
          onClick={handleClickForwardButton}
          aria-label={ARIA_LABEL_BUTTON.PAGINATION.NEXT_PAGE_GROUP}
        >
          <MdChevronRight width={16} height={16} />
        </Clickable>
      )}
      {isEndButtonDisabled ? null : (
        <Clickable
          onClick={handleClickEndButton}
          aria-label={ARIA_LABEL_BUTTON.PAGINATION.LAST_PAGE}
        >
          <MdLastPage width={16} height={16} />
        </Clickable>
      )}
    </HStack>
  );
};
