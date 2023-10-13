import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import { ReactComponent as CheckboxBlank } from '@shared/assets/icon/checkbox-blank.svg';
import { ReactComponent as CheckboxFilled } from '@shared/assets/icon/checkbox-filled.svg';

type CheckboxWithLabelProps = {
  onClick: () => void;
  label: string;
  checked: boolean;
};

export const CheckboxWithLabel = ({
  onClick,
  label,
  checked,
}: CheckboxWithLabelProps) => {
  const theme = useTheme();

  return (
    <Layout onClick={onClick} checked={checked}>
      {checked ? (
        <CheckboxFilled
          width={16}
          height={16}
          fill={theme.colors.accent.default}
        />
      ) : (
        <CheckboxBlank width={16} height={16} fill={theme.colors.mono.black} />
      )}
      {label}
    </Layout>
  );
};

const Layout = styled.div<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: ${({ theme }) => theme.radius.xs};
  transition: all 0.2s;
  width: 100%;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.colors.mono.gray200};
  cursor: pointer;

  &:hover {
    border-color: ${({ theme }) => theme.colors.mono.gray300};
  }

  background: ${({ theme }) => theme.colors.background.box.default};
  color: ${({ theme, checked }) =>
    checked ? theme.colors.accent.default : theme.colors.mono.black};
`;
