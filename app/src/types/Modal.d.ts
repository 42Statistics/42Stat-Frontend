export type ModalBaseProps = {
  isOpen: boolean;
};

export type DialogBaseProps = ModalBaseProps & {
  onClose: () => void;
};
