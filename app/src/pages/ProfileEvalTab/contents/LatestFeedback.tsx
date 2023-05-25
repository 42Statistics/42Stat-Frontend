import { H3MediumText, Scroll, Text, VStack } from '@/components/common';
import styled from '@emotion/styled';

export const LatestFeedback = () => {
  const title = '최근 받은 피드백';
  const test =
    '현재 웹개발을 하고계시고 실제로 도커를 정말 많이 사용하고 있으셨고, 도커를 많이 사용하는 분의 의견을 들을 수 있어서 기분이 좋았습니다. 또한, ft_server와 과제내용이 유사해서 이미 많이 알고계셨습니다. 평가지에 있는 내용 모두 보여드렸습니다. conf파일들을 관심있게 보셨고, 서버 효율을 높이기 위해서 ssl_session_timeout, keepalive_timeout등의 옵션 이용해서 ssl인증을 일정시간 유지하고, 이미 연결돼있는 tcp를 재사용하고 일정시간 유지시키는 등의 내용을 추가해줬는데 관련 부분을 좋게 봐주셔서 감사합니다. flask서버에 파이썬 언어를 이용해서 페이지에 표시하는 것도 흥미롭게 봐주셨습니다. 막차시간이 가까워져서 평가를 일찍 끝낸게 조금 아쉬웠네요. 고생많으셨습니다!';

  // 내부에서 overflow가 발생하는 경우, div w='100%' h='100%'으로 밖을 감싸면 비정상적으로 작동함
  return (
    <DashboardContentLayout>
      <VStack w="100%" h="100%" spacing="2rem" align="start">
        <VStack w="100%" align="start">
          {title && <H3MediumText>{title}</H3MediumText>}
        </VStack>
        <Scroll>
          <Text selectable>{test}</Text>
        </Scroll>
      </VStack>
    </DashboardContentLayout>
  );
};

const DashboardContentLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;
