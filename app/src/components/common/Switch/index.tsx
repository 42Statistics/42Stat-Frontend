import styled from '@emotion/styled';

type SwitchProps = {
  checked: boolean;
  onChange: () => void;
};

export const Switch = ({ checked, onChange }: SwitchProps) => {
  return (
    <SwitchWrapper>
      <SwitchInput
        type="checkbox"
        id="switch"
        checked={checked}
        onChange={onChange}
      />
      <SwitchLabel htmlFor="switch" />
    </SwitchWrapper>
  );
};

const SwitchWrapper = styled.div`
  position: relative;
`;

const SwitchLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 26px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 4px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + label {
    background: ${({ theme }) => theme.colors.primary.default};

    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
