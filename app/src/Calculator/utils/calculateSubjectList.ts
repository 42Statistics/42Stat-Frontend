import { Subject } from '@/Calculator/atoms/SubjectListAtom';
import {
  EXP_MAX,
  EXP_REQUIRED_FOR_NEXT_LEVEL,
  MAX_EXP_VALUE,
} from '@/Calculator/constants/EXP';

export const calculateSubjectList = ({
  subjectList,
  newSubject,
}: CalculateSubjectListProps) => {
  if (!subjectList.length) return [];
  newSubject && subjectList.push(newSubject);
  let newStartLevel = -1;

  const calculateBlackhole = (startExp: number, endExp: number) => {
    if (startExp >= MAX_EXP_VALUE) return 0;
    if (endExp >= MAX_EXP_VALUE) endExp = MAX_EXP_VALUE;
    const blackhole = Math.floor(
      ((endExp / 49980) ** 0.45 - (startExp / 49980) ** 0.45) * 483,
    );
    return blackhole;
  };

  const newCalculatedList = subjectList.map((subject) => {
    const { startLevel, score, bonus, exp } = subject;
    if (newStartLevel === -1) newStartLevel = startLevel;
    if (exp === null) return subject;
    const editStartLevel = newStartLevel;
    const decimalLevel = Math.floor(newStartLevel);
    const currentExp = Math.floor(
      EXP_MAX[decimalLevel] +
        EXP_REQUIRED_FOR_NEXT_LEVEL[decimalLevel] *
          (newStartLevel - decimalLevel),
    );
    const newExp = bonus
      ? Math.floor(((exp * score) / 100) * 1.042)
      : Math.floor((exp * score) / 100);
    const newCurrentExp = currentExp + newExp;
    const newDecimalLevel = EXP_MAX.findIndex((exp) => exp > newCurrentExp);
    const newLevel =
      Math.round(
        (newDecimalLevel +
          (newCurrentExp - EXP_MAX[newDecimalLevel]) /
            EXP_REQUIRED_FOR_NEXT_LEVEL[newDecimalLevel - 1]) *
          100,
      ) / 100;
    const newBlackhole = calculateBlackhole(currentExp, newCurrentExp);

    newStartLevel = newLevel;
    return {
      ...subject,
      startLevel: editStartLevel,
      finishLevel: newLevel,
      blackhole: newBlackhole,
    };
  });

  return newCalculatedList;
};

type CalculateSubjectListProps = {
  subjectList: Subject[];
  newSubject?: Subject;
};
