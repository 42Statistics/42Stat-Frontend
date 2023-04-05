export const GunDefaultSvg = ({
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
        <circle cx="21" cy="21" r="21" fill="#FCC21B" />
        <mask
          id="mask0_246_5839"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="42"
          height="42"
        >
          <circle cx="21" cy="21" r="21" fill="#FCC21B" />
        </mask>
        <g mask="url(#mask0_246_5839)">
          <rect
            x="-6"
            y="28.3122"
            width="49.2318"
            height="7"
            transform="rotate(-45 -6 28.3122)"
            fill="white"
          />
          <rect
            x="8.5"
            y="43.8122"
            width="49.2318"
            height="7"
            transform="rotate(-45 8.5 43.8122)"
            fill="white"
          />
          <rect
            y="37.3122"
            width="49.2318"
            height="7"
            transform="rotate(-45 0 37.3122)"
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
      <circle cx="42" cy="42" r="42" fill="#FCC21B" />
      <mask
        id="mask0_49_754"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="84"
        height="84"
      >
        <circle cx="42" cy="42" r="42" fill="#FCC21B" />
      </mask>
      <g mask="url(#mask0_49_754)">
        <rect
          x="-12"
          y="56.6243"
          width="98.4636"
          height="14"
          transform="rotate(-45 -12 56.6243)"
          fill="white"
        />
        <rect
          x="17"
          y="87.6243"
          width="98.4636"
          height="14"
          transform="rotate(-45 17 87.6243)"
          fill="white"
        />
        <rect
          y="74.6243"
          width="98.4636"
          height="14"
          transform="rotate(-45 0 74.6243)"
          fill="white"
        />
      </g>
    </svg>
  );
};
