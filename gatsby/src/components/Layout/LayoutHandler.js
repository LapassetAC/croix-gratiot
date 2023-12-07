import React from "react";
import MobileLayout from "components/Layout/MobileLayout";
import DesktopLayout from "components/Layout/DesktopLayout";
import { useContext } from "react";
import { Context } from "data/Context";

const LayoutHandler = ({ children }) => {
  const { isMobile } = useContext(Context);

  if (isMobile) {
    return <MobileLayout>{children}</MobileLayout>;
  } else {
    return <DesktopLayout>{children}</DesktopLayout>;
  }
};

export default LayoutHandler;
