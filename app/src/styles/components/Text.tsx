import styled from '@emotion/styled';

type TextProps = Partial<{
  fontSize: string;
}>;

export const Text = styled.p<TextProps>`
  font-size: ${({ theme, fontSize = theme.fonts.size.body }) => fontSize};
  line-height: 1.5;
`;
