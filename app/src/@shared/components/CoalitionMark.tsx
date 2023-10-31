import { Theme, useTheme } from '@emotion/react';
import styled from '@emotion/styled';

import type { Coalition } from '@shared/types/Coalition';
import coalition_gam_mark from '@shared/assets/coalition/mark/coalition-gam-mark.svg';
import coalition_gon_mark from '@shared/assets/coalition/mark/coalition-gon-mark.svg';
import coalition_gun_mark from '@shared/assets/coalition/mark/coalition-gun-mark.svg';
import coalition_lee_mark from '@shared/assets/coalition/mark/coalition-lee-mark.svg';
import ft_logo from '@shared/assets/logo/ft-logo.svg';
import { ALT } from '@shared/constants/accessibility';
import { Image } from '@shared/ui-kit';

type CoalitionMarkProps = {
  coalition?: Coalition | null;
  size?: string;
};

// TODO: 로드되기 전까지 coalition.color로 뒤에 띄워주기
export const CoalitionMark = ({
  coalition,
  size = '18px',
}: CoalitionMarkProps) => {
  const theme = useTheme();

  const { imgUrl, imgFallbackUrl, backgroundColor } =
    getCoalitionImgUrlByCoalition(theme, coalition);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = imgFallbackUrl;
  };

  return (
    <StyledCoalitionMark
      src={imgUrl}
      alt={
        coalition != null ? ALT.COALITION_LOGO_OF(coalition.name) : ALT.LOGO_42
      }
      onError={handleImageError}
      style={{
        width: size,
        height: size,
        backgroundColor,
      }}
    />
  );
};

const getCoalitionImgUrlByCoalition = (
  theme: Theme,
  coalition?: Coalition | null,
) => {
  if (
    coalition == null ||
    coalition.imgUrl == null ||
    coalition.color == null
  ) {
    return {
      imgUrl: ft_logo,
      imgFallbackUrl: ft_logo,
      backgroundColor: theme.colors.mono.white,
    };
  }
  return {
    imgUrl: coalition.imgUrl,
    imgFallbackUrl: getCoalitionImgFallbackUrlById(coalition.id),
    backgroundColor: coalition.color,
  };
};

const getCoalitionImgFallbackUrlById = (id: number) => {
  switch (id) {
    case 85:
      return coalition_gun_mark;
    case 86:
      return coalition_gon_mark;
    case 87:
      return coalition_gam_mark;
    case 88:
      return coalition_lee_mark;
    default:
      return ft_logo;
  }
};

const StyledCoalitionMark = styled(Image)`
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.circle};
`;
