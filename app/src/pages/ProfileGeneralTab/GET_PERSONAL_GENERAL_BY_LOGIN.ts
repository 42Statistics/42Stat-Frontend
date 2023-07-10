import { gql } from '@/__generated__';

export const GET_PERSONAL_GENERAL_BY_LOGIN = gql(/* GraphQL */ `
  query GetPersonalGeneralByLogin($login: String!) {
    getPersonalGeneral(login: $login) {
      beginAt
      teamInfo {
        lastPassed
        lastRegistered
      }
      wallet
      ...coalitionScoreFragment
      blackholedAt
      ...levelRecordsFragment
      ...teamInfoFragment
    }
  }

  fragment coalitionScoreFragment on PersonalGeneral {
    userProfile {
      coalition {
        id
        name
        slug
        imageUrl
        coverUrl
        color
        score
        userId
      }
    }
    scoreInfo {
      value
      rankInCoalition
    }
  }

  fragment levelRecordsFragment on PersonalGeneral {
    userLevelRecords {
      monthsPassed
      level
    }
    promoLevelRecords {
      monthsPassed
      level
    }
    promoMemberLevelRecords {
      monthsPassed
      level
    }
  }

  fragment characterFragment on PersonalGeneral {
    character {
      effort {
        logtimeRank {
          rank
          value
          userPreview {
            id
          }
        }
        evalCountRank {
          rank
          value
        }
        examTryCount
        projectTryCount
      }
      talent {
        levelRank {
          rank
          value
        }
        examOneshotRate {
          total
          fields {
            key
            value
          }
        }
        projectOneshotRate {
          total
          fields {
            key
            value
          }
        }
        outstandingRate {
          total
          fields {
            key
            value
          }
        }
      }
    }
  }

  fragment teamInfoFragment on PersonalGeneral {
    teamInfo {
      lastRegistered
      lastPassed
      teams {
        id
        name
        occurrence
        projectPreview {
          id
          name
          url
        }
        status
        lastEventTime
        isValidated
        finalMark
      }
    }
  }
`);
