import { ReactNode, createContext, useContext } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

interface StepperContextProps {
  firstName?: string;
  lastName?: string;
}

export const StepperContext = createContext<StepperContextProps>({});


export const useStepperForm = () => {
  const context = useContext(StepperContext);
  const stepperForm = useFormContext();

  if (!context) {
    throw new Error("useStepperForm must be used within StepperFormProvider");
  }

  return {
    context,
    stepprForm: stepperForm,
  };
};

const StepperFormProvider = ({ children }: { children?: ReactNode }) => {
  const stepperForm = useForm();

  return (
    <StepperContext.Provider value={{}}>
      <FormProvider {...stepperForm}>{children}</FormProvider>
    </StepperContext.Provider>
  );
};
export default StepperFormProvider;
