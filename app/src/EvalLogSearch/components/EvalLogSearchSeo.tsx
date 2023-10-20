import { useAtomValue } from 'jotai';

import { evalLogSearchArgsAtom } from '@/EvalLogSearch/atoms/evalLogSearchArgsAtom';
import { EVAL_LOG_SEARCH_ARGS_SEO_TITLE } from '@/EvalLogSearch/constants/evalLogArgsText';
import { Seo } from '@shared/components/Seo';

export const EvalLogSearchSeo = () => {
  const evalLogSearchArgs = useAtomValue(evalLogSearchArgsAtom);

  return <Seo title={EVAL_LOG_SEARCH_ARGS_SEO_TITLE(evalLogSearchArgs)} />;
};
