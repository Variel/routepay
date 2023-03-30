import { ReactNode, useState } from "react";

export const useWizard = (maxSteps: number) => {
  const [currentStep, setStep] = useState(0);

  const nextStep = () =>
    setStep((step) => (step < maxSteps - 1 ? step + 1 : step));
  const prevStep = () => setStep((step) => (step > 0 ? step - 1 : step));

  const renderStep = (steps: ReactNode[]) => {
    return steps[currentStep] ?? null;
  };

  return {
    currentStep,
    renderStep,
    nextStep,
    prevStep,
  };
};
