import { SearchIconSvg } from '@/assets/icons';
import styled from '@emotion/styled';
import { ChangeEvent, useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { Desktop, Mobile } from '@/styles/responsive';

export const UserSearchBar = () => {
  const [text, setText] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    setText(value);
    debouncedSearchUser(value);
  };

  const debouncedSearchUser = useCallback(
    debounce(async (text: string) => searchUser(text), 100),
    [],
  );

  const searchUser = (text: string) => {
    // TODO: 실제 검색으로 바꾸기
    console.log(text);
  };

  return (
    <>
      <Desktop>
        <DesktopUserSearchBarLayout>
          <SearchIconSvg />
          <UserInput
            onChange={handleChange}
            value={text}
            placeholder="유저명을 입력해주세요"
          />
        </DesktopUserSearchBarLayout>
      </Desktop>
      <Mobile>
        <MobileUserSearchBarLayout>
          <SearchIconSvg />
          <UserInput
            onChange={handleChange}
            value={text}
            placeholder="유저명을 입력해주세요"
          />
        </MobileUserSearchBarLayout>
      </Mobile>
    </>
  );
};

const DesktopUserSearchBarLayout = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

const MobileUserSearchBarLayout = styled.div`
  display: flex;
  gap: 20px;
  padding: 12px 30px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.colors.mono.white};
`;

const UserInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.h3};

  ::placeholder {
    color: ${({ theme }) => theme.colors.mono.gray.default};
  }
`;
