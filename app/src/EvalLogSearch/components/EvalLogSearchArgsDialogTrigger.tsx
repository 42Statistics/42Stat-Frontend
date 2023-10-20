import { useEffect } from 'react';

import { EvalLogSearchAbsoluteButton } from '@/EvalLogSearch/components/EvalLogSearchAbsoluteButton';
import { EvalLogSearchDialog } from '@/EvalLogSearch/components/EvalLogSearchDialog';
import { useDisclosure } from '@shared/hooks/useDisclosure';
import { isSlashKeyDown } from '@shared/utils/keyboard';

export const EvalLogSearchArgsDialogTrigger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isSlashKeyDown(e) && !isOpen) {
        e.preventDefault();
        onOpen();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onOpen]);

  return (
    <>
      <EvalLogSearchAbsoluteButton onClick={onOpen} />
      <EvalLogSearchDialog isOpen={isOpen} onClose={onClose} />
    </>
  );
};
