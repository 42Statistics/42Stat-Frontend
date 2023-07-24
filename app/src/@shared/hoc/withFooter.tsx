import { Footer } from '@shared/components/Footer';

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
