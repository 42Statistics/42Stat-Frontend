import { CoalitionMark } from '@shared/components/CoalitionMark';
import type { Coalition } from '@shared/types/Coalition';
import { Select, SelectContent, SelectTrigger } from '@shared/ui-kit';

import { useGetSelectKey } from '@/Leaderboard/hooks/useGetSelectKey';
import { CoalitionSelectList } from '@/Leaderboard/components/CoalitionSelect/CoalitionSelectList';

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
        currentCoalition !== null ? currentCoalition.id.toString() : undefined
      }
      defaultRenderValue={
        currentCoalition !== null ? currentCoalition.name : undefined
      }
    >
      <SelectTrigger
        left={
          currentCoalition ? (
            <CoalitionMark coalition={currentCoalition} />
          ) : null
        }
        placeholder="전체 코알리숑"
      />
      <SelectContent maxHeight="20rem">
        <CoalitionSelectList list={list} />
      </SelectContent>
    </Select>
  );
};
