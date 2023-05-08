import styled from '@emotion/styled';

type DividerProps = Partial<{
  orientation: 'horizontal' | 'vertical';
  color: string;
  thickness: string;
}>;

export const Divider = styled.div<DividerProps>`
  width: ${({ orientation = 'horizontal' }) =>
    orientation === 'horizontal' ? '80%' : 'auto'};
  height: ${({ orientation = 'horizontal' }) =>
    orientation === 'vertical' ? '80%' : 'auto'};
  border-top: ${({
    orientation = 'horizontal',
    theme,
    color = theme.colors.mono.gray100,
    thickness = '0.1rem',
  }) => (orientation === 'horizontal' ? `${thickness} solid ${color}` : 0)};
  border-left: ${({
    orientation = 'horizontal',
    theme,
    color = theme.colors.mono.gray100,
    thickness = '0.1rem',
  }) => (orientation === 'vertical' ? `${thickness} solid ${color}` : 0)};
`;
