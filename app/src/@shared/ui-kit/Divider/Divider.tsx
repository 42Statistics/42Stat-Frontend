import styled from '@emotion/styled';

type DividerProps = Partial<{
  orientation: 'horizontal' | 'vertical';
  color: string;
  thickness: string;
}>;

export const Divider = styled.div<DividerProps>`
  width: ${({ orientation = 'horizontal' }) =>
    orientation === 'horizontal' ? '100%' : 'auto'};
  height: ${({ orientation = 'horizontal' }) =>
    orientation === 'vertical' ? '100%' : 'auto'};
  border-top: ${({
    orientation = 'horizontal',
    theme,
    color = theme.colors.mono.gray200,
    thickness = '1px',
  }) => (orientation === 'horizontal' ? `${thickness} solid ${color}` : 0)};
  border-left: ${({
    orientation = 'horizontal',
    theme,
    color = theme.colors.mono.gray200,
    thickness = '1px',
  }) => (orientation === 'vertical' ? `${thickness} solid ${color}` : 0)};
`;
