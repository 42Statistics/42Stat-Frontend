import styled from '@emotion/styled';

import { Dialog, type DialogProps } from '@shared/ui-kit';
import { CustomDialogBody } from '@shared/ui-kit/Dialog/CustomDialog/CustomDialogBody';
import { CustomDialogFooter } from '@shared/ui-kit/Dialog/CustomDialog/CustomDialogFooter';
import { CustomDialogHeader } from '@shared/ui-kit/Dialog/CustomDialog/CustomDialogHeader';

export const CustomDialog = ({ children, ...props }: DialogProps) => {
  return (
    <Dialog {...props}>
      <Layout>{children}</Layout>
    </Dialog>
  );
};

CustomDialog.Body = CustomDialogBody;
CustomDialog.Footer = CustomDialogFooter;
CustomDialog.Header = CustomDialogHeader;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 448px;
  max-width: calc(100vw - 4rem);
  background-color: ${({ theme }) => theme.colors.mono.white};
  box-shadow: ${({ theme }) => theme.shadow.md};
  border-radius: ${({ theme }) => theme.radius.sm};
`;
