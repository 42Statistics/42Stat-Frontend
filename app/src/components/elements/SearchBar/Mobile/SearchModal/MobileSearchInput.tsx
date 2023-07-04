import { Writable } from '@components/common';

type MobileSearchInputProps = {
  inputRef: React.RefObject<HTMLInputElement>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const MobileSearchInput = ({
  inputRef,
  onChange,
}: MobileSearchInputProps) => {
  return (
    <Writable
      ref={inputRef}
      onChange={onChange}
      placeholder="유저명 또는 프로젝트명 검색"
      style={{
        fontSize: '1.6rem', // 웹 접근성을 위해 Safari에서는 input font-size가 16px 미만이면 줌이 되어버림.
      }}
    />
  );
};
