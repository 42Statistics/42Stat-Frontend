import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { DashboardContent } from '@shared/components/DashboardContent';
import { ROUTES } from '@shared/constants/(tmp)routes';
import { Center } from '@shared/ui-kit';
import { CustomLink } from '@shared/ui-kit-styled/CustomLink';
import { useContext } from 'react';

export const EvalLogSearchLink = () => {
  const { login } = useContext(UserProfileContext);

  const title = '이 유저의 이전 평가가 궁금하다면?';

  return (
    <DashboardContent title={title}>
      <Center>
        <CustomLink to={`${ROUTES.EVALLOG}?corrector=${login}`}>
          바로가기
        </CustomLink>
      </Center>
    </DashboardContent>
  );
};
