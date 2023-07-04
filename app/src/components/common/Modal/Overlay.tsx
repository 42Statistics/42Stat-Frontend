import styled from '@emotion/styled';

type OverlayProps = {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
} & React.PropsWithChildren;

export const Overlay = ({ onClick, children }: OverlayProps) => {
  return <StyledOverlay onClick={onClick}>{children}</StyledOverlay>;
};

const StyledOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: ${({ theme }) => theme.zIndex.overlay};
`;
