// import { gql } from '@/__generated__';
// import {
//   Avatar,
//   CaptionText,
//   Center,
//   H1BoldText,
//   H2BoldText,
//   HStack,
//   Loader,
//   PrimaryH3BoldText,
//   PrimaryH3MediumText,
//   PrimaryH3Text,
//   PrimaryText,
//   StyledInfoTable,
//   Text,
//   VStack,
// } from '@/components/common';
// import {
//   ApolloBadRequest,
//   ApolloNotFound,
// } from '@/components/elements/DashboardContentView';
// import {
//   dDayFormatter,
//   dateFormatter,
//   numberWithUnitFormatter,
// } from '@/utils/formatters';
// import { getDayDiff } from '@/utils/getDayDiff';
// import { getTitleWithLogin } from '@/utils/getTitleWithLogin';
// import { titleCase } from '@/utils/titleCase';
// import { useQuery } from '@apollo/client';
// import { useTheme } from '@emotion/react';
// import { truncate } from 'lodash-es';
// import { LevelBar } from './LevelBar';

// const GET_USER_PROFILE = gql(/* GraphQL */ `
//   query GetUserProfile {
//     getPersonGeneralPage {
//       userProfile {
//         id
//         login
//         grade
//         name
//         coalition {
//           id
//           name
//           slug
//           imageUrl
//           coverUrl
//           color
//           score
//           userId
//         }
//         imgUrl
//         titles {
//           id
//           name
//           isSelected
//         }
//         level
//         pooledAt
//         blackholedAt
//         wallet
//         correctionPoint
//         scoreInfo {
//           value
//           rankInCoalition
//           rankInTotal
//         }
//         levelRank
//       }
//     }
//   }
// `);

// export const UserProfile = () => {
//   const theme = useTheme();
//   const { loading, error, data } = useQuery(GET_USER_PROFILE);

//   if (loading) return <Loader />;
//   if (error) return <ApolloBadRequest msg={error.message} />;
//   if (!data) return <ApolloNotFound />;

//   const {
//     name,
//     login,
//     imgUrl,
//     titles,
//     coalition,
//     grade,
//     level,
//     levelRank,
//     pooledAt,
//     blackholedAt,
//     wallet,
//     correctionPoint,
//     scoreInfo,
//   } = data.getPersonGeneralPage.userProfile;
//   const titleWithLogin = getTitleWithLogin(titles, login);
//   const dayDiffPooledAtFromNow = getDayDiff(new Date(pooledAt), new Date());
//   const dayDiffBlackHoledAtFromNow = blackholedAt
//     ? getDayDiff(new Date(), new Date(blackholedAt))
//     : 0;
//   const levelDecimalPart = level % 1;

//   return (
//     <Center h="100%">
//       <HStack w="100%" spacing="6rem" wrap="wrap">
//         <Avatar size="16rem" imgUrl={imgUrl} />
//         <VStack align="start" spacing="1rem">
//           <VStack align="inherit">
//             <PrimaryH3BoldText>{titleCase(grade)}</PrimaryH3BoldText>
//             <HStack spacing="2rem">
//               <H1BoldText>{titleCase(name)}</H1BoldText>
//               {/* <CoalitionMark coalition={coalition} width="24px" /> */}
//             </HStack>
//           </VStack>
//           <HStack>
//             <Text color={theme.colors.mono.gray300}>
//               {truncate(titleWithLogin, { length: 42 })}
//             </Text>
//           </HStack>
//           <HStack spacing="1rem">
//             <HStack align="baseline">
//               <CaptionText color={theme.colors.mono.gray300}>lv.</CaptionText>
//               <H2BoldText>{level}</H2BoldText>
//             </HStack>
//             <LevelBar rate={levelDecimalPart} />
//             <HStack align="baseline">
//               <PrimaryH3MediumText>{levelRank}</PrimaryH3MediumText>
//               <PrimaryText fontSize={theme.fonts.size.caption}>위</PrimaryText>
//             </HStack>
//           </HStack>
//         </VStack>
//         <StyledInfoTable>
//           <tbody>
//             <tr>
//               <td>
//                 <Text>본과정 시작일</Text>
//               </td>
//               <td>
//                 <HStack spacing="1rem">
//                   <Text>{dateFormatter(pooledAt, 'lg')}</Text>
//                   <PrimaryText>{`(${dDayFormatter(
//                     dayDiffPooledAtFromNow,
//                   )})`}</PrimaryText>
//                 </HStack>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <Text>블랙홀</Text>
//               </td>
//               <td>
//                 {blackholedAt == null ? (
//                   <Text>-</Text>
//                 ) : (
//                   <HStack spacing="1rem">
//                     <Text>{dateFormatter(blackholedAt, 'lg')}</Text>
//                     <PrimaryH3Text>
//                       {`(${dDayFormatter(dayDiffBlackHoledAtFromNow)})`}
//                     </PrimaryH3Text>
//                   </HStack>
//                 )}
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <Text>보유 월렛</Text>
//               </td>
//               <td>
//                 <Text>{wallet.toLocaleString()}₳</Text>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <Text>보유 평가 포인트</Text>
//               </td>
//               <td>
//                 <Text>{correctionPoint.toLocaleString()}개</Text>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <Text>코알리숑 스코어</Text>
//               </td>
//               <td>
//                 <HStack spacing="1rem" wrap="wrap">
//                   <Text>{numberWithUnitFormatter(scoreInfo.value, 'P')}</Text>
//                   <HStack spacing="0.5rem">
//                     <Text>(</Text>
//                     {/* <CoalitionMark width="14px" coalition={coalition} /> */}
//                     <Text>
//                       {`${scoreInfo.rankInCoalition.toLocaleString()}위 / 전체 ${scoreInfo.rankInTotal.toLocaleString()}위)`}
//                     </Text>
//                   </HStack>
//                 </HStack>
//               </td>
//             </tr>
//           </tbody>
//         </StyledInfoTable>
//       </HStack>
//     </Center>
//   );
// };
