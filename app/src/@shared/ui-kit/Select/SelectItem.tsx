import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { ReactComponent as MdCheck } from '@shared/assets/icon/md-check.svg';
import { useGetSelectDisclosureContext } from '@shared/ui-kit/Select/contexts/SelectDisclosureContext';
import { useGetSelectValueContext } from '@shared/ui-kit/Select/contexts/SelectValueContext';

type SelectItemProps = {
  value: string | null;
  renderValue?: string;
  children: React.ReactNode;
};

export const SelectItem = ({
  value,
  renderValue = value ?? '',
  children,
}: SelectItemProps) => {
  const theme = useTheme();
  const { internalValue, setInternalValue, setRenderValue, onValueChange } =
    useGetSelectValueContext();
  const { onClose } = useGetSelectDisclosureContext();

  const handleClick = () => {
    setInternalValue(value);
    onValueChange?.(value);
    setRenderValue(renderValue);
    onClose();
  };

  const isActive = value === internalValue;

  return (
    <StyledSelectItem onClick={handleClick}>
      <div style={{ width: '1.6rem' }}>
        {isActive && (
          <MdCheck width={16} height={16} fill={theme.colors.mono.black} />
        )}
      </div>
      {children}
    </StyledSelectItem>
  );
};

const StyledSelectItem = styled.li`
  padding: 0.6rem 2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.mono.gray100};
  }
`;
