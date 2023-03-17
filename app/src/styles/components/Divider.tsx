import styled from '@emotion/styled';

type DividerProps = Partial<{
  orientation: 'horizontal' | 'vertical';
  color: string;
  thickness: number;
}>;

export const Divider = styled.div<DividerProps>`
  width: ${({ orientation = 'horizontal' }) =>
    orientation === 'horizontal' ? '80%' : 'auto'};
  height: ${({ orientation = 'horizontal' }) =>
    orientation === 'vertical' ? '80%' : 'auto'};
  border-top: ${({
    orientation = 'horizontal',
    theme,
    color = theme.colors.primary.default,
    thickness = 1,
  }) => (orientation === 'horizontal' ? `${thickness}px solid ${color}` : 0)};
  border-left: ${({
    orientation = 'horizontal',
    theme,
    color = theme.colors.primary.default,
    thickness = 1,
  }) => (orientation === 'vertical' ? `${thickness}px solid ${color}` : 0)};
`;
