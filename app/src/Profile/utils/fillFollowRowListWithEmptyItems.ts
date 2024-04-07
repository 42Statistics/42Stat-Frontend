import { MyFollow } from '@shared/__generated__/graphql';

import { FollowItemWithEmptyType } from '@/Profile/types/Follow';

export const fillFollowRowListWithEmptyItems = (
  array: MyFollow[],
  totalSize: number,
) => {
  const chunks = [];
  const chunk: FollowItemWithEmptyType[] = array;
  const emptySize = totalSize - array.length;

  chunks.push(chunk);

  for (let i = 0; i < emptySize; i++) {
    chunk.push(null);
  }
  return chunks;
};
