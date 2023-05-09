import { useTheme } from '@emotion/react';

export const AppLogoSvg = (props: React.SVGProps<SVGSVGElement>) => {
  const theme = useTheme();

  return (
    <svg
      viewBox="0 0 39 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.0463 28.2061H38.1099V25.1603H16.0463V28.2061ZM31.9811 11.4542H36.8841V22.1145H31.9811V11.4542ZM24.6266 0.793823H29.5296V22.1145H24.6266V0.793823ZM17.2721 5.36254H22.1751V22.1145H17.2721V5.36254Z"
        fill={props.fill ?? theme.colors.primary.default}
      />
      <path
        d="M14.709 24.1946H0V22.1145H14.709V24.1946ZM4.08584 12.7542H0.817168V20.0345H4.08584V12.7542ZM8.98885 5.474H5.72018V20.0345H8.98885V5.474ZM13.8919 8.5941H10.6232V20.0345H13.8919V8.5941Z"
        fill={props.fill ?? theme.colors.primary.default}
      />
    </svg>
  );
};
