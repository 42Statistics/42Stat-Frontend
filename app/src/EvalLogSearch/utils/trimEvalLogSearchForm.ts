import type { EvalLogSearchForm } from '@/EvalLogSearch/components/EvalLogSearchDialog';

export const trimEvalLogSearchForm = (
  form: EvalLogSearchForm,
): EvalLogSearchForm => {
  const { projectName, corrector, corrected } = form;

  return {
    ...form,
    projectName: projectName?.trim() ?? undefined,
    corrector: corrector?.trim() ?? undefined,
    corrected: corrected?.trim() ?? undefined,
  };
};
