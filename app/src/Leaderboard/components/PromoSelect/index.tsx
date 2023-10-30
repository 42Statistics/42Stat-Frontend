import { PromoSelectList } from '@/Leaderboard/components//PromoSelect/PromoSelectList';
import { useGetSelectKey } from '@/Leaderboard/hooks/useGetSelectKey';
import type { Promo } from '@/Leaderboard/types/Promo';
import { Select, SelectContent, SelectTrigger } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

type PromoSelectProps = {
  curr: number | null;
  list: Promo[];
  onChange: (promo: string | null) => void;
};

export const PromoSelect = ({ curr, list, onChange }: PromoSelectProps) => {
  const unit = '기';

  const { promoSelectKey } = useGetSelectKey();

  return (
    <Select
      key={promoSelectKey} // 이게 없으면 기수를 바꾼 채 다른 DateTemplate으로 이동해도 Select가 재렌더링되지 않음.
      width="21rem"
      onValueChange={onChange}
      defaultValue={curr !== null ? curr.toString() : undefined}
      defaultRenderValue={
        curr !== null ? numberWithUnitFormatter(curr, unit) : undefined
      }
    >
      <SelectTrigger placeholder="전체 기수" />
      <SelectContent maxHeight="20rem">
        <PromoSelectList list={list} />
      </SelectContent>
    </Select>
  );
};
