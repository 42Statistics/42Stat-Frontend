import { CoalitionSelectList } from '@/Leaderboard/components/CoalitionSelect/CoalitionSelectList';
import { useGetPromoSelectKey } from '@/Leaderboard/components/PromoSelect/hooks/useGetPromoSelectKey';
import type { Coalition } from '@shared/__generated__/graphql';
import { Select, SelectContent, SelectTrigger } from '@shared/ui-kit';

type CoalitionSelectProps = {
  curr: number | null;
  list: Coalition[];
  onChange: (coalition: string | null) => void;
};

export const CoalitionSelect = ({
  curr,
  list,
  onChange,
}: CoalitionSelectProps) => {
  return (
    <Select
      // key={promoSelectKey} // 이게 없으면 기수를 바꾼 채 다른 DateTemplate으로 이동해도 Select가 재렌더링되지 않음.
      width="20rem"
      onValueChange={onChange}
      defaultValue={curr !== null ? curr.toString() : undefined}
      defaultRenderValue={curr !== null ? curr.toString() : undefined}
    >
      <SelectTrigger placeholder="전체 코알리숑" />
      <SelectContent maxHeight="20rem">
        <CoalitionSelectList list={list} />
      </SelectContent>
    </Select>
  );
};
