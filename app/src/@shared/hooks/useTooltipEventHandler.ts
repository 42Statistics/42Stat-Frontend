import { useSetAtom } from 'jotai';

import { tooltipAtom } from '@core/atoms/tooltipAtom';

import type { TooltipPosition } from '@shared/types/TooltipPosition';

type UseTooltipEventHandlerProps = {
  position: TooltipPosition;
  text: string;
};

export const useTooltipEventHandler = ({
  position,
  text,
}: UseTooltipEventHandlerProps) => {
  const setTooltip = useSetAtom(tooltipAtom);

  const handleMouseEnter: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setTooltip({
      ref: event.currentTarget,
      position,
      text,
    });
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    setTooltip({
      ref: null,
      position,
      text,
    });
  };

  return {
    handleMouseEnter,
    handleMouseLeave,
  };
};
