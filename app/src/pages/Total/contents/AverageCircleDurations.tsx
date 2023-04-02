import { gql } from '@/__generated__';
import { Spinner } from '@/components/common';
import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

const GET_AVERAGE_CIRCLE_DURATION = gql(/* GraphQL */ `
  query getAverageCircleDuration {
    getTotalPage {
      averageCircleDurations {
        circle
        value
      }
    }
  }
`);

export const AverageCircleDurations = () => {
  const { loading, error, data } = useQuery(GET_AVERAGE_CIRCLE_DURATION);
  const theme = useTheme();
  if (loading) return <Spinner />;
  if (error) {
    return <h1>{error.message}</h1>;
  }
  if (!data) {
    return <h1>user not found</h1>;
  }
  let db: number[] = [];
  data.getTotalPage.averageCircleDurations.forEach(({ circle, value }) => {
    db.push(value);
  });

  return (
    <StyledTable>
      <tr>
        <td>서클</td>
        <td>D+</td>
      </tr>
      {db.map((v, i) => {
        return (
          <tr>
            <td>{i}</td>
            <td>{v}</td>
          </tr>
        );
      })}
    </StyledTable>
  );
};

const StyledTable = styled.table`
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.size.h3};

  th,
  td {
    padding: 1rem 2rem;
    border: 1px solid black; /* 테두리 설정 */
    width: 11rem;
  }
  tr:first-of-type {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
    background-color: ${({ theme }) => theme.colors.primary.light};
  }
`;
