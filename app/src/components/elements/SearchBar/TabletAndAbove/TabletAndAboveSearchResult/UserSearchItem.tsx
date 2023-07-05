import { UserPreview } from '@/__generated__/graphql';
import { Avatar, Clickable, HStack, Text } from '@components/common';
import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

type UserSearchItemProps = {
  user: UserPreview;
  onSubmit: (name: string) => void;
};

export const UserSearchItem = ({ user, onSubmit }: UserSearchItemProps) => {
  return (
    <Clickable
      key={user.id}
      onClick={() => onSubmit(user.login)}
      style={{ width: '100%' }}
    >
      <Layout>
        <Avatar size="xs" src={user.imgUrl} />
        <Text>{user.login}</Text>
      </Layout>
    </Clickable>
  );
};

const Layout = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.radius.sm};
  transition: background-color 0.3s ease-out;

  &:hover {
    background-color: #e8e8e8;
  }
`;
