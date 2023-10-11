import { useAtom, useAtomValue } from 'jotai';
import { useCallback } from 'react';

import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { MAX_BLACKHOLE_DAYS } from '@/Calculator/constants/blackhole';
import { MAX_EXP_VALUE } from '@/Calculator/constants/exp';
import type { Subject } from '@/Calculator/types/OrderItemButtonGroup';
import { calculatorUserInfoAtom } from '../atoms/calculatorUserInfoAtom';
import { expTablesAtom } from '../atoms/expTablesAtom';

export const useSubjectList = () => {
  const [subjectList, setSubjectList] = useAtom(subjectListAtom);
  const { expMaxTable, expReqTable } = useAtomValue(expTablesAtom);
  const { currentLevel, currentBlackhole, daysFromStart } = useAtomValue(
    calculatorUserInfoAtom,
  );

  const calculateBlackhole = (
    startExp: number,
    endExp: number,
    sum: number,
  ) => {
    if (startExp >= MAX_EXP_VALUE) return 0;
    if (endExp >= MAX_EXP_VALUE) endExp = MAX_EXP_VALUE;
    const blackhole = Math.floor(
      ((endExp / 49980) ** 0.45 - (startExp / 49980) ** 0.45) * 483,
    );
    if (blackhole + sum > MAX_BLACKHOLE_DAYS)
      return MAX_BLACKHOLE_DAYS - sum < 0 ? 0 : MAX_BLACKHOLE_DAYS - sum;
    return blackhole;
  };

  const updateSubjectList = useCallback(
    (subjectList: Subject[]) => {
      let newStartLevel = -1;
      let sum = daysFromStart + currentBlackhole;

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
        const newBlackhole = calculateBlackhole(currentExp, newCurrentExp, sum);
        sum += newBlackhole;
        newStartLevel = newLevel;

        return {
          ...subject,
          expEdited: newExp,
          startLevel: editStartLevel,
          finishLevel: newLevel,
          blackhole: newBlackhole,
        };
      });
      setSubjectList(updatedList);
    },
    [
      currentLevel,
      daysFromStart,
      currentBlackhole,
      expMaxTable,
      expReqTable,
      setSubjectList,
    ],
  );

  return { subjectList, updateSubjectList };
};
