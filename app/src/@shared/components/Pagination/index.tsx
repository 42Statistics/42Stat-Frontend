import { useTheme } from '@emotion/react';

import { ReactComponent as MdChevronLeft } from '@shared/assets/icon/md-chevron-left.svg';
import { ReactComponent as MdChevronRight } from '@shared/assets/icon/md-chevron-right.svg';
import { ReactComponent as MdFirstPage } from '@shared/assets/icon/md-first-page.svg';
import { ReactComponent as MdLastPage } from '@shared/assets/icon/md-last-page.svg';
import { PageButton } from '@shared/components/Pagination/PageButton';
import { ARIA_LABEL } from '@shared/constants/accessibility';
import { Clickable, HStack } from '@shared/ui-kit';

export type PaginationProps = {
  currPageNumber: number;
  onPageNumberChange: (pageNumber: number) => void;
  totalPageNumber: number;
  pagePerRow?: number;
};

export const Pagination = ({
  currPageNumber,
  onPageNumberChange,
  totalPageNumber,
  pagePerRow = 5,
}: PaginationProps) => {
  const theme = useTheme();

  const start = Math.floor((currPageNumber - 1) / pagePerRow) * pagePerRow + 1;
  const end = Math.min(start + pagePerRow - 1, totalPageNumber);
  const pageNumberList = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i,
  );

  const isStartButtonDisabled = currPageNumber === 1;
  const isBackButtonDisabled = start === 1;
  const isForwardButtonDisabled = pageNumberList.includes(totalPageNumber);
  const isEndButtonDisabled = currPageNumber === totalPageNumber;

  const handleClickBackButton = () => {
    if (currPageNumber === 1) {
      return;
    }
    onPageNumberChange(start - pagePerRow);
  };

  const handleClickForwardButton = () => {
    onPageNumberChange(end + 1);
  };

  const handleClickStartButton = () => {
    onPageNumberChange(1);
  };

  const handleClickEndButton = () => {
    onPageNumberChange(totalPageNumber);
  };

  if (totalPageNumber === 0) {
    return null;
  }

  return (
    <HStack spacing="1rem">
      {isStartButtonDisabled ? null : (
        <Clickable
          onClick={handleClickStartButton}
          aria-label={ARIA_LABEL.BUTTON.PAGINATION.FIRST_PAGE}
        >
          <MdFirstPage width={16} height={16} fill={theme.colors.mono.black} />
        </Clickable>
      )}
      {isBackButtonDisabled ? null : (
        <Clickable
          onClick={handleClickBackButton}
          aria-label={ARIA_LABEL.BUTTON.PAGINATION.PREVIOUS_PAGE_GROUP}
        >
          <MdChevronLeft
            width={16}
            height={16}
            fill={theme.colors.mono.black}
          />
        </Clickable>
      )}
      <HStack spacing="0.6rem">
        {pageNumberList.map((pageNumber) => (
          <PageButton
            key={pageNumber}
            currPageNumber={currPageNumber}
            pageNumber={pageNumber}
            onPageNumberChange={onPageNumberChange}
          />
        ))}
      </HStack>
      {isForwardButtonDisabled ? null : (
        <Clickable
          onClick={handleClickForwardButton}
          aria-label={ARIA_LABEL.BUTTON.PAGINATION.NEXT_PAGE_GROUP}
        >
          <MdChevronRight
            width={16}
            height={16}
            fill={theme.colors.mono.black}
          />
        </Clickable>
      )}
      {isEndButtonDisabled ? null : (
        <Clickable
          onClick={handleClickEndButton}
          aria-label={ARIA_LABEL.BUTTON.PAGINATION.LAST_PAGE}
        >
          <MdLastPage width={16} height={16} fill={theme.colors.mono.black} />
        </Clickable>
      )}
    </HStack>
  );
};
