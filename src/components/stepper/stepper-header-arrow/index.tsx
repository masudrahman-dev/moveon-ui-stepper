import React from "react";
import StepperArrowIcon from "../../fundamentals/icons/stepper-arrow";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { CheckCircleSolid } from "@medusajs/icons";

interface StepperHeaderProps {
  progressWidth: string;
  iconPosition: string;
  stepNumber: number;
  iconTextPosition: string;
}
interface StepperArrowProps {
  iconColor?: string;
  label: string;
  textColor?: string;
}

const StepperArrow: React.FC<StepperArrowProps> = ({
  iconColor,
  label,
  textColor,
}) => {
  return (
    <div className="relative ">
      <div>
        <StepperArrowIcon color={iconColor} />
      </div>

      <div
        className={clsx(
          "absolute  top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50",
          {
            "text-white": textColor,
          }
        )}
      >
        <CheckCircleSolid />
        {label}
      </div>
    </div>
  );
};
const StepperHeader: React.FC<StepperHeaderProps> = ({
  progressWidth,
  iconPosition,
  stepNumber,
  iconTextPosition,
}) => {
  return (
    <div className=" mb-20  ">
      <div className="relative flex justify-center ">
        <div className="flex  absolute -left-5">
          {[1, 2, 3]?.map((i, index) => {
            if (stepNumber < i) {
              return <StepperArrow iconColor="#e1e1e1" label="incoming" />;
            }
            if (stepNumber === i) {
              return <StepperArrow textColor="white" label="current" />;
            }

            if (stepNumber > i) {
              return (
                <StepperArrow
                  textColor="white"
                  iconColor="green"
                  label="complete"
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default StepperHeader;
