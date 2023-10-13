import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { OrderItemButtonGroup } from '@/Calculator/components/OrderItemButtonGroup';
import { ProjectSpotlight } from '@/Calculator/components/ProjectSpotlight';
import { PROJECT_LIST_TITLES } from '@/Calculator/constants/projectListTitles';
import type { Subject } from '@/Calculator/types/Subject';
import { Body1BoldText, HStack, Text, VStack, Writable } from '@shared/ui-kit';
import { CheckboxWithLabel } from '@shared/ui-kit-styled';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { useAtomValue } from 'jotai';
import type { CalculatorInputContentCardViewProps } from '.';

type CalculatorInputContentCardListItemProps =
  CalculatorInputContentCardViewProps & {
    item: Subject;
    index: number;
  };

export const CalculatorInputContentCardListItem = ({
  item: { name, expEdited, score, bonus, blackhole, finishLevel },
  index,
  onSubjectListChange,
  onInputChange,
  onCheckboxChange,
}: CalculatorInputContentCardListItemProps) => {
  const theme = useTheme();
  const subjectList = useAtomValue(subjectListAtom); // FIXME: OrderItemButtonGroup 주려고 여기서 다시 부르기가 좀...
  const { PROJECT_NAME, SCORE, COALITION_BONUS, EXP, FINISH_LEVEL, BLACKHOLE } =
    PROJECT_LIST_TITLES;

  return (
    <Layout>
      <VStack align="start" justify="start" w="100%" spacing="0.5rem">
        <HStack justify="space-between" w="100%">
          <TextLayout>
            <Text color={theme.colors.primary.default}>{PROJECT_NAME}</Text>
          </TextLayout>
          <OrderItemButtonGroup
            tableRowList={subjectList}
            index={index}
            onListChange={onSubjectListChange}
          />
        </HStack>
        <ProjectSpotlight
          index={index}
          keyword={name}
          height="4rem"
          isRelative
          spotlightWidth="100%"
        />
      </VStack>
      <HStack justify="space-between" spacing="1rem">
        <VStack align="start" w="100%" spacing="0.5rem">
          <TextLayout>
            <Text color={theme.colors.primary.default}>{SCORE}</Text>
          </TextLayout>
          <InputLayout>
            <Writable
              type="number"
              min="0"
              max="125"
              name="score"
              onChange={(event) => onInputChange(event, index)}
              value={score.toString()}
            />
          </InputLayout>
        </VStack>
        <VStack align="start" w="100%" spacing="0.5rem">
          <TextLayout>
            <Text color={theme.colors.primary.default}>{COALITION_BONUS}</Text>
          </TextLayout>
          <VStack w="100%" h="4rem">
            <CheckboxWithLabel
              label="Bonus"
              onClick={(event) => onCheckboxChange(event, index)}
              checked={bonus}
            />
          </VStack>
        </VStack>
      </HStack>
      <InfoLayout>
        <VStack>
          <Text color={theme.colors.primary.default}>{EXP}</Text>
          <Body1BoldText color={theme.colors.mono.black}>
            {expEdited?.toLocaleString()}
          </Body1BoldText>
        </VStack>
        <VStack>
          <Text color={theme.colors.primary.default}>{FINISH_LEVEL}</Text>
          <Body1BoldText color={theme.colors.mono.black}>
            {finishLevel}
          </Body1BoldText>
        </VStack>
        <VStack>
          <Text color={theme.colors.primary.default}>{BLACKHOLE}</Text>
          <Body1BoldText color={theme.colors.mono.black}>
            +{numberWithUnitFormatter(blackhole, '일')}
          </Body1BoldText>
        </VStack>
      </InfoLayout>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 0;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.mono.black};
`;

const InputLayout = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 0.2rem;
  width: 100%;
  height: 4rem;
  border-radius: ${({ theme }) => theme.radius.xs};
  transition: all 0.2s;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray300};
  }
  background: ${({ theme }) => theme.colors.background.box.default};
`;

const InfoLayout = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.xs};
  border: 1px solid ${({ theme }) => theme.colors.mono.gray300};
  padding: 1rem 0;
  margin: 1rem 0 0 0;
`;

const TextLayout = styled.div`
  padding: 0 0 0 0.7rem;
`;
