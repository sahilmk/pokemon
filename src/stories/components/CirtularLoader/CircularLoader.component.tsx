import React from "react";
import {
  StyledCircularLoader,
  StyledLoaderContainer,
} from "./CircularLoader.styled";

type CircularLoaderType = {
  height?: string;
  width?: string;
};

const CircularLoader = ({ height, width }: CircularLoaderType) => {
  return (
    <StyledLoaderContainer height={height} width={width}>
      <StyledCircularLoader />
    </StyledLoaderContainer>
  );
};

CircularLoader.defaultProps = {
  height: "30px",
};

export default CircularLoader;
