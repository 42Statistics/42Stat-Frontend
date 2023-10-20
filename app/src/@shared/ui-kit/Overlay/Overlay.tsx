import styled from '@emotion/styled';
import { rgba } from 'emotion-rgba';

import { fadeIn } from '@shared/ui-kit-styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => rgba(theme.colors.mono.black, 0.3)};
  animation: ${fadeIn} 0.3s ease-in-out;
`;
