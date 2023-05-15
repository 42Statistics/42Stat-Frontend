import { VStack, WhiteH2BoldText, WhiteText } from '@/components/common';
import { userAtom } from '@/utils/atoms/userAtom';
import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

export const Hero = () => {
  const user = useAtomValue(userAtom);

  return (
    <HeroLayout>
      <VStack h="100%" align="start" spacing="1rem">
        <WhiteH2BoldText>반가워요, {user.login} 👋</WhiteH2BoldText>
        <WhiteText>2일 전에 push_swap을 통과하셨네요! 축하드려요 🎉</WhiteText>
      </VStack>
    </HeroLayout>
  );
};

const HeroLayout = styled.div`
  background-image: url('black-space.jpeg'); // FIXME: DashboardItemWrapper 바깥의 배경을 변경해야 함
  height: 100%;
`;
