import { FEEDBACK_URL } from '@/Setting/constants/feedbackUrl';
import {
  Button,
  Divider,
  H2BoldText,
  HStack,
  Spacer,
  VStack,
} from '@shared/ui-kit';
import { CustomSection } from '@shared/ui-kit-styled';
import { Mobile, TabletAndAbove } from '@shared/utils/react-responsive/Device';
import { Link } from 'react-router-dom';

export const FeedbackSection = () => {
  return (
    <CustomSection>
      <TabletAndAbove>
        <HStack spacing="2rem">
          <H2BoldText>서비스 피드백</H2BoldText>
          <Spacer />
          <Link to={FEEDBACK_URL} target="_blank" rel="noreferrer">
            <Button
              onClick={() => {
                /* pass */
              }}
            >
              문의하기
            </Button>
          </Link>
        </HStack>
      </TabletAndAbove>
      <Mobile>
        <VStack align="start" spacing="4rem">
          <H2BoldText>서비스 피드백</H2BoldText>
          <Divider />
          <Link to={FEEDBACK_URL} target="_blank" rel="noreferrer">
            <Button
              onClick={() => {
                /* pass */
              }}
            >
              문의하기
            </Button>
          </Link>
        </VStack>
      </Mobile>
    </CustomSection>
  );
};
