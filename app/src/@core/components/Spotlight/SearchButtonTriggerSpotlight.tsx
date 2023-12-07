import { useTheme } from '@emotion/react';
import { useSetAtom } from 'jotai';

import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';

import { ReactComponent as MdSearch } from '@shared/assets/icon/md-search.svg';
import { ARIA_LABEL } from '@shared/constants/accessibility';
import { Clickable } from '@shared/ui-kit';

export const SearchButtonTriggerSpotlight = () => {
  const theme = useTheme();
  const setIsSpotlightOpen = useSetAtom(isSpotlightOpenAtom);

  return (
    <Clickable
      onClick={() => setIsSpotlightOpen(true)}
      aria-label={ARIA_LABEL.BUTTON.SEARCH_USER_OR_PROJECT_USING_SPOTLIGHT}
    >
      <MdSearch width={20} height={20} fill={theme.colors.mono.black} />
    </Clickable>
  );
};
