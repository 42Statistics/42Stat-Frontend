import { Subject } from '@/Calculator/types/OrderItemButtonGroup';

export const checkDuplicateSubject = (
  subjects: Subject[],
  subject: string,
  index: number,
) => {
  if (!subjects.length || subject === '') return false;
  const isDuplicate = subjects.some((item, idx) => {
    if (idx === index) return false;
    return item.name === subject;
  });
  return isDuplicate;
};
