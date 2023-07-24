import { ReLoginDialog } from '@shared/components/Modal/ReLoginDialog';
import { Spotlight } from '@shared/components/Spotlight';
import { PropsWithReactElementChildren } from '@shared/types/PropsWithChildren';
import { isReLoginDialogOpenAtom } from '@shared/utils/jotai/atoms/isReLoginDialogOpenAtom';
import { isSpotlightOpenAtom } from '@shared/utils/jotai/atoms/isSpotlightOpenAtom';
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
