import { useRef } from 'react';

import { useTheme } from '@emotion/react';

import { useTooltipEventHandler } from '@shared/hooks/useTooltipEventHandler';
import { Label, type LabelProps } from '@shared/ui-kit';

type CharacterTypeLabelProps = Omit<
  LabelProps,
  'size' | 'color' | 'fontWeight'
> & {
  description: string;
};

export const CharacterTypeLabel = ({
  backgroundColor,
  children,
  description,
}: CharacterTypeLabelProps) => {
  const theme = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  const { handleMouseEnter, handleMouseLeave } = useTooltipEventHandler({
    position: 'top',
    text: description,
  });

  return (
    <div
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Label
        color={theme.colors.mono.absolute.white}
        backgroundColor={backgroundColor}
      >
        {children}
      </Label>
    </div>
  );
};
