import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export const ProfilePage = () => {
  const { username } = useParams();
  return (
    <>
      <Helmet>
        <title>{username} | 42Stat</title>
      </Helmet>
      ProfilePage of {username}
    </>
  );
};
