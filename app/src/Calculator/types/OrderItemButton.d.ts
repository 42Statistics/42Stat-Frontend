export interface TableRowList {
  id: number;
}

export type Subject = TableRowList & {
  name: string;
  exp: number | null;
  expEdited: number | null;
  score: number;
  bonus: boolean;
  blackhole: number;
  startLevel: number;
  finishLevel: number;
};
