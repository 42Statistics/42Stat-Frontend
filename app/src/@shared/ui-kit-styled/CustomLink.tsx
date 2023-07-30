import styled from '@emotion/styled';
import { PropsWithStringChildren } from '@shared/types/PropsWithChildren';
import { Link } from 'react-router-dom';

type CustomLinkProps = PropsWithStringChildren;

export const CustomLink = styled(Link)<CustomLinkProps>`
  color: ${({ theme }) => theme.colors.accent.default};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  font-size: ${({ theme }) => theme.fonts.size.body1};

  &:hover {
    text-decoration: underline;
  }
`;
