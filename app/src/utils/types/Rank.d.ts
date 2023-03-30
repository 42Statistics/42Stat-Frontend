type RankList = {
  id: string;
  name: string;
  value: number;
  imgUrl?: string;
};
type RankProp = {
  rankList: RankList[];
  cnt: number;
  unit: string;
};
