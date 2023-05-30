import ft_logo from '@assets/42-logo.svg';
import styled from '@emotion/styled';
import { Image } from '@components/common';

export const IntraLink = () => {
  return (
    <a target="_blank" rel="noreferrer" href="https://intra.42.fr">
      <IntraLinkLayout>
        <Image src={ft_logo} width="20px" />
      </IntraLinkLayout>
    </a>
  );
};

const IntraLinkLayout = styled.div`
  position: fixed;
  top: 3rem;
  right: 2rem;
  padding: 1.5rem;
  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.mono.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: ${({ theme }) => theme.zIndex.absoluteButton};
  cursor: pointer;
`;
