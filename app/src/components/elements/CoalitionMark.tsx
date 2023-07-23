import { Image } from '@components/common';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Coalition } from '@shared/__generated__/graphql';
import coalition_gam_mark from '@shared/assets/coalition/mark/coalition-gam-mark.svg';
import coalition_gon_mark from '@shared/assets/coalition/mark/coalition-gon-mark.svg';
import coalition_gun_mark from '@shared/assets/coalition/mark/coalition-gun-mark.svg';
import coalition_lee_mark from '@shared/assets/coalition/mark/coalition-lee-mark.svg';
import ft_logo from '@shared/assets/logo/ft-logo.svg';

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

  const getCoalitionImageFallbackUrlById = (id: number) => {
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

  const getCoalitionImageUrlByCoalition = (coalition?: Coalition | null) => {
    if (
      coalition == null ||
      coalition.imageUrl == null ||
      coalition.color == null
    ) {
      return {
        imageUrl: ft_logo,
        imageFallbackUrl: ft_logo,
        backgroundColor: theme.colors.mono.white,
      };
    }
    return {
      imageUrl: coalition.imageUrl,
      imageFallbackUrl: getCoalitionImageFallbackUrlById(coalition.id),
      backgroundColor: coalition.color,
    };
  };

  const { imageUrl, imageFallbackUrl, backgroundColor } =
    getCoalitionImageUrlByCoalition(coalition);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>,
  ) => {
    e.currentTarget.src = imageFallbackUrl;
  };

  return (
    <StyledCoalitionMark
      src={imageUrl}
      onError={handleImageError}
      style={{
        width: size,
        height: size,
        backgroundColor,
      }}
    />
  );
};

const StyledCoalitionMark = styled(Image)`
  object-fit: cover;
  border-radius: ${({ theme }) => theme.radius.circle};
`;
