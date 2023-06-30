import { EvalLog } from '@/__generated__/graphql';
import {
  BoldText,
  HStack,
  PrimaryBoldText,
  Spacer,
  Text,
  VStack,
} from '@components/common';
import { EvalLogLabel, EvalLogLabelType } from '@components/common/Label';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { ROUTES } from '@routes/ROUTES';
import { snakeCaseFormatter } from '@utils/formatters';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';

export const EvalLogItem = ({ element }: { element: EvalLog }) => {
  const theme = useTheme();
  const { header, correctorReview, correctedsReview } = element;

  return (
    <EvalLogItemLayout>
      <VStack w="100%" align="start" spacing="2rem">
        <HStack w="100%" justify="start" wrap="wrap">
          <Link to={`${ROUTES.PROFILE_ROOT}/${header.corrector.login}`}>
            <PrimaryBoldText selectable>
              {header.corrector.login}
            </PrimaryBoldText>
          </Link>
          <Text selectable>님이&nbsp;</Text>
          <PrimaryBoldText selectable>
            {header.teamPreview.name}
          </PrimaryBoldText>
          <Text selectable>
            을&nbsp;
            <strong>{dayjs(header.beginAt).format('YYYY-MM-DD HH:mm')}</strong>
            에 평가하였습니다
          </Text>
          <Spacer />
          <HStack spacing="1rem">
            <BoldText>{header.projectPreview.name}</BoldText>
            <FlagLabel
              name={header.flag.name}
              isPositive={header.flag.isPositive}
            />
          </HStack>
        </HStack>
        <VStack w="100%" align="start" spacing="1rem">
          <HStack w="100%" justify="start">
            <HStack w="10rem">
              <CorrectorReviewLabel number={correctorReview.mark} />
            </HStack>
            <div style={{ width: '100%' }}>
              <Text selectable>{correctorReview.review}</Text>
            </div>
          </HStack>
          <HStack w="100%" justify="start">
            <HStack w="10rem">
              {correctedsReview ? (
                <CorrectedsReviewLabel number={correctedsReview.mark} />
              ) : (
                <CorrectedsReviewLabel isNone />
              )}
            </HStack>
            <div style={{ width: '100%' }}>
              {correctedsReview ? (
                <Text selectable>{correctedsReview.review}</Text>
              ) : (
                <Text color={theme.colors.mono.gray300} selectable>
                  아직 피드백을 작성하지 않았습니다
                </Text>
              )}
            </div>
          </HStack>
        </VStack>
      </VStack>
    </EvalLogItemLayout>
  );
};

const EvalLogItemLayout = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 2.5rem 3.5rem;
  border-radius: ${({ theme }) => theme.radius.md};

  box-shadow: 10px 10px 10px #eeeeee, -10px -10px 10px #ffffff;

  transition: all 0.3s;
  :hover {
    transform: scale(100.5%);
    box-shadow: 10px 10px 10px #dddddd, -10px -10px 10px #ffffff;
  }
`;

const CorrectorReviewLabel = ({ number }: { number: number }) => {
  const computeType = (number: number): EvalLogLabelType => {
    if (number >= 100) return 'positive';
    if (number >= 80) return 'neutral';
    return 'negative';
  };

  const type = computeType(number);

  return <EvalLogLabel type={type}>{`${String(number)}%`}</EvalLogLabel>;
};

const CorrectedsReviewLabel = ({
  number = 0,
  isNone = false,
}: {
  number?: number; // isNone일 때만 undefined 가능
  isNone?: boolean;
}) => {
  const computeType = (number: number, isNone: boolean): EvalLogLabelType => {
    if (isNone) return 'none';
    if (number >= 5) return 'positive';
    if (number >= 3) return 'neutral';
    return 'negative';
  };

  const type = computeType(number, isNone);

  return (
    <EvalLogLabel type={type}>
      {!isNone ? `${String(number)} / 5` : '- / 5'}
    </EvalLogLabel>
  );
};

type FlagLabelProps = {
  name: string;
  isPositive: boolean;
};

const FlagLabel = ({ name, isPositive }: FlagLabelProps) => {
  const theme = useTheme();
  const type: EvalLogLabelType = isPositive ? 'positive' : 'negative';

  return (
    <EvalLogLabel type={type} fontWeight={theme.fonts.weight.bold}>
      {snakeCaseFormatter(name)}
    </EvalLogLabel>
  );
};
