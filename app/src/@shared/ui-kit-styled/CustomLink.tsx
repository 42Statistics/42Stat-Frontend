import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { PropsWithStringChildren } from '@shared/types/PropsWithChildren';

type CustomLinkProps = {
  fontSize?: string;
} & PropsWithStringChildren;

export const CustomLink = styled(Link)<CustomLinkProps>`
  color: ${({ theme }) => theme.colors.accent.default};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme, fontSize }) => fontSize ?? theme.fonts.size.body2};

  &:hover {
    text-decoration: underline;
  }
`;
