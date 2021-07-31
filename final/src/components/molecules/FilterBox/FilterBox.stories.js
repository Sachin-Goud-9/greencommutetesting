import React from "react";

import FilterBox from "./FilterBox";

export default {
    title: "Molecules/Filter Box",
    component: FilterBox,
};

const Template = (args) => <FilterBox {...args} />;

export const PrimaryFilterBox = Template.bind({});


PrimaryFilterBox.args = {
};