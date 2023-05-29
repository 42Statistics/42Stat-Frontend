import { Seo } from '../elements/Seo';

const defaultHead = () => {
  return <Seo />;
};

export const withHead = (Component: React.FC, Head: React.FC = defaultHead) => {
  const WithHead = () => {
    return (
      <>
        <Head />
        <Component />
      </>
    );
  };
  return WithHead;
};
