import { Clickable, H3Text } from '@components/common';

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
  const handleClick = () => {
    if (pageNumber === currPageNumber) {
      return;
    }
    setPageNumber(pageNumber);
  };
  return (
    <Clickable
      onClick={handleClick}
      element={
        <H3Text fontWeight={pageNumber === currPageNumber ? 700 : 400}>
          {pageNumber}
        </H3Text>
      }
    />
  );
};
