import { CoalitionSelectList } from '@/Leaderboard/components/CoalitionSelect/CoalitionSelectList';
import { useGetSelectKey } from '@/Leaderboard/hooks/useGetSelectKey';
import type { Coalition } from '@/Leaderboard/types/Coalition';
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
  const { coalitionSelectKey } = useGetSelectKey();

  const currentCoalition =
    list.find((coalition) => coalition.id === curr) ?? null;

  return (
    <Select
      key={coalitionSelectKey} // 이게 없으면 기수를 바꾼 채 다른 DateTemplate으로 이동해도 Select가 재렌더링되지 않음.
      width="20rem"
      onValueChange={onChange}
      defaultValue={
        currentCoalition !== null ? currentCoalition.name : undefined
      }
      defaultRenderValue={
        currentCoalition !== null ? currentCoalition.name : undefined
      }
    >
      <SelectTrigger placeholder="전체 코알리숑" />
      <SelectContent maxHeight="20rem">
        <CoalitionSelectList list={list} />
      </SelectContent>
    </Select>
  );
};
