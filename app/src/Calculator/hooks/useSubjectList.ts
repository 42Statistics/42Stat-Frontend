import { useCallback } from 'react';

import { useAtomValue, useSetAtom } from 'jotai';

import { calculatorUserInfoAtom } from '@/Calculator/atoms/calculatorUserInfoAtom';
import { expTablesAtom } from '@/Calculator/atoms/expTablesAtom';
import { subjectListAtom } from '@/Calculator/atoms/subjectListAtom';
import { MAX_BLACKHOLE_DAYS } from '@/Calculator/constants/blackhole';
import { MAX_EXP_VALUE } from '@/Calculator/constants/exp';
import type { Subject } from '@/Calculator/types/Subject';

export const useSubjectList = () => {
  const setSubjectList = useSetAtom(subjectListAtom);
  const { expMaxTable, expReqTable } = useAtomValue(expTablesAtom);
  const { currentLevel, currentBlackhole, daysFromStart } = useAtomValue(
    calculatorUserInfoAtom,
  );

  const updateSubjectList = useCallback(
    (subjectList: Subject[]) => {
      let sum = daysFromStart + currentBlackhole;
      let finalLevel = currentLevel;

      const updatedList = subjectList.map((subject, index) => {
        const { score, bonus, exp } = subject;

        if (exp === null) {
          return subject;
        }

        const calculateSubjectExp = (
          exp: number,
          score: number,
          bonus: boolean,
        ) => {
          const expWithScore = exp * score;
          const expWithBonus = bonus
            ? Math.floor((expWithScore / 100) * 1.042)
            : Math.floor(expWithScore / 100);

          if (isNaN(expWithBonus)) return 0;
          return expWithBonus;
        };

        const calculateSubjectLevel = (newCurrentExp: number) => {
          const newDecimalLevel = expMaxTable.findIndex(
            (exp) => exp > newCurrentExp,
          );

          if (newDecimalLevel === -1) return expMaxTable.length - 1;

          //레벨 소숫점 2자리까지 Math.round로 계산
          const newLevel =
            Math.round(
              (newDecimalLevel +
                (newCurrentExp - expMaxTable[newDecimalLevel]) /
                  expReqTable[newDecimalLevel]) *
                100,
            ) / 100;

          if (isNaN(newLevel)) {
            console.log('isNaN returned');
            return 0;
          }
          return newLevel;
        };

        const calculateCurrentExp = (newStartLevel: number) => {
          const decimalLevel = Math.floor(newStartLevel);

          //최대 레벨에 도달한 경우
          if (decimalLevel >= expMaxTable.length - 1) {
            return expMaxTable[expMaxTable.length - 1];
          }
          const currentTotalExp = Math.floor(
            expMaxTable[decimalLevel] +
              expReqTable[decimalLevel + 1] * (newStartLevel - decimalLevel),
          );

          if (isNaN(currentTotalExp)) return 0;
          return currentTotalExp;
        };

        const calculateBlackhole = (
          startExp: number,
          endExp: number,
          sum: number,
        ) => {
          if (startExp >= MAX_EXP_VALUE) return 0;
          if (endExp >= MAX_EXP_VALUE) endExp = MAX_EXP_VALUE;

          //계산식 참조: https://medium.com/@benjaminmerchin/42-black-hole-deep-dive-cbc4b343c6b2
          const blackhole = Math.floor(
            ((endExp / 49980) ** 0.45 - (startExp / 49980) ** 0.45) * 483,
          );

          //받을 수 있는 총 블랙홀 수를 넘는 경우
          if (blackhole + sum > MAX_BLACKHOLE_DAYS) {
            const newBlackhole = Math.max(MAX_BLACKHOLE_DAYS - sum, 0);

            if (isNaN(newBlackhole)) return 0;
            return newBlackhole;
          }

          if (isNaN(blackhole)) return 0;
          return blackhole;
        };

        const newStartLevel = finalLevel;
        const newExp = calculateSubjectExp(exp, score, bonus);
        const currentExp = calculateCurrentExp(newStartLevel);
        const newCurrentExp = currentExp + newExp;
        const newLevel = calculateSubjectLevel(newCurrentExp);
        const newBlackhole = calculateBlackhole(currentExp, newCurrentExp, sum);
        sum += newBlackhole;
        finalLevel = newLevel;

        return {
          ...subject,
          id: index,
          expEdited: newExp,
          startLevel: newStartLevel,
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

  return { updateSubjectList };
};
