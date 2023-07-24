import { isReLoginDialogOpenAtom } from '@core/atoms/isReLoginDialogOpenAtom';
import { isSpotlightOpenAtom } from '@core/atoms/isSpotlightOpenAtom';
import { ReLoginDialog } from '@core/components/Modal/ReLoginDialog';
import { Spotlight } from '@core/components/Spotlight';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { useAtom } from 'jotai';

const ModalProvider = ({ children }: PropsWithReactElementChildren) => {
  const [isReLoginDialogOpen, setIsReLoginDialogOpen] = useAtom(
    isReLoginDialogOpenAtom,
  );
  const [isSpotlightOpen, setIsSpotlightOpen] = useAtom(isSpotlightOpenAtom);

  const closeReLoginDialog = () => {
    setIsReLoginDialogOpen(false);
  };

  const closeSpotlight = () => {
    setIsSpotlightOpen(false);
  };

  return (
    <>
      <ReLoginDialog
        isOpen={isReLoginDialogOpen}
        onClose={closeReLoginDialog}
      />
      <Spotlight isOpen={isSpotlightOpen} onClose={closeSpotlight} />
      {children}
    </>
  );
};

export default ModalProvider;
