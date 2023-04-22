import { AboveTablet } from '@/utils/responsive/Device';
import { Helmet } from 'react-helmet-async';
import { EvalSearchBoard } from './contents/EvalSearchBoard';

export const EvalLogSearchPage = () => {
  return (
    <>
      <Helmet>
        <title>평가로그 검색기 | 42Stat</title>
      </Helmet>
      <AboveTablet>
        <EvalSearchBoard />
      </AboveTablet>
    </>
  );
};
