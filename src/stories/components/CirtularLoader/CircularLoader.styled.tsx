import styled from "styled-components";
import { CircularProgress } from "@mui/material";

type LoaderType = {
  height?: string;
  width?: string;
};

export const StyledLoaderContainer = styled.div<LoaderType>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height};
  width: ${({ width }) => (width ? width : "100%")};
`;

export const StyledCircularLoader = styled(CircularProgress)``;
