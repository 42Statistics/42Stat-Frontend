import { Input } from '@components/common';
import { RiSearchLine } from '@react-icons/all-files/ri/RiSearchLine';

type TabletAndAboveSearchInputProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  setInput: (input: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

export const TabletAndAboveSearchInput = ({
  inputRef,
  setInput,
  onKeyDown,
}: TabletAndAboveSearchInputProps) => {
  return (
    <Input
      ref={inputRef}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={onKeyDown}
      placeholder="Search"
      left={<RiSearchLine id="search-icon" size="24px" />}
    />
  );
};
