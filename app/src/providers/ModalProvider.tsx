import { PropsWithReactElementChildren } from '@/types/PropsWithChildren';
import { isReLoginDialogOpenAtom } from '@atoms/isReLoginDialogOpenAtom';
import { isSearchDialogOpenAtom } from '@atoms/isSearchDialogOpenAtom';
import { ReLoginDialog } from '@components/elements/Modal/ReLoginDialog';
import { SearchDialog } from '@components/elements/SearchBarView/SearchDialog';
import { useAtom } from 'jotai';

const ModalProvider = ({ children }: PropsWithReactElementChildren) => {
  const [isReLoginDialogOpen, setIsReLoginDialogOpen] = useAtom(
    isReLoginDialogOpenAtom,
  );
  const [isSearchDialogOpen, setIsSearchDialogOpen] = useAtom(
    isSearchDialogOpenAtom,
  );

  return (
    <>
      <ReLoginDialog
        isOpen={isReLoginDialogOpen}
        onClose={() => setIsReLoginDialogOpen(false)}
      />
      <SearchDialog
        isOpen={isSearchDialogOpen}
        onClose={() => setIsSearchDialogOpen(false)}
      />
      {children}
    </>
  );
};

export default ModalProvider;
