import { GamSmallSvg } from '@/assets/GamSmallSvg';
import { GonSmallSvg } from '@/assets/GonSmallSvg';
import { GunSmallSvg } from '@/assets/GunSmallSvg';
import { LeeSmallSvg } from '@/assets/LeeSmallSvg';
import { CoaliltionName, Coalition } from '@/__generated__/graphql';

export const CoalitionMark = ({
  coalition,
}: {
  coalition?: Coalition | null;
}) => {
  if (!coalition || !coalition.name) return <></>;
  if (coalition.name === CoaliltionName.Gun) return <GunSmallSvg />;
  if (coalition.name === CoaliltionName.Gon) return <GonSmallSvg />;
  if (coalition.name === CoaliltionName.Gam) return <GamSmallSvg />;
  if (coalition.name === CoaliltionName.Lee) return <LeeSmallSvg />;
  return <></>;
};
