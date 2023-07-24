import { Footer } from '@core/components/Footer';

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