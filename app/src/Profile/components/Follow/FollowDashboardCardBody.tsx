import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { Avatar, Text } from '@shared/ui-kit';
import { ALT } from '@shared/constants/accessibility';
import { MyFollow } from '@shared/__generated__/graphql';
import { numberFormatter } from '@shared/utils/formatters/numberFormatter';

type FollowDashboardCardBodyProps = {
  title: string;
  totalCount: number;
  followList: MyFollow[];
};

export const FollowDashboardCardBody = ({
  title,
  totalCount,
  followList,
}: FollowDashboardCardBodyProps) => {
  const theme = useTheme();

  return (
    <Layout>
      {followList.map(({ userPreview: { login, imgUrl } }) => {
        return (
          <Avatar
            key={login}
            name={login}
            src={imgUrl}
            alt={ALT.AVATAR_OF(login)}
            radius={theme.radius.xs}
          />
        );
      })}
      <Text style={{ marginLeft: '1rem' }}>
        {totalCount === 0 ? `${title} 0` : numberFormatter(totalCount)}
      </Text>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  height: 100%;
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  &:hover {
    border-radius: ${({ theme }) => theme.radius.xs};
    border: 1.5px solid ${({ theme }) => theme.colors.mono.gray400};
  }
`;
