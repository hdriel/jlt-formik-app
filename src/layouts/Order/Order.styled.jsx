import React from "react";
import {
  Grid as MuiGrid,
  Box as MuiBox,
  Typography as MuiTypography,
  Stack as MuiStack,
} from "@mui/material";
import { Image as MuiImage } from "mui-image";
import { styled } from "@mui/material/styles";

export const ColoredBox = styled(MuiBox, {
  shouldForwardProp: (propName) => propName !== "color",
})`
  background-color: ${(props) => props.color};
  width: 100%;
  height: auto;
`;

export const Container = styled(({ ...props }) => (
  <MuiGrid container spacing={2} {...props} />
))`
  height: 100%;
`;

export const Title = styled(({ ...props }) => <MuiTypography {...props} />)``;

export const Item = styled(({ ...props }) => (
  <MuiGrid xs={12} item {...props} />
))``;

export const ItemContainer = styled(({ ...props }) => (
  <MuiGrid xs={12} item container spacing={2} {...props} />
))``;

export const Image = styled(MuiImage)``;
export const Stack = styled(MuiStack)`
  width: 100%;
`;
