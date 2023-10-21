import styled from '@emotion/styled';
import { useEffect, useRef, useState } from 'react';

import { useDisclosure } from '@shared/hooks/useDisclosure';
import { SelectDisclosureContext } from '@shared/ui-kit/Select/contexts/SelectDisclosureContext';
import { SelectValueContext } from '@shared/ui-kit/Select/contexts/SelectValueContext';

type SelectProps = {
  children: React.ReactNode;
  width?: string;
  onValueChange?: (value: string | null) => void;
  defaultValue?: string;
  defaultRenderValue?: string;
};

export const Select = ({
  children,
  width,
  onValueChange,
  defaultValue,
  defaultRenderValue,
}: SelectProps) => {
  const [internalValue, setInternalValue] = useState<string | null>(
    defaultValue ?? null,
  );
  const [renderValue, setRenderValue] = useState(defaultRenderValue ?? '');
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleClickOutside = (e: MouseEvent) => {
      if (!ref.current) {
        return;
      }

      if (ref.current.contains(e.target as Node)) {
        return;
      }

      onClose();
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <SelectDisclosureContext.Provider
      value={{
        isOpen,
        onOpen,
        onClose,
        onToggle,
      }}
    >
      <SelectValueContext.Provider
        value={{
          internalValue,
          setInternalValue,
          renderValue,
          setRenderValue,
          onValueChange,
        }}
      >
        <StyledSelect ref={ref} width={width}>
          {children}
        </StyledSelect>
      </SelectValueContext.Provider>
    </SelectDisclosureContext.Provider>
  );
};

type StyledSelectProps = {
  width?: string;
};

const StyledSelect = styled.div<StyledSelectProps>`
  width: ${({ width }) => width};
  position: relative;
`;
