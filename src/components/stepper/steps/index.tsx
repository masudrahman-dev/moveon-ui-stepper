import React, { ReactNode } from "react";
import { useStepperForm } from "../stepper-context";

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
  const {
    stepprForm: { register },
  } = useStepperForm();

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

          <div>
            <label htmlFor="firstName" className="block border p-3">
              <input
                placeholder="FirstName"
                {...register("firstName")}
                type="text"
                name="firstName"
                id="firstName"
              />
            </label>
          </div>
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
          <Step>
            <h1>Step 3</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              voluptate, at exercitationem quas in cupiditate suscipit est dicta
            </p>
          </Step>
        </Step>
      )}
    </StepContainer>
  );
};
