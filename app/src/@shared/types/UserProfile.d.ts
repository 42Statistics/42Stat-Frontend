import { Coalition } from '@shared/types/Coalition';

export type UserProfile = {
  id: number;
  login: string;
  imgUrl?: string | null;
  grade: string;
  displayname: string;
  level: number;
  coalition?: Coalition | null;
  titles: Array<{
    titleId: number;
    name: string;
    selected: boolean;
    createdAt: string;
    updatedAt: string;
  }>;
};

/* ToDo: graphql의 Coalition 타입이 수정되면 삭제할 것 */
