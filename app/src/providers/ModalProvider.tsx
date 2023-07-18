import { PropsWithReactElementChildren } from '@/types/PropsWithChildren';
import { isReLoginDialogOpenAtom } from '@atoms/isReLoginDialogOpenAtom';
import { ReLoginDialog } from '@components/elements/Modal/ReLoginDialog';
import { useAtomValue } from 'jotai';

const ModalProvider = ({ children }: PropsWithReactElementChildren) => {
  const isReLoginDialogOpen = useAtomValue(isReLoginDialogOpenAtom);

  return (
    <>
      <ReLoginDialog isOpen={isReLoginDialogOpen} />
      {children}
    </>
  );
};

export default ModalProvider;
