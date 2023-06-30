export type RankingItemType = {
  id: number;
  name: string;
  value: number;
  rank: number;
  link?: string;
};

export type RankingUserItemType = RankingItemType & {
  imgUrl?: string | null;
};
