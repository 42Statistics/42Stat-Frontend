export const LeeDefaultSvg = ({
  size = 'default',
  ...props
}: React.SVGProps<SVGSVGElement> & SvgSize) => {
  if (size === 'small')
    return (
      <svg
        width="42"
        height="42"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
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

  return (
    <svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="42" cy="42" r="42" fill="#BB4140" />
      <mask
        id="mask0_49_755"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="84"
        height="84"
      >
        <circle cx="42" cy="42" r="42" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_49_755)">
        <rect
          x="26.467"
          y="-12.5757"
          width="98.4636"
          height="14"
          transform="rotate(45 26.467 -12.5757)"
          fill="white"
        />
        <rect
          x="-3.53345"
          y="15.4243"
          width="98.4636"
          height="14"
          transform="rotate(45 -3.53345 15.4243)"
          fill="white"
        />
        <path
          d="M-23.533 -33.5757L46.0913 36.0486L36.1919 45.9481L-33.4325 -23.6762L-23.533 -33.5757Z"
          fill="white"
        />
        <rect
          x="50.467"
          y="40.4243"
          width="98.4636"
          height="14"
          transform="rotate(45 50.467 40.4243)"
          fill="white"
        />
      </g>
    </svg>
  );
};
