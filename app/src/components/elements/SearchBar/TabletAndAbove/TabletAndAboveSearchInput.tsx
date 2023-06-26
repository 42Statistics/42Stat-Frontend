import { Input } from '@components/common';
import { MdSearch } from '@react-icons/all-files/md/MdSearch';

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
      placeholder="Search..."
      leftElement={<MdSearch id="search-icon" size="24px" />}
    />
  );
};
