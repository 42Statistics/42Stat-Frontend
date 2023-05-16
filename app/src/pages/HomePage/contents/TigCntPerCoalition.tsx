import { Center, H3Text, Text, VStack } from '@/components/common';
import { DashboardContent } from '@/components/templates/Dashboard';
import { numberWithUnitFormatter } from '@/utils/formatters';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { capitalize } from 'lodash-es';

export const TigCntPerCoalition = () => {
  const test = [
    {
      coalition: {
        name: 'gun',
      },
      value: 5,
    },
    {
      coalition: {
        name: 'gon',
      },
      value: 10,
    },
    {
      coalition: {
        name: 'gam',
      },
      value: 15,
    },
    {
      coalition: {
        name: 'lee',
      },
      value: 20,
    },
  ];
  const max = Math.max(...test.map((item) => item.value));

  const title = '이번 달 누적 코알리숑 티그 횟수';
  const description = `${dayjs().format('YYYY년 M월')}`;
  const unit = '회';

  return (
    <DashboardContent title={title} description={description}>
      <Center w="100%" h="100%">
        <VStack w="80%" h="100%">
          <TigCntPerCoalitionTable>
            <tbody>
              {test.map(({ coalition, value }) => (
                <tr key={coalition.name}>
                  <td>
                    <H3Text>{capitalize(coalition.name)}</H3Text>
                  </td>
                  <td>
                    <TextMax isMax={max === value}>
                      {numberWithUnitFormatter(value, unit)}
                    </TextMax>
                  </td>
                </tr>
              ))}
            </tbody>
          </TigCntPerCoalitionTable>
        </VStack>
      </Center>
    </DashboardContent>
  );
};

const TigCntPerCoalitionTable = styled.table`
  width: 100%;
  text-align: center;

  td {
    padding: 0.6rem;
    vertical-align: middle;
  }
`;

const TextMax = styled(Text)<{ isMax: boolean }>`
  font-size: ${({ theme }) => theme.fonts.size.h3};
  color: ${({ theme, isMax }) =>
    isMax ? theme.colors.accent.default : theme.colors.mono.black};
`;
