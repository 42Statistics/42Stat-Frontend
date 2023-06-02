import { gql } from '@/__generated__';
import { useLazyQuery } from '@apollo/client';
import { isDefined } from '@utils/isDefined';
import { useDebounce } from '@utils/useDebounce';
import { useRef, useState } from 'react';

export const FIND_USER_PREVIEW = gql(/* GraphQL */ `
  query FindUserPreview($login: String!) {
    findUserPreview(login: $login) {
      id
      login
      imgUrl
    }
  }
`);

export const FIND_PROJECT_PREVIEW = gql(/* GraphQL */ `
  query FindProjectPreview($name: String!) {
    findProjectPreview(name: $name) {
      id
      name
      url
    }
  }
`);

export const useSearchBar = () => {
  const [input, setInput] = useState<string>('');
  const debouncedInput = useDebounce(input, 100);
  const inputRef = useRef<HTMLInputElement>(null);

  const [
    searchUser,
    { loading: userLoading, error: userError, data: userData },
  ] = useLazyQuery(FIND_USER_PREVIEW);
  const [
    searchProject,
    { loading: projectLoading, error: projectError, data: projectData },
  ] = useLazyQuery(FIND_PROJECT_PREVIEW);

  const users = userData ? userData.findUserPreview.filter(isDefined) : [];
  const projects = projectData
    ? projectData.findProjectPreview.filter(isDefined)
    : [];

  const resetInput = () => {
    if (inputRef?.current) {
      inputRef.current.value = '';
    }
    setInput('');
  };

  return {
    input,
    setInput,
    debouncedInput,
    inputRef,
    searchUser,
    searchProject,
    users,
    userLoading,
    userError,
    projects,
    projectLoading,
    projectError,
    resetInput,
  };
};
