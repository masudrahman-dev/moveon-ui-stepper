import clsx from "clsx";
import React, { useState } from "react";
import StepperHeader from "./stepper-header";
import StepperFooter from "./stepper-footer";
import { Steps } from "./steps";

const Stepper = () => {
  const [stepNumber, setStepNumber] = useState(1);

  const handleNext = () => {
    if (stepNumber < 5) {
      setStepNumber(stepNumber + 1);
    }
  };

  const handleBack = () => {
    if (stepNumber > 1) {
      setStepNumber(stepNumber - 1);
    }
  };

  const progressWidth = ((stepNumber - 1) / 4) * 100 + "%";
  const iconPosition = `calc(${progressWidth} - 0.5rem)`;
  const iconTextPosition = `calc(${progressWidth} - 1.5rem)`;

  return (
    <div className="mx-auto  mt-10 max-w-screen-lg">
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
          progressWidth={progressWidth}
        />
      </div>
    </div>
  );
};

export default Stepper;
