import { CoaliltionName, Coalition } from '@/__generated__/graphql';
import { GamSvg, GonSvg, GunSvg, LeeSvg } from '@/assets/coalition';

type CoalitionMarkProps = {
  coalition: Coalition | null | undefined;
  width?: string;
};
export const CoalitionMark = ({
  coalition,
  width = '24px',
}: CoalitionMarkProps) => {
  if (coalition == null) {
    return <></>;
  }

  switch (coalition.name) {
    case CoaliltionName.Gun:
      return <GunSvg width={width} />;
    case CoaliltionName.Gon:
      return <GonSvg width={width} />;
    case CoaliltionName.Gam:
      return <GamSvg width={width} />;
    case CoaliltionName.Lee:
      return <LeeSvg width={width} />;
    default:
      return <></>;
  }
};
