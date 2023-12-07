import dayjs from 'dayjs';

import type { Promo } from '@shared/types/Promo';
import {
  CaptionThinText,
  Select,
  SelectContent,
  SelectTrigger,
} from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

import { useGetSelectKey } from '@/Leaderboard/hooks/useGetSelectKey';
import { PromoSelectList } from '@/Leaderboard/components//PromoSelect/PromoSelectList';

type PromoSelectProps = {
  curr: number | null;
  list: Promo[];
  onChange: (promo: string | null) => void;
};

export const PromoSelect = ({ curr, list, onChange }: PromoSelectProps) => {
  const unit = '기';

  const { promoSelectKey } = useGetSelectKey();

  const currentPromo = list.find((promo) => promo.promo === curr) ?? null;

  return (
    <Select
      key={promoSelectKey} // 이게 없으면 기수를 바꾼 채 다른 DateTemplate으로 이동해도 Select가 재렌더링되지 않음.
      width="20rem"
      onValueChange={onChange}
      defaultValue={curr !== null ? curr.toString() : undefined}
      defaultRenderValue={
        curr !== null ? numberWithUnitFormatter(curr, unit) : undefined
      }
    >
      <SelectTrigger
        right={
          currentPromo ? (
            <CaptionThinText>
              {dayjs(currentPromo.beginAt).format('YYYY. MM. DD.')}
            </CaptionThinText>
          ) : null
        }
        placeholder="전체 기수"
      />
      <SelectContent maxHeight="20rem">
        <PromoSelectList list={list} />
      </SelectContent>
    </Select>
  );
};
