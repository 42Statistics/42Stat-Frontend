import { Text } from '@components/common';
import styled from '@emotion/styled';

type TextMaxProps = {
  isMax: boolean;
};

export const TextMax = styled(Text)<TextMaxProps>`
  color: ${({ theme, isMax }) => isMax && theme.colors.accent.default};
  font-weight: ${({ theme, isMax }) => isMax && theme.fonts.weight.bold};
`;
