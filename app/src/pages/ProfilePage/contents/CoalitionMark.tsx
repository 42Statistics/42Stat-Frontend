import { CoaliltionName, Coalition } from '@/__generated__/graphql';
import { GamDefaultSvg } from '@/assets/GamDefaultSvg';
import { GonDefaultSvg } from '@/assets/GonDefaultSvg';
import { GunDefaultSvg } from '@/assets/GunDefaultSvg';
import { LeeDefaultSvg } from '@/assets/LeeDefaultSvg';

export const CoalitionMark = ({
  coalition,
}: {
  coalition?: Coalition | null;
}) => {
  if (!coalition || !coalition.name) return <></>;

  switch (coalition.name) {
    case CoaliltionName.Gun:
      return <GunDefaultSvg size="small" />;
    case CoaliltionName.Gon:
      return <GonDefaultSvg size="small" />;
    case CoaliltionName.Gam:
      return <GamDefaultSvg size="small" />;
    case CoaliltionName.Lee:
      return <LeeDefaultSvg size="small" />;
    default:
      return <></>;
  }
};
