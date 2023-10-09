import { Promo } from '@shared/__generated__/graphql';
import { Select, SelectContent, SelectTrigger } from '@shared/ui-kit';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

import { PromoSelectList } from './PromoSelectList';

type PromoSelectProps = {
  curr: number | null;
  list: Promo[];
  onChange: (promo: string | null) => void;
};

export function PromoSelect({ curr, list, onChange }: PromoSelectProps) {
  const unit = '기';

  return (
    <Select
      width="21rem"
      onValueChange={onChange}
      defaultValue={curr !== null ? curr.toString() : undefined}
      defaultRenderValue={
        curr !== null ? numberWithUnitFormatter(curr, unit) : undefined
      }
    >
      <SelectTrigger placeholder="전체" />
      <SelectContent maxHeight="20rem">
        <PromoSelectList list={list} />
      </SelectContent>
    </Select>
  );
}
