import { useAtomValue } from 'jotai';
import { evalLogSearchArgsAtom } from '../atoms/evalLogSearchArgsAtom';
import { Seo } from '@shared/components/Seo';
import { EVAL_LOG_SEARCH_ARGS_SEO_TITLE } from '../constants/evalLogArgsText';

export const EvalLogSearchSeo = () => {
  const evalLogSearchArgs = useAtomValue(evalLogSearchArgsAtom);

  return <Seo title={EVAL_LOG_SEARCH_ARGS_SEO_TITLE(evalLogSearchArgs)} />;
};
