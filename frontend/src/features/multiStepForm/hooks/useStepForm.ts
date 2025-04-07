import { useContext } from "react";
import { StepFormContext } from "../context/pagination";

export const useStepForm = () => {
    const StepFormData = useContext(StepFormContext);

    if (!StepFormData) {
        throw new Error("useStepForm must be used within a <StepFormContextProvider />");
    }

    const { step } = StepFormData[0];

    const nextStep = () => {
        if(step === 26) return;
        StepFormData[1].setStep(step + 1);
    }

    const previousStep = () => { 
        if(step === 0) return;
        StepFormData[1].setStep(step - 1);
    }

    const resetSteps = () => {
        StepFormData[1].setStep(0);
    }

    const isBackButton = step > 0;
 
    return {nextStep, previousStep, resetSteps, step, isBackButton};
};
