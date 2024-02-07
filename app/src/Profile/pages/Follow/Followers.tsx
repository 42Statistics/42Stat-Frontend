import { useContext } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { ReactComponent as MdGroup } from '@shared/assets/icon/md-group.svg';
import { Seo } from '@shared/components/Seo';
import { ROUTES } from '@shared/constants/routes';
import { Body1BoldText, H1BoldText, HStack, VStack } from '@shared/ui-kit';

import { UserProfileContext } from '@/Profile/contexts/UserProfileContext';
import { GET_FOLLOWER_LIST } from '@/Profile/dashboard-contents-queries/GET_FOLLOW_DATA';
import Follow from '@/Profile/components/Follow';
import { followPageArgs } from '@/Profile/utils/followPageArgs';

const FollowerPage = () => {
  const { id, login } = useContext(UserProfileContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const { pageNumber, pageSize } = followPageArgs(searchParams);
  const title = '팔로워';

  const { data, loading, error } = useQuery(GET_FOLLOWER_LIST, {
    variables: { id: id, pageSize: pageSize, pageNumber: pageNumber },
  });

  if (loading) return <div>loading</div>;
  if (error) return <div>error</div>;
  if (!data) return <div>no data</div>;

  const followList = data.getFollowerPaginated.nodes;
  const totalCount = data.getFollowerPaginated.totalCount;

  return (
    <>
      <Seo title={title} />
      <VStack w="100%" spacing="2rem" align="start">
        <TitleLayout
          onClick={() => navigate(ROUTES.PROFILE_FOLLOWING_OF(login))}
        >
          <MdGroup fill={theme.colors.mono.black} width="30" height="30" />
          <H1BoldText>{title}</H1BoldText>
          <BadgeLayout>
            <Body1BoldText>{totalCount}명</Body1BoldText>
          </BadgeLayout>
        </TitleLayout>
        <Follow
          followList={followList}
          totalCount={totalCount}
          currentPage={pageNumber}
          setSearchParams={setSearchParams}
        />
      </VStack>
    </>
  );
};

const TitleLayout = styled(HStack)`
  justify-content: start;
  width: 100%;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.radius.md};
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.colors.background.box.default};
  box-shadow: ${({ theme }) => theme.colors.background.box.shadow.default};
  cursor: pointer;
  &:hover {
    box-shadow: ${({ theme }) => theme.colors.background.box.shadow.hover};
  }
`;

const BadgeLayout = styled(HStack)`
  border-radius: ${({ theme }) => theme.radius.sm};
  background-color: ${({ theme }) => theme.colors.mono.gray100};
  padding: 0.5rem 1rem;
`;

export default FollowerPage;
