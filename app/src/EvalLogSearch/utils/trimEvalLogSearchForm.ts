import type { EvalLogSearchForm } from '@/EvalLogSearch/components/EvalLogSearchDialog';

export const trimEvalLogSearchForm = (
  form: EvalLogSearchForm,
): EvalLogSearchForm => {
  const { projectName, corrector, corrected, ...rest } = form;

  const newForm: EvalLogSearchForm = { ...rest };

  const trimmedProjectName = projectName?.trim();
  if (projectName) {
    newForm.projectName = trimmedProjectName;
  }

  const trimmedCorrector = corrector?.trim();
  if (corrector) {
    newForm.corrector = trimmedCorrector;
  }

  const trimmedCorrected = corrected?.trim();
  if (corrected) {
    newForm.corrected = trimmedCorrected;
  }

  return newForm;
};
