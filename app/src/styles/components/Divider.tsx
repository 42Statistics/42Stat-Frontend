import styled from '@emotion/styled';

type DividerProps = Partial<{
  orientation: 'horizontal' | 'vertical';
  color: string;
  thickness: number;
}>;

export const Divider = styled.div<DividerProps>`
  width: ${({ orientation = 'horizontal', thickness = 1 }) =>
    orientation === 'horizontal' ? '80%' : `${thickness}px`};
  height: ${({ orientation = 'horizontal', thickness = 1 }) =>
    orientation === 'vertical' ? '80%' : `${thickness}px`};
  background-color: ${({ theme, color = theme.colors.primary.default }) =>
    color};
`;
