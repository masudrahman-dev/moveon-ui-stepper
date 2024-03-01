import clsx from "clsx";
import React from "react";

interface StepperFooterProps {
  progressWidth: string;
  stepNumber: number;
  handleBack: () => void;
  handleNext: () => void;
  handleSubmit?: () => void;
}

const StepperFooter: React.FC<StepperFooterProps> = ({
  progressWidth,
  stepNumber,
  handleBack,
  handleNext,
}) => {
  return (
    <div className="mt-7">
      <div className="flex justify-between">
        <button
          type="button"
          className={clsx("border p-3 rounded-lg shadow", {
            "bg-slate-300": stepNumber === 1,
          })}
          onClick={handleBack}
        >
          Back
        </button>

        {stepNumber === 4 ? (
          <button
            className={clsx("border p-3 rounded-lg shadow", {
              "bg-slate-300": stepNumber === 4,
            })}
            type="submit"
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            className={clsx("border p-3 rounded-lg shadow", {
              "bg-green-500": stepNumber === 4,
            })}
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default StepperFooter;
