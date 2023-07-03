export type EvalLogSearchModel = {
  projectName: string;
  flag: 'all' | 'outstanding';
  corrector: string;
  corrected: string;
  sortOrder: 'asc' | 'desc';
};
