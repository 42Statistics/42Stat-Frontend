import styled from '@emotion/styled';

type OverlayProps = {
  onClick: React.MouseEventHandler<HTMLElement>;
};

export const Overlay = ({ onClick }: OverlayProps) => {
  return <OverlayLayout onClick={onClick}></OverlayLayout>;
};

const OverlayLayout = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 2;
`;
