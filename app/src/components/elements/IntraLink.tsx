import ft_logo from '@assets/42-logo.svg';
import { Image } from '@components/common';
import styled from '@emotion/styled';

export const IntraLink = () => {
  return (
    <a target="_blank" rel="noreferrer" href="https://intra.42.fr">
      <IntraLinkLayout>
        <Image
          src={ft_logo}
          alt="42 로고. 누르면 42 인트라로 이동한다."
          width="20px"
        />
      </IntraLinkLayout>
    </a>
  );
};

const IntraLinkLayout = styled.div`
  position: fixed;
  top: 3rem;
  right: 2rem;
  padding: 1.5rem;
  border-radius: ${({ theme }) => theme.radius.circle};
  background-color: ${({ theme }) => theme.colors.mono.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: ${({ theme }) => theme.zIndex.absoluteButton};
  cursor: pointer;
`;
