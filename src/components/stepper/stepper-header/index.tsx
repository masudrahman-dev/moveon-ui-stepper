import React from "react";

interface StepperHeaderProps {
  progressWidth: string;
  iconPosition: string;
  stepNumber: number;
  iconTextPosition: string;
}

const StepperHeader: React.FC<StepperHeaderProps> = ({
  progressWidth,
  iconPosition,
  stepNumber,
  iconTextPosition,
}) => {
  return (
    <div className="bg-black rounded-lg h-3 w-full relative">
      <div
        className="bg-slate-500 rounded-lg h-full"
        style={{
          width: progressWidth,
          transition: "width 0.5s ease-in-out",
        }}
      >
        <div
          className="absolute top-0 left-2 text-center   "
          style={{
            left: iconPosition,
            transition: "left 0.5s ease-in-out",
          }}
        >
          <span className="bg-white rounded-full w-3 h-3 flex items-center justify-center"></span>
        </div>

        <div
          className="absolute top-7 text-start "
          style={{
            left: iconTextPosition,
            transition: "left 0.5s ease-in-out",
          }}
        >
          <span style={{ whiteSpace: "nowrap" }}> step-{stepNumber}</span>
        </div>
      </div>
    </div>
  );
};

export default StepperHeader;
