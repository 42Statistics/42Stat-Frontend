import { useState } from 'react';

export const useDisclosure = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen((isOpen) => !isOpen);

  return { isOpen, onOpen, onClose, onToggle };
};
