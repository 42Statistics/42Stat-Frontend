import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';
import { reLoginDialogInfoAtom } from '@core/atoms/reLoginDialogInfoAtom';
import { isSubjectDuplicateAtom } from '@core/atoms/isSubjectDuplicateAtom';
import { ReLoginDialog } from '@core/components/Modal/ReLoginDialog';
import { SubjectDuplicateDialog } from '@core/components/Modal/SubjectDuplicateDialog';
import { Spotlight } from '@core/components/Spotlight';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { useAtomValue } from 'jotai';

const ModalProvider = ({ children }: PropsWithReactElementChildren) => {
  const { isOpen: isReLoginDialogOpen } = useAtomValue(reLoginDialogInfoAtom);
  const isSpotlightOpen = useAtomValue(isSpotlightOpenAtom);
  const isSubjectDuplicate = useAtomValue(isSubjectDuplicateAtom);
  return (
    <>
      {isReLoginDialogOpen ? <ReLoginDialog /> : null}
      {isSpotlightOpen ? <Spotlight /> : null}
      {isSubjectDuplicate ? <SubjectDuplicateDialog /> : null}
      {children}
    </>
  );
};

export default ModalProvider;
