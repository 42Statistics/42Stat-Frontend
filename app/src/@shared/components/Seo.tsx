import { Helmet } from 'react-helmet-async';

type SeoProps = {
  title?: string;
  description?: string;
};

export const Seo = ({
  title,
  description = '42Stat은 42서울의 교육생들을 위한 통계 서비스입니다.',
}: SeoProps) => {
  return (
    <Helmet>
      <title>{title ? `${title} | 42Stat` : '42Stat'}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content="https://stat.42seoul.kr" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="42Stat" />
      <meta property="og:description" content={description} />
      {/* TODO: og:image 추가 */}
      <meta
        property="og:image"
        content="https://stat.42seoul.kr/og-image.png"
      />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};
