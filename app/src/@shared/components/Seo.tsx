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
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
    </Helmet>
  );
};
