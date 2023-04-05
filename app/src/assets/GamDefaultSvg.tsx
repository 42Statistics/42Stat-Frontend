export const GamDefaultSvg = ({
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
        <circle cx="21" cy="21" r="21" fill="#649CBC" />
        <mask
          id="mask0_246_5819"
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="42"
          height="42"
        >
          <circle cx="21" cy="21" r="21" fill="#D9D9D9" />
        </mask>
        <g mask="url(#mask0_246_5819)">
          <rect
            x="10.7197"
            y="-8.72986"
            width="27.6366"
            height="7"
            transform="rotate(45 10.7197 -8.72986)"
            fill="white"
          />
          <path
            d="M17.9497 27.5L25.2688 34.8191L32.588 42.1383L27.6382 47.088L13 32.4497L17.9497 27.5Z"
            fill="white"
          />
          <rect
            x="-2.4585"
            y="7.09183"
            width="25.7674"
            height="7"
            transform="rotate(45 -2.4585 7.09183)"
            fill="white"
          />
          <rect
            x="6.44971"
            y="1.5"
            width="49.2318"
            height="7"
            transform="rotate(45 6.44971 1.5)"
            fill="white"
          />
          <rect
            x="6.44971"
            y="1.5"
            width="49.2318"
            height="7"
            transform="rotate(45 6.44971 1.5)"
            fill="white"
          />
          <path
            d="M32.4497 13L48.7984 29.3487L43.8487 34.2984L27.5 17.9497L32.4497 13Z"
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
      <circle cx="42" cy="42" r="42" fill="#649CBC" />
      <mask
        id="mask0_49_752"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="84"
        height="84"
      >
        <circle cx="42" cy="42" r="42" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_49_752)">
        <rect
          x="21.4395"
          y="-17.4597"
          width="55.2732"
          height="14"
          transform="rotate(45 21.4395 -17.4597)"
          fill="white"
        />
        <path
          d="M35.8994 55L50.5377 69.6383L65.176 84.2766L55.2765 94.176L25.9999 64.8995L35.8994 55Z"
          fill="white"
        />
        <rect
          x="-4.91699"
          y="14.1837"
          width="51.5349"
          height="14"
          transform="rotate(45 -4.91699 14.1837)"
          fill="white"
        />
        <rect
          x="12.8994"
          y="3"
          width="98.4636"
          height="14"
          transform="rotate(45 12.8994 3)"
          fill="white"
        />
        <rect
          x="12.8994"
          y="3"
          width="98.4636"
          height="14"
          transform="rotate(45 12.8994 3)"
          fill="white"
        />
        <path
          d="M64.8994 26L97.5968 58.6974L87.6973 68.5969L54.9999 35.8995L64.8994 26Z"
          fill="white"
        />
      </g>
    </svg>
  );
};
