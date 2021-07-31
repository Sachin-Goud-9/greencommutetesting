import React from "react";

import TopNavigation from "./TopNavigation";


export default {
    title: "Organism/Top Navigation",
    component: TopNavigation,
};
const Template = (args) => <TopNavigation {...args} />;

export const PrimaryTopNavigation = Template.bind({});


PrimaryTopNavigation.args = {
    locationName : 'East Marredpally, Secunderabad',
};