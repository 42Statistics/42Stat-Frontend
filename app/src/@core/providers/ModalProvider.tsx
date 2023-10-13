import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';
import { reLoginDialogInfoAtom } from '@core/atoms/reLoginDialogInfoAtom';
import { ReLoginDialog } from '@core/components/Modal/ReLoginDialog';
import { Spotlight } from '@core/components/Spotlight';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { useAtomValue } from 'jotai';

const ModalProvider = ({ children }: PropsWithReactElementChildren) => {
  const { isOpen: isReLoginDialogOpen } = useAtomValue(reLoginDialogInfoAtom);
  const isSpotlightOpen = useAtomValue(isSpotlightOpenAtom);
  return (
    <>
      {isReLoginDialogOpen ? <ReLoginDialog /> : null}
      {isSpotlightOpen ? <Spotlight /> : null}
      {children}
    </>
  );
};

export default ModalProvider;
