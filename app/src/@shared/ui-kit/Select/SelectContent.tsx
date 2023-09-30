import styled from '@emotion/styled';
import { useGetSelectDisclosureContext } from './contexts/SelectDisclosureContext';

type SelectContentProps = {
  children: React.ReactNode;
  maxHeight?: string;
};

export default function SelectContent({
  children,
  maxHeight,
}: SelectContentProps) {
  const { isOpen } = useGetSelectDisclosureContext();

  if (!isOpen) {
    return null;
  }

  return (
    <StyledSelectContent maxHeight={maxHeight}>{children}</StyledSelectContent>
  );
}

type StyledSelectContentProps = {
  maxHeight?: string;
};

const StyledSelectContent = styled.ul<StyledSelectContentProps>`
  position: absolute;
  top: calc(100% + 1rem);
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  padding: 0;
  margin: 0;
  max-height: ${({ maxHeight }) => maxHeight};
  overflow-y: auto;
  border-radius: ${({ theme }) => theme.radius.sm};
  z-index: ${({ theme }) => theme.zIndex.dropdown};
  background: ${({ theme }) => theme.colors.mono.white};
  box-shadow: ${({ theme }) => theme.shadow.md};
`;
