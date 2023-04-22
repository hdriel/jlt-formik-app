import React from "react";
import PropTypes from "prop-types";
import { Checkbox as MuiCheckbox } from "@mui/material";

const Checkbox = ({
  label,
  size,
  color,
  checked,
  onChange,
  icon,
  checkedIcon,
  defaultChecked,
  required,
  disabled,
  sx,
  ...props
}) => {
  return (
    <MuiCheckbox
      label={label}
      size={size}
      color={color}
      icon={icon}
      checkedIcon={checkedIcon}
      defaultChecked={defaultChecked}
      required={required}
      disabled={disabled}
      checked={checked}
      onChange={onChange}
      sx={sx}
      {...props}
    />
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium"]),
  color: PropTypes.string,
  checked: PropTypes.bool,
  icon: PropTypes.node,
  checkedIcon: PropTypes.node,
  defaultChecked: PropTypes.bool,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  sx: PropTypes.shape,
};

Checkbox.defaultProps = {
  label: undefined,
  size: "small",
  color: "default",
  checked: false,
  icon: undefined,
  checkedIcon: undefined,
  defaultChecked: false,
  required: false,
  disabled: false,
  sx: {},
};

export default Checkbox;
