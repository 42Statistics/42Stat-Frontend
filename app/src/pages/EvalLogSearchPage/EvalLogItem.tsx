import { EvalLog } from '@/__generated__/graphql';
import {
  BoldText,
  HStack,
  PrimaryBoldText,
  Spacer,
  Text,
  VStack,
} from '@components/common';
import { Label } from '@components/common/Label';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { snakeCaseFormatter } from '@utils/formatters';
import dayjs from 'dayjs';
import { rgba } from 'emotion-rgba';
import { Link } from 'react-router-dom';

export const EvalLogItem = ({ element }: { element: EvalLog }) => {
  const theme = useTheme();
  const { header, correctorReview, correctedsReview } = element;

  return (
    <EvalLogItemLayout>
      <VStack w="100%" align="start" spacing="2rem">
        <HStack w="100%" justify="start" wrap="wrap">
          <Link to={`/profile/${header.corrector.login}`}>
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
                <CorrectedsReviewLabel isAbsorbed />
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

const CorrectedsReviewLabel = ({
  number = 0,
  isAbsorbed = false,
}: {
  number?: number; // isAbsorbed일 때만 undefined 가능
  isAbsorbed?: boolean;
}) => {
  const getCorrectorReviewLabelColor = (
    number: number,
    isAbsorbed: boolean,
  ) => {
    if (isAbsorbed) return theme.colors.mono.gray300;
    if (number >= 5) return theme.colors.semantic.pass;
    if (number >= 3) return theme.colors.semantic.warning;
    return theme.colors.semantic.fail;
  };

  const theme = useTheme();
  const color = getCorrectorReviewLabelColor(number, isAbsorbed);

  return (
    <Label
      color={color}
      bgColor={rgba(color, 0.15)}
      fontWeight={theme.fonts.weight.medium}
      text={`${!isAbsorbed ? number : '-'} / 5`}
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
