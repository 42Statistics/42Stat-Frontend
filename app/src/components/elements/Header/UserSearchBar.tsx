import { SearchIconSvg } from '@/assets/icons';
import styled from '@emotion/styled';
import { ChangeEvent, useCallback, useState } from 'react';
import { debounce } from 'lodash';

export const UserSearchBar = () => {
  const [text, setText] = useState<string>('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
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
    <UserSearchBarLayout>
      <UserInputContainer>
        <SearchIconSvg />
        <UserInput
          onChange={onChange}
          value={text}
          placeholder="유저명을 입력해주세요"
        />
      </UserInputContainer>
    </UserSearchBarLayout>
  );
};

const UserSearchBarLayout = styled.div`
  width: 100%;
`;

const UserInputContainer = styled.div`
  display: flex;
  gap: 20px;
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
