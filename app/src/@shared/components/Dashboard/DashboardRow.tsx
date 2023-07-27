import styled from '@emotion/styled';
import { mq } from '@shared/utils/facepaint/mq';

export const DashboardRow = styled.div`
  display: grid;
  ${mq({
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
  })}
  grid-auto-rows: 20rem;
  column-gap: 1rem;
  row-gap: 1rem;
  width: 100%;
`;
