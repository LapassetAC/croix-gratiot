import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { useContext } from "react";
import { DataContext } from "DataContext";
import { Router, Link, useLocation } from "@reach/router";

const StyledContainer = styled.div``;

const NousRencontrer = ({ className }) => {
  const pageRef = useRef();
  const { setCurrentPageHeight } = useContext(DataContext);
  const { pathname } = useLocation();

  useEffect(() => {
    const pageHeight = pageRef.current.clientHeight;
    pathname === "/nous-rencontrer/" && setCurrentPageHeight(pageHeight);
  }, [pathname]);

  return (
    <StyledContainer ref={pageRef} className={className}>
      NousRencontrer
    </StyledContainer>
  );
};

export default NousRencontrer;
