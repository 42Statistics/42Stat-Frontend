export const GunSvg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
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
};
