import { MenuIconSvgProps } from '@/utils/types/Menu';
import { useTheme } from '@emotion/react';

export const HomeIconSvg = ({ isFocused }: MenuIconSvgProps) => {
  const theme = useTheme();

  return (
    <svg
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 24V8L10.5 0L21 8V24H13.125V14.6667H7.875V24H0Z"
        fill={
          isFocused ? theme.colors.primary.default : theme.colors.mono.black
        }
      />
    </svg>
  );
};
