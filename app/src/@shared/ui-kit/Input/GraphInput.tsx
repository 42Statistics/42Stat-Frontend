import styled from '@emotion/styled';

type InputProps = Partial<{
  fontSize: string;
  fontWeight: number;
  color: string;
  preventSelect: boolean;
  inline: boolean;
	w: string;
}>;

export const GraphTextInput = styled.input<InputProps>`
  display: ${({ inline }) => inline && 'inline'};
  font-size: ${({ theme, fontSize = theme.fonts.size.body2 }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme, color = theme.colors.mono.black }) => color};
  line-height: 1.5;
  user-select: ${({ preventSelect }) => preventSelect && 'none'};
	width: ${({ w }) => w};
	text-align: center;
`;

export const GraphNumberInput = styled.input<InputProps>`
  display: ${({ inline }) => inline && 'inline'};
  font-size: ${({ theme, fontSize = theme.fonts.size.body2 }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  color: ${({ theme, color = theme.colors.mono.black }) => color};
  line-height: 1.5;
  user-select: ${({ preventSelect }) => preventSelect && 'none'};
	width: ${({ w }) => w};
	text-align: center;
	padding: 0 0 0 0.5rem;
	type: number;
`;
