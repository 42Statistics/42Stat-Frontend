import { Helmet } from 'react-helmet-async';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
  const error = useRouteError();

  if (!isRouteErrorResponse(error)) {
    return <></>;
  }
  return (
    <>
      <Helmet>
        <title>{error.statusText} | 42Stat</title>
      </Helmet>
      {error.status} {error.statusText}
    </>
  );
};
