export const GonSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="21" cy="21" r="21" fill="#559F7A" />
      <mask
        id="mask0_246_5829"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="42"
        height="42"
      >
        <circle cx="21" cy="21" r="21" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_246_5829)">
        <rect
          x="-9.9314"
          y="32.2435"
          width="28.6286"
          height="7"
          transform="rotate(-45 -9.9314 32.2435)"
          fill="white"
        />
        <rect
          x="5"
          y="47.2435"
          width="28.6286"
          height="7"
          transform="rotate(-45 5 47.2435)"
          fill="white"
        />
        <rect
          x="-2.5"
          y="39.7435"
          width="28.6286"
          height="7"
          transform="rotate(-45 -2.5 39.7435)"
          fill="white"
        />
        <rect
          x="13"
          y="9.2435"
          width="28.6286"
          height="7"
          transform="rotate(-45 13 9.2435)"
          fill="white"
        />
        <rect
          x="27.9314"
          y="24.2435"
          width="28.6286"
          height="7"
          transform="rotate(-45 27.9314 24.2435)"
          fill="white"
        />
        <rect
          x="20.4314"
          y="16.7435"
          width="28.6286"
          height="7"
          transform="rotate(-45 20.4314 16.7435)"
          fill="white"
        />
      </g>
    </svg>
  );
};
