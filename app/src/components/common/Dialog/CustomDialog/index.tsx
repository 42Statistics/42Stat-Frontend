import styled from '@emotion/styled';
import { Dialog, DialogProps } from '../Dialog';
import { CustomDialogBody } from './CustomDialogBody';
import { CustomDialogFooter } from './CustomDialogFooter';
import { CustomDialogHeader } from './CustomDialogHeader';

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
  max-width: 100vw;
`;
