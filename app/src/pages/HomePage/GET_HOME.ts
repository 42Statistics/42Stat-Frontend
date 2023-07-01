import { gql } from '@/__generated__';

export const GET_HOME = gql(/* GraphQL */ `
  query GetHome {
    getMyInfo {
      ...getMyInfoFragment
    }
    getHomeUser {
      ...homeUserFragment
    }
    getHomeEval {
      ...homeEvalFragment
    }
    getHomeTeam {
      ...homeTeamFragment
    }
    getHomeCoalition {
      ...homeCoalitionFragment
    }
  }

  fragment getMyInfoFragment on MyInfo {
    userPreview {
      id
      login
      imgUrl
    }
    recentValidatedTeam {
      status
      lastEventTime
      projectPreview {
        id
        name
        url
      }
    }
    isNewMember
    blackholedAt
    experienceRank
    scoreRank
    evalCountRank
  }

  fragment homeUserFragment on HomeUser {
    ...aliveUserCountRecordsFragment
    ...averageDurationPerCircleFragment
    ...blackholedCountPerCircleFragment
    ...blackholedRateFragment
    ...correctionPointRankingFragment
    ...memberRateFragment
    ...userCountPerLevelFragment
    ...walletRankingFragment
  }

  fragment aliveUserCountRecordsFragment on HomeUser {
    aliveUserCountRecords {
      at
      value
    }
  }

  fragment averageDurationPerCircleFragment on HomeUser {
    averageDurationPerCircle {
      circle
      value
    }
  }

  fragment blackholedCountPerCircleFragment on HomeUser {
    blackholedCountPerCircle {
      circle
      value
    }
  }

  fragment blackholedRateFragment on HomeUser {
    blackholedRate {
      total
      fields {
        key
        value
      }
    }
  }

  fragment correctionPointRankingFragment on HomeUser {
    correctionPointRanking(limit: 5) {
      userPreview {
        id
        login
        imgUrl
      }
      value
      rank
    }
  }

  fragment memberRateFragment on HomeUser {
    memberRate {
      total
      fields {
        key
        value
      }
    }
  }

  fragment userCountPerLevelFragment on HomeUser {
    userCountPerLevel {
      value
      level
    }
  }

  fragment walletRankingFragment on HomeUser {
    walletRanking(limit: 5) {
      userPreview {
        id
        login
        imgUrl
      }
      value
      rank
    }
  }

  fragment homeEvalFragment on HomeEval {
    averageCommentLength
    averageFeedbackLength
  }

  fragment homeTeamFragment on HomeTeam {
    ...currRegisteredCountRankingFragment
    ...recentExamResultFragment
  }

  fragment currRegisteredCountRankingFragment on HomeTeam {
    currRegisteredCountRanking(limit: 5) {
      projectPreview {
        id
        name
        url
      }
      rank
      value
    }
  }

  fragment recentExamResultFragment on HomeTeam {
    recentExamResult(after: 1) {
      start
      end
      data {
        resultPerRank {
          rank
          rate {
            total
            fields {
              key
              value
            }
          }
        }
        beginAt
        endAt
        location
        maxPeople
        name
        nbrSubscribers
      }
    }
  }

  fragment homeCoalitionFragment on HomeCoalition {
    ...scoreRecordsPerCoalitionFragment
    ...totalScoresPerCoalitionFragment
  }

  fragment scoreRecordsPerCoalitionFragment on HomeCoalition {
    scoreRecordsPerCoalition {
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
      records {
        at
        value
      }
    }
  }

  fragment totalScoresPerCoalitionFragment on HomeCoalition {
    totalScoresPerCoalition {
      coalition {
        id
        name
        slug
        imageUrl
        coverUrl
        color
        userId
      }
      value
    }
  }
`);
