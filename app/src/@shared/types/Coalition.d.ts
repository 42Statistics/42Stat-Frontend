export type Coalition = {
  id: number;
  name: string;
  imgUrl: string;
  coverUrl: string;
  color: string;
};

/* ToDo: graphql의 Coalition 타입이 수정되면 삭제할 것
현재 타입
export type Coalition = {
	id: number;
	name: string;
	imgUrl: string;
	coverUrl: string;
	color: string;
	imageUrl: string;
	userId: number;
	score: number;
	slug: string;
};
*/
