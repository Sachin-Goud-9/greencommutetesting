import React from "react";

import Mybutton from "./CustomButton";

import { action } from "@storybook/addon-actions";


export default {
  title: "Atom/Button",
  component: Mybutton,
};
const Template = (args) => <Mybutton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
  color: "primary",
  variant: "contained",
  click: action("primary clicked"),
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "ghijdfguhnjmkcfvghjky",
  color: "secondary",
  variant: "contained",
  click: action("secondary clicked"),
};





//This is Hima Sai's Code


// import React from 'react';
// import CustomButton from './CustomButton';

// export default {
//     title: 'atoms/CustomButton',
//     component: CustomButton,
//     argTypes:{
//         color: {
//             control: {
//               type: 'radio',
//               options: ['primary', 'secondary']
//             }
//           }
//         }
// };

// const Template = (args) => <CustomButton {...args} />;

// export const Primary = Template.bind({});

// Primary.args = {
//     color: "primary",
//     variant: "outlined",
//     label:"click me"
// };




// import React from "react";

// import Mybutton from "./CustomButton";

// import { action } from "@storybook/addon-actions";


// export default {
//   title: "Atom/Button",
//   component: Mybutton,
// };
// const Template = (args) => <Mybutton {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   text: "Primary",
//   color: "primary",
//   variant: "contained",
//   click: action("primary clicked"),
// };

// // export const Secondary = Template.bind({});
// // Secondary.args = {
// //   text: "ghijdfguhnjmkcfvghjky",
// //   color: "secondary",
// //   variant: "contained",
// //   click: action("secondary clicked"),
// // };