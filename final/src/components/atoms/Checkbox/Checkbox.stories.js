// This is Our code


import React from "react";

import CheckboxWithGreenCheck from "./CheckBox";

import { action } from "@storybook/addon-actions";


export default {
  title: "Atom/CheckBox",
  component: CheckboxWithGreenCheck,
};
const Template = (args) => <CheckboxWithGreenCheck {...args} />;

export const Primary = Template.bind({});




// This is Hima Sais Code


// import React from "react";
// import Checkbox from "./CheckBox";

// const CheckboxStory = {
//   title: "Atoms/CheckBox",
//   component: Checkbox,
// };

// const Template = (args) => <Checkbox {...args} />;

// export const Primary = Template.bind({});

// Primary.args = {
//   handleChange: { action: "Checked!" },
//   checked: true,
//   color: "primary",
// };

// export default CheckboxStory;