export type RankingItemType = {
  id: number;
  name: string;
  value: number;
  rank: number;
};

export type RankingUserItemType = RankingItemType & {
  imgUrl?: string | null;
};
