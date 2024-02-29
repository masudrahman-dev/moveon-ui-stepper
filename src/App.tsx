import clsx from "clsx";
import React, { useState } from "react";

const StepContainer = ({ children }) => {
  return (
    <>
      <div>{children} </div>
    </>
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
    <div>
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

const StepperHeader = ({ progressWidth, iconPosition, stepNumber }) => {
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
          className="absolute top-0 text-center flex flex-col items-center"
          style={{
            left: iconPosition,
            transition: "left 0.5s ease-in-out", // Add transition for icon position
          }}
        >
          <span className="bg-white rounded-full w-3 h-3 flex items-center justify-center"></span>
          <div className="mt-3"> step-{stepNumber}</div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
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
  const iconPosition = `calc(${progressWidth} - 1.5rem)`; // Adjust icon position

  console.log("progressWidth :>> ", progressWidth, stepNumber);
  return (
    <div className="mx-auto  mt-10 max-w-screen-lg">
      <div className="border p-10">
        <StepperHeader
          iconPosition={iconPosition}
          progressWidth={progressWidth}
          stepNumber={stepNumber}
        />

        <div className="h-96 mt-14">
          <StepContainer>
            {/* <h1>Step:{stepNumber}</h1> */}
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

export default App;
