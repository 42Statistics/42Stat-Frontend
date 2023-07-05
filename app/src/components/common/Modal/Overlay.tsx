import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => rgba(theme.colors.mono.black, 0.25)};
  z-index: ${({ theme }) => theme.zIndex.overlay};
`;
