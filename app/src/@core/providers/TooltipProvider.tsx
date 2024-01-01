import { Outlet } from 'react-router-dom';

import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { tooltipAtom } from '@core/atoms/tooltipAtom';

import type { TooltipPosition } from '@shared/types/TooltipPosition';
import { WhiteCaptionText } from '@shared/ui-kit';
import { fadeIn } from '@shared/ui-kit-styled';

export const TooltipProvider = () => {
  const { ref, position, text } = useAtomValue(tooltipAtom);
  let top, left, refWidth, refHeight;

  if (ref) {
    const rect = ref.getBoundingClientRect();
    top = rect.top;
    left = rect.left;
    refWidth = rect.width;
    refHeight = rect.height;
    console.log(top, left, refWidth, refHeight);
  }

  return (
    <>
      {ref &&
        top !== undefined &&
        left !== undefined &&
        refWidth !== undefined &&
        refHeight !== undefined && (
          <Layout
            className="tooltip"
            hover={ref ? true : false}
            position={position}
            top={top}
            left={left}
            refWidth={refWidth}
            refHeight={refHeight}
          >
            <WhiteCaptionText>{text}</WhiteCaptionText>
          </Layout>
        )}
      <Outlet />
    </>
  );
};

type LayoutProps = {
  position: TooltipPosition;
  hover: boolean;
  top: number;
  left: number;
  refWidth: number;
  refHeight: number;
};

const Layout = styled.div<LayoutProps>`
  position: absolute;
  max-width: 45vw;

  ${({ position, top, left, refWidth, refHeight }) => {
    switch (position) {
      case 'top':
        return `
          top: ${top + window.scrollY}px;
          left: ${left + window.scrollX + 0.5 * refWidth}px;
          transform: translate(-50%, calc(-100% - 5px));
        `;
      case 'right':
        return `
          top: ${top + window.scrollY + 0.5 * refHeight}px;
          left: ${left + window.scrollX + refWidth}px;
          transform: translate(10px, -50%);
        `;
      case 'bottom':
        return `
          top: ${top + window.scrollY + refHeight}px;
          left: ${left + window.scrollX + 0.5 * refWidth}px;
          transform: translate(-50%, 5px);
        `;
      case 'left':
        return `
          top: ${top + window.scrollY + 0.5 * refHeight}px;
          left: ${left + window.scrollX}px;
          transform: translate(calc(-100% - 5px), -50%);
        `;
      default:
        return '';
    }
  }};

  width: max-content;
  height: max-content;
  z-index: ${({ theme }) => theme.zIndex.tooltip};

  padding: 0.2rem 1.4rem;
  background-color: ${({ theme }) => theme.colors.mono.black};
  border-radius: ${({ theme }) => theme.radius.xs};
  display: ${({ hover }) => (hover ? 'block' : 'none')};
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
