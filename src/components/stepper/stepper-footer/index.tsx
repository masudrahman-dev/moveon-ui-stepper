import clsx from "clsx";
import React from "react";

interface StepperFooterProps {
  progressWidth: string;
  handleBack: () => void;
  handleNext: () => void;
}

const StepperFooter: React.FC<StepperFooterProps> = ({
  progressWidth,
  handleBack,
  handleNext,
}) => {
  return (
    <div className="mt-7">
      <div className="flex justify-between">
        <button
          className={clsx("border p-3 rounded-lg shadow", {
            "bg-slate-300": progressWidth === "0%",
          })}
          onClick={handleBack}
        >
          Back
        </button>
        <button
          disabled={progressWidth === "100%"}
          className={clsx("border p-3 rounded-lg shadow", {
            "bg-slate-300": progressWidth === "100%",
          })}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default StepperFooter;
