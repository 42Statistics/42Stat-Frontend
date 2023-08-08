import { VStack } from '@shared/ui-kit';
import { Provider } from 'jotai';
import { EvalLogSearchArgsAtomHydrator } from './atoms/evalLogSearchArgsAtom';
import { EvalLogSearchArgsDialogTrigger } from './components/EvalLogSearchArgsDialogTrigger';
import { EvalLogSearchContent } from './components/EvalLogSearchContent';
import { EvalLogSearchHeader } from './components/EvalLogSearchHeader';
import { EvalLogSearchSeo } from './components/EvalLogSearchSeo';
import { EvalLogSearchURLReader } from './components/EvalLogSearchURLReader';

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
