import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { ReactComponent as MdExpandMore } from '@shared/assets/icon/md-expand-more.svg';
import { HStack, Spacer, Text } from '@shared/ui-kit';
import { useGetSelectDisclosureContext } from './contexts/SelectDisclosureContext';
import { useGetSelectValueContext } from './contexts/SelectValueContext';

type SelectTriggerProps = {
  placeholder?: string;
};

export function SelectTrigger({ placeholder = '' }: SelectTriggerProps) {
  const theme = useTheme();

  const { internalValue, renderValue } = useGetSelectValueContext();
  const { onToggle } = useGetSelectDisclosureContext();

  return (
    <StyledSelectTrigger onClick={onToggle}>
      <HStack w="100%" spacing="2rem">
        {internalValue != null ? (
          <Text>{renderValue}</Text>
        ) : (
          <Text color={theme.colors.mono.gray500}>{placeholder}</Text>
        )}
        <Spacer />
        <MdExpandMore width={16} height={16} fill={theme.colors.mono.black} />
      </HStack>
    </StyledSelectTrigger>
  );
}

const StyledSelectTrigger = styled.div`
  padding: 0.8rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};
  border-radius: ${({ theme }) => theme.radius.sm};
  user-select: none;
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray300};
  }

  &:focus-visible {
    outline: 2px solid blue;
  }
`;
