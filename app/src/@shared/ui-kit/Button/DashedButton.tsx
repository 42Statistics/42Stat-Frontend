import styled from '@emotion/styled';

type DashedButtonProps = {
  height?: string;
};

export const DashedButton = styled.button<DashedButtonProps>`
  width: 100%;
  height: ${({ height }) => height ?? '5rem'};
  border-radius: ${({ theme }) => theme.radius.xs};
  border: 1px dashed ${({ theme }) => theme.colors.mono.gray300};
  background-color: ${({ theme }) => theme.colors.background.box.default};
  cursor: pointer;
`;
