import { AccentH3MediumText, Center } from '@/components/common';
import { DashboardContent } from '@/components/templates/Dashboard';
import { userAtom } from '@/utils/atoms/userAtom';
import { useAtomValue } from 'jotai';
import { Link, useLocation } from 'react-router-dom';

export const EvalLogSearchLink = () => {
  // const { username } = useParams() as { username: string };
  const { pathname } = useLocation();
  const uid = Number(pathname.split('/')[2]);
  const user = useAtomValue(userAtom);
  //FIXME:id로 로그인 불러오기
  const corrector = user.id === uid ? user.login : 'tmp';
  const title = '이 유저의 이전 평가가 궁금하다면?';

  return (
    <DashboardContent title={title}>
      <Center w="100%" h="100%">
        <Link to={`/evallog?corrector=${corrector}`}>
          <AccentH3MediumText>바로가기</AccentH3MediumText>
        </Link>
      </Center>
    </DashboardContent>
  );
};
