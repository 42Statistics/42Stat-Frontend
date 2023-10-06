import styled from '@emotion/styled';
import { useAtomValue } from 'jotai';

import { leaderboardPromoListAtom } from '@/Leaderboard/atoms/leaderboardPromoListAtom';
import { LeaderboardDateDescriptor } from '@/Leaderboard/components/Leaderboard/LeaderboardDateDescriptor';
import { PromoSelectList } from '@/Leaderboard/components/PromoSelect/PromoSelectList';
import { Select, SelectContent, SelectTrigger } from '@shared/ui-kit';
import { mq } from '@shared/utils/facepaint/mq';
import { numberWithUnitFormatter } from '@shared/utils/formatters/numberWithUnitFormatter';

type LeaderboardHeaderProps = {
  currSegmentIndex?: number;
  currPromo: number | null;
  onPromoChange: (promo: string | null) => void;
  start: Date;
  end: Date;
};

export function LeaderboardHeader({
  currSegmentIndex,
  currPromo,
  onPromoChange,
  start,
  end,
}: LeaderboardHeaderProps) {
  const promoList = useAtomValue(leaderboardPromoListAtom);

  if (promoList === null) {
    throw new Error('promoList is null');
  }

  const unit = '기';

  return (
    <Layout>
      <Select
        key={currSegmentIndex}
        width="21rem"
        onValueChange={onPromoChange}
        defaultValue={currPromo !== null ? String(currPromo) : undefined}
        defaultRenderValue={
          currPromo !== null
            ? numberWithUnitFormatter(currPromo, unit)
            : undefined
        }
      >
        <SelectTrigger placeholder="전체" />
        <SelectContent maxHeight="20rem">
          <PromoSelectList list={promoList ?? []} />
        </SelectContent>
      </Select>
      <LeaderboardDateDescriptor start={start} end={end} />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${mq({
    flexDirection: ['column', 'row'],
    justifyContent: ['center', 'space-between'],
    gap: ['2rem', 0],
  })}
`;
