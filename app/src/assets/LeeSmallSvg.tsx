export const LeeSmallSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="21" cy="21" r="21" fill="#BB4140" />
      <mask
        id="mask0_246_5846"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="42"
        height="42"
      >
        <circle cx="21" cy="21" r="21" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_246_5846)">
        <rect
          x="13.2335"
          y="-6.28787"
          width="49.2318"
          height="7"
          transform="rotate(45 13.2335 -6.28787)"
          fill="white"
        />
        <rect
          x="-1.76685"
          y="7.71213"
          width="49.2318"
          height="7"
          transform="rotate(45 -1.76685 7.71213)"
          fill="white"
        />
        <path
          d="M-11.7666 -16.7879L23.0456 18.0243L18.0958 22.974L-16.7163 -11.8381L-11.7666 -16.7879Z"
          fill="white"
        />
        <rect
          x="25.2335"
          y="20.2121"
          width="49.2318"
          height="7"
          transform="rotate(45 25.2335 20.2121)"
          fill="white"
        />
      </g>
    </svg>
  );
};
