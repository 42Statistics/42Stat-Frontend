import { css } from '@emotion/react';

export const global = () => css`
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Thin.woff') format('woff');
    font-weight: 100;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-ExtraLight.woff') format('woff');
    font-weight: 200;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Light.woff') format('woff');
    font-weight: 300;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-ExtraBold.woff') format('woff');
    font-weight: 800;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Black.woff') format('woff');
    font-weight: 900;
  }

  html {
    // FIXME: 이렇게 하는거 맞나? 휴대폰으로 보면 다 뭉개지던데.
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    font-family: 'Pretendard', sans-serif;
    background-color: #e4e3ea; // FIXME: Global이라 theme 적용 방법을 모르겠다.
    font-size: 1.4rem;
  }
`;
