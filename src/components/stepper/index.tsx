import React, { useState } from "react";
import StepperHeader from "./stepper-header-arrow";
import StepperFooter from "./stepper-footer";
import { Steps } from "./steps";
import { useStepperForm } from "./stepper-context";

const Stepper = () => {
  const [stepNumber, setStepNumber] = useState(1);

  const { context, stepprForm } = useStepperForm();

  const {
    formState: { errors },
    handleSubmit,
  } = stepprForm;

  const onSubmit = (data) => {
    alert("data");

    console.log("data :>> ", data);
  };

  const handleNext = () => {
    if (stepNumber <= 3) {
      setStepNumber((c) => c + 1);
    }
  };

  const handleBack = () => {
    if (stepNumber > 1) {
      setStepNumber((c) => c - 1);
    }
  };

  const progressWidth = ((stepNumber - 1) / 4) * 100 + "%";
  const iconPosition = `calc(${progressWidth} - 0.5rem)`;
  const iconTextPosition = `calc(${progressWidth} - 1.5rem)`;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto  mt-10 max-w-[650px]"
    >
      <div className="border rounded-lg p-10">
        <StepperHeader
          iconPosition={iconPosition}
          progressWidth={progressWidth}
          stepNumber={stepNumber}
          iconTextPosition={iconTextPosition}
        />

        <div className="h-96 mt-14">
          <Steps currentStepNumber={stepNumber} />
        </div>

        <StepperFooter
          handleBack={handleBack}
          handleNext={handleNext}
          stepNumber={stepNumber}
          progressWidth={progressWidth}
        />
      </div>
    </form>
  );
};

export default Stepper;
