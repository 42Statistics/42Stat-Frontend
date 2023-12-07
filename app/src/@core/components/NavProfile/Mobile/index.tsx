import { Link } from 'react-router-dom';

import { useTheme } from '@emotion/react';
import { useAtomValue } from 'jotai';

import { userAtom } from '@shared/atoms/userAtom';
import { ALT, ARIA_LABEL } from '@shared/constants/accessibility';
import { ROUTES } from '@shared/constants/routes';
import { Avatar, Body1MediumText, CaptionText, HStack } from '@shared/ui-kit';
import { titleCase } from '@shared/utils/formatters/titleCase';

type MobileNavProfileProps = {
  imgUrl: string | null | undefined;
  name: string;
  login: string;
};

export const MobileNavProfile = ({
  imgUrl,
  name,
  login,
}: MobileNavProfileProps) => {
  const theme = useTheme();
  const user = useAtomValue(userAtom);

  return (
    <Link
      to={ROUTES.PROFILE_OF(user.login)}
      aria-label={ARIA_LABEL.LINK.PROFILE_OF(user.login)}
    >
      <HStack spacing="2rem" style={{ marginLeft: '1rem', padding: '1rem 0' }}>
        <Avatar
          size="lg"
          src={imgUrl}
          name={login}
          alt={ALT.AVATAR_OF(login)}
        />
        <Body1MediumText>{login}</Body1MediumText>
        <CaptionText color={theme.colors.mono.gray500}>
          {titleCase(name)}
        </CaptionText>
      </HStack>
    </Link>
  );
};
