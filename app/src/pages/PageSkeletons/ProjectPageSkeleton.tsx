import { Skeleton, VStack } from '@components/common';
import styled from '@emotion/styled';

export const ProjectPageSkeleton = () => {
  return (
    <ProjectPageSkeletonLayout>
      <VStack w="100%" spacing="4rem">
        <Skeleton style={{ width: '200px', height: '70px' }} />
        <VStack spacing="1.5rem">
          <Skeleton style={{ width: '300px', height: '35px' }} />
          <Skeleton style={{ width: '300px', height: '35px' }} />
        </VStack>
        <VStack spacing="1.5rem">
          <Skeleton style={{ width: '300px', height: '35px' }} />
          <Skeleton style={{ width: '300px', height: '35px' }} />
        </VStack>
        <Skeleton style={{ width: '400px', height: '100px' }} />
        <VStack spacing="1.5rem">
          <Skeleton style={{ width: '300px', height: '35px' }} />
          <Skeleton style={{ width: '300px', height: '35px' }} />
        </VStack>
        <Skeleton
          style={{ width: '250px', height: '250px', borderRadius: '50%' }}
        />
      </VStack>
    </ProjectPageSkeletonLayout>
  );
};

const ProjectPageSkeletonLayout = styled.div`
  padding-top: 4rem;
`;

const LabelSkeleton = styled(Skeleton)`
  width: 140px;
  height: 30px;
  border-radius: 2rem;
`;

// return (
//   <ProjectPageLayout>
//       <VStack spacing="3rem">
//         <HStack spacing="1rem" wrap="wrap">
//           {keywords.map((text) => (
//             <Label
//               key={text}
//               text={titleCase(text)}
//               bgColor={theme.colors.accent.default}
//               fontWeight={theme.fonts.weight.medium}
//             />
//           ))}
//         </HStack>
//         <HStack spacing="1rem" wrap="wrap">
//           {skills.map((text) => (
//             <Label
//               key={text}
//               text={titleCase(text)}
//               fontWeight={theme.fonts.weight.medium}
//             />
//           ))}
//         </HStack>
//       </VStack>
//       <div style={{ maxWidth: '400px' }}>
//         <Text selectable style={{ textAlign: 'center' }}>
//           {description}
//         </Text>
//       </div>
//       <AccentText>Intra 프로젝트 링크</AccentText>
//       <Divider />
//       <VStack spacing="2rem">
//         <HStack>
//           <H3Text selectable>
//             지금까지&nbsp;
//             <strong>{numberWithUnitFormatter(totalCloseCount, '팀')}</strong>
//             이 제출했어요
//           </H3Text>
//         </HStack>
//         <HStack>
//           <H3Text selectable>
//             평균&nbsp;
//             <strong>
//               {numberWithUnitFormatter(averagePassFinalmark, '점')}
//             </strong>
//             으로 통과합니다
//           </H3Text>
//         </HStack>
//       </VStack>
//       <Link to={`/evallog?projectName=${name}`}>
//         <AccentText>Past Evaluations</AccentText>
//       </Link>
//       <div style={{ width: '26rem', height: '26rem' }}>
//         <ProjectResultPercentageChart
//           labels={['Pass', 'Fail']}
//           series={[passPercentage, 100 - passPercentage]}
//         />
//       </div>
//     </VStack>
//   </ProjectPageLayout>
// );
// };

// const ProjectPageLayout = styled.div`
// padding-top: 4rem;
// `;
