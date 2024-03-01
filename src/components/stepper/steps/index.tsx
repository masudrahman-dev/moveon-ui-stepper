import React, { ReactNode } from "react";

interface StepProps {
  children: ReactNode;
}

const StepContainer: React.FC<StepProps> = ({ children }) => {
  return (
    <div className="border p-4 h-full rounded-lg">
      <div>{children}</div>
    </div>
  );
};

const Step: React.FC<StepProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface StepsProps {
  currentStepNumber: number;
}

export const Steps: React.FC<StepsProps> = ({ currentStepNumber }) => {
  return (
    <StepContainer>
      {currentStepNumber === 1 && (
        <Step>
          <h1>Step 1</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptate, at exercitationem quas in cupiditate suscipit est dicta
            recusandae sequi eius ab velit consequuntur error ducimus libero.
            Amet, inventore doloremque?
          </p>
        </Step>
      )}
      {currentStepNumber === 2 && (
        <Step>
          <h1>Step 2</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptate, at exercitationem quas in cupiditate suscipit est dicta
            recusandae sequi eius ab velit consequuntur error ducimus libero.
            Amet, inventore doloremque? recusandae sequi eius ab velit
            consequuntur error ducimus libero. Amet, inventore doloremque?
          </p>
        </Step>
      )}
      {currentStepNumber === 3 && (
        <Step>
          <h1>Step 3</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            voluptate, at exercitationem quas in cupiditate suscipit est dicta
          </p>
        </Step>
      )}
      {currentStepNumber === 4 && (
        <Step>
          <h1>Step 4</h1>
          <p>
            recusandae sequi eius ab velit consequuntur error ducimus libero.
            Amet, inventore doloremque? recusandae sequi eius ab velit
            consequuntur error ducimus libero. Amet, inventore doloremque?
            recusandae sequi eius ab velit consequuntur error ducimus libero.
            Amet, inventore doloremque?
          </p>
        </Step>
      )}
      {currentStepNumber === 5 && (
        <Step>
          <h1>Step 5</h1>
          <p>
            recusandae sequi eius ab velit consequuntur error ducimus libero.
            Amet, inventore doloremque?
          </p>
        </Step>
      )}
    </StepContainer>
  );
};
