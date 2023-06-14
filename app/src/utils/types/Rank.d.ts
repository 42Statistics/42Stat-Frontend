// FIXME: RankItemProps와 이름이 혼동될 수 있음. 데이터 타입과 컴포넌트 타입명을 구분할 필요가 있음.
export type RankItemType = {
  id: number;
  name: string;
  value: number;
  rank: number;
};

export type RankUserItemType = RankItemType & {
  imgUrl?: string | null;
};
