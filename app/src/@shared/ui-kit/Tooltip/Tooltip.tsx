import styled from '@emotion/styled';
import { PropsWithStringChildren } from '@shared/types/PropsWithChildren';
import { fadeIn } from '@shared/ui-kit-styled';
import { WhiteCaptionText } from '../Text';
import { TooltipContainer } from './TooltipContainer';

type TooltipPosition = 'top' | 'right' | 'bottom' | 'left';

type TooltipProps = PropsWithStringChildren<{
  position: TooltipPosition;
}>;

export const Tooltip = ({ position, children }: TooltipProps) => {
  return (
    <Layout className="tooltip" position={position}>
      <WhiteCaptionText>{children}</WhiteCaptionText>
    </Layout>
  );
};

Tooltip.Container = TooltipContainer;

type LayoutProps = {
  position: TooltipPosition;
};

const Layout = styled.div<LayoutProps>`
  position: absolute;

  ${({ position }) =>
    (position === 'top' &&
      `
        top: 0;
        left: 50%;
        transform: translate(-50%, calc(-100% - 10px));
      `) ||
    (position === 'right' &&
      `
        top: 50%;
        right: 0;
        transform: translate(calc(100% + 10px), -50%);
      `) ||
    (position === 'bottom' &&
      `
        bottom: 0;
        left: 50%;
        transform: translate(-50%, calc(100% + 10px));
      `) ||
    (position === 'left' &&
      `
        top: 50%;
        left: 0;
        transform: translate(calc(-100% - 10px), -50%);
      `)};

  width: max-content;
  height: max-content;
  z-index: ${({ theme }) => theme.zIndex.tooltip};

  padding: 0.2rem 1.4rem;
  background-color: ${({ theme }) => theme.colors.mono.black};
  border-radius: ${({ theme }) => theme.radius.xs};
  display: none;
  animation: ${fadeIn} 0.2s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.mono.black};
    z-index: ${({ theme }) => theme.zIndex.tooltip};

    ${({ position }) =>
      (position === 'top' &&
        `
        top: 100%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      `) ||
      (position === 'right' &&
        ` 
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%) rotate(45deg);
      `) ||
      (position === 'bottom' &&
        ` 
        top: 0;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
      `) ||
      (position === 'left' &&
        ` 
        top: 50%;
        right: 0;
        transform: translate(50%, -50%) rotate(45deg);
      `)};
  }
`;
