import clsx from "clsx";
import React, { useState } from "react";
import Stepper from "./components/stepper";
import SideNavigationMenu from "./components/side-navigation-menu";
import StepperFormProvider from "./components/stepper/stepper-context";

const App = () => {
  return (
    <StepperFormProvider>
      <Stepper />

      {/* <SideNavigationMenu /> */}
    </StepperFormProvider>
  );
};

export default App;
