import React, { useState, useEffect } from "react";
import Layout from "components/Layout";
import MobileLayout from "components/Layout/MobileLayout";
import DesktopLayout from "components/Layout/DesktopLayout";

const Index = () => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      screenWidth < 1024 ? setIsMobile(true) : setIsMobile(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <Layout>{isMobile ? <MobileLayout /> : <DesktopLayout />}</Layout>;
};

export default Index;
