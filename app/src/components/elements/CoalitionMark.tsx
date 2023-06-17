import { Coalition } from '@/__generated__/graphql';
import { Image } from '@components/common';
import styled from '@emotion/styled';

type CoalitionMarkProps = {
  coalition: Coalition;
  size?: string;
};

// TODO: 로드되기 전까지 coalition.color로 뒤에 띄워주기
export const CoalitionMark = ({
  coalition,
  size = '20px',
}: CoalitionMarkProps) => {
  return (
    <>
      {coalition.imageUrl != null && coalition.color !== null && (
        <StyledCoalitionMark
          src={coalition.imageUrl}
          width={size}
          style={{
            backgroundColor: coalition.color,
          }}
        />
      )}
    </>
  );
};

const StyledCoalitionMark = styled(Image)`
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.circle};
`;
