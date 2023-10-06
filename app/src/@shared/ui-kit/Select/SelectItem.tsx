import styled from '@emotion/styled';
import { ReactComponent as Check } from '@shared/assets/icon/md-check.svg';

import { useGetSelectDisclosureContext } from './contexts/SelectDisclosureContext';
import { useGetSelectValueContext } from './contexts/SelectValueContext';

type SelectItemProps = {
  value: string | null;
  renderValue?: string;
  children: React.ReactNode;
};

export function SelectItem({
  value,
  renderValue = value ?? '',
  children,
}: SelectItemProps) {
  const { internalValue, setInternalValue, setRenderValue, onValueChange } =
    useGetSelectValueContext();
  const { onClose } = useGetSelectDisclosureContext();

  function handleClick() {
    setInternalValue(value);
    onValueChange?.(value);
    setRenderValue(renderValue);
    onClose();
  }

  const isActive = value === internalValue;

  return (
    <StyledSelectItem onClick={handleClick}>
      <div style={{ width: '1.6rem' }}>
        {isActive && <Check width={16} height={16} />}
      </div>
      {children}
    </StyledSelectItem>
  );
}

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
