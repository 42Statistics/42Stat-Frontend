import { useContext } from 'react';

import { useTheme } from '@emotion/react';

import { DashboardContent } from '@shared/components/DashboardContent';
import { ROUTES } from '@shared/constants/routes';
import { Center } from '@shared/ui-kit';
import { CustomLink } from '@shared/ui-kit-styled/CustomLink';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';

export const EvalLogSearchLink = () => {
  const theme = useTheme();
  const { login } = useContext(UserProfileContext);

  const title = '이 유저의 이전 평가가 궁금하다면?';

  return (
    <DashboardContent title={title}>
      <Center>
        <CustomLink
          to={`${ROUTES.EVALLOG}?corrector=${login}`}
          fontSize={theme.fonts.size.body1}
        >
          바로가기
        </CustomLink>
      </Center>
    </DashboardContent>
  );
};
