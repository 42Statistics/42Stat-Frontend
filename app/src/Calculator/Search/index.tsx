import { gql } from '@shared/__generated__';
import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { useDebounce } from 'usehooks-ts';
import { useRoveFocus } from '@shared/hooks/useRoveFocus';
import { isProjectSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';

export const GET_PROJECTS = gql(/* GraphQL */ `
  query GetProjects($input: String!, $limit: Int!) {
    getSpotlight(input: $input, limit: $limit) {
      projectPreviews {
        ...projectPreviewFields
      }
    }
  }
`);

export const Search = ({ index }) => {
  const [input, setInput] = useState<string>('');
  const debouncedInput = useDebounce(input, 250);
  const [search, searchResult] = useLazyQuery(GET_PROJECTS);
  const size = searchResult.data?.getSpotlight.projectPreviews.length ?? 0;
  const { currentFocus, setCurrentFocus } = useRoveFocus(size);
  const LIMIT = 4;
};
