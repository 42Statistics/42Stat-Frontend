import styled from '@emotion/styled';
import coalition_gray_cover from '@shared/assets/coalition/cover/coalition-gray-cover.png';
import { mq } from '@shared/utils/facepaint/mq';

export const UserProfileLoader = styled.div`
  height: 100%;
  background-image: url(${coalition_gray_cover});
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.radius.md};

  ${mq({
    height: ['24rem', '24rem', '12rem'],
  })}
`;
