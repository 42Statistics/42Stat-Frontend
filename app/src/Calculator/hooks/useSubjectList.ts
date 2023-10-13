import { Subject } from '@/Calculator/types/OrderItemButton';
import { MAX_EXP_VALUE } from '@/Calculator/constants/EXP';
import { calculatorPropsAtom } from '../atoms/calculatorPropsAtom';
import { subjectListAtom } from '../atoms/subjectListAtom';
import { useAtom } from 'jotai';
import { useCallback } from 'react';

export const useSubjectList = () => {
  const [calculatorProps] = useAtom(calculatorPropsAtom);
  const { currentLevel, expMaxTable, expReqTable } = calculatorProps;
  const [subjectList, setSubjectList] = useAtom(subjectListAtom);

  const calculateBlackhole = (startExp: number, endExp: number) => {
    if (startExp >= MAX_EXP_VALUE) return 0;
    if (endExp >= MAX_EXP_VALUE) endExp = MAX_EXP_VALUE;
    const blackhole = Math.floor(
      ((endExp / 49980) ** 0.45 - (startExp / 49980) ** 0.45) * 483,
    );
    return blackhole;
  };
  const updateSubjectList = useCallback(
    (subjectList: Subject[]) => {
      let newStartLevel = -1;

      const updatedList = subjectList.map((subject) => {
        const { score, bonus, exp } = subject;
        if (newStartLevel === -1) newStartLevel = currentLevel;
        const editStartLevel = newStartLevel;
        const decimalLevel = Math.floor(newStartLevel);
        if (exp === null) return subject;
        const currentExp = Math.floor(
          expMaxTable[decimalLevel] +
            expReqTable[decimalLevel + 1] * (newStartLevel - decimalLevel),
        );
        const newExp = bonus
          ? Math.floor(((exp * score) / 100) * 1.042)
          : Math.floor((exp * score) / 100);
        const newCurrentExp = currentExp + newExp;
        const newDecimalLevel = expMaxTable.findIndex(
          (exp) => exp > newCurrentExp,
        );
        const newLevel =
          Math.round(
            (newDecimalLevel +
              (newCurrentExp - expMaxTable[newDecimalLevel]) /
                expReqTable[newDecimalLevel]) *
              100,
          ) / 100;
        const newBlackhole = calculateBlackhole(currentExp, newCurrentExp);

        newStartLevel = newLevel;

        return {
          ...subject,
          expEdited: newExp,
          startLevel: editStartLevel,
          finishLevel: newLevel,
          blackhole: newBlackhole,
        };
      });

      setSubjectList(updatedList); // 여기서 상태
    },
    [currentLevel, expMaxTable, expReqTable, setSubjectList],
  );

  return { subjectList, updateSubjectList };
};
