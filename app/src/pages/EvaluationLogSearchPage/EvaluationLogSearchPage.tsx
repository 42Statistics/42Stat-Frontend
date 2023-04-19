import { Desktop, Mobile, Tablet } from '@/utils/responsive/Device';
import { Helmet } from 'react-helmet-async';
import { EvalSearchBoard } from './contents/EvalSearchBoard';

export const EvaluationLogSearchPage = () => {
  return (
    <>
      <Helmet>
        <title>EvalLogSearch | 42Stat</title>
      </Helmet>
      <Desktop>
        <EvalSearchBoard />
      </Desktop>
      <Tablet></Tablet>
      <Mobile></Mobile>
    </>
  );
};
