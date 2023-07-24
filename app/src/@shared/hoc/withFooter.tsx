import { Footer } from '@components/elements/Footer';

export const withFooter = (Component: React.FC) => {
  const WithFooter = () => {
    return (
      <>
        <Component />
        <Footer />
      </>
    );
  };
  return WithFooter;
};
