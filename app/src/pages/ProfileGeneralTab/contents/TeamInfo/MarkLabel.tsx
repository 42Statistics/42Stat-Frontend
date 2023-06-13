import { HStack, Text } from '@components/common';
import styled from '@emotion/styled';
import { AiOutlineCheck } from '@react-icons/all-files/ai/AiOutlineCheck';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';

type MarkLabelProps = {
  isValidate: boolean;
  finalMark: number;
};

export const MarkLabel = ({ isValidate, finalMark }: MarkLabelProps) => {
  return (
    <Layout isValidate={isValidate}>
      {isValidate ? <AiOutlineCheck /> : <AiOutlineClose />}
      <Text>{finalMark}</Text>
    </Layout>
  );
};

type LayoutProps = {
  isValidate: boolean;
};

const Layout = styled(HStack)<LayoutProps>`
  color: ${({ theme, isValidate }) =>
    isValidate ? theme.colors.semantic.pass : theme.colors.semantic.fail};
`;
