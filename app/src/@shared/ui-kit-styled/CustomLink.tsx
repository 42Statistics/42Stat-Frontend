import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

import { PropsWithStringChildren } from '@shared/types/PropsWithChildren';

type CustomLinkProps = PropsWithStringChildren;

export const CustomLink = styled(Link)<CustomLinkProps>`
  color: ${({ theme }) => theme.colors.accent.default};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.body1};

  &:hover {
    text-decoration: underline;
  }
`;
