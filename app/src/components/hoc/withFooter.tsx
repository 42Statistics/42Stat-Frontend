import { Footer } from '@components/elements/Footer/Footer';

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
