import { Clickable, HStack, Spacer, Writable } from '@components/common';
import { MdArrowBack } from '@react-icons/all-files/md/MdArrowBack';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';

type MobileSearchInputProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  setInput: (input: string) => void;
  onClose: () => void;
  onClickSearchBtn: () => void;
};

export const MobileSearchInput = ({
  inputRef,
  setInput,
  onClose,
  onClickSearchBtn,
}: MobileSearchInputProps) => {
  return (
    <HStack w="100%" spacing="2rem">
      <Clickable onClick={onClose}>
        <MdArrowBack size="24px" />
      </Clickable>
      <Writable
        ref={inputRef}
        onChange={(e) => setInput(e.target.value)}
        placeholder="유저명 또는 프로젝트명 검색"
        style={{
          fontSize: '1.6rem', // 웹 접근성을 위해 Safari에서는 input font-size가 16px 미만이면 줌이 되어버림.
        }}
      />
      <Spacer />
      <Clickable onClick={onClickSearchBtn}>
        <MdSearch size="24px" />
      </Clickable>
    </HStack>
  );
};
