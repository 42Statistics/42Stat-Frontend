import styled from '@emotion/styled';

type OverlayProps = {
  onClick: React.MouseEventHandler<HTMLElement>;
};

export const Overlay = ({ onClick }: OverlayProps) => {
  return <OverlayLayout onClick={onClick}></OverlayLayout>;
};

const OverlayLayout = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: ${({ theme }) => theme.zIndex.overlay};
`;
