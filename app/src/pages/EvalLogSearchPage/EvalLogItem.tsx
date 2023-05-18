import { EvalLog } from '@/__generated__/graphql';
import {
  BoldText,
  Clickable,
  HStack,
  PrimaryBoldText,
  Spacer,
  Text,
  VStack,
} from '@/components/common';
import { Label } from '@/components/common/Label';
import { snakeCaseFormatter } from '@/utils/formatters';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { rgba } from 'emotion-rgba';
import { useNavigate } from 'react-router-dom';

export const EvalLogItem = ({ element }: { element: EvalLog }) => {
  const { header, correctorReview, correctedsReview } = element;

  const navigate = useNavigate();

  return (
    <EvalLogItemLayout>
      <VStack w="100%" align="start" spacing="2rem">
        <HStack w="100%" justify="start" wrap="wrap">
          <HStack>
            <Clickable
              onClick={() => navigate('/profile/' + header.corrector.login)}
              element={
                <PrimaryBoldText>{header.corrector.login}</PrimaryBoldText>
              }
            />
            <Text>님이&nbsp;</Text>
            <PrimaryBoldText>{header.teamPreview.name}</PrimaryBoldText>
            <Text>을&nbsp;</Text>
          </HStack>
          <HStack>
            <BoldText>
              {dayjs(header.beginAt).format('YYYY-MM-DD hh:mm')}
            </BoldText>
            <Text>에 평가하였습니다</Text>
          </HStack>
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
            <div css={{ width: '100%' }}>
              <Text css={{ userSelect: 'auto' }}>{correctorReview.review}</Text>
            </div>
          </HStack>
          <HStack w="100%" justify="start">
            <HStack w="10rem">
              <CorrectedsReviewLabel number={correctedsReview.mark} />
            </HStack>
            <div css={{ width: '100%' }}>
              <Text css={{ userSelect: 'auto' }}>
                {correctedsReview.review}
              </Text>
            </div>
          </HStack>
        </VStack>
      </VStack>
    </EvalLogItemLayout>
  );
};

const EvalLogItemLayout = styled.div`
  background-color: ${({ theme }) => theme.colors.mono.white};
  padding: 2.5rem 3.5rem;
  border-radius: 2rem;

  transition: all 0.2s;
  :hover {
    transform: scale(1.015);
    box-shadow: 0.4rem 0.4rem 0.1rem
      ${({ theme }) => rgba(theme.colors.mono.black, 0.2)};
  }
`;

const CorrectorReviewLabel = ({ number }: { number: number }) => {
  const getCorrectorReviewLabelColor = (number: number) => {
    if (number >= 100) return theme.colors.semantic.pass;
    if (number >= 80) return theme.colors.semantic.warning;
    return theme.colors.semantic.fail;
  };

  const theme = useTheme();
  const color = getCorrectorReviewLabelColor(number);

  return (
    <Label
      color={color}
      bgColor={rgba(color, 0.15)}
      fontWeight={theme.fonts.weight.medium}
      text={`${number}%`}
    />
  );
};

const CorrectedsReviewLabel = ({ number }: { number: number }) => {
  const getCorrectorReviewLabelColor = (number: number) => {
    if (number >= 5) return theme.colors.semantic.pass;
    if (number >= 3) return theme.colors.semantic.warning;
    return theme.colors.semantic.fail;
  };

  const theme = useTheme();
  const color = getCorrectorReviewLabelColor(number);

  return (
    <Label
      color={color}
      bgColor={rgba(color, 0.15)}
      fontWeight={theme.fonts.weight.medium}
      text={`${number} / 5`}
    />
  );
};

type FlagLabelProps = {
  name: string;
  isPositive: boolean;
};

const FlagLabel = ({ name, isPositive }: FlagLabelProps) => {
  const theme = useTheme();
  const color = isPositive
    ? theme.colors.semantic.pass
    : theme.colors.semantic.fail;

  return (
    <Label
      color={color}
      bgColor={rgba(color, 0.15)}
      fontWeight={theme.fonts.weight.bold}
      text={snakeCaseFormatter(name)}
    />
  );
};
