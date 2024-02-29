import clsx from "clsx";
import React, { useState } from "react";

const StepContainer = ({ children }) => {
  return (
    <div className="border p-4 h-full rounded-lg">
      <div>{children} </div>
    </div>
  );
};

const Steps = ({ current }) => {
  if (current === 1) {
    return (
      <div>
        <h1> step 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          voluptate, at exercitationem quas in cupiditate suscipit est dicta
          recusandae sequi eius ab velit consequuntur error ducimus libero.
          Amet, inventore doloremque?
        </p>
      </div>
    );
  }

  if (current === 2) {
    return (
      <div>
        <h1> step 2</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          voluptate, at exercitationem quas in cupiditate suscipit est dicta
          recusandae sequi eius ab velit consequuntur error ducimus libero.
          Amet, inventore doloremque? recusandae sequi eius ab velit
          consequuntur error ducimus libero. Amet, inventore doloremque?
        </p>
      </div>
    );
  }
  if (current === 3) {
    return (
      <div>
        <h1> step 3</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          voluptate, at exercitationem quas in cupiditate suscipit est dicta
        </p>
      </div>
    );
  }
  if (current === 4) {
    return (
      <div>
        <h1>step 4</h1>
        recusandae sequi eius ab velit consequuntur error ducimus libero. Amet,
        inventore doloremque? recusandae sequi eius ab velit consequuntur error
        ducimus libero. Amet, inventore doloremque? recusandae sequi eius ab
        velit consequuntur error ducimus libero. Amet, inventore doloremque?
      </div>
    );
  }
  if (current === 5) {
    return (
      <div>
        <h1>step 5</h1>
        recusandae sequi eius ab velit consequuntur error ducimus libero. Amet,
        inventore doloremque?
      </div>
    );
  }
};

const StepperFooter = ({ progressWidth, handleBack, handleNext }) => {
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

const StepperHeader = ({ progressWidth, iconPosition, stepNumber,iconTextPosition }) => {
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
          <StepContainer>
            <Steps current={stepNumber} />
          </StepContainer>
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
