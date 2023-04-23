import React from "react";
import { action } from "@storybook/addon-actions";

import ButtonIcon from "../ButtonIcon";
import { Delete as DeleteIcon, Send as SendIcon } from "@mui/icons-material";

export default {
  title: "base-components/ButtonIcon",
  component: ButtonIcon,
};

const actions = {
  onClick: action("onClick"),
};

export const Default = () => {
  return <ButtonIcon {...actions} />;
};

export const StartIcon = () => {
  return (
    <ButtonIcon {...actions} startIcon={<SendIcon />}>
      Start Icon
    </ButtonIcon>
  );
};

export const EndIcon = () => {
  return (
    <ButtonIcon {...actions} endIcon={<DeleteIcon />}>
      End Icon
    </ButtonIcon>
  );
};

export const Outlined = () => {
  return (
    <ButtonIcon {...actions} variant="outlined">
      {" "}
      outlined{" "}
    </ButtonIcon>
  );
};

export const Label = () => {
  return <ButtonIcon {...actions}>Label only</ButtonIcon>;
};

export const ExtraProps = () => {
  return (
    <ButtonIcon {...actions} disableRipple color="secondary">
      Extra Props
    </ButtonIcon>
  );
};
