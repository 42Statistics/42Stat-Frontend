import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { ReactComponent as MdExpandMore } from '@shared/assets/icon/md-expand-more.svg';
import { useGetSelectDisclosureContext } from '@shared/ui-kit/Select/contexts/SelectDisclosureContext';
import { useGetSelectValueContext } from '@shared/ui-kit/Select/contexts/SelectValueContext';
import { Spacer } from '@shared/ui-kit/Spacer';
import { HStack } from '@shared/ui-kit/Stack';
import { Text } from '@shared/ui-kit/Text';

type SelectTriggerProps = {
  left?: React.ReactNode;
  placeholder?: string;
};

export const SelectTrigger = ({
  left,
  placeholder = '',
}: SelectTriggerProps) => {
  const theme = useTheme();

  const { internalValue, renderValue } = useGetSelectValueContext();
  const { onToggle } = useGetSelectDisclosureContext();

  return (
    <StyledSelectTrigger onClick={onToggle}>
      <HStack w="100%" spacing="1.5rem">
        {left}
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
};

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
