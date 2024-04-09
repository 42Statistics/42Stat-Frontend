import { gql } from '@shared/__generated__';

export const GET_TIG_COUNT_PER_COALITION_BY_DATE_TEMPLATE = gql(/* GraphQL */ `
  query GetTigCountPerCoalitionByDateTemplate($dateTemplate: DateTemplate!) {
    getHomeCoalition {
      tigCountPerCoalitionByDateTemplate(dateTemplate: $dateTemplate) {
        data {
          coalition {
            ...coalitionFields
          }
          value
        }
        start
        end
      }
    }
  }
`);
