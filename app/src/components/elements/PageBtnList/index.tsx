import { Clickable, HStack, Text } from '@components/common';
import { IoIosArrowBack } from '@react-icons/all-files/io/IoIosArrowBack';
import { IoIosArrowForward } from '@react-icons/all-files/io/IoIosArrowForward';
import { PageBtn } from './PageBtn';

type PageBtnListProps = {
  currPageNumber: number;
  setPageNumber: React.Dispatch<React.SetStateAction<number>>;
  totalPageNumber: number;
};

export const PageBtnList = ({
  currPageNumber,
  setPageNumber,
  totalPageNumber,
}: PageBtnListProps) => {
  const start = Math.floor((currPageNumber - 1) / 10) * 10 + 1;
  const end = Math.min(start + 9, totalPageNumber);
  const pageNumberList = Array.from(
    { length: end - start + 1 },
    (_, i) => start + i,
  );

  const handleClickBackBtn = () => {
    if (currPageNumber === 1) {
      return;
    }
    setPageNumber(start - 10);
  };

  const handleClickForwardBtn = () => {
    setPageNumber(end + 1);
  };

  const handleClickStartBtn = () => {
    setPageNumber(1);
  };

  const handleClickEndBtn = () => {
    setPageNumber(totalPageNumber);
  };

  return (
    <HStack h="8rem" spacing="6rem">
      <Clickable onClick={handleClickStartBtn} disabled={currPageNumber === 1}>
        <Text>처음으로</Text>
      </Clickable>
      <HStack spacing="1.4rem">
        <Clickable onClick={handleClickBackBtn} disabled={start === 1}>
          <IoIosArrowBack />
        </Clickable>
        {pageNumberList.map((pageNumber) => (
          <PageBtn
            key={pageNumber}
            currPageNumber={currPageNumber}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
        ))}
        <Clickable
          onClick={handleClickForwardBtn}
          disabled={pageNumberList.includes(totalPageNumber)}
        >
          <IoIosArrowForward />
        </Clickable>
      </HStack>
      <Clickable
        onClick={handleClickEndBtn}
        disabled={currPageNumber === totalPageNumber}
      >
        <Text>끝으로</Text>
      </Clickable>
    </HStack>
  );
};
