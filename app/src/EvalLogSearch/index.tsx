import { Provider } from 'jotai';

import { VStack } from '@shared/ui-kit';

import { EvalLogSearchArgsAtomHydrator } from '@/EvalLogSearch/atoms/evalLogSearchArgsAtom';
import { EvalLogSearchArgsDialogTrigger } from '@/EvalLogSearch/components/EvalLogSearchArgsDialogTrigger';
import { EvalLogSearchContent } from '@/EvalLogSearch/components/EvalLogSearchContent';
import { EvalLogSearchHeader } from '@/EvalLogSearch/components/EvalLogSearchHeader';
import { EvalLogSearchSeo } from '@/EvalLogSearch/components/EvalLogSearchSeo';
import { EvalLogSearchURLReader } from '@/EvalLogSearch/components/EvalLogSearchURLReader';

const EvalLogSearchPage = () => {
  return (
    <>
      <Provider>
        <EvalLogSearchArgsAtomHydrator>
          <EvalLogSearchURLReader>
            <EvalLogSearchSeo />
            <VStack w="100%" align="start" spacing="2rem">
              <EvalLogSearchHeader />
              <EvalLogSearchContent />
            </VStack>
            <EvalLogSearchArgsDialogTrigger />
          </EvalLogSearchURLReader>
        </EvalLogSearchArgsAtomHydrator>
      </Provider>
    </>
  );
};

export default EvalLogSearchPage;
