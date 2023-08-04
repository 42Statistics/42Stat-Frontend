import styled from '@emotion/styled';
import { Skeleton } from '@shared/ui-kit';
import { mq } from '@shared/utils/facepaint/mq';

export const HeroSkeleton = styled(Skeleton)`
  width: 100%;
  ${mq({
    height: ['18rem', '16rem', '14rem'],
  })}
`;
