import React from "react";

import Checkbox from "../Checkbox";

export default {
  title: "base-components/Checkbox",
  parameters: {
    controls: {
      exclude: /^(onChange)$/g,
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "98vh",
          width: "98vw",
        }}
      >
        <Story />
      </div>
    ),
  ],
  component: Checkbox,
};

export const Default = () => <Checkbox />;
Default.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "200px",
        height: "200px",
      }}
    >
      <Story />
    </div>
  ),
];

const Template = (args) => <Checkbox {...args} />;

export const Custom = Template.bind({});
Custom.argTypes = {
  label: { control: { type: "text" }, defaultValue: "check" },
  size: {
    control: "inline-radio",
    options: ["small", "medium"],
    defaultValue: "small",
  },
  color: {
    control: { type: "color" },
    defaultValue: "red",
  },
  checked: {
    control: { type: "boolean" },
    defaultValue: false,
  },
  defaultChecked: {
    control: { type: "boolean" },
    defaultValue: false,
  },
  required: {
    control: { type: "boolean" },
    defaultValue: false,
  },
  disabled: {
    control: { type: "boolean" },
    defaultValue: false,
  },
};
Custom.decorators = [
  (Story) => (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "300px",
        height: "300px",
      }}
    >
      <Story />
    </div>
  ),
];
