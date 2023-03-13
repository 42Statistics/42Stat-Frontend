import styled from '@emotion/styled';

type TextProps = Partial<{}>;

export const Text = styled.p<TextProps>`
  font-size: ${({ theme }) => theme.fonts.body};
  line-height: 1.5;
`;
